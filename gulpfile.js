import { execSync } from "child_process";
import { generate } from "critical";
import autoprefixer from "gulp-autoprefixer";
import browserSyncLib from "browser-sync";
import concat from "gulp-concat";
import del from "del";
import gulp from "gulp";
import imagemin, { gifsicle, svgo } from "gulp-imagemin";
import jpegtran from "imagemin-jpegtran";
import pngquant from "imagemin-pngquant";
import rename from "gulp-rename";
import run from "gulp-run";
import gulpSass from "gulp-sass";
import sass from "sass";
import uglify from "gulp-uglify";

// Ensure Ruby gems are on PATH so `jekyll` can be found
try {
  const rubyBin = execSync("brew --prefix ruby 2>/dev/null").toString().trim() + "/bin";
  const gemBin = execSync(`${rubyBin}/gem environment gemdir 2>/dev/null`).toString().trim() + "/bin";
  process.env.PATH = `${rubyBin}:${gemBin}:${process.env.PATH}`;
} catch (e) {
  // On CI, jekyll should be in PATH already
}

// Point puppeteer (used by critical/penthouse) at the system Chrome instead of
// its bundled x86_64 Chromium, which can't spawn on arm64 Node.
process.env.PUPPETEER_EXECUTABLE_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browserSync = browserSyncLib.create();
const sassCompile = gulpSass(sass);

// Clean
gulp.task("initial:clean", () => del(["_site", "assets"]));
gulp.task("clean:site",    () => del("_site"));
gulp.task("clean:scripts", () => del("assets/js"));
gulp.task("clean:styles",  () => del("assets/styles"));
gulp.task("clean:images",  () => del("assets/img"));

// Build
gulp.task("build:scripts", () =>
  gulp
    .src("_assets/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("assets/js"))
);

gulp.task("build:styles", () =>
  gulp
    .src("_assets/styles/main.sass")
    .pipe(sassCompile({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("assets/styles"))
);

gulp.task("build:images", () =>
  gulp
    .src("_assets/img/**/*", { encoding: false })
    .pipe(gulp.dest("assets/img"))
);

gulp.task("build:jekyll", () => run(`jekyll build`).exec());

gulp.task("critical", async () => {
  await generate({
    inline: true,
    base: "_site/",
    css: ["_site/assets/styles/main.min.css"],
    src: "index.html",
    dimensions: [
      { height: 200, width: 500 },
      { height: 900, width: 1200 }
    ],
    ignore: {
      atrule: ["@font-face"],
      decl: (node, value) => /url\(/.test(value)
    }
  });
});

// Composite
gulp.task(
  "build",
  gulp.series(
    "initial:clean",
    gulp.parallel("build:scripts", "build:styles", "build:images"),
    "build:jekyll",
    "critical"
  )
);

gulp.task(
  "partial:build:styles",
  gulp.series(
    "clean:site", "clean:styles",
    "build:styles",
    "build:jekyll",
    "critical",
    (done) => { browserSync.reload(); done(); }
  )
);

gulp.task(
  "partial:build:scripts",
  gulp.series(
    "clean:scripts",
    "build:scripts",
    "build:jekyll",
    (done) => { browserSync.reload(); done(); }
  )
);

gulp.task(
  "partial:build:img",
  gulp.series(
    "clean:images",
    "build:images",
    "build:jekyll",
    (done) => { browserSync.reload(); done(); }
  )
);

gulp.task(
  "default",
  gulp.series("build", function() {
    browserSync.init({
      server: { baseDir: "_site" },
      open: true
    });

    gulp.watch(
      [
        "_config.yml",
        "index.html",
        "404.html",
        "_layouts/*.html",
        "_includes/*.html",
        "_pages/*.md",
        "_assets/styles/**/*"
      ],
      gulp.series("partial:build:styles")
    );
    gulp.watch("_assets/js/**/*",  gulp.series("partial:build:scripts"));
    gulp.watch("_assets/img/**/*", gulp.series("partial:build:img"));
  })
);

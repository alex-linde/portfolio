# Portfolio

The main aim of this project was to find a best way to capture my work and present it to the internet. I have created a custom theme for [Jekyll](https://jekyllrb.com/). Later on I introduced [Gulp.js](https://gulpjs.com/), because certain funcationality, important to me, is still missing in Jekyll for ex. live browser refresh, vendor autoprefix, javascript minification, image optimisation, better handling of sass and more advanced watch tasks.

## Contents

- [Getting started](#getting-started)
- [Windows](#windows)
- [MacOS](#macos)
  - [Updating installed tools](#updating-installed-tools)
  - [Clean install](#clean-install)
    - [Git](#git)
    - [Jekyll](#jekyll)
    - [Gulp.js](#gulp.js)
- [Workflow](#workflow)
- [Extra](#extra)
- [Ownership](#ownership)

## Getting started

The instructions below cover Windows 10 and MacOS 10.15, and later versions.

## Windows

1. Install [RubyInstaller](https://rubyinstaller.org/downloads/)
2. Run `gem install jekyll bundler`
3. Install [Node.js](https://nodejs.org/en/)
4. Run `npm i`
5. Run `npm i -g gulp-cli`

## MacOS

### Updating installed tools

If you have already installed GCC, Git, Node.js and Gulp.js I would recommend checking for updates and installing all available updates.

- GCC: Download all available updates for [Xcode in App Store](https://itunes.apple.com/au/app/xcode/id497799835?mt=12)
- Git: The easiest way to update Git is to download the latest version from the [official website](https://git-scm.com/)
- Node.js and Gulp.js can be updated by running `npm update -g` 

If any of these tools are missing I would strongly recommend to do a clean install.

### Clean install

It is recommended to follow the order of instructions to prevent possible errors.

#### Git

1. Install [Homebrew](https://brew.sh/). Select to install command line tools.
2. Install Git `brew install git`

#### Jekyll

1. Install rbenv `brew install rbenv`
2. Make rbenv run everytime terminal is open `echo 'eval "$(rbenv init -)"' >> ~/.zshrc`
3. Restart terminal for the previous shell command to work.
3. List available Ruby versions `rbenv install -l` and install the latest stable
4. Switch from system Ruby to rbenv `rbenv global <version>`
5. Install Jekyll: `gem install jekyll`
6. Update all system gems: `gem update --system`

#### Gulp.js

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm).
2. Install Node: `nvm install node`
3. Install all dependencies `npm i`
4. Install gulp-cli globally: `npm i -g gulp-cli`

## Workflow

| Command | Description |
|---|---|
| `npm start` | Build assets, run Jekyll, and start the browser-sync dev server with watch |
| `npm stop` | Kill the dev server (macOS/Linux — kills whatever is on port 3000) |
| `npm run build` | One-off asset + Jekyll build (no server) |
| `npm run build:dev` | Build with `baseurl ""` — use when hosting locally or on a custom domain |
| `npm run build:prod` | Build with the `baseurl` set in `_config.yml` — use for GitHub Pages |
| `npm run deploy` | Push `master` and `_site` to the `gh-pages` branch |

Here is what happens during a build:

1. Gulp takes files from `_assets` directory (don't rename this directory) applies all the specified Gulp tasks, creates `assets` directory and copies optimized assets into this directory. 

2. When all assets are built Gulp triggers `jekyll build` and Jekyll grabs everything from `assets` directory and copies to `_site/assets` directory. 

3. `npm start` also executes a watch task that tracks changes (yes, even `_config.yml`) and applies them straight away with live browser reloading.

## Extra

- If anyone is using [Visual Studio Code](https://code.visualstudio.com/) I would recommend installing a [SASS syntax indentation and highlighting extension](https://github.com/TheRealSyler/vscode-sass-indented).
- If you decide to create your own project based on my, and host it on Github Pages, you might face issues with relative links. To solve this you need to do two changes one in `_config.yml` and second in `gulpfile.js`. In `_config.yml` you need to change:
```
baseurl: /YOUR_GITHUB_REPOSITORY_NAME
url: YOUR_GITHUB_USERNAME.github.io
```
  Then use `npm run build:dev` for local development (overrides `baseurl` to `""`) and `npm run build:prod` for GitHub Pages (uses the `baseurl` from `_config.yml`).

## Ownership

Bits and pieces of code are used from the following awesome projects:
- [Poole Hyde](https://github.com/poole/hyde) built by [Mark Otto](https://github.com/mdo). Open sourced under the [MIT license](LICENSE.md). 
- [Forty Jekyll theme](https://github.com/andrewbanchich/forty-jekyll-theme) built by [Andrew Banchich](https://github.com/andrewbanchich) based on [Forty HTML5 theme](https://html5up.net/forty) by [HTML5UP](https://html5up.net/). Under [Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/).
- Inspiration on CSS transitions from [Riley Carroll](http://rileycarroll.co/).
- Jekyll and Gulp integration is based on the [post](https://savaslabs.com/2016/10/19/optimizing-jekyll-with-gulp.html) by [Anne Tomasevich](https://github.com/AnneTee).

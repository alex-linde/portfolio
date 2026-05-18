---
layout: page
title: Red Earth Designs
description: Website design and development
tags: [web design, responsive design, digital, dynamic content, CMS, content management system, CouchCMS, WordPress, PHP, HTML5, CSS3, Apache, MySQL, database, MAMP, cPanel, WHM, SSL, SSH, web development]
date: 2019/03/24
image: "/assets/img/redearth/background.jpg"
---

### Company

Red Earth Designs was a small advertisement agency ran out Hindmarsh office here in Adelaide. It specialised in the production of both print and digital media. The agency took on a wide range of projects from vinyl car wrap design to website design. The majority of clients came from small to medium size businesses.

### Position description

At Red Earth Designs I was working on the position of web designer. Even though my initial responsibilities covered only website design and development, over time I started to get involved with the server configuration (back-end) and project management. 

#### Back-end configuration

Briefly about [Crucial](https://www.crucial.com.au/) shared hosting (back-end) modifications:
- AutoSSL functionality got enabled for every parked domain. 
- Every parked website had SSH key generated with RSA-4096 algorithm. 
- For temporary URLs and to present work in progress (WIP) to clients I have used Password Protected Directories along with `robots.txt` `User-agent: * Disallow: /` and `<meta name="robots" content="noindex, nofollow">` in every protected directory and in page header. 
- Custom configured server-side PHP settings allowed larger memory and larger file size upload for raw footage.

#### Project management

Some words about project management:
- Provided estimates on the approximate duration of each project.
- Created sitemaps based on the client requirements.
- Addressed the client feedback by making needed revisions and alterations.
- Kept clients aware on what stage the project is currently on.

#### Content Management System

The agency was working with a particular type of content management system (CMS) called [CouchCMS](https://www.couchcms.com/). As I have not had a prior experience with this CMS I had to spend additional time to explore and learn my way through it. A lot of essential project-based CMS configuration was done as my own initiative. For example, the official documentation did not cover the concept of local development with MAMP, but by trial and error I was able to draw out the working configuration. Additionally, I was able to identify and fix some previously unaddressed CMS configuration issues:
- Removed explicit global URLs defined as `K_SITE_URL`.
- Removed database prefixes, as each project had their own separate database and there was no need to store multiple databases in one.
- Created whitelabeled CMS with the agency branding based on the latest CouchCMS release.
- Made all copy-pasted text into `<cms:editable type='richtext' ... />` to always be plain text - to eliminate text styling issues. Later on, I moved from `type='richtext'` to `type='textarea'` with using `<cms:nl2br></cms:nl2br>` in the front end.
- Changed file upload and memory limits to be higher in order to support raw footage upload.

Most of my findings are captured in my [GitHub Gists](https://gist.github.com/alex-linde).

### Project work

Here are some noticeable projects, which I have had a chance to work on:

#### Port Vincent Progress Association website
Cool features:
- Raw footage (photos) upload server side and CMS configuration, and web delivery optimisation process
- Event category filtering
- Business directory sub-directories
- [Instafetch.js](http://thomasvaeth.com/instafetch.js/) integration

#### Remarkable Media website
Cool features:
- [Lity.js](https://sorgalla.com/lity/) integration
- [Plyr.js](https://plyr.io/) integration
- [Pipedrive](https://www.pipedrive.com/) API integration into contact form submission; pipeline filtering and automatic creation of new deal upon contact form submission

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MrbnXCdJ_0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

#### Full list of projects

Here is the full list of projects* I have been working on:
1. Beach Hotel Seaford - [Original URL](https://www.beachhotelseaford.com.au) / [Archived URL](https://webrecorder.io/all_lla/beach-hotel-seaford/20190325095144/https://www.beachhotelseaford.com.au/)
2. Branding By Air - [Original URL](https://brandingbyair.com) / [Archived URL](https://webrecorder.io/all_lla/branding-by-air/r55xeb7nriwlwbdh/record/https://brandingbyair.com/)
3. Buckingham Arms Hotel - [Original URL](https://www.buckinghamarmshotel.com.au) / [Archived URL](https://webrecorder.io/all_lla/buckingham-arms-hotel/z4hvjrgjfki7jsqe/record/https://www.buckinghamarmshotel.com.au/)
4. Carter Brothers Seed Grading - [Archived temporary URL](https://webrecorder.io/all_lla/carter-brothers-seed-grading/20190326030208/https://redearth.agency/cbsg/)
5. DJK roofing - [Original URL](https://djkroofing.com.au/) / [Archived URL](https://webrecorder.io/all_lla/djk-roofing/20190326025631/https://djkroofing.com.au/)
6. Flagstaff Hotel - [Original URL](https://www.flagstaffhotel.com.au) / [Archived URL](https://webrecorder.io/all_lla/flagstaff-hotel/x3l2ut4uuz6bhnho/record/https://www.flagstaffhotel.com.au/)
7. Force Ordnance - [Original URL](https://forceordnance.com) / [Archived URL](https://webrecorder.io/all_lla/force-ordnance/vh576otxglq2jhkk/record/https://forceordnance.com)
8. Mitsubishi GSR Evo Club - [Original URL](https://gsr-evo-club.net) / [Archived URL](https://webrecorder.io/all_lla/mitsubishi-gsr-evo-club-and-sa-time-attack/20190325104151/https://gsr-evo-club.net)
9. SA Time Attack - [Original URL](https://satimeattack.com.au) / [Archived URL](https://webrecorder.io/all_lla/mitsubishi-gsr-evo-club-and-sa-time-attack/20190325104712/https://satimeattack.com.au/)
10. Park Hotel - [Original URL](https://parkhotel.net.au/) / [Archived URL](https://webrecorder.io/all_lla/the-park-hotel/20190326072059/https://parkhotel.net.au/)
11. Port Vincent - [Original URL](https://www.portvincent.org.au) / [Archived URL](https://webrecorder.io/all_lla/port-vincent-progress-association/20190325085733/https://www.portvincent.org.au/)
12. RBSC - [Original URL](https://www.rbsc.com.au) / [Archived URL](https://webrecorder.io/all_lla/rbsc/20190325105859/https://www.rbsc.com.au/)
13. Remarkable Media - [Original URL](https://www.remarkablemedia.com) / [Archived URL](https://webrecorder.io/all_lla/remarkable-media/20190325110133/https://www.remarkablemedia.com)
14. Shield IT - [Original URL](https://shield-it.com.au/) / [Archived URL](https://webrecorder.io/all_lla/shield-it/20190325111307/https://shield-it.com.au/)
15. South Eastern Hotel - [Original URL](https://www.southeasternhotel.com.au/) / [Archived URL](https://webrecorder.io/all_lla/south-eastern-hotel/20190325221140/https://www.southeasternhotel.com.au/)
16. Tatiara Trench Diggers - [Original URL](https://www.tatiaratrenchdiggers.com.au/) / [Archived URL](https://webrecorder.io/all_lla/tatiara-trench-diggers/20190326071450/https://www.tatiaratrenchdiggers.com.au/)
17. Vinylised - [Original URL](https://www.vinylised.com.au/) / [Archived URL](https://webrecorder.io/all_lla/vinylised/20190326071657/https://www.vinylised.com.au/)
18. Witches Brew Liquor Store - one page website - waiting clients' approval
19. Valley Inn Hotel - one page website - waiting clients' approval
20. TRAC Electronics - minimal HTML5 eBay item listing description template

*As some of the websites might change over the course of time I have recorded their current states with [Webrecorder](https://webrecorder.io) to showcase my contribution.
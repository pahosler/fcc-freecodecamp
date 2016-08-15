=== Apostrophe ===

Contributors: automattic
Tags: black, blue, gray, white, light, two-columns, one-column, right-sidebar, responsive-layout, accessibility-ready, custom-background, custom-colors, custom-header, custom-menu, editor-style, featured-images, full-width-template, infinite-scroll, microformats, post-formats, rtl-language-support, site-logo, sticky-post, theme-options, translation-ready, art, artwork, blog, collaboration, design, fashion, food, magazine, travel, bright, clean, contemporary, light, minimal, modern, professional, simple
Tested up to: 4.2.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

When you're looking to get straight to the point, Apostrophe is there for you.
Apostrophe is a simple and clean magazine theme for WordPress. It offers a
responsive layout and clean and easy-to-read typography paired with a modern,
minimalistic design. Add variety and hierarchy to your homepage by highlighting
your best posts with Featured Content.

* Clean, responsive layout.
* Magazine-style layout that focuses on your images.
* Jetpack.me compatibility for Infinite Scroll, Responsive Videos, Site Logo.
* Social menu and widget areas.

== Installation ==

1. In your admin panel, go to Appearance -> Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

= Where can I add widgets? =

Apostrophe includes four optional widget areas: three in a Sidebar alongside your content,
and one area in the footer of your page.

The three widget areas on the side differ only in background color. You’ll usually want
to use just a single widget in the primary section, which has a bright background to attract
attention. This is a great place to put a newsletter subscription or some about text.

The footer widget area is less prominent and is useful mainly for links. Widgets in the
footer area are stacked horizontally, so if you put a lot of widgets here, your page may
get quite long. Custom Menu widgets work best in the footer area. Note that adding
widgets to the footer will disable Infinite Scroll for your theme.

If you haven’t added widgets to the Sidebar, Apostrophe will act as a single-column theme.

Configure these areas by going to Appearance → Widgets in your Dashboard.

= Does Apostrophe use Featured Images? =

Apostrophe relies heavily on Featured Images. If a Featured Image is set for a post,
it will display on the blog index and archives. Otherwise, a plain box will appear
in the grid with an icon to indicate your post's format.

= Does Apostrophe have social links? =

Apostrophe ships with support for over 20 social networking websites, including Twitter,
Facebook, Google+, YouTube, GitHub, Tumblr, and others. To add social media icons to
the theme, you’ll have to create a new menu under Appearance → Menus.

1. Create a new Custom Menu, and assign it to the Social Menu location.
2. Add links to each of your social services using the Links panel.
3. Icons for your social links will automatically appear in the footer.

Supported networks: Codepen, Digg, Dribbble, Facebook, Flickr, Google+, GitHub, Instagram, LinkedIn,
Pinterest, Polldaddy, Pocket, Reddit, Skype, Stumbleupon, Tumblr, Twitter, Vimeo, WordPress, Youtube, and feeds (RSS).

Unsupported links will appear with a simple star icon. You can replace this icon by editing your site's CSS.

= How do I use Featured Content? =

Featured posts in Apostrophe are a bit unique. To mark posts as featured, you’ll first have to configure
the Featured Content module from Appearance → Customize → Featured Content.
You’ll be able to select a tag for all your featured posts.

The simplest way to tag your posts is by using the front-end tagger. Simply visit your homepage, hover over
the post you'd like to feature, and click on the star icon. You'll notice the Featured Image for that post
then doubles in size. Featured posts will always display at twice the width of normal posts, and they're a
great way to add variety and interest to your homepage. Apostrophe will look best with about one Featured Post
for every four standard posts.

= Can I remove the author panel below my posts? =

Sure thing! The author panel will appear by default if your blog is written by more than one author. To hide it,
simply check the "Hide author bio panel on individual post pages" checkbox under Appearance → Customize → Theme.

= How do I use special classes? =

More information about formatting blockquotes, pullquotes, and other goodies can be found here:
https://apostrophedemo.wordpress.com/how-to-use-this-theme/

== Quick Specs (all measurements in pixels) ==

1. The main column width is 723.
2. The Sidebar width is 274.
3. Featured Images are 225 square. In the case of Featured Posts, they're 465 wide by 225 high.
4. Site Logo has a maximum height of 125.

== Licensing ==

Apostrophe bundles the following third-party resources:

Genericons icon font, Copyright 2013 Automattic
Licensed under the terms of the GNU GPL, Version 2 (or later)
Source: http://www.genericons.com

PT Serif font, Copyright ParaType 2010
Licensed under the terms of the SIL Open Font License, 1.1
Source: https://www.google.com/fonts/specimen/PT+Serif

Open Sans Font, Copyright Steve Matteson
Licensed under the terms of the Apache License, version 2.0
Source: https://www.google.com/fonts/specimen/Open+Sans

All images used in demo/screenshot are CC0.
http://creativecommons.org/choose/zero/

Shoes, Copyright Alejandro Escamilla
Licensed under the terms of the Creative Commons CC0 License
https://download.unsplash.com/3/alejandroescamilla-white-shoes.jpg

Laundry, Copyright Charles L.
Licensed under the terms of the Creative Commons CC0 License
https://download.unsplash.com/32/90PZOijCSquhzM1A3cq8_photo.JPG

Wedding Dress, Copyright NDGPhotoworks
Licensed under the terms of the Creative Commons CC0 License
https://pixabay.com/en/bridal-son-in-law-marriage-wedding-636018/

Underwear, Copyright kheinz
Licensed under the terms of the Creative Commons CC0 License
https://pixabay.com/en/trousers-underwear-nostalgia-past-362781/


== Changelog ==

= 4 August 2015 =


= 3 August 2015 =
* Update as per .org review.

= 31 July 2015 =
* Remove `.screen-reader-text:hover` and `.screen-reader-text:active` style rules.

= 14 July 2015 =
* Always use https when loading Google Fonts. See #3221;

= 17 June 2015 =
* Updated readme to reflect recent changes and version bump.

= 15 June 2015 =
* Updating version number for regenerated download.

= 8 June 2015 =
* Ensure that feature-starrer shows up correctly.

= 5 June 2015 =
* removing unneeded = from apostrophe_sanitize_checkbox
* Fix JS issue introduced by PHPCS.

= 4 June 2015 =
* Escape data as per CodeSniffer output and convert spaces to tabs.
* Remove scss source files and clean up stylesheet.

= 29 May 2015 =
* Generate language file.

= 28 May 2015 =
* Ensure that header images are being sized correctly.
* Display site logo in center of header if site title is hidden.
* Ensure that Featured Content displays on the front page.

= 27 May 2015 =
* Add star to indicate sticky posts.

= 26 May 2015 =
* Escape a few elements, now that I (sort of) know better. :)
* Update with a screenshot showing the proper theme name.

= 21 May 2015 =
* Rename JS file so it loads properly.

= 18 May 2015 =
* Rename to "Apostrophe".

<?php
/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 * By default it uses the theme name, in lowercase and without spaces, but this can be changed if needed.
 * If the identifier changes, it'll appear as if the options have been reset.
 */

function optionsframework_option_name() {

	// This gets the theme name from the stylesheet
	$themename = wp_get_theme();
	$themename = preg_replace("/\W/", "_", strtolower($themename) );

	$optionsframework_settings = get_option( 'optionsframework' );
	$optionsframework_settings['id'] = $themename;
	update_option( 'optionsframework', $optionsframework_settings );
}


function optionsframework_options() {

	// Test data
	$test_array = array(
		'one' => __('One', 'magazine'),
		'two' => __('Two', 'magazine'),
		'three' => __('Three', 'magazine'),
		'four' => __('Four', 'magazine'),
		'five' => __('Five', 'magazine')
	);

	// Multicheck Array
	$multicheck_array = array(
		'one' => __('French Toast', 'magazine'),
		'two' => __('Pancake', 'magazine'),
		'three' => __('Omelette', 'magazine'),
		'four' => __('Crepe', 'magazine'),
		'five' => __('Waffle', 'magazine')
	);

	// Multicheck Defaults
	$multicheck_defaults = array(
		'one' => '1',
		'five' => '1'
	);

	// Background Defaults
	$background_defaults = array(
		'color' => '',
		'image' => '',
		'repeat' => 'repeat',
		'position' => 'top center',
		'attachment'=>'scroll' );

	// Typography Defaults
	$typography_defaults = array(
		'size' => '',
		'face' => '',
		'style' => 'normal',
		'color' => '' );
	

	// Typography Options
	$typography_options = array(
		'sizes' => array( '6','12','14','16','20' ),
		'faces' => array( 'Helvetica Neue' => 'Helvetica Neue','Arial' => 'Arial' ),
		'styles' => array( 'normal' => 'Normal','bold' => 'Bold' ),
		'color' => false
	);

	// Pull all the categories into an array
	$options_categories = array();
	$options_categories_obj = get_categories();
	foreach ($options_categories_obj as $category) {
		$options_categories[$category->cat_ID] = $category->cat_name;
	}

	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}


	// Pull all the pages into an array
	$options_pages = array();
	$options_pages_obj = get_pages('sort_column=post_parent,menu_order');
	$options_pages[''] = 'Select a page:';
	foreach ($options_pages_obj as $page) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// If using image radio buttons, define a directory path
	$imagepath =  get_template_directory_uri() . '/images/';

	$options = array();
$options[] = array(
            'desc' => '<h2 style="color: #FFF !important;">' . esc_attr__( 'Upgrade to Premium Theme & Enable Full Features!', 'magazine' ) . '</h2>
            <li>' . esc_attr__( 'SEO Optimized WordPress Theme.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'More Slides for your slider.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Theme Customization help & Support Forum.', 'magazine' ) . '</li>
            <li>' . esc_attr__( '90+ Page Speed Optimize for faster website.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Color Customize of theme.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Custom Widgets and Functions.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Social Media Integration.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Responsive Website Design.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Different Website Layout to Select.', 'magazine' ) . '</li>
            <li>' . esc_attr__( 'Many of Other customize feature for your blog or website.', 'magazine' ) . '</li>
            <p><span class="buypre"><a href="' . esc_url(__('http://www.insertcart.com/magazine-style','magazine')) . '" target="_blank">' . esc_attr__( 'Upgrade Now', 'magazine' ) . '</a></span><span class="buypred"><a href="' . esc_url(__('http://www.insertcart.com','magazine')) . '" target="_blank">' . esc_attr__( 'Shop More Themes !', 'magazine' ) . '</a></span></p>',
            'class' => 'tesingh',
            'type' => 'info');
		
		$options[] = array(
		'name' => __('Basic Settings', 'magazine'),
		'type' => 'heading');

	$options[] = array(
		'name' => __('Custom Favicon URL', 'magazine'),
		'desc' => __('Enter Favicon Image URL Specify a 16px x 16px image in format .', 'magazine'),
		'id' => 'magazine_favicon',
		'std' => '',
		'type' => 'upload');
	$options[] = array(
		'name' => __('Upload Site Logo', 'magazine'),
		'desc' => __('Upload Website Logo here. Note you can upload any size it will automatic resize .', 'magazine'),
		'id' => 'magazine_logo',
		'type' => 'upload');

	$options[] = array(
		'name' => __('Show Author Profile', 'magazine'),
		'desc' => __('Check the box to show Author Profile Below the Post and Pages.', 'magazine'),
		'id' => 'magazine_author',
		'std' => '',
		'type' => 'checkbox');

	$options[] = array(
		'name' => __('Show Latest Posts in Sidebar', 'magazine'),
		'desc' => __('Show 5 Latest Posts with Thumbnail in Sidebar.', 'magazine'),
		'id' => 'magazine_activate_ltposts',
		'std' => '1',
		'type' => 'checkbox');

		
$options[] = array(
		'name' => __('Social Media', 'magazine'),
		'type' => 'heading');
		$options[] = array(
		'name' => __('Show share buttons on Top Navigation', 'magazine'),
		'desc' => __('Check or uncheck Box to show and hide share buttons', 'magazine'),
		'id' => 'magazine_sharebut',
		'std' => '1',
		'type' => 'checkbox');
		$options[] = array(
		'name' => __('Facebook Link', 'magazine'),
		'desc' => __('Enter your Facebook URL if you have one.', 'magazine'),
		'id' => 'magazine_fb',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Twitter Follow Link', 'magazine'),
		'desc' => __('Enter your Twitter URL if you have one.', 'magazine'),
		'id' => 'magazine_tw',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('YouTube Channel Link', 'magazine'),
		'desc' => __('Enter your YouTube URL if you have one.', 'magazine'),
		'id' => 'magazine_youtube',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Google+ URL', 'magazine'),
		'desc' => __('Enter your Google+ Link if you have one.', 'magazine'),
		'id' => 'magazine_gp',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('RSS Feed URL', 'magazine'),
		'desc' => __('Enter your RSS Feed URL if you have one', 'magazine'),
		'id' => 'magazine_rss',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Linked In URL', 'magazine'),
		'desc' => __('Enter your LinkedIn URL if you have one.', 'magazine'),
		'id' => 'magazine_in',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Pinterest In URL', 'magazine'),
		'desc' => __('Enter your Pinterest URL if you have one.', 'magazine'),
		'id' => 'magazine_pinterest',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Skype In URL', 'magazine'),
		'desc' => __('Enter your skype URL if you have one', 'magazine'),
		'id' => 'magazine_skype',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Vimeo In URL', 'magazine'),
		'desc' => __('Enter your vimeo URL if you have one', 'magazine'),
		'id' => 'magazine_vimeo',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Flickr In URL', 'magazine'),
		'desc' => __('Enter your flickr URL if you have one', 'magazine'),
		'id' => 'magazine_flickr',
		'std' => '',
		'type' => 'text');
		
		$options[] = array(
		'name' => __('Dribbble In URL', 'magazine'),
		'desc' => __('Enter your dribbble URL if you have one', 'magazine'),
		'id' => 'magazine_dribbble',
		'std' => '',
		'type' => 'text');
		
				
$options[] = array(
		'name' => __('Custom Styling', 'magazine'),
		'type' => 'heading');
	$options[] = array(
		'name' => __('Custom CSS', 'magazine'),
		'desc' => __('Quickly add some CSS to your theme by adding it to this block.', 'magazine'),
		'id' => 'magazine_customcss',
		'std' => '',
		'type' => 'textarea');
		
$options[] = array(
		'name' => __('Ads Management', 'magazine'),
		'type' => 'heading');
	$options[] = array(
		'name' => __('Paste Ads code below navigation', 'magazine'),
		'desc' => __('Activate Ads Space Below Navigation and put code in below text field.', 'magazine'),
		'id' => 'magazine_banner_top',
		'std' => '',
		'type' => 'editor');
	$options[] = array(
		 'name' => __( 'AD Code For Single Post', 'magazine' ),
            'desc' => 'Paste Ad code for single post it show ads below post title and before content.',
            'id' => 'magazine_ad2',
            'std' => '',
            'type' => 'editor');
     $options[] = array(
		'name' => __( 'AD Code For Footer', 'magazine' ),
		'desc' => __('Paste Ad Code for Footer Area.', 'magazine'),
            'id' => 'magazine_ad1',
            'std' => '',
            'type' => 'editor');
	$options[] = array(		 
		'desc' => __('<b>For ads in Sidebar use WordPress default option in Widget. Goto widget > Add "TEXT" widget into sidebar > paste you ad code into it.</b>', 'magazine'),
        'type' => 'info');	
		
$options[] = array(
		'name' => __('Advance Options', 'magazine'),
		'type' => 'heading');
	
				
		$options[] = array(
		'desc' => '<span class="pre-title">New Features</span>', 
		'type' => 'info');
		
		$options[] = array(
		'name' => __('Popular Posts in Sidebar', 'magazine'),
		'desc' => __('Display Popular Post Sidebar Widget.', 'magazine'),
		'id' => 'magazine_popular',
		'std' => '0',
		'secret' => '0',
		'type' => 'checkbox');
		$options[] = array(
		'name' => __('Social Share Buttons with count', 'magazine'),
		'desc' => __('Display social share buttons with count below post title.', 'magazine'),
		'id' => 'magazine_flowshare',
		'std' => '0',
		'type' => 'checkbox');
		
		$options[] = array(
		'name' => __('Responsive Website Design', 'magazine'),
		'desc' => __('Enable Responsive Design for you website to increase exprience on Mobile Devices', 'magazine'),
		'id' => 'magazine_responsive',
		'std' => '0',
		'type' => 'checkbox');
		$options[] = array(
		'name' => __('Excerpt Length (Number of words display in post description)', 'magazine'),
		'desc' => __('Number of words display in every post description Default is 45.', 'magazine'),
		'id' => 'magazine_excerp',
		'std' => '45',
		'class' => 'mini',
		'type' => 'text');
		$options[] = array(
		'name' =>  __('Change Background', 'magazine'),
		'desc' => __('Change the background CSS Color or Image.', 'magazine'),
		'id' => 'magazine_bg',
		'std' => $background_defaults,
		'type' => 'background' );
		$options[] = array(
		'name' =>  __('Change Default Thumb Image', 'magazine'),
		'desc' => __('Change default thumb Image in Latest and Popular post 45 x 45 px.', 'magazine'),
		'id' => 'magazine_default',
		'std' => $imagepath . 'thumb.jpg',
		'type' => 'upload' );
		$options[] = array(
		'name' => __('Change Link Color', 'magazine'),
		'desc' => __('Select Links Color.', 'magazine'),
		'id' => 'magazine_linkcolor',
		'std' => '#2D89A7',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Change Link Hover Color.', 'magazine'),
		'id' => 'magazine_linkhover',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'name' => __('Main Navigation Colors', 'magazine'),
		'desc' => __('Navigation bottom border color.', 'magazine'),
		'id' => 'magazine_botborder',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Main Navigation Background.', 'magazine'),
		'id' => 'magazine_mainnavibg',
		'std' => '#333333',
		'type' => 'color' );
		
		$options[] = array(
		'desc' => __('Main Navigation hover Color.', 'magazine'),
		'id' => 'magazine_mainnavilinkcolor',
		'std' => '#FD4326',
		'type' => 'color' );
	
		
		$options[] = array(
		'name' => __('Page Number Navigation Color Change ', 'magazine'),
		'desc' => __('Change Current Page Background.', 'magazine'),
		'id' => 'magazine_pageanvibg',
		'std' => '#333333',
		'type' => 'color' );
		$options[] = array(
			'desc' => __('Change background color of other pages.', 'magazine'),
		'id' => 'magazine_pageanvia',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Numbers text Color Change.', 'magazine'),
		'id' => 'magazine_pageanvilink',
		'std' => '#ffffff',
		'type' => 'color' );
		$options[] = array(
		'name' => __('Sidebar Color style', 'magazine'),
		'desc' => __('Sidebar Heading background.', 'magazine'),
		'id' => 'magazine_sideheading',
		'std' => '#333333',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Sidebar Heading border color.', 'magazine'),
		'id' => 'magazine_sideborder',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Sidebar Heading Text Title color.', 'magazine'),
		'id' => 'magazine_sidebarh4',
		'std' => '#ffffff',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Search Button Color.', 'magazine'),
		'id' => 'magazine_searchsubmit',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'name' => __('Footer Color style', 'magazine'),
		'desc' => __('Footer heading background.', 'magazine'),
		'id' => 'magazine_bottemdead',
		'std' => '#333333',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Footer Widget title Background.', 'magazine'),
		'id' => 'magazine_footerfont',
		'std' => '#ffffff',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Footer Copyright Background.', 'magazine'),
		'id' => 'magazine_footercop',
		'std' => '#333333',
		'type' => 'color' );
		$options[] = array(
		'name' => __('Home Icon from Top and Main Navigation', 'magazine'),
		'desc' => __('Show or Hide Home Icon.', 'magazine'),
		'id' => 'magazine_homeicon',
		'std' => 'on',
		'type' => 'radio',
		'options' => array(
						'on' => 'Show',
						'off' => 'Hide'
						));
		
		$options[] = array(
		'name' => __('Page Number Navigation Color Change ', 'magazine'),
		'desc' => __('Change Current Page Background.', 'magazine'),
		'id' => 'magazine_pageanvibg',
		'std' => '#333333',
		'type' => 'color' );
		$options[] = array(
			'desc' => __('Change background color of other pages.', 'magazine'),
		'id' => 'magazine_pageanvia',
		'std' => '#FD4326',
		'type' => 'color' );
		$options[] = array(
		'desc' => __('Numbers text Color Change.', 'magazine'),
		'id' => 'magazine_pageanvilink',
		'std' => '#ffffff',
		'type' => 'color' );
		
		$options[] = array( 'name' => __('Customize Theme Fonts', 'magazine'),
		'desc' => __('Change <b>Body (Theme) Font</b> color and Size.', 'magazine'),
		'id' => "magazine_bodyfonts",
		'std' => $typography_defaults,
		'type' => 'typography' );
		$options[] = array( 
		'desc' => __('Change <b>H1 Posts and Pages Title </b>Font color or Size.', 'magazine'),
		'id' => "magazine_entrytitle",
		'std' => $typography_defaults,
		'type' => 'typography' );
		$options[] = array(
		'name' => __('Footer Widget Area Settings', 'magazine'),
		'desc' => __('Show or Hide Footer Widget Area.', 'magazine'),
		'id' => 'magazine_footerwidget',
		'std' => 'on',
		'type' => 'radio',
		'options' => array(
						'on' => 'Show',
						'off' => 'Hide'
						));
				
		$options[] = array(
		'name' => __('Edit ""Continue reading" Button', 'magazine'),
		'desc' => __('Show or Hide "Continue reading" or Read more Button  Button .', 'magazine'),
		'id' => 'magazine_countinue',
		'std' => 'on',
		'type' => 'radio',
		'options' => array(
						'on' => 'Show',
						'off' => 'Hide'
						));
		$options[] = array(
		'desc' => __('Continue reading Button Color Change.', 'magazine'),
		'id' => 'magazine_readmorecolor',
		'std' => '#FD4326',
		'type' => 'color' );					
		$options[] = array(
		    'desc' => 'Paste You Custom text for Continue reading <b>Default: Continue reading &raquo; </b>.',
            'id' => 'magazine_fullstory',
            'std' => 'Continue reading &raquo;',
            'type' => 'text');				

		$options[] = array(
		'name' => "Website layout",
		'desc' => "Select Images for Website layout.",
		'id' => "magazine_layout",
		'std' => "s1",
		'type' => "images",
		'options' => array(
			's1' => $imagepath . 's1.png',
			'sl' => $imagepath . 'sl.png',
			'fc' => $imagepath . 'fc.png')
	);
		$options[] = array(
		'desc' => '<span class="pre-titleseo">SEO & Meta Options</span>', 
		'type' => 'info');
		$options[] = array(
		'name' => __('Google+ Publisher URL', 'magazine'),
		'desc' => __('Paste Your Google Publisher URL https://plus.google.com/YOUR-GOOGLE+ID/posts.', 'magazine'),
		'id' => 'magazine_googlepub',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Bing Site Verification', 'magazine'),
		'desc' => __('Enter the ID only. It will be verified by Yahoo as well.', 'magazine'),
		'id' => 'magazine_bingvari',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Google Site verification', 'magazine'),
		'desc' => __('Enter your ID only.', 'magazine'),
		'id' => 'magazine_googlevari',
		'std' => '',
		'type' => 'text');
		$options[] = array(
		'name' => __('Footer Script', 'magazine'),
		'desc' => __('Add Script for footer like Google analytics, Tracking Codes and Scripts.', 'magazine'),
		'id' => 'magazine_footerscript',
		'std' => '',
		'type' => 'textarea');
		
		$options[] = array(
		'desc' => '<span class="pre-titlecus">Customization</span>', 
		'type' => 'info');
		$options[] = array(
		'name' => __('Breadcrumbs Options', 'magazine'),
		'desc' => __('Check Box to Enable or Disable Breadcrumbs.', 'magazine'),
		'id' => 'magazine_bread',
		'std' => '1',
		'type' => 'checkbox');
		$options[] = array(
		'name' => __('Enable Post Meta Info.', 'magazine'),
		'desc' => __('Check Box to Show or Hide Tags ', 'magazine'),
		'id' => 'magazine_tags',
		'std' => '1',
		'type' => 'checkbox');
		$options[] = array(
		'desc' => __('Check Box to Show or Hide Comments ', 'magazine'),
		'id' => 'magazine_comments',
		'std' => '1',
		'type' => 'checkbox');
		$options[] = array(
		'desc' => __('Check Box to Show or Hide Categories ', 'magazine'),
		'id' => 'magazine_categrious',
		'std' => '1',
		'type' => 'checkbox');
		$options[] = array(
		'desc' => __('Check Box to Show or Hide Author and date ', 'magazine'),
		'id' => 'magazine_autodate',
		'std' => '1',
		'type' => 'checkbox');
			
		$options[] = array(
		'name' => __('Next and Previous Post Link', 'magazine'),
		'desc' => __('Show or Hide Next and Previous Post Link below every post.', 'magazine'),
		'id' => 'magazine_links',
		'std' => 'on',
		'type' => 'radio',
		'options' => array(
						'on' => 'Show',
						'off' => 'Hide'
						));
		$options[] = array(
		'name' => __('Show or Hide Copy Right Text', 'magazine'),
		'desc' => __('Show or Hide Copyright Text and Link.', 'magazine'),
		'id' => 'magazine_copyright',
		'std' => 'on',
		'type' => 'radio',
		'options' => array(
						'on' => 'Show',
						'off' => 'Hide'
						));
		$options[] = array(
		    'desc' => 'Paste Ad code for single post it show ads below post title and before content.',
            'id' => 'magazine_ftarea',
			  'std' => esc_attr__( 'Copyright  &#169; 2015 Designed by: ', 'magazine' ) . '<a href="' . esc_url(__('http://www.insertcart.com/magazine-style','magazine')) . '" title="' . esc_attr__( 'InsertCart.com', 'magazine' ) . '">' . esc_attr__( 'InsertCart', 'magazine' ) . '</a>',
            'type' => 'textarea');

          
	$options[] = array(
		'name' => __('Theme Support', 'magazine'),
		'type' => 'heading' );
$options[] = array(
		 'desc' => '<h2>' . esc_attr__( 'Need support about theme go to Support forum', 'magazine' ) . '</h2>
		 
            ' . esc_attr__( 'If you have any problem in using options then please read theme documentation first ', 'magazine' ) . '<a href="' . esc_url(__('http://www.wrock.org/documentation-install-wordpress-premium-theme-without-data-loss/','magazine')) . '" target="_blank">' . esc_attr__( 'Theme Documentation', 'magazine' ) . '</a>  ' . esc_attr__( 'Before you contact us via directly please use support forum also We recommend you to use some WordPress plugin like "Regenerate Thumbnails" WordPress SEO and W3tc to optimize and get great website experience.', 'magazine' ) . '
            <p><span class="buypre"><a href="' . esc_url(__('http://forum.insertcart.com','magazine')) . '" target="_blank">' . esc_attr__( 'Support Forum', 'magazine' ) . '</a></span></p></br>'
			,
            'type' => 'info');					

	return $options;

}

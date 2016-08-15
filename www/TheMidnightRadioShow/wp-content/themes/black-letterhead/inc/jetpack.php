<?php
/**
 * Infinite Scroll Support
 * See: http://jetpack.me/support/infinite-scroll/
 *
 * Theme Name: Black-Letterhead
 */

/**
 * Add theme support for infinity scroll
 */
function black_letterhead_infinite_scroll_init() {
	add_theme_support( 'infinite-scroll', array(
		'render'    => 'black_letterhead_infinite_scroll_render',
		'footer'    => 'page',
	) );
}

add_action( 'after_setup_theme', 'black_letterhead_infinite_scroll_init' );

/**
 * Setup a function to render incoming posts via Infinite Scroll.
 */
function black_letterhead_infinite_scroll_render() {
	while ( have_posts() ) : the_post();
		get_template_part( 'post' );
	endwhile;
}
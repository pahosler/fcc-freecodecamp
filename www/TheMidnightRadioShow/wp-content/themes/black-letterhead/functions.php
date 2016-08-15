<?php
/**
 * @package WordPress
 * @subpackage Black Letterhead
 */

/* Widgets */
if ( function_exists('register_sidebar') )
    register_sidebar();

$themecolors = array(
	'bg' => '000000',
	'border' => '959596',
	'text' => 'B0B0B0',
	'link' => 'FD5A1E',
	'url' => 'E4D3A6',
);
$content_width = 450; // pixels

add_theme_support( 'automatic-feed-links' );

add_theme_support( 'custom-background' );

function blackletterhead_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'blackletterhead_custom_header_args', array(
		'default-image'          => '',
		'default-text-color'     => 'FD5A1E',
		'width'                  => 760,
		'height'                 => 200,
		'flex-height'            => true,
		'wp-head-callback'       => 'blackletterhead_header_style',
		'admin-head-callback'    => 'blackletterhead_admin_header_style',
	) ) );
}
add_action( 'after_setup_theme', 'blackletterhead_custom_header_setup' );

function blackletterhead_header_style() {

	if ($url = get_header_image()) {
		echo <<<EOF
<style type="text/css">
#header {
background-repeat: no-repeat;
background-position: bottom center;
background-image: url({$url});
}
#sidebar {
border-top: none;
border-bottom: 1px dashed #555;
}
.pagepost {
border-top: none;
margin: 0 0 40px;
}
.post {
border-top: none;
margin: 0 0 40px;
text-align: left;
}
</style>
EOF;
	}
	if ($color = get_header_textcolor()) {
		if ($color == 'blank')
			$style = "display: none;";
		else
			$style = "color: #{$color}";
		echo <<<EOF
<style type="text/css">
#header h1 a, #header div.description {
	{$style}
}
</style>
EOF;
	}
}

function blackletterhead_admin_header_style() {

	$url = get_header_image();
	$color = get_header_textcolor();
	echo <<<EOF
<style type="text/css">
#headimg {
	padding: 0;
	margin: 0 auto;
	height: 200px;
	width: 760px;
	background-color: #000;
	}
#headimg h1 {
	font-family: Garamond, Serif;
	font-weight: bold;
	font-size: 34px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 12px;
	padding-top: 40px;
	margin: 0;
	}

#desc {
        font-family: Verdana,Arial,Sans-Serif;
	font-size: 12px;
	text-align: center;
	letter-spacing: .6em;
	}
#headimg h1 a, #desc {
	text-decoration: none;
	color: #{$color};
	border: none;
}
</style>
EOF;
	if ($color == 'blank')
		$style = "display: none;";
	else
		$style = "color: #{$color}";
	echo <<<EOF
<style type="text/css">
#headimg h1 a, #desc {
	{$style}
}
</style>
EOF;
}

function black_letterhead_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);
?>
<li <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<div id="div-comment-<?php comment_ID() ?>">
	<div class="comment-author vcard">
	<div class="comment-avatar"><?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['avatar_size'] ); ?></div>
	<cite class="fn"><?php comment_author_link() ?></cite> <span class="says"><?php _e('Says:', 'black-letterhead'); ?></span>

	<?php if ($comment->comment_approved == '0') : ?>
		<em><?php _e('Your comment is awaiting moderation.', 'black-letterhead'); ?></em>
	<?php endif; ?>
	<br />

	<small class="comment-meta commentmetadata"><a href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ) ?>" title=""><?php comment_date(); ?> <?php _e('at', 'black-letterhead'); ?> <?php comment_time(); ?></a> <?php edit_comment_link('e','',''); ?></small>
	</div>
	<?php comment_text(); ?>

	<div class="reply">
		<?php comment_reply_link(array_merge( $args, array('add_below' => 'div-comment', 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	</div>
<?php
}

/**
 * Enqueue scripts and styles
 */
function blackletterhead_scripts() {
  wp_enqueue_style( 'blackletterhead', get_stylesheet_uri() );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );
}
add_action( 'wp_enqueue_scripts', 'blackletterhead_scripts' );

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @since Black Letterhead 1.5
 */
function black_letterhead_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $sep $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $sep " . sprintf( __( 'Page %s', 'black-letterhead' ), max( $paged, $page ) );

	return $title;
}
add_filter( 'wp_title', 'black_letterhead_wp_title', 10, 2 );

/*
 * Load Jetpack compatibility file.
 */
require( get_template_directory() . '/inc/jetpack.php' );
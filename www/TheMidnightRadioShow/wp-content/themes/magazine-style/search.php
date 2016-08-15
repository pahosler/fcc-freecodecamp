<?php get_header(); ?>
	<!-- BEGIN PAGE -->
	<div id="page">
    <div id="page-inner" class="clearfix">
<div id="banner-top"><?php echo stripslashes(of_get_option('magazine_banner_top')); ?></div>
<div id="content" class="post">
			<?php magazine_breadcrumbs(); ?>

	
			<?php if (have_posts()) : ?>
			
			<?php while(have_posts())  : the_post(); ?>
						

<div class="post"><?php get_template_part('/includes/post'); ?></div>
			<?php endwhile; ?>
			<?php else : ?>
				<div class="post">
					<div class="posttitle">
						<h2><?php _e('404 Error&#58; Not Found', 'magazine'); ?></h2>
						<span class="posttime"></span>
					</div>
				</div>
			<?php endif; ?>
			
			<?php load_template (get_template_directory() . '/includes/pagenav.php'); ?>			
	      										
		</div> <!-- end div #content -->
			
<?php get_sidebar(); ?>
<?php get_footer(); ?>

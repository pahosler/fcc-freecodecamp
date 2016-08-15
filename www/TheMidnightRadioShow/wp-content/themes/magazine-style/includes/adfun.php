<div id="bottom-menu">
<div id="bottom-menu-inner" class="clearfix">
<div id="bottom-menu-1">
<?php if (!dynamic_sidebar('magbottom1') ) : ?>
	<?php endif; ?>
</div>
<div id="bottom-menu-2">
	<?php if (!dynamic_sidebar('magbottom2') ) : ?>
	<?php endif; ?>
</div>
<div id="bottom-menu-3">
<?php if ( !dynamic_sidebar('magbottom3') ) : ?>
	<?php endif; ?></div> 
<div id="bottom-menu-4">
	<?php if ( !dynamic_sidebar('magbottom4') ) : ?>
	<?php endif; ?>
</div> 
</div> 
</div>

	<div id="footer">
	<div id="footer-inner" class="clearfix">
		<a href="<?php echo esc_url(home_url('/'));?>" title="<?php bloginfo('name');?>" ><?php bloginfo('name');?></a> <?php _e('Copyright &#169;', 'magazine'); ?>  <?php echo date('Y');?> | <?php _e('Theme:', 'magazine'); ?> <a href="<?php echo esc_url( __( 'http://www.insertcart.com/magazine-style', 'magazine' ) ); ?>" title="<?php esc_attr_e( 'Magazine Style', 'magazine' ); ?>"><strong><?php printf( __( 'Magazine Style %s', 'magazine' ),''); ?></strong></a> <?php _e('Powered by', 'magazine'); ?> <a href="http://wordpress.org/"><?php _e('WordPress', 'magazine'); ?></a> <a class="backtop" href="#top">  <?php _e('&#8593;', 'magazine'); ?></a>

		</div> <!-- end div #footer-right -->
	</div> <!-- end div #footer-inner -->
	</div> <!-- end div #footer -->
	<!-- END FOOTER -->
</div> 
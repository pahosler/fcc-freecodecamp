<div id="sidebar">
	<?php 
		if (of_get_option('magazine_activate_ltposts' ) =='1' ) {get_template_part('/includes/ltposts');}
		dynamic_sidebar('magsidebar') ;
	?>		
	</div>	<!-- end div #sidebar -->

		
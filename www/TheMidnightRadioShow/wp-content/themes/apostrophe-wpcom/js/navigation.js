/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {

	var toggleMenuButton;

	window.addEventListener( 'load', function() {
		var container, menu;

		container = document.getElementById( 'site-navigation' );
		if ( ! container ) {
			return;
		}

		toggleMenuButton = container.getElementsByClassName( 'menu-toggle' )[0];
		if ( 'undefined' === typeof toggleMenuButton ) {
			return;
		}

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			toggleMenuButton.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );

		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}

		// Watch every clickable element in the menu
		container.addEventListener( 'click', toggleMenu );

	} ); // page load

	function toggleMenu(event) {

		// If our menu toggle button is non-existent (ie, we're on a large screen), return early.
		if ( 0 == toggleMenuButton.offsetWidth && 0 == toggleMenuButton.offsetHeight ) {
			return;
		}

		var button = event.target;
		var parent = button.parentNode;

		// If we're not clicking on a button, don't do anything
		if ( -1 !== button.className.indexOf( 'menu-toggle' ) && -1 !== parent.className.indexOf( 'menu-item-has-children' ) ) {
			return;
		}

		// Toggle the menu
		if ( -1 !== parent.className.indexOf( 'toggled' ) ) {
			parent.className = parent.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			parent.setAttribute( 'aria-expanded', 'false' );
		} else {
			parent.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			parent.setAttribute( 'aria-expanded', 'true' );
		}

		// Links shouldn't work if the item has a sub-menu
		if ( -1 !== parent.className.indexOf( 'menu-item-has-children' ) ) {
			event.preventDefault();
		}
	}
} )();

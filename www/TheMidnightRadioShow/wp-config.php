<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db586807547');

/** MySQL database username */
define('DB_USER', 'dbo586807547');

/** MySQL database password */
define('DB_PASSWORD', 'gkgtXkhnyfpHGTaxmkMB');

/** MySQL hostname */
define('DB_HOST', 'db586807547.db.1and1.com:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         '`-M|@e_`T==bZU}h{|#?I++vZ=`[o51srxUSJei^hw<w,6|}x>qsPK3{3`!&|Lu<');
define('SECURE_AUTH_KEY',  'Uz=[Q5{+a- GSgkB[N|g-+,=+7KR*7sn0Bbbh[Lw1O:EyO>Qu1wGAaO[a+pA=9@j');
define('LOGGED_IN_KEY',    't!j/J!Aym@@+JTuO$64G0UMB[=9DN:S}jnePi;bSlq!W4b0*&7E(!hk<QTdbo}3c');
define('NONCE_KEY',        'F#aX?UiZXK>?#M{+iiwnTzc+$v$:Y_{#;5|zGmHm]hc+Y-:9STyTlxrAqau$&V$b');
define('AUTH_SALT',        '0[1<b}q;Y)z7q)mZ-pSQ9B+%rMYP{<J+X3cVL-`$e-+[e2>Y7dl]._`I|MqLP5Dm');
define('SECURE_AUTH_SALT', 'SbVeaI39-w `SdN- J_*4re->~O?I-tJW#rF:G#Z++~*XU+^/:BTqtir+LXs-D{9');
define('LOGGED_IN_SALT',   'Xv /e+)Z#m(z7SzXuZ_Hu6.[+zq+Pc>|!_W{0D 3cxSKZ(3q?-acDGWHrt_^|uvH');
define('NONCE_SALT',       ':2!|-q<l@ullH7y;]Y+&B85k|^8z3Y2K|sk]*,BpZe2rI%PC~hIV#(E$xv3]w( |');


$table_prefix = 'GmNmKrzD';


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Disable the Plugin and Theme Editor.
 *
 * Occasionally you may wish to disable the plugin or theme editor to prevent
 * overzealous users from being able to edit sensitive files and potentially crash the site.
 * Disabling these also provides an additional layer of security if a hacker
 * gains access to a well-privileged user account.
 */
define('DISALLOW_FILE_EDIT', true);



/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mama' );

/** MySQL database username */
define( 'DB_USER', 'dev2' );

/** MySQL database password */
define( 'DB_PASSWORD', '111' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')f~/R*S(>D#&PLYX}lxZs;?<F{sIAX;[Yq@J-UZFg~M*n]Q7AnQOZnugRpK5g(-|' );
define( 'SECURE_AUTH_KEY',  'ZL~Rj#ZjQ9*We_[=]5mgs~(q{Un4O~95v:j{LcXlQ&^Zy;P%Xx@4=$Ae$1}h}6@U' );
define( 'LOGGED_IN_KEY',    't[lwZ^Gc!$uaC$Fy>.}#b5z$*Zu0Ftk<-K(?jQ7]6q7EZJrvBKR:lD:H!-6U#Eb2' );
define( 'NONCE_KEY',        'q~l#|h6l/c{tm<sB%H+rP97?=V}U]!9fT28Dbj;[rQmP*jnM8ohb:&kN>iwV05yy' );
define( 'AUTH_SALT',        '~Tx2Aexg00,Ago5nF(T.4Wg#/bQ4km{2rf ok3{Tbo}=x%Z$(!^LPv5S8=%xDk9S' );
define( 'SECURE_AUTH_SALT', '?(2J:z*KP%157E}tVB,qB&3G0<8=DYnZ%1p$>RB{,G9u8,,PId)A93#XDXx2<J$h' );
define( 'LOGGED_IN_SALT',   '#L:m+j={4x?JVgPEWI[3G7[29Ga4q{ dV3dE%HCk7-XSR=EzeIZ$R]:mbMy8d{Js' );
define( 'NONCE_SALT',       'Jx /`6Ba#LLC#HB<TwwPEO#=CbZePUj/=s8^t&qX]?#/y#`FvJdFVe)~`A=jh1X#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

<?php
/**
 * Plugin Name: Produkty — dedykowany blok dla Gutenberga
 * Description: Produkty — jest to plugin dla edytora Gutenberga zaciągajacy własne produkty stworzony przy pomocy create-guten-block.
 * Author: Michał Jarecki
 * Author URI: https://warsztatstron.pl
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Create custom post type portfolio
*/

require_once plugin_dir_path( __FILE__ ) . 'plugin-functions.php';

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

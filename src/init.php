<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function products_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'products-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'products-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'products-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'products-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-products', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'products-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'products-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'products-cgb-block-editor-css',
			'render_callback' => 'products_cbg_block_render_products',
			'attributes' => array(
				'numberOfPosts' => array(
					'type' => 'number',
					'default' => 3
				)
			),
		)
	);

	function products_cbg_block_render_products( $attributes ) {
		
		$args = array(
			'post_type' => 'products',
			'post_per_page' => $attributes['numberOfPosts']
		);
		$query = new WP_Query($args);

		$products = '';
		if($query->have_posts()) {
			$products .= '<div class="wp-block-cgb-block-products"><ul class="products-list">';
			while ($query->have_posts()) {
				$query->the_post();
				$products .= '<li class="products-list__item">' . get_the_post_thumbnail() . '<a href="' . esc_url(get_the_permalink()) . '">'
				. get_the_title() . '<span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0303 17.0303L16.0607 11.9999L11.0303 6.96961L9.96968 8.03027L13.9394 11.9999L9.96968 15.9696L11.0303 17.0303Z" fill="currentColor"/></svg></span>	 </a></li>';
			}
			$products .= '</ul></div>';
			wp_reset_postdata();
			return $products;
		} else {
			return __('Nieznaleziono produktów, dodaj jakiś w panelu admina');
		}
	}
}

// Hook: Block assets.
add_action( 'init', 'products_cgb_block_assets' );

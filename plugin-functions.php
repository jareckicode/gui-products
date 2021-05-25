<?php 
// Register Custom Post Type
function custom_post_type() {
	
	
	// add_post_type_support( 'products', 'thumbnail' );
	// add_post_type_support( 'products', 'excerpt' );
	add_post_type_support( 'products', array(
		'title', 'excerpt','thumbnail'
	) );


	$labels = array(
		'name'                  => _x( 'Produkty', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Produkt', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Produkty', 'text_domain' ),
		'name_admin_bar'        => __( 'Produkt', 'text_domain' ),
		'archives'              => __( 'Item Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'Wszystkie produkty', 'text_domain' ),
		'add_new_item'          => __( 'Dodaj nowy produkt', 'text_domain' ),
		'add_new'               => __( 'Dodaj nowy', 'text_domain' ),
		'new_item'              => __( 'Nowy produkt', 'text_domain' ),
		'edit_item'             => __( 'Edytuj produkt', 'text_domain' ),
		'update_item'           => __( 'Zaktualizuj produkt', 'text_domain' ),
		'view_item'             => __( 'Zobacz produkt', 'text_domain' ),
		'view_items'            => __( 'Zobacz produkty', 'text_domain' ),
		'search_items'          => __( 'Wyszukaj produkt', 'text_domain' ),
		'not_found'             => __( 'Nie znaleziono produktu', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Zdjęcie główne produktu', 'text_domain' ),
		'set_featured_image'    => __( 'Ustaw główne zdjęcie produktu', 'text_domain' ),
		'remove_featured_image' => __( 'Usuń główne zdjęcie produktu', 'text_domain' ),
		'use_featured_image'    => __( 'Użyj jako główne zdjęice produktu', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Produkt', 'text_domain' ),
		'description'           => __( 'Dodaj swoje produkty', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest' => true,
  	 	'supports' => array('editor')
		
	);
	register_post_type( 'products', $args );

}
add_action( 'init', 'custom_post_type', 0 );


add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post', 'products'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}
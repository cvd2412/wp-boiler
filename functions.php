<?php
function cvding_wp_setup() {
    /*
    * Make theme available for translation.
    * Translations can be filed in the /languages/ directory.
    */
    load_theme_textdomain('cvding');

	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
		)
	);
}

// Load Custom Theme Scripts using Enqueue
function scripts() {
	if ( !is_admin() ) {
		wp_deregister_script( 'jquery' ); // Deregister WordPress jQuery
	}
}
add_action( 'init', 'scripts' );

add_action('after_setup_theme', 'cvding_wp_setup');

function cvding_enqueue_styles() {
	wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/app.css', '', '');
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/style.css', '', '');
	wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/app.js', '', '', true);
}

add_action('wp_enqueue_scripts', 'cvding_enqueue_styles');

function cvding_menus() {

	$locations = array(
		'primary'  => __( 'Desktop Horizontal Menu', 'cvding' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'cvding_menus' );

function resImg($imgID, $size = 'full', $customClass = ''){
    $image_alt = get_post_meta($imgID, '_wp_attachment_image_alt', true) || get_the_title($imgID);

	ob_start(); ?>
	<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	     data-src="<?= wp_get_attachment_image_url( $imgID, $size ) ?>"
	     alt="<?=  $image_alt; ?>"
	     data-srcset="<?= wp_get_attachment_image_srcset($imgID, $size) ?>"
	     class="lazyload <?= $customClass ?>">
	<?php
	$output = ob_get_contents();
	ob_end_clean();
	echo $output;
}

//add_image_size( 'retina', 2880, 9999 );
//add_image_size( 'hd', 1920, 9999 );
//add_image_size( 'content', 1440, 9999 );

function create_gf_cpt() {
	$args = array(
		'labels' => array(
			'name' => 'Cases',
			'singular_name' => 'Case'
		),
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'exclude_from_search' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-businessman',
		'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
	);
	register_post_type( 'cases', $args);

	register_taxonomy('tag','cases',array(
		'hierarchical' => false,
		'show_ui' => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var' => true,
		'rewrite' => array( 'slug' => 'tag' ),
	));
}
add_action( 'init', 'create_gf_cpt' );

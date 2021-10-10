<?php

// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', get_stylesheet_directory() . '/acf/' );
define( 'MY_ACF_URL', get_stylesheet_directory_uri() . '/acf/' );

// Include the ACF plugin.
include_once( MY_ACF_PATH . 'acf.php' );

// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
	return MY_ACF_URL;
}

// (Optional) Hide the ACF admin menu item.
add_filter('acf/settings/show_admin', 'my_acf_settings_show_admin');
function my_acf_settings_show_admin( $show_admin ) {
	return true;
}


if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Options',
		'menu_title' 	=> 'Options',
		'menu_slug' 	=> 'site-settings',
		'capability' 	=> 'edit_posts',
		'position' => 2
	));

}

add_filter('acf/settings/save_json', 'my_acf_json_save_point');

function my_acf_json_save_point( $path ) {
	$path = get_stylesheet_directory() . '/acf-json';
	return $path;
}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point( $paths ) {
	unset($paths[0]);
	$paths[] = get_stylesheet_directory() . '/acf-json';
	return $paths;
}

define( 'ACFFA_PUBLIC_PATH', get_stylesheet_directory_uri() . '/acf-plugins/acf-font-awesome/' );
define( 'ACFFA_BASENAME', get_stylesheet_directory() . '/acf-plugins/acf-font-awesome/acf-font-awesome.php' );

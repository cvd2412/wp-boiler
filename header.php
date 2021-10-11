<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">

    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) {
			echo ' |';
		} ?><?php bloginfo( 'name' ); ?></title>

    <?php wp_head(); ?>

    <script src="<?= get_template_directory_uri() . '/assets/lazyload.js' ?>" async></script>
</head>

<body <?php body_class('min-h-screen'); ?>>

<div class="text-2xl prose">WP-Boiler <small>by <a href="https://cvding.dk">cvding</a></small></div>
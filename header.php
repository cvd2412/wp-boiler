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

    <script src="<?= get_template_directory_uri() . '/assets/lazyload.js' ?>" async></script>
    <?php wp_head(); ?>

</head>

<body <?php body_class('min-h-screen'); ?>>

<div class="w-full text-center"><div class="inline-block text-center mx-auto mt-4 prose text-2xl">WP-Boiler <small>by <a target="_blank" href="https://cvding.dk">cvding</a></small></div></div>
<header id="masthead" class="site-header">
    <div class="site-branding">
        <?php
        the_custom_logo();
        if ( is_front_page() && is_home() ) :
            ?>
            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
        <?php
        else :
            ?>
            <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
        <?php
        endif;
        $test_description = get_bloginfo( 'description', 'display' );
        if ( $test_description || is_customize_preview() ) :
            ?>
            <p class="site-description"><?php echo $test_description; ?></p>
        <?php endif; ?>
    </div><!-- .site-branding -->

    <nav id="site-navigation" class="main-navigation">
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'test' ); ?></button>
        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'menu-1',
                'menu_id'        => 'primary-menu',
            )
        );
        ?>
    </nav><!-- #site-navigation -->
</header><!-- #masthead -->
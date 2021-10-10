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

<body <?php body_class(); ?>>

<div class="site-header" data-component="header">
    <div class="container">
        <a href="/" class="site-header__logo">
			<?php include( get_template_directory() . '/assets/logo.svg' ); ?>
        </a>
        <div class="site-header__hamburger">
            <div class="site-header__hamburger__line"></div>
            <div class="site-header__hamburger__line"></div>
        </div>
    </div>
</div>

<div class="Site-interface">
    <div class="offcanvas">
        <nav class="offcanvas-nav">
            <ul class="offcanvas-nav__list">
                <li class="offcanvas-nav__item">
                    <a href="#" class="offcanvas-nav__link">Home</a>
                </li>

                <li class="offcanvas-nav__item">
                    <a href="#" class="offcanvas-nav__link">About</a>
                </li>

                <li class="offcanvas-nav__item">
                    <a href="#" class="offcanvas-nav__link">Portfolio</a>
                </li>

                <li class="offcanvas-nav__item">
                    <a href="#" class="offcanvas-nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="container">
        <div class="toggle-circle">
            <div class="row">
                <svg class="hamburger-toggle__circle" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16"/></svg>
            </div>
        </div>
    </div>
</div>

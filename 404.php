<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 */
?>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <title><?= __( 'Hovsa! - Siden blev ikke fundet', 'cvding' ) ?><?php if ( wp_title( '', false ) ) {echo ' |';} ?><?php bloginfo( 'name' ); ?></title>

	<?php wp_head(); ?>
</head>
<body>
    <main id="content" class="container" role="main">

        <header class="page-header">
            <h1 class="page-title glitch" data-text="404">404</h1>
        </header>

        <div class="page-wrapper">
            <div class="page-content">
                <h2><?php _e( 'This is somewhat embarrassing, isn’t it?', 'cvding' ); ?></h2>
                <p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'cvding' ); ?></p>

				<?php get_search_form(); ?>
            </div>
        </div>
    </main>
</body>
</html>
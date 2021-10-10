<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<main id="site-content" role="main">

    <div class="post-inner">
        <div class="entry-content container container--small">
			<?php
			if (has_post_thumbnail() && !post_password_required()) { ?>
                <figure class="featured-media">
                    <div class="featured-media-inner section-inner">
						<?php
						the_post_thumbnail();

						$caption = get_the_post_thumbnail_caption();

						if ($caption) {
							?>
                            <figcaption class="wp-caption-text"><?php echo esc_html($caption); ?></figcaption>
							<?php
						}
						?>
                    </div>
                </figure>
			<?php } ?>
			<?php the_content(); ?>
        </div>
    </div>

</main><!-- #site-content -->

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php get_footer(); ?>

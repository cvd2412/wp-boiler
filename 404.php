<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage cvding
 * @since 1.0.0
 */

get_header();
?>

    <div class="text-center h-screen w-full">
        <div class="prose mx-auto">
            <header>
                <h1><?php esc_html_e('Nothing here', 'cvding'); ?></h1>
            </header><!-- .page-header -->

            <div class="error-404 not-found default-max-width">
                <div class="page-content">
                    <p><?php esc_html_e('It looks like nothing was found at this location. Maybe try a search?', 'cvding'); ?></p>
                    <?php get_search_form(); ?>
                </div><!-- .page-content -->
            </div><!-- .error-404 -->
        </div>
    </div>

<?php
get_footer();

<?php get_header(); ?>

    <main>
        <section id="introduction" class="introduction">
            <div class="container--content flex">
                <h1 class="introduction__title">
                    <span style="font-size: 80px">Hello, I'm Christian</span><br>
                    Front-end developer <br>At Grafikr
                </h1>
            </div>
        </section>
        <section id="experience" class="experience">
            <div class="container--small flex">
                <div class="experience__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, error?
                </div>
                <div class="experience__years"><?php
					$now         = time();
					$your_date   = strtotime( "2019-04-01" );
					$daysBetween = round( ( $now - $your_date ) / ( 60 * 60 * 24 ) );

					$result     = array( $daysBetween );
					$sub_struct = ( $result[0] / 30 );
					$sub_struct = floor( $sub_struct );
					$months     = intval( $sub_struct );

					echo round( intval( $daysBetween ) / 365 ) . "<span>years</span>";
					?></div>
            </div>
        </section>
        <section id="cases" class="cases">
            <div class="container--content">
                <div class="section-title">Selected cases</div>
                <div class="cases__wrapper">
		            <?php
		            $the_query  = new WP_Query( array(
			            'post_type'      => 'cases',
			            'posts_per_page' => 5,
			            'post_status'    => 'publish',
		            ) );
		            ?>

			            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                            <div class="cases__case">
                                <a class="cases__case-link" href="<?php the_permalink() ?>">
                                    <div class="cases__case-image"><?php resImg( get_post_thumbnail_id() ) ?></div>
                                </a>
                                <a class="cases__case-title" href="<?php the_permalink() ?>"><?php the_title(); ?></a>
                                <div class="cases__case-tags">
                                    <?php
                                    $terms = get_the_terms( $post->ID , 'tag' );
                                    // init counter
                                    $i = 1;
                                    if ($terms) {
	                                    foreach ( $terms as $term ) {
		                                    $term_link = get_term_link( $term, array( 'tag') );
		                                    if( is_wp_error( $term_link ) )
			                                    continue;
		                                    echo "<div class='tag'>". $term->name . (($i < count($terms))? ", " : "") . "</div>";
		                                    //  Add comma (except after the last theme)

		                                    // Increment counter
		                                    $i++;
	                                    }
                                    }

                                    ?>
                                </div>
                            </div>
			            <?php
			            endwhile;
			            wp_reset_postdata();
			            ?>
                </div>

            </div>
        </section>
    </main>

<?php get_footer(); ?>

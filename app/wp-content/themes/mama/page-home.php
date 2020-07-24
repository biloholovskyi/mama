<?php
/*
Template Name: Home
*/
?>
<?php get_header(); ?>
    <div class="main-slider">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="owl-carousel owl-theme" id="main-slider">
            <?php
            $args = array(
              'numberposts' => -1, // если -1 то выводит все
              'orderby' => 'date',
              'order' => 'DESC',
              'post_type' => 'slider', // тип поста
              'suppress_filters' => true,
            );

            $posts = get_posts($args);

            foreach ($posts as $post) {
              setup_postdata($post);
              ?>
              <div class="item">
                <div class="slider-info">
                  <h1><?php the_title(); ?></h1>
                  <p class="desc"><?php the_field('slider_desc'); ?></p>
                  <div class="count-list-wrap">
                    <div class="select-num">1 порция</div>
                    <div class="price"> 
                      <div class="offer"><?php the_field('price'); ?>₽</div>
                      <p><?php the_field('offer'); ?>₽</p>
                    </div>
                    <button class="busket"></button>
                  </div>
                </div><img class="slider-img" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" alt="image">
              </div>
              <?php
              }
              wp_reset_postdata(); // сброс
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-dishes">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 id="popular">Популярные блюда</h2>
          </div>
        </div>
        <div class="row">     
          <div class="col-12">
            <div class="tabs" id="tabs">
              <div class="tab active " onclick="filterSelection('all')"> Все <span>категории</span></div>
              <div class="tab" onclick="filterSelection('salat')">Салаты</div>
              <div class="tab" onclick="filterSelection('soup')"> Супы</div>
              <div class="tab" onclick="filterSelection('other')">Второе</div>
              <div class="tab" onclick="filterSelection('drink')">Напитки  </div>
            </div>
          </div>
        </div>
        <div class="row dish-row">

        <?php
        $args = array(
          'numberposts' => -1, // если -1 то выводит все
          'orderby' => 'date',
          'order' => 'DESC',
          'post_type' => 'items', // тип поста
          'suppress_filters' => true,
        );

        $posts = get_posts($args);

        foreach ($posts as $post) {
          setup_postdata($post); 
          ?>
          <div data-id="2" class="dish-item <?php the_field('category'); ?>">
            <div class="dish-title"> 
              <h4><?php the_title(); ?></h4>
              <h4 class="bold"><?php the_field('item__name'); ?></h4>
              <div class="gramms" style="display: none;"><?php the_field('gramms'); ?></div>
            </div><img class="food-img photo" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>  
              <button class="busket" data-id="1" ><?php the_field('item__price'); ?>₽</button>
            </div>
          </div>
          <?php
            }
            wp_reset_postdata(); // сброс
            ?>
         
        </div> 
      </div>
    </div>
    <div class="about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-title">
              <h2>О нас</h2>
              <p><?php the_field('about_desc'); ?></p>
            </div>
          </div>
        </div>
        <?php
          $args = array(
            'numberposts' => -1, // если -1 то выводит все
            'orderby' => 'date',
            'order' => 'DESC',
            'post_type' => 'about', // тип поста
            'suppress_filters' => true,
          );

          $posts = get_posts($args);
          $about_count = 0;
          foreach ($posts as $post) {
            setup_postdata($post);
            $product_count ++;
				    if ( $about_count === 1 ) {
            ?>
          <div class="row about-row">
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="about-info">
                <div class="about-name"><?php the_title(); ?></div>
                <div class="desc"><?php the_field('about_descripton'); ?></div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="about-photo"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/big-spot.png" alt=""><img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" alt="photo"></div>
            </div>
          </div>
        <?php
				} else {
					$about_count = 0;
          ?>
        <div class="row about-row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-info">
              <div class="about-name"><?php the_title(); ?></div>
              <div class="desc"><?php the_field('about_descripton'); ?></div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-photo"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/big-spot.png" alt=""><img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>" alt="photo"></div>
          </div>
        </div>
        <?php
				}
			}
		
		wp_reset_postdata(); // сброс
		?>
      </div>
    </div>
    <div class="order">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <?php
              $step = get_field('step_1');
              $step2 = get_field('step_2');
              $step3 = get_field('step_3');
              $step4 = get_field('step_4');
            ?>
            <h2>Как заказать? </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-lg-3 col-md-6 col-sm-6">
            <div class="order-text">
              <div class="order-item"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/order1.svg" alt="icon">
                <h3><?php echo $step['step_title']; ?></h3>
                <p><?php echo $step['step_desc']; ?></p>
              </div>
              <div class="order-item">
                <div class="img-item">3</div>
                <h3><?php echo $step2['step_title2']; ?></h3>
                <p><?php echo $step2['step_desc2']; ?></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 order-last"><img class="order-img" src="<?php echo get_template_directory_uri(); ?>/media/image/2.png" alt="image"></div>
          <div class="col-6 col-lg-3 col-md-6 col-sm-6 order-lg-last">
            <div class="order-text">
              <div class="order-item">
                <div class="img-item">2</div>
                <h3><?php echo $step3['step_title3']; ?></h3>
                <p><?php echo $step3['step_desc3']; ?></p>
              </div>
              <div class="order-item">
                <div class="img-item">4</div>
                <h3><?php echo $step4['step_title4']; ?></h3>
                <p><?php echo $step4['step_desc4']; ?></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="payment" id="pay">
      <div class="container">
        <div class="row">
          <div class="col-12">
          <?php
              $pay_step = get_field('pay_step');
              $pay_step2 = get_field('pay_step2');
              $pay_step3 = get_field('pay_step3');
            ?>
            <h2>Как оплатить? </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">1</div>
              <h3><?php echo $pay_step['pay_title']; ?></h3>
              <p><?php echo $pay_step['pay_desc']; ?></p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">2</div>
              <h3><?php echo $pay_step2['pay_title2']; ?></h3>
              <p><?php echo $pay_step2['pay_desc2']; ?></p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">3</div>
              <h3><?php echo $pay_step3['pay_title3']; ?></h3>
              <p><?php echo $pay_step3['pay_desc3']; ?></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="payment-method"><img src="<?php echo get_template_directory_uri(); ?>/media/image/pay.jpg" alt="logo"><img src="<?php echo get_template_directory_uri(); ?>/media/image/pay2.jpg" alt="logo"><img src="<?php echo get_template_directory_uri(); ?>/media/image/pay3.jpg" alt="logo"><img src="<?php echo get_template_directory_uri(); ?>/media/image/pay4.png" alt="logo"><img src="<?php echo get_template_directory_uri(); ?>/media/image/pay5.png" alt="logo"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="callback" id="callback">
              <h3>Вам перезвонить?</h3>
              <h4>Phasellus aliquam, est a semper dignissim</h4>
              <form>
                <input type="text" placeholder="Ваш номер телефона">
                <input type="submit" value="Заказать звонок">
              </form>
              <p>Нажимая “Оформить заказ”  вы соглашаетесь с <a href="#">Политикой обработки персональных данных</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="addbusket-modal">
      <div class="img-container-small">
        <div class="small-img"></div>
      </div>
      <div class="small-title"><span class="kind"></span> <span class="name"></span>    добавлен в корзину! </div>
      <div class="line"></div>
      <button class="goPay contine">Перейти к оплате</button>
    </div>
    <div class="inbusket"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/basket.svg" alt="icon">
      <div class="numberOfItem">1</div>
    </div>
    <div class="dish-overlay">
      <div class="modal-content">
        <div class="modal-close"></div>
        <div class="modal-img"></div>
        <div class="modal-info">
          <h4>Салат</h4>
          <h3>Греческийssssss</h3>
          <p>Курица, лапша яичная, бульон куриный морковь, лук</p>
          <div class="modal-btns">
            <div class="modal-btn">
              <button class="count-dish active">1 порция</button>
              <button class="count-dish">3 порции</button>
              <button class="count-dish">6 порций</button>
            </div>
            <div class="info-dish">
              <p class="weight">150g</p>
              <p class="price">199.00₽</p>
            </div>
            <button class="addBusket">В корзину    </button>
          </div>
        </div>
      </div>
    </div>
    <div class="item-in-busket">
      <div class="modal-close3"></div>
      <div class="itemInBusket-title">
        <h3>Товары в корзине</h3>
      </div>
      <div class="itemInBusket-body" id="cart_content">  
        <div class="item">
          <div class="img-container"><img src="<?php echo get_template_directory_uri(); ?>/media/image/dish.jpg" alt="image"></div>
          <div class="titles">
            <div class="names">Салат Греческий</div>
            <div class="grams">250 грамм</div>
          </div>
          <div class="count-wrap">
            <div class="minus"> </div>
            <div class="num">1</div>
            <div class="plus"> </div>
          </div>
          <div class="dlt-item">   </div>
        </div>
      </div>
      <div class="itemInBusket-btn">
        <div class="price-wrap">
          <p>К оплате</p>
          <p class="price">199.00₽</p>
        </div>
        <button class="contine">Продолжить  </button>
      </div>
    </div>
    <div class="order-overlay">
      <div class="modal-content">
        <div class="modal-close"></div> 
        <h3>Оформление заказа</h3> 
        <form action="send.php" method="POST" class="form-order" id="form-order"> 
          <label for="name">ФИО</label>
          <input type="text" id="name" name="user_name"  placeholder="Иванов Иван Иванович" required>
          <label for="tel">Номер телефона</label>
          <input type="text" id="tel" name="user_tel" placeholder="8 800 555-35-35" required>
          <label for="addres">Куда доставить?</label>
          <input type="text" id="addres" name="user_add" placeholder="ул. Пушкина, дом 1" required>
          <label for="time">Когда доставить?</label>
          <input type="text" id="time" name="user_time" placeholder="Сегодня, 16:40" required>
          <div class="form_bottom">
            <p>Нажимая “Оформить заказ”  вы соглашаетесь с <a href="#">Политикой обработки персональных данных</a> </p>
            <input type="submit" value="Оформить заказ">
          </div>
        </form>
      </div>
    </div>
    <div class="success">
      <div class="success-content">
        <div class="imgOk"></div>
        <h3>Заказ оформлен</h3>
        <p>Менеджер свяжется с вами в ближайшее время для уточнения деталей</p><a href="/">Вернуться на главную</a>
      </div>
    </div>
    <?php get_footer(); ?>
     
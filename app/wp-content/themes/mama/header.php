<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
    <?php wp_head(); ?>
    <title><?php the_title(); ?></title>
  </head>
  <body>
    <header class="header">
      <div class="header-content"><a href="/"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/media/icon/logo.svg" alt="logo"></a>
        <div class="header-nav">
          <ul>
            <li>
              <button class="menu">Меню<img src="<?php echo get_template_directory_uri(); ?>/media/icon/logo-menu.svg" alt="logo">
                <div class="romb"></div>
              </button>
            </li>
            <li><a class="anhors" href="#about">О нас</a></li>
            <li><a class="anhors" href="#pay">Оплата и доставка </a></li>
          </ul>
        </div>
      </div>
      <div class="header-contact">
        <div class="phone"><a href="tel:"><?php the_field('mobile'); ?><img src="<?php echo get_template_directory_uri(); ?>/media/icon/tel.svg" alt="icon"></a><a class="anhors" href="#callback">Вам перезвонить?</a></div>
        <div class="social"><a href="<?php the_field('telegram'); ?>" target="_blank" ><img src="<?php echo get_template_directory_uri(); ?>/media/icon/twit.svg" alt="icon"></a><a href="<?php the_field('whatApp'); ?>"  target="_blank">        <img src="<?php echo get_template_directory_uri(); ?>/media/icon/wApp.svg" alt="icon"></a></div>
      </div>
    </header>
    <div class="mobile-menu"><a href="/"><img class="mobile-logo" src="../media/icon/logo.svg" alt="logo"></a>
      <div class="mobile-nav"> 
        <div class="burger">
          <div class="burder-item"></div>
          <div class="burder-item"></div>
          <div class="burder-item"></div>
        </div>
        <button class="busket">   </button>
      </div>
    </div>
    <div class="menu-overlay">
      <div class="modal-menu">
        <div class="modal-close2"></div>
        <div class="modal-item"><img src="../media/image/modal1.svg" alt="image">
          <h4>Салаты</h4>
        </div>
        <div class="modal-item"><img src="../media/icon/drink.png" alt="image">
          <h4>Напитки</h4>
        </div>
        <div class="modal-item"><img src="../media/image/modal2.svg" alt="image">
          <h4>Супы</h4>
        </div>
        <div class="modal-item"><img src="../media/icon/second.png" alt="image">
          <h4>Второе</h4>
        </div>
        <div class="modal-item"><img src="../media/icon/family.png" alt="image">
          <h4>Семейный ужин        </h4>
        </div>
      </div>
    </div>
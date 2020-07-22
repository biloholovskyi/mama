<?php
// подключение скриптов
add_action('wp_enqueue_scripts', 'style_them');
// подключение стилей
add_action('wp_footer', 'script_them');
// подключение меню
add_action('after_setup_theme', 'menu');

// пример создание меню
function menu() {
  register_nav_menu('header', 'Главное меню в шапке');
  register_nav_menu('footer', 'Меню в подвале');
  // подключаем обложку поста
  add_theme_support( 'post-thumbnails', array('post', 'slider', 'about', 'category', 'items' ) );
  // удаляем ... в кратком описание постов
  add_filter('excerpt_more', function($more) {
    return '';
  });
}

// подключение стилей
function style_them() {
  // подключение основного файла стилей
  wp_enqueue_style('style', get_stylesheet_uri());
  // подключение остальный файлов
  wp_enqueue_style('owl-theme', get_template_directory_uri() . '/css/owl.carousel.min.css');
  wp_enqueue_style('owl', get_template_directory_uri() . '/css/owl.theme.default.min.css');
  wp_enqueue_style('main', get_template_directory_uri() . '/css/main.css');
}

// подключение скриптов
function script_them() {
  wp_enqueue_script('script_owl', get_template_directory_uri() . '/buildjs/owl.carousel.js');
  wp_enqueue_script('script', get_template_directory_uri() . '/buildjs/index.js');

  // удаление из скриптов лишних аттрибутов
  add_filter('script_loader_tag', 'codeless_remove_type_attr', 10, 2);
  function codeless_remove_type_attr($tag, $handle) {
    return preg_replace("/type=['\"]text\/(javascript|css)['\"]/", '', $tag);
  }
}

// пример создания нового типа поста
add_action( 'init', 'register_post_types' );
function register_post_types(){
  register_post_type('slider', array(
    'label'  => null,
    'labels' => array(
      'name'               => 'Слайдер', // основное название для типа записи
      'singular_name'      => 'Слайдер', // название для одной записи этого типа
      'add_new'            => 'Добавить слайд', // для добавления новой записи
      'add_new_item'       => 'Добавление слайд', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактирование слайда', // для редактирования типа записи
      'new_item'           => 'Новый слайд', // текст новой записи
      'view_item'          => 'Смотреть слайд', // для просмотра записи этого типа.
      'search_items'       => 'Искать слайд', // для поиска по этим типам записи
      'not_found'          => 'Не найден слайд', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найден слайд в корзине', // если не было найдено в корзине
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'Слайдер', // название меню
    ),
    'description'         => '',
    'public'              => true,
    'publicly_queryable'  => true, // зависит от public
    'exclude_from_search' => true, // зависит от public
    'show_ui'             => true, // зависит от public
    'show_in_menu'        => true, // показывать ли в меню адмнки
    'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
    'show_in_nav_menus'   => true, // зависит от public
    'show_in_rest'        => null, // добавить в REST API. C WP 4.7
    'rest_base'           => null, // $post_type. C WP 4.7
    'menu_position'       => 2,
    'menu_icon'           => 'dashicons-images-alt',
    //'capability_type'   => 'post',
    //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
    //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
    'hierarchical'        => false,
    'supports'            => array('title', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
    'taxonomies'          => array(),
    'has_archive'         => false,
    'rewrite'             => true,
    'query_var'           => true,
  ) );

  register_post_type('about', array(
    'label'  => null,
    'labels' => array(
      'name'               => 'Сотрудники', // основное название для типа записи
      'singular_name'      => 'Сотрудник', // название для одной записи этого типа
      'add_new'            => 'Добавить сотрудника', // для добавления новой записи
      'add_new_item'       => 'Добавление сотрудника', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактирование сотрудника', // для редактирования типа записи
      'new_item'           => 'Новый сотрудник', // текст новой записи
      'view_item'          => 'Смотреть сотрудника', // для просмотра записи этого типа.
      'search_items'       => 'Искать сотрудника', // для поиска по этим типам записи
      'not_found'          => 'Не найден сотрудник', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найден сотрудник в корзине', // если не было найдено в корзине
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'Сотрудники', // название меню
    ),
    'description'         => '',
    'public'              => true,
    'publicly_queryable'  => true, // зависит от public
    'exclude_from_search' => true, // зависит от public
    'show_ui'             => true, // зависит от public
    'show_in_menu'        => true, // показывать ли в меню адмнки
    'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
    'show_in_nav_menus'   => true, // зависит от public
    'show_in_rest'        => null, // добавить в REST API. C WP 4.7
    'rest_base'           => null, // $post_type. C WP 4.7
    'menu_position'       => 3,
    'menu_icon'           => 'dashicons-admin-users',
    //'capability_type'   => 'post',
    //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
    //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
    'hierarchical'        => false,
    'supports'            => array('title', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
    'taxonomies'          => array(),
    'has_archive'         => false,
    'rewrite'             => true,
    'query_var'           => true,
  ) );

  register_post_type('category', array(
    'label'  => null,
    'labels' => array(
      'name'               => 'Категории товара', // основное название для типа записи
      'singular_name'      => 'Категории товара', // название для одной записи этого типа
      'add_new'            => 'Добавить категорию', // для добавления новой записи
      'add_new_item'       => 'Добавление категории', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактирование категории', // для редактирования типа записи
      'new_item'           => 'Новая категория', // текст новой записи
      'view_item'          => 'Смотреть категорию', // для просмотра записи этого типа.
      'search_items'       => 'Искать категорию', // для поиска по этим типам записи
      'not_found'          => 'Не найденакатегория', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдена категория в корзине', // если не было найдено в корзине
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'Категории товара', // название меню
    ),
    'description'         => '',
    'public'              => true,
    'publicly_queryable'  => true, // зависит от public
    'exclude_from_search' => true, // зависит от public
    'show_ui'             => true, // зависит от public
    'show_in_menu'        => true, // показывать ли в меню адмнки
    'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
    'show_in_nav_menus'   => true, // зависит от public
    'show_in_rest'        => null, // добавить в REST API. C WP 4.7
    'rest_base'           => null, // $post_type. C WP 4.7
    'menu_position'       => 4,
    'menu_icon'           => 'dashicons-edit-large',
    //'capability_type'   => 'post',
    //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
    //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
    'hierarchical'        => false,
    'supports'            => array('title', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
    'taxonomies'          => array(),
    'has_archive'         => false,
    'rewrite'             => true,
    'query_var'           => true,
  ) );

  register_post_type('items', array(
    'label'  => null,
    'labels' => array(
      'name'               => 'товар', // основное название для типа записи
      'singular_name'      => 'товар', // название для одной записи этого типа
      'add_new'            => 'Добавить товар', // для добавления новой записи
      'add_new_item'       => 'Добавление товара', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактирование товара', // для редактирования типа записи
      'new_item'           => 'Новый товар', // текст новой записи
      'view_item'          => 'Смотреть товар', // для просмотра записи этого типа.
      'search_items'       => 'Искать товар', // для поиска по этим типам записи
      'not_found'          => 'Не найден товар', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найден товар в корзине', // если не было найдено в корзине
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'товар', // название меню
    ),
    'description'         => '',
    'public'              => true,
    'publicly_queryable'  => true, // зависит от public
    'exclude_from_search' => true, // зависит от public
    'show_ui'             => true, // зависит от public
    'show_in_menu'        => true, // показывать ли в меню адмнки
    'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
    'show_in_nav_menus'   => true, // зависит от public
    'show_in_rest'        => null, // добавить в REST API. C WP 4.7
    'rest_base'           => null, // $post_type. C WP 4.7
    'menu_position'       => 5,
    'menu_icon'           => 'dashicons-cart',
    //'capability_type'   => 'post',
    //'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
    //'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
    'hierarchical'        => false,
    'supports'            => array('title', 'thumbnail'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
    'taxonomies'          => array(),
    'has_archive'         => false,
    'rewrite'             => true,
    'query_var'           => true,
  ) );

 
}

// скрипт для добавления svg картинок в адмнке
function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );



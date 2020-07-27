import 'normalize.css';
import {switchTabs} from "./tabs";
import Cart from "./cart";

const cart = new Cart();

$(document).ready((e) => {
  cart.renderOrder();

  $('#tabs .tab').on('click', (e) => switchTabs(e));
  $('body').on('click', '.item-in-busket .itemInBusket-body .item .dlt-item',  (e) => cart.removeOrder(e));
  $('body').on('click', '.item-in-busket .itemInBusket-body .item .count-wrap .plus', (e) => cart.onCount(e));
  $('body').on('click', '.item-in-busket .itemInBusket-body .item .count-wrap .minus', (e) => cart.onCount(e));


  //anhors 
  $('.anhors').on('click', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 800);
    $('.header').removeClass('active');
  });

  $('#main-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });


  // open menu
  $('.menu').on('click', function () {
    $(this).children('.romb').toggleClass('active');
    $('.modal-menu').toggleClass('active');
    $('body').toggleClass('active');
    $('.header').toggleClass('active');
  });


  // close menu on responsive
  $('.modal-close2').on('click', function () {
    $('.modal-menu').toggleClass('active');
    $('body').removeClass('active');
  });


  // select active button on modal item
  $('.count-dish').on('click', function () {
    const count = parseInt($(this).html().replace(/[^\d]/g, ''))
    $('.addBusket').attr('data-count', count);
    if (!$(this).hasClass('active')) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    }
  });


  // card food modal
  $('.dish-item').on('click', function () {
    const current = $(this);
    const id = current.attr('id');

    const img = current.children('.food-img').attr('src');
    const title = current.children('.dish-title').find('h4').html();
    const title2 = current.children('.dish-title').find('.bold').html();
    const gramm = current.children('.dish-title').find('.gramms').html();
    const price = current.children('.dish-list-wrap').find('.busket').html();

    $('.modal-img').css('background-image', 'url(' + img + ')');
    $('.modal-info h4').html(title);
    $('.modal-info h3').html(title2);
    $('.info-dish .price').html(price);
    $('.info-dish .weight').html(gramm + 'g');


    $('.small-img').css('background-image', 'url(' + img + ')');
    $('.addbusket-modal .small-title').find('.kind').html(title);
    $('.addbusket-modal .small-title').find('.name').html(title2);


    $('.addBusket').attr('data-product', id);

    $('.dish-overlay').css('visibility', 'visible');
    $('body').addClass('active');
  });

  $('.modal-close').on('click', function () {
    $('.dish-overlay').css('visibility', 'hidden');
    $('.order-overlay').css('visibility', 'hidden');
    $('body').removeClass('active');
  });

  // close modal busket
  $('.modal-close3').on('click', function () {
    $('.item-in-busket').css('display', 'none');
    cart.renderOrder();
  });

  // modal add on busket
  $('.addBusket').on('click', (e) => cart.creatOrder(e));


  $('.inbusket').on('click', function () {
    $(this).css('display', 'none');
    $('.item-in-busket').css('display', 'flex');
  });


  $('.contine').on('click', function () {
    $('.item-in-busket').css('display', 'none');
    $('.order-overlay').css('visibility', 'visible');
    $('body').addClass('active');
  });

// adaptive menu  open

  $('.burger').on('click', function () {
    $('.header').toggleClass('active');
    $('body').toggleClass('active');
  });


//

  $('.salat_menu').on('click', function () {
    $('.popular-dishes .tabs .salat_menu').addClass('active').siblings().removeClass('active');
  });


});


// close modal

$(document).mouseup(function (e) {
  let div = $('.modal-menu, .menu , .romb');
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    div.removeClass('active');
    $('body').removeClass('active');
  }
});

$(document).on('click', function (e) {
  let modal = $('.modal-content, .item-in-busket');
  let btn = $('.dish-item, .contine, .inbusket, .dlt-item');
  if(e.target.classList.contains('dlt-item') || e.target.classList.contains('plus') || e.target.classList.contains('minus')) {
    return
  }


  if (!btn.is(e.target) && btn.has(e.target).length === 0) {
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      $('.dish-overlay').css('visibility', 'hidden');
      $('.order-overlay').css('visibility', 'hidden');
      $('.item-in-busket').css('display', 'none');
      cart.renderOrder();
    }
  }
});

$(window).resize(() => {

});


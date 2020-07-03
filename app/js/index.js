import 'normalize.css';
import './form';


$(document).ready((e) => {

    $('#main-slider').owlCarousel({
      
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      items: 1,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn'
     
      // smartSpeed:450 
      
  });


  // open menu
  $('.menu').on('click', function(){
    $(this).children('.romb').toggleClass('active'); 
    $('.modal-menu').toggleClass('active');
    $('body').toggleClass('active');
  
  });


  // select active button on modal item
  $('.count-dish').on('click', function(){
    $(this).toggleClass('active');
  });

  // card food modal
  $('.dish-item').on('click', function(){
      const current = $(this);

      const img    = current.children('.food-img').attr('src');
      const title  = current.children('.dish-title').find('h4').html();
      const title2 = current.children('.dish-title').find('.bold').html();
      const price  = current.children('.dish-list-wrap').find('.busket').html();

      $('.modal-img').css('background-image', 'url(' + img + ')');
      $('.modal-info h4').html(title);
      $('.modal-info h3').html(title2);
      $('.info-dish .price').html(price);

      $('.dish-overlay').css('visibility', 'visible');
      $('body').css({
        'overflow': 'hidden',
        'position': 'relative',
        'height': '100vh'
      });
  });

  $('.modal-close').on('click', function () {
    $('.dish-overlay').css('visibility', 'hidden');
    $('.order-overlay').css('visibility', 'hidden');
    $('body').css({
      'overflow': 'visible',
      'position': 'relative',
      'height': '100%'
    });
  });

 // modal add on busket
  $('.addBusket').on('click', function(){ 
      $('.dish-overlay').css('display', 'none');

      $('.addbusket-modal').css('visibility', 'visible');

      setTimeout(function() {
        $('.addbusket-modal').css('visibility', 'hidden'); 
        $('.inbusket').css('display', 'flex'); 
    }, 4000);
  });

  $('.inbusket').on('click', function() {
      $(this).css('display', 'none');
      $('.item-in-busket').css('display', 'block');
  });  
  
  
  $('.contine').on('click', function(){
    $('.item-in-busket').css('display', 'none');

    $('.order-overlay').css('visibility', 'visible');
  });

});



// close modal

// $(document).mouseup(function(e){
//   let div = $('.modal-menu, .menu , .romb');
//   if(!div.is(e.target)
//   && div.has(e.target).length === 0) {
//     div.removeClass('active'); 
//   }
// });

$(document).on('click', function(e){
  let modal = $('.modal-content');
  let btn = $('.dish-item, .contine');

  if(!btn.is(e.target) && btn.has(e.target).length === 0) {
    if(!modal.is(e.target) && modal.has(e.target).length === 0) {
      $('.dish-overlay').css('visibility', 'hidden');
      $('.order-overlay').css('visibility', 'hidden');
      }
    }   
});

$(window).resize(() => {

});





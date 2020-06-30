import 'normalize.css';
import './select-list';

$(document).ready((e) => {

    $('#main-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      items: 1
  });

});

$(window).resize(() => {

});





//form send
$('.form-order').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: '/wp-content/themes//send.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function (data) {
      
      $('.success').fadeIn('slow').css('display', 'flex');
      $('input[type="text"], textarea').val('');
      setTimeout(function () {
        $('.success').fadeOut('slow');
      }, 2000)
    }
  });
});    
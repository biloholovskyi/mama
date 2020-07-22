
<footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-sm-6 col-lg-3">
            <div class="logo-footer"> <img src="<?php echo get_template_directory_uri(); ?>/media/icon/logo.svg" alt="logo">
              <p>©Мама наготовила, Inc 2020</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-3">
            <ul class="list">
              <li>
                <div class="footer-title">Меню</div>
              </li>
              <li><a href="#">Салаты</a></li>
              <li><a href="#">Напитки</a></li>
              <li><a href="#">Супы</a></li>
              <li><a href="#">Второе</a></li>
              <li><a href="#">Семейный ужин</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-3">
            <div class="info">
              <div class="footer-title">Информация</div><a href="#">Оплата и доставка</a><a href="<?php the_field('politics'); ?>" target="_blank" download>Политика конфиденциальности </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-sm-6 col-lg-3">
            <div class="contact">
              <div class="footer-title">Контакты</div><a class="phone" href="tel:+7 (843) 276-66-76">+7 (843) 276-66-76 <img src="<?php echo get_template_directory_uri(); ?>/media/icon/footer-tel.svg" alt="icon"></a><a class="phone" href="<?php the_field('telegram'); ?>" target="_blank" >@mamanagotovila<img src="<?php echo get_template_directory_uri(); ?>/media/icon/footer-twit.svg" alt="icon"></a><a class="phone" href="<?php the_field('whatApp'); ?>" target="_blank" >@mamanagotovila<img src="<?php echo get_template_directory_uri(); ?>/media/icon/watsapp-footer.svg" alt="icon"></a>
            </div>
            <div class="mobile-block">©Мама наготовила, Inc 2020         </div>
          </div>
        </div>
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <?php wp_footer(); ?>
    
    <script>

filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("dish-item");  
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

    </script>
  </body>
</html>
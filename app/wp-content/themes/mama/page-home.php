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
              <div class="item">
                <div class="slider-info">
                  <h1>Паста <br>с лососем</h1>
                  <p class="desc">Курица, лапша яичная, бульон куриный, морковь, лук </p>
                  <div class="count-list-wrap">
                    <div class="select-num">1 порция</div>
                    <div class="price"> 
                      <div class="offer">199.00₽ </div>
                      <p>123.00₽   </p>
                    </div>
                    <button class="busket"></button>
                  </div>
                </div><img class="slider-img" src="../media/image/dish.jpg" alt="image">
              </div>
              <div class="item">
                <div class="slider-info">
                  <h1>Салат <br>Греческий</h1>
                  <p class="desc">лапша яичная,  морковь, лук </p>
                  <div class="count-list-wrap">
                    <div class="select-num">1 порция</div>
                    <div class="price"> 
                      <div class="offer">169.00₽</div>
                      <p>223.00₽  </p>
                    </div>
                    <button class="busket"></button>
                  </div>
                </div><img class="slider-img" src="../media/image/dish2.png" alt="image">
              </div>
              <div class="item">
                <div class="slider-info">
                  <h1>Солянка</h1>
                  <p class="desc">бульон куриный, морковь, лук </p>
                  <div class="count-list-wrap">
                    <div class="select-num">1 порция</div>
                    <div class="price"> 
                      <div class="offer">200.00₽</div>
                      <p>150.00₽  </p>
                    </div>
                    <button class="busket"></button>
                  </div>
                </div><img class="slider-img" src="../media/image/dish.jpg" alt="image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-dishes">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Популярные блюда</h2>
          </div>
        </div>
        <div class="row">     
          <div class="col-12">
            <div class="tabs" id="tabs">
              <div class="tab active" onclick="filterSelection('all')"> Все <span>категории</span></div>
              <div class="tab" onclick="filterSelection('salat')">Салаты</div>
              <div class="tab" onclick="filterSelection('soup')"> Супы</div>
              <div class="tab" onclick="filterSelection('other')">Второе</div>
              <div class="tab" onclick="filterSelection('drink')">Напитки  </div>
            </div>
          </div>
        </div>
        <div class="row dish-row">
          <div class="dish-item salat">
            <div class="dish-title"> 
              <h4>Салаты</h4>
              <h4 class="bold">Греческий </h4>
            </div><img class="food-img photo" src="../media/image/dish2.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
          <div class="dish-item soup">
            <div class="dish-title">
              <h4>Суп</h4>
              <h4 class="bold">Солянка</h4>
            </div><img class="food-img photo" src="../media/image/dish3.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
          <div class="dish-item other">
            <div class="dish-title">
              <h4>Второе</h4>
              <h4 class="bold">Паста с лососем</h4>
            </div><img class="food-img photo" src="../media/image/dish4.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽ </button>
            </div>
          </div>
          <div class="dish-item soup">
            <div class="dish-title">
              <h4>Суп</h4>
              <h4 class="bold">Солянка</h4>
            </div><img class="food-img photo" src="../media/image/dish3.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
          <div class="dish-item salat">
            <div class="dish-title">
              <h4>Салаты</h4>
              <h4 class="bold">Греческий</h4>
            </div><img class="food-img photo" src="../media/image/dish2.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽ </button>
            </div>
          </div>
          <div class="dish-item other">
            <div class="dish-title">
              <h4>Второе</h4>
              <h4 class="bold">Паста с лососем</h4>
            </div><img class="food-img photo" src="../media/image/dish4.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽ </button>
            </div>
          </div>
          <div class="dish-item salat">
            <div class="dish-title">
              <h4>Салаты</h4>
              <h4 class="bold">Греческий</h4>
            </div><img class="food-img photo" src="../media/image/dish2.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
          <div class="dish-item soup">
            <div class="dish-title">
              <h4>Суп</h4>
              <h4 class="bold">Солянка</h4>
            </div><img class="food-img photo" src="../media/image/dish3.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
          <div class="dish-item other">
            <div class="dish-title">
              <h4>Второе</h4>
              <h4 class="bold">Паста с лососем</h4>
            </div><img class="food-img photo" src="../media/image/dish4.png" alt="">
            <div class="dish-list-wrap">
              <div class="select-num">1 порция</div>
              <button class="busket">199.00₽</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-title">
              <h2>О нас</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta ut enim at pretium</p>
            </div>
          </div>
        </div>
        <div class="row about-row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-info">
              <div class="about-name">Галина Сергеевна Васнецова</div>
              <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta ut enim at pretium. Donec sagittis eleifend quam at tempor. Nullam mattis dignissim tortor et consequat. Suspendisse condimentum sed.</div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-photo"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/big-spot.png" alt=""><img src="<?php echo get_template_directory_uri(); ?>/media/image/about.png" alt="photo"></div>
          </div>
        </div>
        <div class="row about-row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-info">
              <div class="about-name">Илья Васильевич Полежайкин</div>
              <div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta ut enim at pretium. Donec sagittis eleifend quam at tempor. Nullam mattis dignissim tortor et consequat. Suspendisse condimentum sed.</div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-photo"><img src="<?php echo get_template_directory_uri(); ?>/media/icon/big-spot.png" alt=""><img src="<?php echo get_template_directory_uri(); ?>/media/image/about2.png" alt="photo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Как заказать? </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-lg-3 col-md-6 col-sm-6">
            <div class="order-text">
              <div class="order-item"><img src="../media/icon/order1.svg" alt="icon">
                <h3>Lorem ipsum dolor sit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div class="order-item">
                <div class="img-item">3</div>
                <h3>Lorem ipsum dolor sit</h3>
                <p>Donec ante ex, rutrum in tempor quis, fringilla sed ex</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 order-last"><img class="order-img" src="../media/image/2.png" alt="image"></div>
          <div class="col-6 col-lg-3 col-md-6 col-sm-6 order-lg-last">
            <div class="order-text">
              <div class="order-item">
                <div class="img-item">2</div>
                <h3>Lorem ipsum dolor sit</h3>
                <p>Phasellus aliquam, est a semper dignissim, justo augue dapibus orci, vel</p>
              </div>
              <div class="order-item">
                <div class="img-item">4</div>
                <h3>Suspendisse lacinia</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
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
            <h2>Как оплатить? </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">1</div>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Phasellus aliquam, est a semper dignissim, justo augue dapibus orci, vel</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">2</div>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Phasellus aliquam, est a semper dignissim, justo augue dapibus orci, vel</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <div class="pay-item">
              <div class="img-item">3</div>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Phasellus aliquam, est a semper dignissim, justo augue dapibus orci, vel  </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="payment-method"><img src="../media/image/pay.jpg" alt="logo"><img src="../media/image/pay2.jpg" alt="logo"><img src="../media/image/pay3.jpg" alt="logo"><img src="../media/image/pay4.png" alt="logo"><img src="../media/image/pay5.png" alt="logo"></div>
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
    <div class="inbusket"><img src="../media/icon/basket.svg" alt="icon">
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
              <p>150g</p>
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
      <div class="itemInBusket-body">
        <div class="item">
          <div class="img-container"><img src="../media/image/dish.jpg" alt="image"></div>
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
        <form class="form-order">
          <label for="name">ФИО</label>
          <input type="text" id="name" placeholder="Иванов Иван Иванович">
          <label for="tel">Номер телефона</label>
          <input type="text" id="tel" placeholder="8 800 555-35-35">
          <label for="addres">Куда доставить?</label>
          <input type="text" id="addres" placeholder="ул. Пушкина, дом 1">
          <label for="time">Когда доставить?</label>
          <input type="text" id="time" placeholder="Сегодня, 16:40">
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
     
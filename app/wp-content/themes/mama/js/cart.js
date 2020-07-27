class Cart {
  constructor() {
    this.smallCart = document.querySelector('.inbusket');
    this.busketBody = document.querySelector('.itemInBusket-body');
  }

  creatOrder (e) {
    $('.dish-overlay').css('visibility', 'hidden');

    $('.addbusket-modal').css('visibility', 'visible');

    setTimeout(function() {
      $('.addbusket-modal').css('visibility', 'hidden');
      $('.inbusket').css('display', 'flex');
    }, 4000);

    const date = new Date();
    const lifeTime = date.getTime() + (24 * 60 * 60 * 1000);

    let listOrder = []

    const newItemOrder = {
      id: e.target.getAttribute('data-product'),
      count: e.target.getAttribute('data-count')
    }

    listOrder.push(newItemOrder);

    const order = {
     lifeTime,
      listOrder
    }

    const orderJSON = JSON.stringify(order);

    if(localStorage.getItem('mama-order') !== null) {
      localStorage.removeItem('mama-order');
      localStorage.setItem('mama-order', orderJSON);
    } else {
      // save in store
      localStorage.setItem('mama-order', orderJSON);
    }
  }

  renderOrder () {
    if(localStorage.getItem('mama-order') !== null) {
      const orderJSON = localStorage.getItem('mama-order');
      const order = JSON.parse(orderJSON);
      const date = new Date();
      const currentTime = date.getTime();

      if(currentTime > order.lifeTime) {
        localStorage.removeItem('mama-order');
      } else {
        this.smallCart.style.display = 'flex';
        document.querySelector('.numberOfItem').innerHTML = order.listOrder.length.toString();
        let allPrice = 0;
        order.listOrder.forEach(singleOrder => {
          const id = singleOrder.id;
          const count = singleOrder.count;
          const cart = document.getElementById(id);
          const name = cart.querySelector('h4.bold').innerHTML;
          const gram = cart.getAttribute('data-gram');
          const img = cart.querySelector('.food-img').getAttribute('src');
          const price = parseInt(cart.querySelector('.busket').innerHTML);
          allPrice += price;

          const newItem = document.createElement('div');
          newItem.classList.add('item');

          const left = document.createElement('div');
          left.className = 'left';

          const right = document.createElement('div');
          right.className = 'right';

          const imgContainer = document.createElement('div');
          imgContainer.classList.add('img-container');

          const imgBlock = document.createElement('img');
          imgBlock.setAttribute('src', img);

          imgContainer.append(imgBlock);
          left.prepend(imgContainer);

          const titles = document.createElement('div');
          titles.classList.add('titles');
          const nameBlock = document.createElement('div');
          nameBlock.classList.add('names');
          nameBlock.innerHTML = name;
          const gramBlock = document.createElement('div');
          gramBlock.classList.add('grams');
          gramBlock.innerHTML = gram + ' грамм';
          titles.append(nameBlock);
          titles.append(gramBlock);
          left.append(titles);


          const countWrapp = document.createElement('div');
          countWrapp.className = 'count-wrap';

          const plus = document.createElement('div');
          plus.className = 'plus';
          const minus = document.createElement('div');
          minus.className = 'minus';
          const num = document.createElement('div');
          num.className = 'num';
          num.innerHTML = count;

          countWrapp.append(minus);
          countWrapp.append(num);
          countWrapp.append(plus);

          right.append(countWrapp);

          const dlt = document.createElement('div');
          dlt.className = 'dlt-item';

          right.append(dlt);
          newItem.append(left);
          newItem.append(right);
          this.busketBody.append(newItem);
        });
        document.querySelector('.item-in-busket .itemInBusket-btn .price-wrap .price').innerHTML = allPrice + '₽';
      }
    }
  }
}

export default Cart;

const wrapper = $('.instagram-post__wrapper');

// вывод данных в DOM
const renderItems = () => {
  // получаем массив из стора
  const items = JSON.parse(localStorage.getItem('insta-array'));

  // сортируем его по времени
  items.sort((a, b) => a.index - b.index);

  let counter = 0;

  // перебираем его и выводим на странице
  items.forEach(item => {
    counter++;
    if (counter < 10) {
      wrapper.append('<a href="' + item.permalink + '" class="item-instagram item-instagram--visible" target="_blank"><img src="' + item.url + '" alt="forestpark"></a>')
    } else {
      wrapper.append('<a href="' + item.permalink + '" class="item-instagram" target="_blank"><img src="' + item.url + '" alt="forestpark"></a>')
    }
  });
};

// API
const getInstPost = () => {
  console.log('api connection');
  // получаем список id последних постов
  $.ajax({
    url: 'https://graph.instagram.com/17841405715433625?fields=id,username,media&access_token=IGQVJXVTVfNzg1RkhQREh0MXh0UzFLMW9zZAXNIVS1Ha1pWcEZAvVWFfSHZAjMjBNaHVkaFJWcEJjcXdnQTJ5dUt6ejBaQ0VlRHVWSVk2NGRzRWkzOGI4ZAHJIbWJ0NE9vT1cxNVNBdEJ3',
    dataType: 'jsonp',
    type: 'GET',
    success: function(data){
      // массив id постов
      const idArray = data.media.data;
      const idArrayCount = idArray.length;
      let counter = 0;

      // массив постов
      const mediaStore = [];

      // получаем посты каждого id
      idArray.forEach((element, index) => {
        $.ajax({
          url: 'https://graph.instagram.com/' + element.id + '?fields=id,media_type,media_url,username,timestamp,permalink&access_token=IGQVJXVTVfNzg1RkhQREh0MXh0UzFLMW9zZAXNIVS1Ha1pWcEZAvVWFfSHZAjMjBNaHVkaFJWcEJjcXdnQTJ5dUt6ejBaQ0VlRHVWSVk2NGRzRWkzOGI4ZAHJIbWJ0NE9vT1cxNVNBdEJ3',
          dataType: 'jsonp',
          type: 'GET',
          success: function(data){
            // проверяем что пост не содержит видео
            counter++;
            if(data.media_type !== 'VIDEO') {
              // добавляем медиа в массив
              mediaStore.push({'index': index, 'permalink': data.permalink, 'url': data.media_url, 'time': data.timestamp});

              // Добавляем в стор кэшированный массив
              // создаем json
              const jsonMedia = JSON.stringify(mediaStore);

              // если стор существует удаляем его
              if(localStorage.getItem('insta-array') !== null) {
                localStorage.removeItem('insta-array');

                // добавляем в стор новый массив
                localStorage.setItem('insta-array', jsonMedia);
              } else {
                // добавляем в стор новый массив
                localStorage.setItem('insta-array', jsonMedia);
              }

              if(counter === idArrayCount) {
                // вызываем метод рендера
                setTimeout(() => {
                  renderItems();
                }, 5000);
              }
            }
          }
        });
      });
    }
  });
};

// подключение к локал стор и проверка последнего кэширования
const checkStore = () => {
  // проверяем та ли страница
  if(wrapper.length > 0) {
    const instaStatus = localStorage.getItem('insta-status');
    console.log(`Status = ${instaStatus}`);
    const today = new Date();
    const newStatus = today.getDate();

    // если нету создаем новый
    if(instaStatus === null) {
      // добавляем статус в стор
      localStorage.setItem('insta-status', newStatus.toString());

      // обращаемся к API
      getInstPost();
    } else {
      // если есть проверяем совпадает ли он с текущим
      if(instaStatus.toString() === newStatus.toString()) {
        // проверяем есть ли стор с массивом данных
        if(localStorage.getItem('insta-array') !== null) {
          // если есть вызываем рендер
          renderItems();
        } else {
          // если нет обращаемся к API
          getInstPost();
        }
      } else {
        // Удаляем и заменяем старый статус в сторе
        localStorage.removeItem('insta-status');
        localStorage.setItem('insta-status', newStatus.toString());

        // обращаемся к API
        getInstPost();
      }
    }
  }
};

// подгрузка больше постов
const morePost = () => {
  $('.item-instagram').addClass('item-instagram--visible');
  $(event.currentTarget).remove();
};

export {checkStore, morePost}
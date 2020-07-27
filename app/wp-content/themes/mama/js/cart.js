class Cart {
  constructor() {
    this.smallCart = document.querySelector('.inbusket');
    this.busketBody = document.querySelector('.itemInBusket-body');
  }

  creatOrder(e) {
    this.smallCart.style.display = 'none';
    $('.dish-overlay').css('visibility', 'hidden');

    $('.addbusket-modal').css('visibility', 'visible');

    setTimeout(() => {
      $('.addbusket-modal').css('visibility', 'hidden');
      this.smallCart.style.display = 'flex';
      this.renderOrder();
    }, 4000);

    const date = new Date();
    const lifeTime = date.getTime() + (24 * 60 * 60 * 1000);

    const storeOrder = localStorage.getItem('mama-order');

    let listOrder = []

    if (storeOrder) {
      const storeOrderParse = JSON.parse(storeOrder);
      listOrder = storeOrderParse.listOrder;
    }

    const newItemOrder = {
      id: e.target.getAttribute('data-product'),
      count: +e.target.getAttribute('data-count') > 0 ? e.target.getAttribute('data-count') : 1
    }

    listOrder.push(newItemOrder);

    const order = {
      lifeTime,
      listOrder
    }

    const orderJSON = JSON.stringify(order);

    if (localStorage.getItem('mama-order') !== null) {
      localStorage.removeItem('mama-order');
      localStorage.setItem('mama-order', orderJSON);
    } else {
      // save in store
      localStorage.setItem('mama-order', orderJSON);
    }
  }

  renderOrder() {
    this.busketBody.querySelectorAll('.item').forEach(item => {
      item.remove()
    });

    if (localStorage.getItem('mama-order') !== null) {
      const orderJSON = localStorage.getItem('mama-order');
      const order = JSON.parse(orderJSON);
      const date = new Date();
      const currentTime = date.getTime();
      if (currentTime > order.lifeTime || order.listOrder.length < 1) {
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
          allPrice += price * count;

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
          dlt.setAttribute('data-id', id);

          right.append(dlt);
          newItem.append(left);
          newItem.append(right);
          this.busketBody.append(newItem);
        });
        document.querySelector('.item-in-busket .itemInBusket-btn .price-wrap .price').innerHTML = allPrice + '₽';
      }
    }
  }

  removeOrder(e) {
    const id = e.target.getAttribute('data-id');
    let store = localStorage.getItem('mama-order');
    store = JSON.parse(store);
    const index = store.listOrder.findIndex(item => item.id.toString() === id.toString());
    const newList = [...store.listOrder.slice(0, index), ...store.listOrder.slice(index + 1)];

    const date = new Date();
    const lifeTime = date.getTime() + (24 * 60 * 60 * 1000);

    let newStore = {
      lifeTime,
      listOrder: newList
    }

    newStore = JSON.stringify(newStore);
    localStorage.removeItem('mama-order');
    localStorage.setItem('mama-order', newStore);
    e.target.parentElement.parentElement.remove();
    document.querySelector('.item-in-busket').style.display = 'flex';
    this.smallCart.style.display = 'none';
  }

  onCount(e) {
    const type = e.target.classList.contains('plus');

    const id = e.target.parentElement.nextElementSibling.getAttribute('data-id');

    let store = localStorage.getItem('mama-order');
    store = JSON.parse(store);
    const index = store.listOrder.findIndex(item => item.id.toString() === id.toString());
    let count = type ? +store.listOrder[index].count + 1 : +store.listOrder[index].count - 1;
    if(count < 1) {
      count = 1;
    }
    const newOrder = {
      ...store.listOrder[index],
      count
    }
    const newList = [...store.listOrder.slice(0, index), newOrder, ...store.listOrder.slice(index + 1)];
    const newStore = {
      lifeTime: store.lifeTime,
      listOrder: newList
    }
    localStorage.removeItem('mama-order');
    localStorage.setItem('mama-order', JSON.stringify(newStore));
    this.renderOrder();
  }
}

export default Cart;
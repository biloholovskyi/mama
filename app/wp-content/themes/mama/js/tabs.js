const switchTabs = (e) => {
  if(!$(e.currentTarget).hasClass('active')){
    $(e.currentTarget).siblings().removeClass('active');
    $(e.currentTarget).addClass('active');
  }
  filter(e);
}

const filter = (e) => {
  const current = e.currentTarget;
  const id = current.id.split('tab-')[1];
  const all = document.querySelectorAll('.dish-item');
  if(id === 'all') {
    all.forEach(item => {
      item.classList.add('show');
    })
  } else {
    const cat = `cat-${id}`;
    all.forEach((item) => {
      if(item.classList.contains(cat)) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    })
  }
}

export {switchTabs}
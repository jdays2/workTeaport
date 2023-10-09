const activeClass = 'active';

const burgerMenu = document.querySelector('.burger-menu');

if(burgerMenu) {
  const openBtn = document.querySelector('.header__burger-btn');
  const closeBtn = document.querySelector('.burger-menu__close-btn')

  openBtn.addEventListener('click', ()=>{
    burgerMenu.classList.add(activeClass)
  })

  closeBtn.addEventListener('click', ()=>{
    burgerMenu.classList.remove(activeClass)
  })
}
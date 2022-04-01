let button = document.querySelector('.header__btn-burger')
let menuBurger = document.querySelector('.menu-burger')
let menuClose = document.querySelector('.header__btn-close')
let page = document.querySelector('.page')
let blur = document.querySelector(".blur")


button.addEventListener('click', function () {
  menuBurger.classList.remove('burger-hide')
  menuBurger.classList.add('burger-in-place')
  page.classList.add('overflow-hidden')
  blur.classList.remove('display-none')
  blur.classList.add('overflow-hidden')
});

menuClose.addEventListener('click', function () {
  menuBurger.classList.remove('burger-in-place')
  menuBurger.classList.add('burger-hide')
  page.classList.remove('overflow-hidden')
  blur.classList.add('display-none')
  blur.classList.remove('overflow-hidden')
});

blur.addEventListener('click', function () {
  menuBurger.classList.remove('burger-in-place')
  menuBurger.classList.add('burger-hide')
  page.classList.remove('overflow-hidden')
  blur.classList.add('display-none')
  blur.classList.remove('overflow-hidden')
});

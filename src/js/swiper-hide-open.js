let button = document.querySelector('.read-more-slider')
let menuOpen = document.querySelector('.swiper')
let menuClose = document.querySelector('.hide-slider')


button.addEventListener('click', function () {
  menuOpen.classList.add('swiper-more')
  button.classList.add('hide-button')
  menuClose.classList.remove('hide-button')
});

menuClose.addEventListener('click', function () {
  menuClose.classList.add('hide-button')
  menuOpen.classList.remove('swiper-more')
  button.classList.remove('hide-button')
});



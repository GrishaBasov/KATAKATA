let button = document.querySelector(".read-more-slider--2")
let menuOpen = document.querySelector(".swiper-2")
let menuClose = document.querySelector(".hide-slider--2")


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

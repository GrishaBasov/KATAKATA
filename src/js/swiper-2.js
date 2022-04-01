const swiper = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

let mql = window.matchMedia('(min-width: 768px)');
window.addEventListener('resize', () => {
  if (mql.matches) {
    swiper.destroy();
  }
})


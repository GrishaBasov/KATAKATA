let button = document.querySelector('.read-more')
let menuOpen = document.querySelector('.info-2')
let menuClose = document.querySelector('.hide')

button.addEventListener('click', function () {
  menuOpen.classList.remove('hide-p')
  button.classList.add('hide-button')
  menuClose.classList.remove('hide-button')
});

menuClose.addEventListener('click', function () {
  menuClose.classList.add('hide-button')
  menuOpen.classList.add('hide-p')
  button.classList.remove('hide-button')
});

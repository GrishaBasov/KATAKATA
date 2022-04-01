let chat = document.querySelector('.header__btn-chat')
let menuCall = document.querySelector('.modal-1')
let Close = document.querySelector('.close')
let page = document.querySelector('.page')
let blur = document.querySelector(".blur")
let button2 = document.querySelector(".footer-menu__btn-chat")
let blur2 = document.querySelector(".blur-2")

chat.addEventListener('click', function () {
  menuCall.classList.remove("modal-hide")
  menuCall.classList.add('modal-in-place')
  page.classList.add('overflow-hidden')
  blur.classList.remove('display-none')
  blur.classList.add('overflow-hidden')

});

Close.addEventListener('click', function () {
  menuCall.classList.remove('modal-in-place')
  menuCall.classList.add('modal-hide')
  page.classList.remove('overflow-hidden')
  blur.classList.add('display-none')
  blur.classList.remove('overflow-hidden')
  blur2.classList.add('display-none')
});

button2.addEventListener('click', function () {
  menuCall.classList.remove("modal-hide")
  menuCall.classList.add('modal-in-place')
  page.classList.add('overflow-hidden')
  blur.classList.remove('display-none')
  blur.classList.add('overflow-hidden')
  blur2.classList.remove('display-none')
});

blur.addEventListener('click', function () {
  menuCall.classList.remove('modal-in-place')
  menuCall.classList.add('modal-hide')
  page.classList.remove('overflow-hidden')
  blur.classList.add('display-none')
  blur.classList.remove('overflow-hidden')
});

blur2.addEventListener('click', function () {
  menuCall.classList.remove('modal-in-place')
  menuCall.classList.add('modal-hide')
  blur2.classList.add('display-none')
});

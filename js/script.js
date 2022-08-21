// Модальное окно

let modal = document.querySelector('.modal');
let modalButton = document.querySelector('.contacts-link');
let modalClose = modal.querySelector('.modal-close');
const login = modal.querySelector('[name=name]');
const mail = modal.querySelector('[name=mail]');
const text = modal.querySelector('[name=user-text]');
const form = modal.querySelector('form');
const storage = localStorage.getItem('login');
const isStorageSupport = true;



modalButton.addEventListener('click', function(){
  modal.classList.add('modal-show');
  login.focus(); // фокус на поле ввода
  if (storage) {
    login.value = storage; //запоминаем имя
    mail.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener('click', function(evt){
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error')
})

document.addEventListener('keydown', function (evt){
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      modal.classList.remove('modal-show');
    }
  }
})

// проверяем форму

form.addEventListener('submit', function(evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;//для анимация, что бы срабатывала несколько раз
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', login.value);
    }

  }
  // evt.preventDefault();
});


//Слайдер
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slide');
  let paginations = document.querySelectorAll('.pagination-button');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slide-current');
  }
  for (i = 0; i < paginations.length; i++) {
    paginations[i].className = paginations[i].className.replace(" current", "");
  }
  slides[slideIndex-1].classList.add('slide-current');
  paginations[slideIndex-1].className += " current";
}



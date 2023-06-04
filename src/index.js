import './scss/app.scss';

//Custom select
const selectWrapper = document.querySelector('.form__select-wrapper');
const optionsList = document.querySelector('.custom-select');
const selectSpan = document.querySelector('#select-value');
const selectForSubmit = document.querySelector('#select');

selectWrapper.addEventListener('click', () => {
  selectWrapper.classList.toggle('form__select-wrapper_active');
  optionsList.classList.toggle('custom-select_active');
})

optionsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('custom-select__option')) {
    selectSpan.innerText = event.target.innerText;
    selectForSubmit.value = event.target.dataset.value;
  }
})

document.addEventListener('click', (event) => {
  if (
    selectWrapper.classList.contains('form__select-wrapper_active') && 
    !event.target.parentElement.classList.contains('form__select-wrapper') && 
    !event.target.classList.contains('form__select-wrapper')) {
      selectWrapper.classList.remove('form__select-wrapper_active');
      optionsList.classList.remove('custom-select_active');
    }
})

//Display value of input range
const rangeValue = document.querySelector('.form__input_type_range');
const rangeSpan = document.querySelector('#range-value');

rangeValue.addEventListener('change', () => {
  rangeSpan.innerText = `${rangeValue.value}%`;
})

//Display name of selected file
const fileInput = document.querySelector('.form__input_type_file');
const fileInputLabel = document.querySelector('.form__label_type_file span');

fileInput.addEventListener('change', () => {
  if (fileInput.value === '') {
    fileInputLabel.innerText = 'Прикрепить файл';
  } else {
    fileInputLabel.innerText = 'Файл добавлен';
  }
  });

//Burger menu
const page = document.querySelector('.page');
const burgerMenuBtn = document.querySelector('.burger-menu__btn');
const burgerMenu = document.querySelector('.burger-menu');
const menuContent = document.querySelector('.menu');

function openBurger() {
  burgerMenu.classList.add('burger-menu_opened');
  burgerMenuBtn.classList.add('burger-menu__btn_opened');
  menuContent.classList.add('menu_opened');
  page.classList.add('no-scroll');
}

function closeBurger() {
  burgerMenu.classList.remove('burger-menu_opened');
  burgerMenuBtn.classList.remove('burger-menu__btn_opened');
  menuContent.classList.remove('menu_opened');
  page.classList.remove('no-scroll');
}

burgerMenuBtn.addEventListener('click', () => {
  if (burgerMenu.classList.contains('burger-menu_opened')) {
    closeBurger();
  } else {
    openBurger();
  }
})

document.addEventListener('click', (event) => {
  if (event.target !== burgerMenuBtn && burgerMenu.classList.contains('burger-menu_opened')) {
    closeBurger();
  }
})
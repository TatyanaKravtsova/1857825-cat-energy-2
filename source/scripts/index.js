/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.main-header__menu-button');
  const nav = document.querySelector('.main-header__nav');
  const header = document.querySelector('.main-header');
  const logo = document.querySelector('.main-header__logo');
  const logoImg = document.querySelector('.logo__img');
  nav.classList.remove('no-js');
  menuButton.classList.remove('no-js');
  header.classList.remove('no-js');
  logo.classList.remove('no-js');
  logoImg.classList.remove('no-js');
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('main-header__nav--opened');
    menuButton.classList.toggle('main-header__menu-button--opened');
  });
});

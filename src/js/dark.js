const switcher = document.querySelector('#theme');
const menu = document.querySelector('.icon-menu');
const logo = document.querySelector('.icon-logo');
const shoppingList = document.querySelector('.nav-shopping');
const shoppingIcon = document.querySelector('.shopping-icon');
const body = document.body;
const header = document.querySelector('header');
const btnOpen = document.querySelector('.icon-menu-close');
const closeIcon = document.querySelector('.icon-menu');
const key = 'dark-theme';
switcher.addEventListener('click', changeTheme);
function changeTheme() {
  if (switcher.checked) {
    shoppingIcon.classList.add('dark-icons');
    shoppingList.classList.add('dark-icons');
    logo.classList.add('dark-icons');
    menu.classList.add('dark-menu');
    body.classList.add('dark-mode-body');
    header.classList.add('dark-mode');
    btnOpen.classList.add('dark-icon-menu');
    closeIcon.classList.add('dark-icon-menu');
    // localStorage.setItem(key, JSON.stringify(switcher.checked))
  } else {
    shoppingIcon.classList.remove('dark-icons');
    shoppingList.classList.remove('dark-icons');
    logo.classList.remove('dark-icons');
    menu.classList.remove('dark-menu');
    body.classList.remove('dark-mode-body');
    header.classList.remove('dark-mode');
    btnOpen.classList.remove('dark-icon-menu');
    closeIcon.classList.remove('dark-icon-menu');
  }
}
//===============================//

const menuCont = document.querySelector('.mobile-menu-container');
const openBtn = document.querySelector('.btn-menu');
const fondsCont = document.querySelector('.supporters');

openBtn.addEventListener('click', onBtnOpenClick);
function onBtnOpenClick() {
  if (menuCont.classList.contains('none')) {
    menuCont.classList.remove('none');
    fondsCont.classList.add('visually-hidden');
    document.body.classList.add('mobile-menu-open');
    btnOpen.classList.remove('visually-hidden');
    closeIcon.classList.add('visually-hidden');
  } else {
    menuCont.classList.add('none');
    fondsCont.classList.remove('visually-hidden');
    document.body.classList.remove('mobile-menu-open');
    btnOpen.classList.add('visually-hidden');
    closeIcon.classList.remove('visually-hidden');
  }
}
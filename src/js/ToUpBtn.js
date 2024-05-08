import '../img/sprite.svg';

export function scrollToUp() {
  const btn = document.querySelector('.btn-ring');
  const arrowToUpIcon = document.querySelector('.arrow-to-up use');

  arrowToUpIcon.setAttribute(
    'xlink:href',
    '../img/sprite.svg#icon-material-symbols_arrow-back-ios-rounded'
  );

  function showButton() {
    btn.classList.remove('btn-ring-hidden');
  }

  function hideButton() {
    btn.classList.add('btn-ring-hidden');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250 || document.documentElement.scrollTop > 250) {
      showButton();
    } else {
      hideButton();
    }
  });

  btn.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}

scrollToUp();

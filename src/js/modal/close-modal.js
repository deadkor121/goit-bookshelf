import { refs } from './refs-modal';

export function onCloseBtnClick() {
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
  document.body.style.overflow = '';
}
export function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('keydown', onEscClick);
    document.body.style.overflow = '';
  }
}
export function onEscClick(e) {
  if (e.key !== 'Escape') {
    return;
  }
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
  document.body.style.overflow = '';
}

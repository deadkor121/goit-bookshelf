import { addDarkThemeOnModal } from './dark-modal';
import { refs } from './refs-modal';
import { onCloseBtnClick, onBackdropClick, onEscClick } from './close-modal';
import { modalBookTemplate } from './render-modal';
import { onModalCreate } from './api-modal';
import { loadFromLS, saveToLS } from './ls-modal';

refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

refs.modalBackdrop.addEventListener('click', onBackdropClick);

refs.modalAddBtn.addEventListener('click', onModalAddBtnClick);

function onModalAddBtnClick() {
  onModalCreate(cardID)
    .then(data => {
      const existingData = loadFromLS(localStorageKey);
      const isAlreadyAdded = existingData.some(item => item._id === data._id);
      if (!isAlreadyAdded) {
        existingData.push(data);
        saveToLS(localStorageKey, existingData);
      }
      updateModalButtonsVisibility();
    })
    .catch(error => console.log(error));
}

refs.modalRemoveBtn.addEventListener('click', onModalRemoveBtnClick);

const localStorageKey = 'booksData';

function onModalRemoveBtnClick() {
  const allData = loadFromLS(localStorageKey);
  const updatedData = allData.filter(item => item._id !== cardID);
  saveToLS(localStorageKey, updatedData);
  updateModalButtonsVisibility();
}

refs.heroList.addEventListener('click', onItemClick);

let cardID = null;

async function onItemClick(e) {
  checkBtnStatus();
  window.addEventListener('keydown', onEscClick);
  const name = e.target.nodeName;
  if (name !== 'IMG' && name !== 'H3' && name !== 'P' && name !== 'LI') {
    return;
  }
  refs.modalBackdrop.classList.add('is-open');
  const liElement = e.target.closest('li');
  cardID = liElement.dataset.cardid;

  await onModalCreate(cardID)
    .then(data => {
      modalBookTemplate(data);
      updateModalButtonsVisibility();
    })
    .catch(error => console.log(error));
  document.body.style.overflow = 'hidden';
  addDarkThemeOnModal();
}

function checkBtnStatus() {
  const dataFromLS = loadFromLS(localStorageKey);

  dataFromLS.some(({ _id }) => {
    if (_id === cardID) {
      refs.modalAddBtn.classList.remove('visually-hidden');
      refs.modalRemoveBtn.classList.add('visually-hidden');
      refs.modalRemoveText.classList.add('visually-hidden');
    } else {
      refs.modalAddBtn.classList.add('visually-hidden');
      refs.modalRemoveBtn.classList.remove('visually-hidden');
      refs.modalRemoveText.classList.remove('visually-hidden');
    }
  });
}

function updateModalButtonsVisibility() {
  const dataFromLS = loadFromLS(localStorageKey);
  const isBookAdded = dataFromLS.some(({ _id }) => _id === cardID);

  if (isBookAdded) {
    refs.modalAddBtn.classList.add('visually-hidden');
    refs.modalRemoveBtn.classList.remove('visually-hidden');
    refs.modalRemoveText.classList.remove('visually-hidden');
  } else {
    refs.modalAddBtn.classList.remove('visually-hidden');
    refs.modalRemoveBtn.classList.add('visually-hidden');
    refs.modalRemoveText.classList.add('visually-hidden');
  }
}

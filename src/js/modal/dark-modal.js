export function addDarkThemeOnModal() {
  const switcher = document.querySelector('#theme');
  const modal = document.querySelector('.add-modal');
  const bookTitle = modal.querySelector('.book-title');
  const bookAuthor = modal.querySelector('.book-author');
  const bookText = modal.querySelector('.book-text');
  const amazonIcon = modal.querySelector('.amazon-icon');
  const appleBooksIcon = modal.querySelector('.apple-books-icon');
  const modalAddBtn = document.querySelector('.js-add-btn');
  const modalRemoveBtn = document.querySelector('.js-remove-btn');
  const modalRemoveText = document.querySelector('.modal-remove-text');
  const modalCloseIcon = document.querySelector('.modal-close-icon');
  if (switcher.checked) {
    bookTitle.classList.add('dark-book-title');
    bookAuthor.classList.add('dark-book-author');
    bookText.classList.add('dark-book-text');
    amazonIcon.classList.add('dark-amazon-icon');
    appleBooksIcon.classList.add('dark-apple-books-icon');
    modal.classList.add('dark-modal');
    modalAddBtn.classList.add('dark-modal-btn');
    modalRemoveBtn.classList.add('dark-modal-btn');
    modalRemoveText.classList.add('dark-modal-remove-text');
    modalCloseIcon.classList.add('dark-modal-close-icon');
  } else {
    bookTitle.classList.remove('dark-book-title');
    bookAuthor.classList.remove('dark-book-author');
    bookText.classList.remove('dark-book-text');
    amazonIcon.classList.remove('dark-amazon-icon');
    appleBooksIcon.classList.remove('dark-apple-books-icon');
    modal.classList.remove('dark-modal');
    modalAddBtn.classList.remove('dark-modal-btn');
    modalRemoveBtn.classList.remove('dark-modal-btn');
    modalRemoveText.classList.remove('dark-modal-remove-text');
    modalCloseIcon.classList.remove('dark-modal-close-icon');
  }
}

// import { pagination } from './pagination';
import amazonIcon from '../../img/png/amazon.png';
import appleB from '../../img/png/applebooks.png';
import dump from '../../img/png/dump.png';
import booksImg from '../../img/png/IMG_96061.png';
const switcherSl = document.getElementById('theme');

function hideSidebar() {
  const tagTitle = document.querySelector('.hero-title');
  const sidebar = document.querySelector('.sidebar');
  if (tagTitle.textContent === 'Shopping List') {
    sidebar.style.display = 'none';
  }
}

hideSidebar();

const slList = document.querySelector('.shopping-list');
const dataFromLs = localStorage.getItem('booksData');
const parsedData = dataParse();

function dataParse() {
  let parsedData;
  try {
    parsedData = JSON.parse(dataFromLs);
    return parsedData;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

function templateSl(books) {
  const markupSl = books
    .map(
      book =>
        `<li class="sl-item" data-bookId="${book._id}">
			<button class="sl-remove">
				<img src="${dump}" class="sl-remove-img">
			</button>
			<img class="sl-img" src="${book.book_image}" alt="${book.description}">
			<div class="sl-info">
				<h3 class="sl-book-title">${book.title}</h3>
				<p class="sl-book-category">${book.list_name}</p>
				<p class="sl-book-description">${book.description}</p>
				<div class="sl-sell-box">
					<p class="sl-book-author">${book.author}</p>
					<div class="sl-book-links">
						<a class="sl-book-link-amazon" href="${book.buy_links[0].url}">
							<img class="sl-book-link-amazon-img" src="${amazonIcon}">
						</a>
						<a class="sl-book-link-ab" href="${book.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="${appleB}">
						</a>
					</div>
				</div>
			</div>
		</li>`
    )
    .join('\n\n');

  slList.innerHTML = markupSl;
}

function templateEmptySl() {
  const markupEmptySl = `<li class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="${booksImg}" alt="This page is empty, add some books and proceed to order">
	</li>`;

  slList.innerHTML = markupEmptySl;
}

function initializeRender(dataFromLs) {
  try {
    if (dataFromLs !== null && dataFromLs.length !== 0) {
      if (Array.isArray(parsedData)) {
        templateSl(parsedData);
        changeThemeSl();
      } else {
        console.error(error);
      }
    } else {
      templateEmptySl();
    }
  } catch (error) {
    console.error('Помилка при розпарсЮванні даних:', error);
  }
}

initializeRender(parsedData);

slList.addEventListener('click', event => {
  const removeBtn = event.target.closest('.sl-remove');
  if (removeBtn) {
    const listItem = removeBtn.closest('.sl-item');
    listItem.remove();
    const bookId = listItem.dataset.bookid;
    updateLs(parsedData => removeBookFromLs(parsedData, bookId));
    if (slList.getElementsByTagName('li').length === 0) {
      templateEmptySl();
    }
  }
});

function removeBookFromLs(books, bookId) {
  const filteredBook = books.filter(book => book._id !== bookId);
  return filteredBook;
}

function updateLs(updateFunction) {
  const storedData = JSON.parse(localStorage.getItem('booksData')) || [];
  const updatedData = updateFunction(storedData);

  localStorage.setItem('booksData', JSON.stringify(updatedData));
}

// if (slList.getElementsByTagName('li').length > 3) {
//   pagination();
// } else if (slList.getElementsByTagName('li').length <= 3) {
//   const arrowsLAndR = document.querySelectorAll('.pagination-button');
//   arrowsLAndR.forEach(arrow => {
//     arrow.style.display = 'none';
//   });
// } else {
//   templateEmptySl();
// }

switcherSl.addEventListener('click', changeThemeSl);

function changeThemeSl() {
  const slTitleDark = document.querySelector('.shopping-list-title');
  const bookTitleDark = document.querySelectorAll('.sl-book-title');
  const bookDescriptionDark = document.querySelectorAll('.sl-book-description');
  const amazonDark = document.querySelectorAll('.sl-book-link-amazon-img');
  const apDark = document.querySelectorAll('.sl-book-link-ab-img');
  if (switcherSl.checked) {
    slTitleDark.classList.add('shopping-list-title-dark');
    bookTitleDark.forEach(dtitle => {
      dtitle.classList.add('sl-book-title-dark');
    });
    bookDescriptionDark.forEach(desc => {
      desc.classList.add('sl-book-description-dark');
    });
    amazonDark.forEach(icon => {
      icon.classList.add('sl-book-link-amazon-img-dark');
    });
    apDark.forEach(icon => {
      icon.classList.add('sl-book-link-ab-img-dark');
    });
  } else {
    slTitleDark.classList.remove('shopping-list-title-dark');
    bookTitleDark.forEach(dtitle => {
      dtitle.classList.remove('sl-book-title-dark');
    });
    bookDescriptionDark.forEach(desc => {
      desc.classList.remove('sl-book-description-dark');
    });
    amazonDark.forEach(icon => {
      icon.classList.remove('sl-book-link-amazon-img-dark');
    });
    apDark.forEach(icon => {
      icon.classList.remove('sl-book-link-ab-img-dark');
    });
  }
}

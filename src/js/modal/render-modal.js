import { refs } from './refs-modal';
import amazonIcon from '../../img/png/amazon.png';
import appleB from '../../img/png/applebooks.png';
export function modalBookTemplate({ book_image, title, author, description, buy_links }) {
  const [amazon, apple_book] = buy_links;
  const amazonUrl = amazon.url;
  const appleUrl = apple_book.url;
  const markup = ` <img src="${book_image}" alt="${title}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${title}</h3>
          <p class="book-author">${author}</p>
          <p class="book-text">
            ${description}
          </p>
          <div class="modal-icons">
            <a target="_blank" href="${amazonUrl}">
              <img
                src="${amazonIcon}"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a target="_blank" href="${appleUrl}">
              <img
                src="${appleB}"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;
  refs.modalCard.innerHTML = markup;
}

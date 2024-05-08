const categoriesList = document.getElementById('categories-list');
import './sidebar';
let previousItem = null;
const switcherForDarkSidebar = document.getElementById('theme');

function handleItemClick(event) {
  const clickedItem = event.target;
  if (clickedItem.classList.contains('category-item')) {
    const isDarkMode = switcherForDarkSidebar.checked;
    if (previousItem && previousItem !== clickedItem) {
      resetStyleCategories(previousItem, isDarkMode);
      previousItem.textContent = previousItem.getAttribute('data-text');
    }
    clickedItem.textContent = clickedItem.textContent.toUpperCase();
    addStyleCategories(clickedItem, isDarkMode);
    previousItem = clickedItem;
    allCategory.setAttribute('id', '');
  }
}

categoriesList.addEventListener('click', handleItemClick);

export function renderSb(categories) {
  categories.forEach(category => {
    categoriesList.insertAdjacentHTML('beforeend', `<li class="category-item">${category}</li>`);
  });

  const allCategoryItems = document.querySelectorAll('.category-item');

  allCategoryItems.forEach(item => {
    item.setAttribute('data-text', item.textContent);
  });

  switcherForDarkSidebar.addEventListener('click', () => {
    const isDarkMode = switcherForDarkSidebar.checked;

    allCategoryItems.forEach(item => {
      // resetStyle(item, !isDarkMode);
      addStyle(item, isDarkMode);
    });

    if (previousItem) {
      handleItemClick({ target: previousItem });
    }
  });
}
const allCategory = document.getElementById('category-el');
function addStyle(item, isDarkMode) {
  if (isDarkMode) {
    item.classList.add('ligthGrey');
    allCategory.classList.add('yellowBold');
    item.classList.remove('darkGrey');
    allCategory.classList.remove('blueBold');
  } else {
    item.classList.remove('ligthGrey');
    allCategory.classList.remove('yellowBold');
    item.classList.add('darkGrey');
    allCategory.classList.add('blueBold');
  }
}

function addStyleCategories(item, isDarkMode) {
  if (isDarkMode) {
    item.classList.remove('ligthGrey', 'blueBold');
    item.classList.add('yellowBold');
  } else {
    item.classList.remove('darkGrey', 'yellowBold');
    item.classList.add('blueBold');
  }
}

function resetStyleCategories(item, isDarkMode) {
  if (isDarkMode) {
    item.classList.remove('yellowBold');
    item.classList.add('ligthGrey');
  } else {
    item.classList.remove('blueBold');
    item.classList.add('darkGrey');
  }
}

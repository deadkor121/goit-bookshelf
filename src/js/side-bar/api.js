import axios from 'axios';

export async function getCategories() {
	try {
		axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
		const response = await axios.get('/category-list');
		return response.data.map(item => item.list_name).toSorted();
	} catch (error) {
		return console.error(error);
	};
};
// Отримуємо масив категорій. Якщо помилка то виводим її у консоль
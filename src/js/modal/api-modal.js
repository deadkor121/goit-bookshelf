import axios from 'axios';

export async function onModalCreate(id) {
  try {
    const res = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

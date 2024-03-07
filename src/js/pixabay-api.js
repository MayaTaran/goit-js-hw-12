
import axios from 'axios'
// const KEY = '42649910-6a5238a097d86367028b0f975';
// const PARAM = "image_type=photo&orientation=horizontal&safesearch=true";


export async function fetchData(inputWord) {
  const formattedInput = inputWord.split(' ').join('+');
  
  const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
      q: formattedInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page:'pageQuantity',
      key: '42649910-6a5238a097d86367028b0f975'
    }
  });

  try {
    const response = await instance.get();

    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }

    return response.data.hits;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
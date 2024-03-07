const KEY = '42649910-6a5238a097d86367028b0f975';
const BASE_URL = "https://pixabay.com/api/";
const PARAM = "image_type=photo&orientation=horizontal&safesearch=true";
export function fetchData(inputWord) {
  const formattedInput = inputWord.split(' ').join('+');
  const LINK = `${BASE_URL}?key=${KEY}&q=${formattedInput}&${PARAM}`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      throw new Error(`Failed to fetch data: ${error.message}`);
    });
}
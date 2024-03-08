// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { createCard } from './js/render-functions.js'
import { fetchData } from './js/pixabay-api.js';

const getForm = document.querySelector("form");
let inputWord;
const getList = document.querySelector("ul#image-list");
const loader = document.querySelector('.loader');
window.getButtonMore = document.querySelector('.button-more');
// console.log(getButtonMore);
const pageQuantity = 15;
let currentPage = 1;

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  inputWord = event.currentTarget.querySelector('input').value;


  if (inputWord.trim() !== '') {
    loader.style.display = 'block';
   
    fetchData(inputWord, pageQuantity,1)
      .then(images => {
                if (images.length === 0) {
          iziToast.show({
            title: '!',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: "#EF4040",
            messageColor: "#fff",
            titleColor: "#fff",
            position: 'topRight'
          });
          getList.innerHTML = '';
          getForm.reset();
  
        } else {
          getList.innerHTML = images.map(createCard).join('');
                     currentPage = 1;
   
          const lightbox = new SimpleLightbox('.card a', {
            captionsData: "title"
          });
             lightbox.refresh();
          getForm.reset();
           getButtonMore.classList.remove('is-hidden');
        }

      })
      .catch(error => {
        iziToast.show({
          title: '!',
          message: `Error: ${error.message}`,
          color: "#EF4040",
          messageColor: "#fff",
          titleColor: "#fff",
          position: 'topRight'
        });
      })
      .finally(() => {
        loader.style.display = 'none';
      });
   
  }

   getButtonMore.classList.add('is-hidden');
});
length
getButtonMore.addEventListener('click', async (event) => {
  // event.preventDefault();
  currentPage++;
  try {
    const additionalImages = await fetchData(inputWord, pageQuantity, currentPage);
    getList.innerHTML += additionalImages.map(createCard).join('');

    const lightbox = new SimpleLightbox('.card a', {
      captionsData: "title"
    });
    
    lightbox.refresh();
     updateButtonVisibility(additionalImages.length);
  } catch (error) {
    console.error(`Error loading more images: ${error.message}`);
  }
});
function updateButtonVisibility(imagesCount) {
    const totalImages = currentPage * pageQuantity;
    if (imagesCount < pageQuantity || totalImages >= totalHits) {
        iziToast.show({
            title: '!',
            message: "We're sorry, but you've reached the end of search results.",
            color: "#EF4040",
            messageColor: "#fff",
            titleColor: "#fff",
            position: 'topRight'
        });
        getButtonMore.classList.add('is-hidden');
    } else {
        getButtonMore.classList.remove('is-hidden');
    }
}
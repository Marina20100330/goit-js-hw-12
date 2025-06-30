import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import { showLoadMoreLoader, hideLoadMoreLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search query.' });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({ message: 'No images found. Try again!' });
      return;
    }

    createGallery(data.hits);
    if (totalHits > 15) showLoadMoreButton();
  } catch (error) {
    iziToast.error({ message: 'Error fetching data' });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoadMoreLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    smoothScroll();

    const maxPages = Math.ceil(totalHits / 15);
    if (page >= maxPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ message: 'Error loading more images' });
  } finally {
    hideLoadMoreLoader();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

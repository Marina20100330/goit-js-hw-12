import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img class="img" src="${webformatURL}" alt="${tags}" />
      </a>
    <div class="info">
  <div class="info-item">
    <p class="label">Likes:</p>
    <p class="value">${likes}</p>
  </div>
  <div class="info-item">
    <p class="label">Views:</p>
    <p class="value">${views}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments:</p>
    <p class="value">${comments}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads:</p>
    <p class="value">${downloads}</p>
  </div>
</div>
</li>
  `
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

const loadMoreLoader = document.querySelector('.load-more-loader');

export function showLoadMoreLoader() {
  loadMoreLoader.classList.remove('is-hidden');
}

export function hideLoadMoreLoader() {
  loadMoreLoader.classList.add('is-hidden');
}

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryMarkup = galleryItems.map((image) => {
    return `<li class = "gallery__item"><a href="${image.original}" class = "gallery__link">
          <img class = "gallery__image" data-index="${image.original}" src="${image.preview}" alt="${image.description}"
    </a></li>`;
  }).join('');
  
  const galleryList = document.querySelector(".gallery");
  galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
console.log(lightbox);

console.log(galleryItems);

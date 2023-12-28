import { galleryItems } from './gallery-items.js';
// Change code below this line



const refGallery = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <div class="gallery">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt=""  title="${description}" />
      </a>
    </div>
</li>
`}).join("");

refGallery.innerHTML = markupGallery;

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


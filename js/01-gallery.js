import { galleryItems } from './gallery-items.js';

// Change code below this line

const refGallery = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" onclick="event.preventDefault()" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`}).join("");

refGallery.innerHTML = markupGallery;

refGallery.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !== 'IMG') { 
    return
  }
  const imageOriginal = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageOriginal}" width="800" height="600">
`);
  
  instance.show()

  document.addEventListener('keydown', closeModalEsc);
  
  function closeModalEsc(evt) {
    if (evt.key !== 'Escape') {
        return
    }
   
    instance.close();
    
    document.removeEventListener('keydown', closeModalEsc);
 
  }
  
};




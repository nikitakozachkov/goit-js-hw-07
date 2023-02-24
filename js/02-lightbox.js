import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryItemsRef = galleryItemMarkup(galleryItems);

galleryRef.addEventListener("click", onGalleryItemClick);

function galleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  new SimpleLightbox(".gallery a", {
    showCounter: false,
    doubleTapZoom: false,
    scrollZoom: false,
    captionsData: "alt",
    captionDelay: 250,
  });
}

galleryRef.insertAdjacentHTML("beforeend", galleryItemsRef);

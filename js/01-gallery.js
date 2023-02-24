import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryItemsRef = galleryItemsMarkup(galleryItems);

galleryRef.addEventListener("click", onGalleryItemClick);

function galleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          data-source="${original}"
          alt="${description}" 
        />
      </a>
    `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryImg = event.target.classList.contains("gallery__image");
  const dataSource = event.target.dataset.source;

  if (!isGalleryImg) {
    return;
  }

  modalRef(dataSource);
}

function modalRef(link) {
  basicLightbox
    .create(` <img src="${link}"> `, {
      onShow: (instance) => {
        window.addEventListener("keydown", function (event) {
          if (event.code === "Escape") {
            instance.close();
          }
        });
      },
    })
    .show();
}

galleryRef.insertAdjacentHTML("beforeend", galleryItemsRef);

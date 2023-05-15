import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", markup);
galleryListEl.addEventListener("click", onContainerImages);


var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});


function onContainerImages(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  lightbox;
}

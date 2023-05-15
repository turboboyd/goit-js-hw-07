import { galleryItems } from "./gallery-items.js";

const galleryListEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
  )
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryListEl.addEventListener("click", onContainerImages);

const instance = basicLightbox.create(`
    <img src="">
`);

const imgBigEl = instance.element().querySelector("img");

function onContainerImages(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  const sourceUrl = e.target.dataset.source;
  imgBigEl.src = sourceUrl;
  instance.show();
  document.addEventListener("keydown", onCloseEsc)
}

function onCloseEsc (e) {
  if (e.code === "Escape") {
    instance.close();
    console.log(e.code);
    document.removeEventListener("keydown", onCloseEsc);
  }
};





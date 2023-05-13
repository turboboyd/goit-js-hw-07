import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
console.log(galleryListEl);

const markup = galleryItems
    .map((galleryItem) =>
`<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>`)
    .join("");

galleryListEl.innerHTML = markup;
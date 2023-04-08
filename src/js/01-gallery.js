import simpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "../bd/bd-img";

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  `;
    })
    .join("");
};

const gallery = galleryMarkup();

galleryRef.insertAdjacentHTML("beforeend", gallery);

let lightbox = new simpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 300,
});

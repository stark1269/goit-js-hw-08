import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const murkup = galleryItems.map(item => {
  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__item');
  linkEl.href = item.original;

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.src = item.preview;
  imgEl.alt = item.description;
  imgEl.title = item.description;

  linkEl.append(imgEl)
  return linkEl;
});

gallery.append(...murkup);

new SimpleLightbox('.gallery a', { captionDelay: 250 });
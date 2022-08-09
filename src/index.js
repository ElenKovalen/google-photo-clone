import { Image } from "./image.js";

const photoContainer = document.querySelector(".photo-container");

const options = { method: 'GET' };

const addPhotos = async function() {
  const response = await fetch('http://jsonplaceholder.typicode.com/photos', options);
  const data = await response.json();
  const images = data.map(photo => new Image(photo))
    for (let i = 1; i < 6; i++) {
    images[i].show(photoContainer)
    }
};

addPhotos();

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));
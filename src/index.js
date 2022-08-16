import { Image } from "./image.js";

const photoContainer = document.querySelector(".photo-container");

const options = { method: 'GET' };

const addPhotos = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos', options);
  const data = await response.json();
  const images = data.map(photo => new Image(photo))
  images.slice(0, 12).forEach(i => i.show(photoContainer))    
};

addPhotos();

document.querySelectorAll(".archive-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll('.nav').forEach(e => e.addEventListener('click', e => e.target.classList.toggle('active')));

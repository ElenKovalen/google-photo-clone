import { Image } from "./image.js";

const photoContainer = document.querySelector(".photo-container");

const options = {
  method: 'GET',
};
fetch('https://jsonplaceholder.typicode.com/photos/', options)
.then((response) => {
  return response.json();
})
.then((data) => {
  const images = data.map(photo => new Image(photo))
  newFunction(data);
  images.forEach(i => i.show(photoContainer))
})    
.catch(() => {console.log('error')});

function newFunction(data) {
  console.log(data);
};

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('show')));
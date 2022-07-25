import { Image } from "./image.js";

const photos = [
  {url: "/img/animal-6717792_1920.jpg", name: "photo 1"},
  {url: "/img/architecture-3824660_1920.jpg", name: "photo 2"},
  {url: "/img/bird-7071408_1920.jpg", name: "photo 3"},
  {url: "/img/bird-7145813_1920.jpg", name: "photo 4"},
  {url: "/img/images (5).jfif", name: "photo 5"},
  {url: "/img/images (6).jfif", name: "photo 6"},
  {url: "/img/images (7).jfif", name: "photo 7"},
  {url: "/img/images (8).jfif", name: "photo 8"},
  {url: "/img/images (9).jfif", name: "photo 9"},
  {url: "/img/images (3).jfif", name: "photo 10"},
  {url: "/img/images (7).jfif", name: "photo 11"},
  {url: "/img/images (9).jfif", name: "photo 12"},
  {url: "/img/images (3).jfif", name: "photo 13"},
  {url: "/img/images (11).jfif", name: "photo 14"},
  {url: "/img/images (3).jfif", name: "photo 15"},
  {url: "/img/images (9).jfif", name: "photo 16"},
  {url: "/img/images (3).jfif", name: "photo 17"},
  {url: "/img/images (7).jfif", name: "photo 18"},
  {url: "/img/images (3).jfif", name: "photo 19"},
  {url: "/img/images (11).jfif", name: "photo 20"},
  {url: "/img/images (3).jfif", name: "photo 21"},
  {url: "/img/images (9).jfif", name: "photo 22"},
  {url: "/img/images (7).jfif", name: "photo 23"},
  {url: "/img/images (3).jfif", name: "photo 24"},
  {url: "/img/images (11).jfif", name: "photo 25"},
  {url: "/img/images (1).jfif", name: "photo 1"},
  {url: "/img/images (3).jfif", name: "photo 2"},
  {url: "/img/images (10).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
  {url: "/img/images (5).jfif", name: "photo 5"},
  {url: "/img/images (6).jfif", name: "photo 6"},
  {url: "/img/images (7).jfif", name: "photo 7"},
];

// const images = [];

// photos.forEach(photo => images.push(new Image(photo.url, photo.name)));
// console.log(images);

const images = photos.map(photo => new Image(photo));

// Pagination

let currenPage = 1;
let recordsPerPage = 6;

function prevPage() {
  if (currenPage > 1) {
    currenPage--;
    changePage(currenPage);
  }
};

function nextPage() {
  if (currenPage < numPages()) {
    currenPage++;
    changePage(currenPage);
  }
};

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const pageSpan = document.querySelector(".page");   
const photoContainer = document.querySelector(".photo-container");

function changePage(page) {
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  photoContainer.innerHTML = "";

  for (let i = (page-1) * recordsPerPage; i < (page * recordsPerPage) && i < images.length; i++) {
    images[i].show(photoContainer);
  }

  pageSpan.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
};

function numPages() {
  return Math.ceil(images.length / recordsPerPage);
};

window.onload = function() {
  changePage(1);
};

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('show')));

const photos = [
  {url: "/img/images (1).jfif", name: "photo 1"},
  {url: "/img/images (10).jfif", name: "photo 2"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
  {url: "/img/images (5).jfif", name: "photo 5"},
  {url: "/img/images (6).jfif", name: "photo 6"},
  {url: "/img/images (7).jfif", name: "photo 7"},
  {url: "/img/images (8).jfif", name: "photo 8"},
  {url: "/img/images (9).jfif", name: "photo 9"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (7).jfif", name: "photo 7"},
  {url: "/img/images (9).jfif", name: "photo 9"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (9).jfif", name: "photo 9"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (7).jfif", name: "photo 7"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (9).jfif", name: "photo 9"},
  {url: "/img/images (7).jfif", name: "photo 7"},
  {url: "/img/images (3).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
];

// const addNewPhoto = (photo) => {
//       const div = document.createElement("div");
//       div.className = "template-card col-3 my-1";
//       div.innerHTML = '<div class="bg-light">' +
//     '<div class="card bg-light p-1 border">' +
//     '   <img class="img-item">' +
//     '     <div class="card-body">' +
//     '       <p class="card-text"> </p>' +
//     '<div class="d-flex justify-content-between align-items-center">' +
//     '  <div class="btn-group">' +
//     '     <button type="button" class="view-button btn btn-sm btn-outline-secondary">View</button>' +
//     '     <button type="button" class="edit-button btn btn-sm btn-outline-secondary">Edit</button>' +
//     '  </div>' +
//     '    <small class="text-muted">9 mins</small>' +
//     '</div></div></div></div>';
//     div.querySelector("img").src = photo.url;
//     div.querySelector(".card-text").innerText = photo.name;
//     document.querySelector(".photo-container").appendChild(div);
// };

// photos.forEach(addNewPhoto);

// document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
// document.querySelectorAll(".edit-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

// document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle("active"))); 

// Pagination

let current_page = 1;
let records_per_page = 6;

function prevPage() {
  if (current_page > 1) {
      current_page--;
      changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
  }
}
    
function changePage(page) {
  let btn_next = document.querySelector(".btn_next");
  let btn_prev = document.querySelector(".btn_prev");
  let page_span = document.querySelector(".page");

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  document.querySelector(".listingTable").innerHTML = "";

  for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < photos.length; i++) {
    const div = document.createElement("div");
    div.className = "template-card col col-lg-4 col -md-3 my-1";
    div.innerHTML = '<div class="bg-light ">' +
  '<div class="card bg-light p-1 m-1 border ">' +
  '   <img class="img-item img-fluid rounded">' +
  '     <div class="card-body">' +
  '       <p class="card-text "> </p>' +
  '<div class="d-grid">' +
  '  <div class="btn-group col-9 mx-auto">' +
  '     <button type="button" class="view-button btn btn-mg btn-outline-primary">View</button>' +
  '     <button type="button" class="edit-button btn btn-mg btn-outline-primary">Edit</button>' +
  '  </div></div></div>';
  div.querySelector("img").src = photos[i].url;
  div.querySelector(".card-text").innerText = photos[i].name;
  document.querySelector(".photo-container").appendChild(div);
  }

  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
      btn_prev.style.visibility = "hidden";
  } else {
      btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
      btn_next.style.visibility = "hidden";
  } else {
      btn_next.style.visibility = "visible";
  }
}

function numPages() {
    return Math.ceil(photos.length / records_per_page);
}

window.onload = function() {
    changePage(1);
}

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle("active"))); 

photos.forEach(addNewPhoto);
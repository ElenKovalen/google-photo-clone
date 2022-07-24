const photos = [
  {url: "/img/images (1).jfif", name: "photo 1"},
  {url: "/img/images (3).jfif", name: "photo 2"},
  {url: "/img/images (10).jfif", name: "photo 3"},
  {url: "/img/images (11).jfif", name: "photo 4"},
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
  ];

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
    
function changePage(page) {
  const btnNext = document.querySelector(".btn-next");
  const btnPrev = document.querySelector(".btn-prev");
  const pageSpan = document.querySelector(".page");

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  document.querySelector(".photo-container").innerHTML = "";

  for (let i = (page-1) * recordsPerPage; i < (page * recordsPerPage) && i < photos.length; i++) {
    const div = document.createElement("div");
    div.className = 'template-card col col-lg-4 col-md-4 my-1';
    div.innerHTML = '<div class="bg-light">' +
  '<div class="card bg-light p-1 border">' +
  '   <img class="img-item rounded">' +
  '     <div class="card-body">' +
  '       <p class="card-text"> </p>' +
  '<div class="d-grid justify-content-center">' +
  '  <div class="btn-group col-md-4 col-lg-2">' +
  '     <button type="button" class="view-button btn btn-outline-primary">View</button>' +
  '     <button type="button" class="delete-button btn btn-outline-primary">Delete</button>' +
  '</div></div></div>';
    div.querySelector("img").src = photos[i].url;
    div.querySelector(".card-text").innerText = photos[i].name;
    document.querySelector(".photo-container").appendChild(div);
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
  return Math.ceil(photos.length / recordsPerPage);
};

window.onload = function() {
  changePage(1);
};

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('show')));

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

const addNewPhoto = (photo) => {
    const div = document.createElement("div");
    div.className = "template-card col col-lg-4 col-md-4 my-1";
    div.innerHTML = '<div class="bg-light ">' +
      '<div class="card bg-light p-1 m-1 border ">' +
      '   <img class="img-item rounded">' +
      '     <div class="card-body">' +
      '       <p class="card-text "> </p>' +
      '<div class="d-grid justify-content-center">' +
      '  <div class="btn-group col-md-4 col-lg-2">' +
      '     <button type="button" class="view-button btn btn-outline-primary">View</button>' +
      '     <button type="button" class="delete-button btn btn-outline-primary">Delete</button>' +
      '  </div></div></div>';
    div.querySelector("img").src = photo.url;
    div.querySelector(".card-text").innerText = photo.name;
    document.querySelector(".photo-container").appendChild(div);
};

photos.forEach(addNewPhoto);

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle("show"))); 

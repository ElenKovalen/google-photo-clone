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
];

const addNewPhoto = (photo) => {
      const div = document.createElement("div");
      div.className = "template-card col-3 my-1";
      div.innerHTML = '<div class="bg-light">' +
    '<div class="card bg-light p-1 border rounded-3">' +
    '   <img class="img-item rounded-3">' +
    '     <div class="card-body">' +
    '       <p class="card-text"> </p>' +
    '<div class="d-flex justify-content-between align-items-center">' +
    '  <div class="btn-group">' +
    '     <button type="button" class="view-button btn btn-sm btn-outline-secondary">View</button>' +
    '     <button type="button" class="edit-button btn btn-sm btn-outline-secondary">Edit</button>' +
    '  </div>' +
    '    <small class="text-muted">9 mins</small>' +
    '</div></div></div></div>';
    div.querySelector("img").src = photo.url;
    div.querySelector(".card-text").innerText = photo.name;
    document.querySelector(".photo-container").appendChild(div);
};

photos.forEach(addNewPhoto);

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".edit-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

const viewPhoto = (event) => {
  const target = event.target;

  if (target.classList.contains('img-item')) {
    console.log('click');
  }
};

document.querySelectorAll(".img-item").forEach((e) => e.addEventListener('click', viewPhoto)); 
const photos = [
  {url: "/img/images (1).jfif", name: "photo1"},
  {url: "/img/images (10).jfif", name: "photo2"},
  {url: "/img/images (3).jfif", name: "photo3"},
  {url: "/img/images (11).jfif", name: "photo4"},
  {url: "/img/images (5).jfif", name: "photo5"},
  {url: "/img/images (6).jfif", name: "photo6"},
  {url: "/img/images (7).jfif", name: "photo7"},
  {url: "/img/images (8).jfif", name: "photo8"},
  {url: "/img/images (9).jfif", name: "photo9"},
];

const addNewPhoto = (photo) => {
      const div = document.createElement("div");
      div.className = "template-card col-4 my-1";
      div.innerHTML = '<div class="bg-light p-1 border rounded-3">' +
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
}

photos.forEach(addNewPhoto);

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".edit-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

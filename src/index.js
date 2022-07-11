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

photos.forEach((photo, i) => {
  const clone = document.querySelector(".template-card").cloneNode(true);
  clone.querySelector("img").src = photo.url;
  clone.querySelector("p").name = photo.name;
  document.querySelector(".photo-container").appendChild(clone);
});

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".edit-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

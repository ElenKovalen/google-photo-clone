const photos = [
  {url: "/img/IMG_20220619_203148.jpg", name: "photo1"},
  {url: "/img/IMG_20220619_203148.jpg", name: "photo2"},
  {url: "/img/IMG_20220623_184728.jpg", name: "photo3"},
  {url: "/img/IMG_20220628_185603.jpg", name: "photo4"},
  {url: "/img/IMG_20220629_195159.jpg", name: "photo5"},
  {url: "/img/IMG_20220701_183319.jpg", name: "photo6"},
  {url: "/img/IMG_20220703_175555.jpg", name: "photo7"},
  {url: "/img/IMG_20220703_182254.jpg", name: "photo8"},
  {url: "/img/IMG_20220704_082443.jpg", name: "photo9"},
];

// const node = document.getElementById("templateCard");
// const clone = node.cloneNode(true);
// document.getElementById("templateCard").appendChild(clone);
//
// let photo2 = document.getElementById("photoLink").innerHTML = photos[3];
// console.log(photo2);
//
// photos.forEach(photo => console.log(photo));
//
// let arr = document.getElementById("templateCard");
// let newArr = arr.innerHTML = photos;
// console.log(newArr);
//
// for (let i = 0; i< photos.length; i++)
// console.log(photos[i]);

const photoContainer = document.querySelector(".photo-container");

const addNewPhoto = (photo) => {
  const div = document.createElement("div");
  div.className = "row photo";

  div.innerHTML = '<div class="col-1">' +
    '<div class="card shadow-sm">' +
    '  <img />' +
    '  <div class="card-body">' +
    '    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional ' +
    '                         content. This content is a little bit longer.</p>' +
    '  <div class="d-flex justify-content-between align-items-center">' +
    '    <div class="btn-group">' +
    '      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>' +
    '      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>' +
    '    </div>' +
    '    <small class="text-muted">9 mins</small>' +
    '  </div></div></div></div>';

  div.querySelector("img").src = photo.url;
  div.querySelector(".card-text").innerText = photo.name;
  photoContainer.appendChild(div);
}

photos.forEach(addNewPhoto);

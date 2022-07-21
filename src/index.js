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
];

// const addNewPhoto = (photo) => {
//     const div = document.createElement("div");
//     div.className = "template-card col col-lg-4 col-md-4 my-1";
//     div.innerHTML = '<div class="bg-light ">' +
//       '<div class="card bg-light p-1 m-1 border ">' +
//       '   <img class="img-item rounded">' +
//       '     <div class="card-body">' +
//       '       <p class="card-text "> </p>' +
//       '<div class="d-grid justify-content-center">' +
//       '  <div class="btn-group col-md-4 col-lg-2">' +
//       '     <button type="button" class="view-button btn btn-outline-primary">View</button>' +
//       '     <button type="button" class="delete-button btn btn-outline-primary">Delete</button>' +
//       '  </div></div></div>';
//     div.querySelector("img").src = photo.url;
//     div.querySelector(".card-text").innerText = photo.name;
//     document.querySelector(".photo-container").appendChild(div);
// };

// const list_items = photos.forEach(addNewPhoto);

document.querySelectorAll(".view-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-success'))); 
document.querySelectorAll(".delete-button").forEach(e => e.addEventListener('click', e => e.target.classList.toggle('bg-danger')));

document.querySelectorAll(".img-item").forEach(e => e.addEventListener('click', e => e.target.classList.toggle("show"))); 

// Pagination

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');

let notesOnPage = 6;
let countOfItems = Math.ceil(photos.length / notesOnPage);

let items = [];
for (let i = 1; i <= countOfItems; i++) {
  let li = document.createElement('li');
  li.innerHTML = i;
  pagination.appendChild(li);
  items.push(li);
};

for (let item of items) {
    item.addEventListener('click', function() {
      let activeButton = document.querySelector('#pagination li.activeButton');
        if (activeButton) {
        activeButton.classList.remove('activeButton');
        };
            
      this.classList.add('activeButton');

      let pageNum = +this.innerHTML;

      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = photos.slice(start, end);
  
      table.innerHTML = '';
    
      for (let note of notes) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

      createCell(note.url, tr);
      createCell(note.name, tr);
    }
  });
};

function createCell(text, tr) {
  let td = document.createElement('td');
  td.innerHTML = text;
  tr.appendChild(td);
};

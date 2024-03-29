export class Image {
  constructor({url, title}) {
    this.url = url;
    this.title = title;
  }

  show(place) {
    const div = document.createElement("div");
    div.className = "template-card col col-lg-4 col-md-4 my-1";
    div.innerHTML = '<div class="bg-light">' +
      '<div class="card bg-light p-1 border">' +
      '<div class="d-flex justify-content-center">' + 
      '<img class="img-item rounded"></div>' +
      '<div class="card-body">' +
      '<p class="card-text"> </p>' +
      '<div class="d-grid justify-content-center">' +
      '<div class="btn-group col-md-4 col-lg-2">' +
      '<button type="button" class="archive-button btn btn-outline-primary">Archive</button>' +
      '<button type="button" class="delete-button btn btn-outline-primary">Delete</button>' +
      '</div></div></div>';
    div.querySelector("img").src = this.url;
    div.querySelector(".card-text").innerText = this.title;
    div.querySelector("img").addEventListener("click", (e) => e.target.classList.toggle("show"));
    place.appendChild(div);
  }
};
const photos = [
  {url: "/img/images (1).jfif", name: "photo1"},
  {url: "/img/images (2).jfif", name: "photo2"},
  {url: "/img/images (3).jfif", name: "photo3"},
  {url: "/img/images (4).jfif", name: "photo4"},
  {url: "/img/images (5).jfif", name: "photo5"},
  {url: "/img/images (6).jfif", name: "photo6"},
  {url: "/img/images (7).jfif", name: "photo7"},
  {url: "/img/images (8).jfif", name: "photo8"},
  {url: "/img/images (9).jfif", name: "photo9"},
];

// 1. Iterate through our array 
// 2. Clone a template card 
// 3. Change url and name in the clone
// 4. Append child

// 1. Method for
// for (let i = 0; i < photos.length; i++) {
//   const photo = photos[i]; 
//   const node = document.getElementById("templateCard");
//   const clone = node.cloneNode(true);
//   clone.querySelector("img").src = photos[i].url;
//   clone.querySelector(".card-text").name = photos[i].name;
//   document.getElementById("templateCard").appendChild(clone); 
// };

// 2. Method forEach

photos.forEach(photo => {
  const node = document.querySelector(".col-4");
  const clone = node.cloneNode(true);
  clone.querySelector("img").src = photo.url;
  clone.querySelector("p").name = photo.name;
  document.getElementById("templateCard").appendChild(clone);
});

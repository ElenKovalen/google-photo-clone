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

const node = document.getElementById("templateCard");
const clone = node.cloneNode(true);
document.getElementById("templateCard").appendChild(clone);
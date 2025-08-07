var models = [
  {
    name: "Bmw 116d",
    image: "img/bmw.jpeg",
    link: "https://www.arabalar.com.tr/",
  },
  {
    name: "Audi",
    image: "img/audi.jpg",
    link: "https://www.arabalar.com.tr/",
  },
  {
    name: "Togg",
    image: "img/togg.jpeg",
    link: "https://www.arabalar.com.tr/",
  },
  {
    name: "Tesla",
    image: "img/tesla.jpeg",
    link: "https://www.arabalar.com.tr/",
  },
  {
    name: "Skoda",
    image: "img/skoda.jpeg",
    link: "https://www.arabalar.com.tr/",
  },
];

var index = 2;
var slaytCount = models.length;
document.querySelector(".fa-arrow-left").addEventListener("click", function() {
  index--;
  showSlide(index);
  console.log(index);
});
document.querySelector(".fa-arrow-right").addEventListener("click", function() {
  index++;
  showSlide(index);
  console.log(index);
});
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

document.querySelector(".card-title").textContent = models[index].name;
document
  .querySelector(".card-img-top")
  .setAttribute("src", models[index].image);

document.querySelector(".card-link").setAttribute("href", models[index].link);

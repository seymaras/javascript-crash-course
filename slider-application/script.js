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

let index = 0;
const slaytCount = models.length;

const settings = {
  duration: 2000,

  random: false,
};

let prevIndex;
let interval;

// Sayfa tamamen yüklendiğinde başla
document.addEventListener("DOMContentLoaded", function() {
  showSlide(index); // ilk slide'ı göster
  startSlideshow(settings); // otomatik başlat

  // Butonlarla gezinme
  document
    .querySelector(".fa-arrow-left")
    .addEventListener("click", function() {
      index--;
      showSlide(index);
    });

  document
    .querySelector(".fa-arrow-right")
    .addEventListener("click", function() {
      index++;
      showSlide(index);
    });
});

document.querySelectorAll(".arrow").forEach(function(item) {
  item.addEventListener("mouseenter", function() {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function(item) {
  item.addEventListener("mouseleave", function() {
    startSlideshow(settings);
  });
});

function startSlideshow(settings) {
  interval = setInterval(function() {
    if (settings.random) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * slaytCount);
      } while (newIndex === prevIndex);
      prevIndex = newIndex;
      index = newIndex;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  if (i < 0) index = slaytCount - 1;
  else if (i >= slaytCount) index = 0;
  else index = i;

  // HTML elementlerini güncelle
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

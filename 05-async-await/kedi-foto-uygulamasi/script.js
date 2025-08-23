const btn = document.getElementById("btn");
const cat = document.getElementById("cat");
const status = document.getElementById("status");

async function kediGetir() {
  try {
    btn.disabled = true;
    status.innerText = "Yükleniyor...";
    let res = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!res.ok) {
      throw new Error("Sunucu hatası: " + res.status);
    }
    let data = await res.json(); // ✅ burası düzeltildi
    let catUrl = data[0].url;

    cat.src = catUrl;
    status.innerText = "";
  } catch (error) {
    console.error("Hata: ", error);
    status.innerText = "Bağlantıda sorun var. Tekrar deneyin.";
  } finally {
    btn.disabled = false;
  }
}
btn.addEventListener("click", kediGetir);

function favoriEkle(url) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favs.includes(url)) {
    favs.push(url);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Favorilere eklendi");
  }
}

function favorileriGoster() {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  let favListe = document.getElementById("favList");

  favListe.innerHTML = "";

  favs.forEach((url) => {
    let img = document.createElement("img");
    img.src = url;
    img.classList.add("fav-img");
    favListe.appendChild(img);
  });

  document.getElementById("favorites").style.display = "block";
}

document.getElementById("favBtn").addEventListener("click", () => {
  if (cat.src) {
    favoriEkle(cat.src);
  }
});
document.getElementById("showFavs").addEventListener("click", favorileriGoster);

const btn = document.getElementById("btn");
const cat = document.getElementById("cat");
const status = document.getElementById("status");

async function kediGetir() {
  btn.disabled = true;
  status.innerText = "Yükleniyor...";

  try {
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

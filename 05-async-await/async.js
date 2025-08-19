// Asenkron kodu senkron gibi yazmamıza izin veriyor.

//Normalde fetch bize bir Promise döndürür.
//.then() zinciriyle kullanabiliriz ama kod karmaşıklaşır
// İşte burada async ve await devreye giriyor.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Hata:", err));

function bekle(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getir() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Hata:", err);
  }
}

getir();

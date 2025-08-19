// Asenkron kodu senkron gibi yazmamıza izin veriyor.

//Normalde fetch bize bir Promise döndürür.
//.then() zinciriyle kullanabiliriz ama kod karmaşıklaşır
// İşte burada async ve await devreye giriyor.

/* fetch("https://jsonplaceholder.typicode.com/posts/1")
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
 */
// promis ile örnek
//Buradaki fark:
//Promise + then → biraz zincirleme yazılıyor.
//async/await → sanki "normal kod gibi" sırayla çalışıyormuş gibi okunuyor.

/* function bekle(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bekleme bitti");
    }, ms);
  });
}

bekle(3000).then((sonuc) => {
  console.log(sonuc);
}); */

//async/await ile örnek
/* function bekle(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("bekleme bitti");
    }, ms);
  });
}

async function calistir() {
  console.log("basliyoruz...");
  const sonuc = await bekle(3000);
  console.log(sonuc);
  console.log("islem tamam");
} */

//

function misirHazirla() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("misir hazir");
    }, 4000);
  });
}

function icecekHazirla() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("icecekler hazır");
    }, 2000);
  });
}

async function filmGecesi() {
  console.log("filme gecesi baslıyor");

  const misirPromise = misirHazirla();
  const icecekPromise = icecekHazirla();
  const [misir, icecek] = await Promise.all([misirPromise, icecekPromise]);

  console.log(misir);
  console.log(icecek);

  console.log("her sey hazır film baslasıııın");
}

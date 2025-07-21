console.log("log");
console.warn("warn");
console.error("error");

const isim = "Rana ve Şeyma";
const sehir = "İstanbul";
const mesaj = `Merhaba ${isim}`;

//

const kisi = {
  isim: "Rana",
  yas: 23,
  okul: "ytü",
};

function kisiBilgisi({ isim, yas, okul }) {
  console.log(`${isim}, ${yas} yasıında`);
}
kisiBilgisi(kisi);

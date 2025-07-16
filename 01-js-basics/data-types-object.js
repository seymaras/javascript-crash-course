//onemli reacte gecerken: props, state, user, product,

//birden fazla veriyi bir yapı (kutu gibi) içinde tutmak için object kullanırız

//anahtar: değerler
const kullanici = {
  ad: "Rana",
  soyad: "Şeyma",
  yas: 23,
  sehir: "İstanbul",
  "Bölüm Adı": "Bilgisayar Mühendisliği",
};

console.log(kullanici);

//obje içindeki değerlere erişmek için . kullanılır
console.log(kullanici.ad);
console.log(kullanici.yas);

console.log(kullanici["soyad"]);
//bosluk oldugu icin koseli parantes
console.log(kullanici["Bölüm Adı"]);

kullanici.yas = 22;
kullanici["ad"] = "Seyma";

kullanici.meslek = "yazilimci";

delete kullanici.sehir;
//tüm anahtarlarlı listeleme
console.log(Object.keys(kullanici));
//tüm değerleri Listeleme
console.log(Object.values(kullanici));

//ic ice obje
const kullanici2 = {
  ad: "Rana",
  iletisim: {
    telefon: "12345",
    eposta: "asdfg@gmail.com",
  },
};
console.log(kullanici2.iletisim.eposta);

//dizi icinde nesneler
const kullanicilar = [
  { ad: "Rana", yas: 22 },
  { ad: "Şeyma", yas: 22 },
];
console.log(kullanicilar[1].ad);

//ornek

const ben = {
  ad: "asiye",
  sehir: "konya",
  hobiler: ["spor", "gez", "bu", "lum"],
  okul: "KTO",
};

ben.yas = 22;
ben.sehir = "Ankara";

ben.hobiler.push("kodlama");
console.log(ben);

console.log(`toplam ${ben.hobiler.length} hobi var`);

//
const kitap = {
  baslik: "kuslar",
  yazar: "maria",
  sayfaSayisi: "123",
  okunuyorMu: false,
};

console.log(`kitapın adı ve yazarı ${kitap.baslik} ${kitap.yazar}`);

kitap.sayfaSayisi = "422";
console.log(kitap);

kitap.okunuyorMu = true;

//
const araba = {
  marka: "tesla",
  model: "model32",
  yil: "2024",
  renkler: ["kirmizi", "beyaz", "mavi", "pembe"],
};

araba.renkler.push("siyah");

const araba_yas = 2025 - araba.yil;
console.log(`arabanın yasi: ${araba_yas}`);

//

const film = {
  ad: "prens",
  yonetmen: "giray",
  sure: "250dk",
  oyuncular: ["ali", "veli", "selim"],
  puan: 8.5,
  izlenmeSayisi: 1000000,
};

film.oyuncular.push("ayşe");
if (film.puan > 7) console.log(`izlemeye deger`);
else console.log("bosa zaman");

if (film.sure > 120) console.log("film uzun");
else console.log("kisa film");

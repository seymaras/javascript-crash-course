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

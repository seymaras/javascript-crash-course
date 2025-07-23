//Bir dizide belirli bir şarta uyan İLK elemanı bulur ve geri döner.

//const sonuc = dizi.find((eleman) => koşul);
//Dizi içinde tek tek dolaşır →
//Koşulu ilk sağlayanı bulur →
//Bulunca durur, onu döndürür.
//Bulamazsa undefined döner.

const kisiler = [
  { ad: "ali", yas: 15 },
  { ad: "ayse", yas: 22 },
  { ad: "rana", yas: 19 },
];

const ilkYetiskin = kisiler.find((kisi) => kisi.yas >= 18);

console.log(ilkYetiskin); // cıktı ayse cünkü ilk o geliyor, rana da büyük ama ilk değil

//Sayılar arasında ilk çift sayıyı bul

const sayilar = [5, 9, 13, 20, 22];
const ilkCift = sayilar.find((sayi) => sayi % 2 === 0);

console.log(ilkCift);

//İsmi "Şeyma" olan kişiyi bul

const ogrenciler = [
  { ad: "Ali", not: 70 },
  { ad: "Şeyma", not: 95 },
  { ad: "Rana", not: 85 },
];

const isimBul = ogrenciler.find((isim) => (isim.ad = "Şeyma"));
console.log(isimBul);

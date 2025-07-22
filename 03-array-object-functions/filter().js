//Bir dizideki elemanları belirli bir şarta göre süzer, sadece o şartı sağlayanları döndürür.
//map() → her elemanı dönüştürür
//filter() → bazılarını ayıklar, diğerlerini atar

// sadece cift sayılar al

const sayilar = [1, 2, 3, 4, 5, 6];

const cift = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(cift);

//gecen öğrencileri al

const ogrenciler = [
  { ad: "ali", puan: 40 },
  { ad: "Zeynep", puan: 75 },
  { ad: "Rana", puan: 90 },
];

const gecenler = ogrenciler.filter((ogrenci) => ogrenci.puan >= 50);
console.log(gecenler);

// a harfi iceren sehirleri bul

const sehirler = ["Ankara", "AKSARAY", "konya", "izmir"];

const aSehirBul = sehirler.filter((sehir) => {
  return sehir.toLocaleLowerCase().includes("a".toLocaleLowerCase());
});

console.log(aSehirBul);

//sadece tek sayıları filtrele

const sayilar3 = [1, 3, 4, 5, 6, 7, 8];

const teksayilar = sayilar3.filter((teksayi) => {
  return teksayi % 2 === 1;
});
console.log(`tek sayilar: ${teksayilar}`);

//Şehir uzunluğu 6'dan büyük olan şehirleri ayıkla (6 dahil)

const sehirler2 = [
  "Ankara",
  "AKSARAY",
  "konya",
  "izmir",
  "karadeniz",
  "istanbul",
];

const uzunSehirler = sehirler2.filter((uzunSehir) => {
  return uzunSehir.length >= 6;
});
console.log(`6 harftem uzun ola sehirler: ${uzunSehirler}`);

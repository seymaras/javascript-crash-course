//map() bir dizinin her elemanını alır, üzerinde işlem yapar, ve size yeni bir dizi döner.

const { c } = require("tar");

const sayilar = [1, 2, 3, 4];

const ikiKat = sayilar.map((sayi) => sayi * 2);

console.log(ikiKat);

//isimleri büyük harfe cevir

const isimler = ["Asiye", "beyza", "Amine", "abidin"];

const büyükYap = isimler.map((isim) => isim.toUpperCase());

console.log(büyükYap);

// Objelerdeki yaşları 1 artır

const kisiler = [
  { ad: "seyma", yas: 49 },
  { ad: "beyza", yas: 18 },
];

const guncellenmis = kisiler.map((kisi) => ({
  ...kisi,
  yas: kisi.yas + 1,
}));
console.log(guncellenmis);

//dizinin her elemaini karesini al

const sayilar2 = [3, 6, 9, 34];

const kareal = sayilar2.map((sayi) => sayi * sayi);

console.log(kareal);

//

const ogrenciler = [
  { isim: "ayse", puan: 45 },
  { isim: "mehmet", puan: 67 },
];
const yeniPuan = ogrenciler.map((ogrenci) => {
  return {
    ...ogrenci,
    puan: ogrenci.puan + 10,
  };
});
console.log(yeniPuan);

//1.ogrenciler listesindeki her öğrenciyi sırayla al
//2.Onun puanına 10 ekle
//3.Bu yeni puanı ve eski isim bilgisini bir yeni obje olarak kaydet
//4.Tüm bu yeni objeleri bir yeni listeye (diziye) koy
//5.En sonda bu yeni diziyi göster

//| Parça                     | Anlamı                                                   |
//| ------------------------- | -------------------------------------------------------- |
//| `ogrenciler.map(...)`     | Her öğrenci objesini sırayla al                          |
//| `(ogrenci) => { ... }`    | Her öğrenci için bir işlem yap                           |
//| `...ogrenci`              | Objenin tüm özelliklerini (isim, puan) yeni objeye aktar |
//| `puan: ogrenci.puan + 10` | Yeni objeye `puan`'ı tekrar yaz ama 10 artır             |
//| Hepsi `map()` ile döndü   | Yeni objelerle **yeni bir dizi** oluştu                  |

//-----------örnekler-----------

const ogrenciler2 = [
  { ad: "rana", not: 90 },
  { ad: "seyma", not: 85 },
  { ad: "ali", not: 70 },
];
const buyukharf = ogrenciler2.map((ogrenci3) => {
  return {
    ...ogrenci3,
    ad: ogrenci3.ad.toUpperCase(),
  };
});
console.log(buyukharf);

//
const ogrenciler3 = [
  { ad: "ahmwt", puan: 67 },
  { ad: "merve", puan: 23 },
  { ad: "sema", puan: 78 },
];

const dersnotu = ogrenciler3.map((ogrenci) => {
  //   return `Ad: ${ogrenci.ad}: ${ogrenci.puan >= 50 ? "gecti" : "kaldi"}`;
  return "Ad: " + ogrenci.ad + ": " + ogrenci.puan >= 50 ? "gecti" : "kaldi";
});

console.log(dersnotu);

//
const sehirler = ["istanbul", "ankara", "konya"];

const harfsayi = sehirler.map((harf) => {
  return `Sehir ad:${harf}(${harf.length})`;
});
console.log(harfsayi);

//
const sehirler2 = ["istanbul", "ankara", "konya"];

const ilkharf = sehirler2.map((sehir) => {
  return sehir[0].toLocaleUpperCase() + sehir.slice(1).toLocaleLowerCase();
});
console.log(ilkharf);

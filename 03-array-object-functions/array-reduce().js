//reduce() dizideki tüm elemanları alır, tek bir değer üretir:
//Bu bir toplam, çarpım, ortalama, hatta string bile olabilir.
//reduce() diziyi değiştirmez, yeni bir deger döner

//const sonuc = dizi.reduce((toplayici, eleman, index) => {
//    return yeniDeger;
//  }, baslangicDegeri);

//| Terim             | Anlamı                                 |
//| ----------------- | -------------------------------------- |
//| `toplayici`       | Önceki adımdan gelen toplam / sonuç    |
//| `eleman`          | Şu anki eleman                         |
//| `index`           | (İsteğe bağlı) şu anki sıradaki indeks |
//| `baslangicDegeri` | İlk değer (örneğin `0` veya `""`)      |

//sayıları topla

const sayilar = [10, 20, 30, 45];
const toplam = sayilar.reduce((acc, sayi) => acc + sayi, 0); //baslangıc deger acc=0 olarak baslar

console.log(toplam);

//acc → accumulator yani "toplayıcı, biriktirici" :Reduce fonksiyonu içinde önceki adıma kadar birikmiş değeri temsil eder.
//Her adımda değişir, güncellenir ve sonda nihai değeri döner.

//kelimeleri birlesitr
const kelimeler = ["Rana", "ve", "Şeyma", "öğreniyor"];

const cumle = kelimeler.reduce((acc, kelime) => acc + " " + kelime, " ");
console.log(cumle);

//Öğrencilerin Not Ortalaması
const ogrenciler = [
  { ad: "Ali", not: 80 },
  { ad: "Ayşe", not: 90 },
  { ad: "Rana", not: 70 },
];
const toplamNot = ogrenciler.reduce((acc, ogr) => acc + ogr.not, 0); ////baslangıc deger acc=0 olarak baslar
const ortalama = toplamNot / ogrenciler.length;

console.log(`ortalama not: ${ortalama}`);

//Sayıların Çarpımını Bul

const sayilar4 = [2, 3, 4];

const carpim = sayilar4.reduce((acc, sayi) => acc * sayi, 1);
console.log(carpim);

//stringleri birlstir

const harfler = ["R", "a", "n", "a", "💛"];
const isim = harfler.reduce((acc, harf) => acc + harf, "");

console.log(isim);

//
const ogrenciler2 = [
  { ad: "Ali", not: 76 },
  { ad: "Şeyma", not: 93 },
  { ad: "Rana", not: 88 },
];

const yukseknot = ogrenciler2.reduce((acc, ogr) => {
  return ogr.not > acc ? ogr.not : acc;
}, 0);
console.log(`En yüksek not: ${yukseknot}`);

//
const sehirler = ["İstanbul", "Ankara", "İzmir", "Ankara", "İstanbul"];
const sayac = sehirler.reduce((acc, sehir) => {
  acc[sehir] = (acc[sehir] | 0) + 1;
  return acc;
}, {});
console.log(sayac);

// ??
// ||

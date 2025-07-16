const isim = "Rana ve Şeyma";
const sehir = "İstanbul";

//``: ${...} seklinde js calıştırmamızı saglar
const mesaj2 = `Merhaba ${isim}`;
const mesaj = `Merhaba ${3 + 4}`;
const mesaj1 = "Merhaba ${3 + 4}";
console.log(mesaj);
console.log(mesaj1);
console.log(mesaj2);

console.log(isim.length);
console.log(isim.toUpperCase());
console.log(isim.toLowerCase());

// Locale ekleyince bilgisayarında ki diline göre kücültme yapar Ş yi s olarak yapar mesela
console.log(isim.toLocaleUpperCase());
console.log(isim.toLocaleLowerCase());

//split: stringi parçalara ayırır. yani ['Rana', 've', 'Şeyma'] olarak ayırır.
console.log(isim.split(" "));

// aşağıda ki yapılan iki işlem aynı fakat sıralaması farklı olduğu için farklı işlemler yapmamız gerekiyor

console.log(isim.toUpperCase().split(" ")); // bu islem daha efektif
console.log(isim.split(" ").map((isim) => isim.toUpperCase()));

// Hem searchString, hem de isim toLocaleLowerCase yapıyoruz çünkü büyük küçük harf duyarlılığı var.
// includes: string içinde arama yapar.
const searchString = "ŞeYMa ";
console.log(
  isim.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
);

// replace: stringi değiştirir.
console.log(isim.replace("Rana", "Mehmet"));
console.log(isim);

console.log(isim.slice(0, 4));
console.log(isim.slice(-5));

console.log(
  isim.toLocaleLowerCase().includes(searchString.toLocaleLowerCase().trim())
);

const text1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit eget massa mollis dictum tincidunt nec mi. Aenean porta ante vitae turpis consectetur tempor. Fusce eget ex et lectus euismod consectetur. Curabitur nec ultricies lacus. Sed et quam tortor. Vestibulum imperdiet lobortis scelerisque. Quisque et nulla justo. Mauris erat leo, hendrerit in felis vitae, efficitur auctor velit. Fusce placerat fringilla malesuada.";

console.log(text1.split(" ").length);

//Örnek- Kelime Sayacı
const cumle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
const kelimeler = cumle.trim().split(" ");
console.log(`kelime sayisi: ${kelimeler.length}`);

//Örnek-İlk Harfleri Büyük Yap
const metin1 = "hava bugün cOK güzel";
const kelimeler1 = metin1.split(" ");

const guncelKelimeler = kelimeler1.map((value) => {
  return value.at(0).toUpperCase() + value.slice(1).toLowerCase(); //slice(1) bir den itibaren tüm harfleri alır.
});
const guncelMetin = guncelKelimeler.join(" ");

console.log(guncelMetin);
//--------------------------------
const metin3 = "en sevdigim tatli sütlac";

const kelimeler3 = metin3.split(" ");

const guncelk = kelimeler3.map((value) => {
  return value.at(0).toUpperCase() + value.slice(1).toLowerCase();
});
console.log(guncelk);

const guncelmetin1 = guncelk.join(" ");
console.log(guncelmetin1);

//ornek- tersine cevir

const kelime = "cicek";

const kelimebol = kelime.split("");

const tersi = kelimebol.reverse().join("");

console.log(tersi);

//ornek palindrome kontrolü - Bir kelimenin tersten de aynı olup olmadığını kontrol eden kod:

const duzkelime = "kayak";
const terskelime = duzkelime
  .split("")
  .reverse()
  .join("");

console.log(duzkelime);
console.log(terskelime);

console.log(duzkelime === terskelime);

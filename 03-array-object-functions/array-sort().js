//dizideki elemanları küçükten büyüğe, alfabetik ya da özelleştirilmiş şekilde sıralamak için kullanılır.
const sayilar = [40, 2, 5, 100, 34];

sayilar.sort((a, b) => a - b); //a küçükse öne al
console.log(sayilar);

sayilar.sort((a, b) => b - a);
console.log(sayilar); //b büyükse öne al

//string sıralama

const isimler = ["Zeynep", "Ali", "Seyma", "Rana"];

isimler.sort();
console.log(isimler);

//Obje Sıralama – Notlara Göre
const ogrenciler = [
  { ad: "Ali", not: 85 },
  { ad: "Rana", not: 95 },
  { ad: "Şeyma", not: 70 },
];

const sirali = ogrenciler.sort((a, b) => b.not - a.not); // en yüksekten en düşüğe sıralar

console.log(sirali);

//
const sayilar2 = [4, 10, 1, 8];

const sirala = sayilar2.sort((a, b) => a - b);

console.log(sirala);

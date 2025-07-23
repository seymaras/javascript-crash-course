const ogrenciler = [
  { ad: "Rana", not: 85 },
  { ad: "Şeyma", not: 92 },
  { ad: "Ali", not: 78 },
  { ad: "Zeynep", not: 64 },
];

const toplamNot = ogrenciler.reduce((acc, ogrenci) => acc + ogrenci.not, 0);
const ortalama = toplamNot / ogrenciler.length;
const durum = ortalama >= 70 ? "Sınıf basarili" : "sınıf basarisiz";

console.log(`ortalama not: ${ortalama.toFixed(2)}`);
console.log(durum);

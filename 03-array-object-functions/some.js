//Dizide şartı sağlayan en az bir eleman varsa → true,
//Hiçbiri sağlamıyorsa → false döner.

//temel yapısı-   dizi.some((eleman) =>koşul)

//Ne işe yarar?:
//“Dizide böyle biri var mı?”
//"İçinde en az bir tane uyan var mı?"

const sayilar = [1, 3, 5, 8];
const ciftVarMi = sayilar.some((sayi) => sayi % 2 === 0);
console.log(ciftVarMi);

// 50den kücük not var mı
const notlar = [70, 85, 45, 90];
const dusukNotVarMi = notlar.some((not) => not < 50);

console.log(dusukNotVarMi); // 👉 true

//
const isimler = ["Ayşe", "Mehmet", "Rana", "Ali"];

const ranaVarMi = isimler.some((isim) => isim === "Rana");

console.log(ranaVarMi); // 👉 true

//
const ogrenciler = [
  { ad: "Ali", not: 75 },
  { ad: "Şeyma", not: 40 },
  { ad: "Rana", not: 90 },
];

const kalanVarMi = ogrenciler.some((ogr) => ogr.not < 50);

console.log(kalanVarMi); // 👉 true

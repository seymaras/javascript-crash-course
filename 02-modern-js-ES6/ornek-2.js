//Kullanıcı bilgilerini destructure ederek konsola yazdırma

const kullanici = {
  ad: "melike",
  yas: 23,
  sehir: "istanbul",
};

const { ad, yas, sehir } = kullanici;
console.log(ad);
console.log(yas);
console.log(sehir);

console.log(`Ad: ${ad}, yas:${yas}, sehir:${sehir}`);

//
meyveler = ["elma", "armut", "kiraz", "cilek"];
sebzeler = ["domates", "biber", "salatalik"];

const pazarListesi = [...meyveler, ...sebzeler];

console.log(pazarListesi);

const listele = (...gidalar) => {
  gidalar.forEach((gida) => {
    console.log(gida);
  });
};
listele(...pazarListesi);

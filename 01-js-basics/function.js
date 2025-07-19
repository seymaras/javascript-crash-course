//const fonsiyonAdi = (parametre)=>{
//islemler
//    return sonuc
//}

const selamla = (isim) => {
  console.log(`merhaba ${isim}!`);
  const selamla = (isim) => console.log("Merhaba " + isim);
};
selamla("Rana");

const topla = (a, b) => {
  return a + b;
};
console.log(topla(3, 4));

const kare = (sayi) => {
  return sayi * sayi;
};

//return varsa, bu fonksiyon bir sonuç döner
//return yoksa, sadece işlemi yapar ama bir değer dönmez (undefined olur)

//TEK SATIRLIK ARROW FUNCTION
//Eğer fonksiyon sadece bir işlem yapacaksa ve tek satırsa, {} ve return yazmaya gerek yok

const kare1 = (x) => x * x;
//const selamla = (isim) => console.log("Merhaba " + isim);

//hic parametre yoksa
const hosgeldin = () => console.log("Hoş geldiniz!");

// fonksiyon icinde kontrol
const ciftMİ = (sayi) => {
  if (sayi % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//üstünde kinin kısa hali
const ciftMi = (sayi) => sayi % 2 === 0;

//fonksiyon icinde fonksiyon
const hesapla = (a, b) => {
  const carp = (x, y) => x * y;
  return carp(a, b);
};
console.log(hesapla(3, 4));

//carpım

const a = 3;
const b = 5;
const carpim = (a, b) => {
  return a * b;
};
console.log(`carpimi: ${carpim(a, b)}`); //fonksiyonu cagırmak icin : ${carpim(a, b)

//yashesapla
const yashesapla = (dogumYil) => {
  const simdikiYil = new Date().getFullYear();
  return simdikiYil - dogumYil;
};
console.log(`Yasiniz: ${yashesapla(2002)}`);

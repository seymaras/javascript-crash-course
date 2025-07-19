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
const yasHesapla = (dogumYili) => {
  const simdikiYil = new Date().getFullYear();
  return simdikiYil - dogumYili;
};
console.log(`yasınız: ${yasHesapla(2002)}`);

//metin kisa mi

const kisaMi = (metin) => {
  return metin.length < 10;
};
console.log(kisaMi("Merhaba"));
console.log(kisaMi("Selam millet!"));
// metin kısa mı - tek satırlık hali
const kisaMi2 = (metin) => metin.length < 10;
console.log(kisaMi2("Selam millet!"));

// en buyuk sayiyi bulur
const enBuyuk = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};
console.log(enBuyuk(10, 5, 8));
console.log(enBuyuk(3, 12, 9));
console.log(enBuyuk(7, 7, 7));

//yukarıda ki kodu tek satırlık yapma

const enBuyuk2 = (a, b, c) => Math.max(a, b, c);
//Math.max() → içine verdiğiniz sayılardan en büyüğünü döner
//return gerekmez çünkü tek satırda direkt sonuç veriyor

//----------------------Örnekler---------------------------------

const selamla1 = (isim3) => {
  console.log(`Merhaba ${isim3}`);
};
selamla1("seyma");

//kare alma

const kareal = (sayi) => {
  karelisayi = sayi * sayi;
  console.log(`sayinin karesi: ${karelisayi}`);
};
kareal(10);

//kare almanınn daha kısa yolu

const kareal2 = (sayi2) => {
  return sayi2 * sayi2;
};
console.log(`sayinin karesi: ${kareal2(4)}`);

//metin uzunluğu

const uzunluk = (metin) => {
  return metin.length < 10;
};
console.log(uzunluk("ben seyma kahveyi seviyorum"));

// buyuk harf yapma

const buyukHarf = (isim4) => {
  return isim4.toUpperCase();
};
console.log(buyukHarf("kahveyi seviyorum"));

//

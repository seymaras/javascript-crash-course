//Ternary (üçlü) operatör, if...else yapısının daha kısa halidir.
// genel yapısı: şart ? doğruysa_yap : yanlışsa_yap

//genel örnek

const yas = 15;

const mesaj = yas >= 18 ? "resit" : "resit değil";
console.log(mesaj);

const mesaj2 = () => (yas >= 18 ? "resit" : "resit değil");
console.log(mesaj2());

//

const selamla = (isim) => {
  return isim ? `merhaba, ${isim}` : "isimsiz kişi";
};

console.log(selamla("rana"));
console.log(selamla());

//
const yas1 = 68;

const resit = yas1 >= 18 ? "resit" : "resit degil";
console.log(yas1);

//
const sayi2 = 15;

const ciftmitekmi = sayi2 % 2 == 0 ? "cift" : "tek";
console.log(ciftmitekmi);
//

const merhaba = (musteri) => {
  return musteri ? `merhaba ${musteri}` : "isimsiz kişi";
};
console.log;

//

const havaDurumu = (sicaklik) => {
  return sicaklik > 25 ? "Hava sicak" : "Hava serin";
};
console.log(havaDurumu(5));

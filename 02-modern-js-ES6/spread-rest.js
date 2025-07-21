//| Operatör   | Anlamı     | Ne Yapıyor?                             | Kullanıldığı Yer                     |
//| ---------- | ---------- | --------------------------------------- | ------------------------------------ |
//| **Spread** | yaymak     | Diziyi ya da objeyi **açıyor**          | Atama, birleştirme                   |
//| **Rest**   | toparlamak | Birden çok değeri **tek diziye toplar** | Fonksiyon parametresi, destructuring |

//spread - ...(yayma)

const dizi1 = [1, 2];
const dizi2 = [3, 4];
const birlesik = [...dizi1, ...dizi2];

console.log(birlesik);

// obje birlestirme

const kisi = { ad: "Rana" };
const bilgiler = { yas: 23, sehir: "Konya" };
const yeniKisi = { ...kisi, ...bilgiler };

console.log(yeniKisi);

// kopyamlama

const orijinal = [10, 20];
const kopya = [...orijinal];

console.log(kopya);

//rest - ...(toplama)

const toplama = (...sayilar3) => {
  console.log(sayilar3);
  return sayilar3.reduce((a, b) => a + b);
};
console.log(toplama(5, 10, 15));

// kalanları bir araya getirir

const [ilk, ...digerleri] = [1, 2, 3, 4];

console.log(ilk);
console.log(digerleri);

//
const user = { ad: "seyma", yas: 23, sehir: "ankara" };
const { ad, ...kalan } = user;
console.log(ad);
console.log(kalan);

//-------------örnekler---------------

const sayilar6 = [1, 2, 3, 4];
const sayilar7 = [5, 6, 7, 8];

const birlesik2 = [...sayilar6, ...sayilar7];
console.log(birlesik2);

//
const user1 = { ad: "seyma", okul: "kto" };
const ekBilgi = { sehir: "istanbul", tatli: "sütlac" };
const profil = { ...user1, ...ekBilgi };

console.log(profil);

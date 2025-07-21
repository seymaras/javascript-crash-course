//Fonksiyona bir parametre verilmezse, onun yerine otomatik bir varsayılan değer kullanmamızı sağlar.
function selamla(isim = "ziyaretci") {
  console.log(`merhaba,${isim}`);
}
//
const karsila = (isim = "Konuk") => {
  console.log(`hos geldin, ${isim}`);
};
karsila("seyma");
karsila();

//Sayı çarpma (eksik parametreyle bile çalışır)
const carp = (a = 1, b = 1) => {
  return a * b;
};

console.log(carp(5, 4));
console.log(carp(7));
console.log(carp());

//tarih bilgisiyle selam verme

const tarihliSelam = (
  isim = "ziyaretci",
  tarih = new Date().toLocaleDateString()
) => {
  console.log(`merhaba ${isim}, bugün tarih:${tarih}`);
};

tarihliSelam("Seyma");
tarihliSelam();

//--------------Örnekler----------------

const mesajYaz = (isim1 = "Gizli Kullanici") => {
  console.log(`Merhaba: ${isim1}`);
};

mesajYaz("Seyma");
mesajYaz();
//

const kargoUcreti = (urunFiyati, oran = 1.2) => {
  const toplam = urunFiyati * oran;
  return toplam;
};
console.log(kargoUcreti(100));
console.log();

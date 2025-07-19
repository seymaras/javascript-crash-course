//Dizi veya objeden kolayca değişken çekme/yakalama yöntemidir.
//Yani uzun uzun isim = kisi.isim yazmak yerine, kısa yoldan değişkenleri parçalarız.

const kullanici = {
  isim: "Rana",
  yas: 23,
  sehir: "Ankara",
};
console.log(kullanici.isim);

const { isim, yas, sehir } = kullanici;
console.log(`Ad: ${isim}, Yaş:${yas}, Şehir:${sehir}`);

//dizi parcalama

const sayilar = [10, 23, 34];

const a = sayilar[0];
const b = sayilar[1];

const [birinci, ikinci, ucuncu] = sayilar;
console.log(birinci);
console.log(ikinci);

//fonksiyonlarda kullanımı

const yazdir = ({ isim, sehir }) => {
  console.log(`${isim} ${sehir}'de yasıyor.`);
};

const kisi = {
  isim: "seyma",
  sehir: "istanbul",
  yas: 23,
};

yazdir(kisi);

//

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

//| Durum                          | Destructuring Uygun mu? | Nasıl kullanılır?       |
//| ------------------------------ | ----------------------- | ----------------------- |
//| Objeden veri çekeceksen        | ✅ Evet                  | `{ key1, key2 } = obje` |
//| Diziden eleman çekeceksen      | ✅ Evet                  | `[a, b] = dizi`         |
//| Fonksiyon parametresi obje ise | ✅ Evet                  | `function({ a, b }) {}` |
//| Sadece 1-2 veri lazımken       | ✅ Harika olur           | Atlayarak alabilirsin   |

const kisi1 = {
  ad: "rana",
  sehir2: "eskisehir",
};
const { ad, sehir2 } = kisi1;
console.log(kisi1);

//--------------------Örnek-------------------

//1
const ogrenci = {
  ad3: "Rana",
  yas3: 22,
  hobiler: ["kitap", "yüzme", "kodlama"],
};
const { ad3, yas3, hobiler } = ogrenci;

console.log(ogrenci);

//2
const use = {
  ad4: "seyma",
  mail2: "hello@gmsil.com",
};
const { ad4, mail2 } = use;

//?? operatörü, değişkenin null veya undefined olup olmadığını kontrol eder.

//❗ Eğer değişken null veya undefined ise, sağdaki değeri kullanır
//❗ Değilse (yani doluysa), kendi değerini korur
//Eğer bu değer yoksa, onun yerine şunu kullan.

const kullaniciAdi = null;
const ad = kullaniciAdi ?? "Ziyaretci";
console.log(ad);

//tanımlıysa göster, değilse yedeği gösteriri yani Ankara

const sehir = undefined;
const secilenSehir = sehir ?? "Ankara";
console.log(secilenSehir);
console.log();
//

//Ne Zaman Kullanılır?
//Opsiyonel veri geldiğinde

//API’den gelen değer boşsa varsayılan göster

//null/undefined’ı kontrol etmek istediğinde

//false, 0, "" gibi değerleri geçerli saymak istiyorsan ?? çok idealdir

const kullaniciAdi2 = getUserInput(); // undefined geldi mesela

const isim = kullaniciAdi2 ?? "İsimsiz kullanıcı";

console.log(isim);

//Eğer kullanıcı boş bıraktıysa: "İsimsiz kullanıcı" yazılır
//✅ Eğer kullanıcı adını girdiyse: o yazılır

const puan = 0;

console.log(puan || 100); // 100 ❌ yanlış
console.log(puan ?? 100); // 0 ✅ doğru

// || operatörü, 0 gibi değerleri de “yok” sayar.

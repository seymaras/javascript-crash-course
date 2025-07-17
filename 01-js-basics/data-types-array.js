const meyveler = ["elma", "cilek", "muz"];

console.group(meyveler[1]);

//| Fonksiyon    | Açıklama                                |
//| ------------ | --------------------------------------- |
//| `push()`     | Diziye **sona** eleman ekler            |
//| `pop()`      | **Son elemanı** siler                   |
//| `unshift()`  | **Başa** eleman ekler                   |
//| `shift()`    | **İlk elemanı** siler                   |
//| `length`     | Dizi uzunluğunu verir                   |
//| `includes()` | Eleman var mı kontrol eder              |
//| `indexOf()`  | Elemanın index’ini verir                |
//| `join()`     | Dizi elemanlarını string'e çevirir      |
//| `reverse()`  | Diziyi ters çevirir                     |
//| `sort()`     | Diziyi sıralar (alfabetik veya sayısal) |

const bosDizi = [];
const sayiler = [1, 2, 3, 4];
const karisik = ["Rana", 32, true];

const renkler = ["kirmizi", "pempe", "siyah"];
renkler.push("mavi");
renkler.unshift("beyaz");
renkler.sort();
renkler.reverse();
console.log(renkler);

//örnek- Dizi Oluşturma ve Erişim
const renkler1 = ["kirmizi", "mavi", "yesil"];
console.log(renkler1[0]);

mavirenk = renkler1[1];
console.log(renkler1[1]);

//örnek- Eleman Ekleme ve Silme

const hobiler = ["spor", "yuzme", "yürüyüş"];

hobiler.push("gezmek");
console.log(hobiler);
hobiler.pop();
console.log(hobiler);

//örnek- Dizi Uzunluğu

const sayi1 = [1, 2, 3, 4, 5, 6, 7, 8];
const uzunluk = sayi1.length;

console.log(`dizinin uzunlugu: ${uzunluk}`);

sayi1.reverse();
console.log(sayi1);

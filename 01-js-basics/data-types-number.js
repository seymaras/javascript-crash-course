//ondalık sayı hataları
console.log(0.1 + 0.2); //cıktı 0.30000000000000004
console.log((0.1 + 0.2).toFixed(3)); //cıktı false

//| Fonksiyon              | Açıklama                     |
//| ---------------------- | ---------------------------- |
//| `Math.round(x)`        | En yakın tam sayıya yuvarlar |
//| `Math.ceil(x)`         | Yukarı yuvarlar (tavana)     |
//| `Math.floor(x)`        | Aşağı yuvarlar (tabana)      |
//| `Math.abs(x)`          | Mutlak değer                 |
//| `Math.random()`        | 0 ile 1 arası rasgele sayı   |
//| `Math.max(...sayılar)` | En büyük değeri bulur        |
//| `Math.min(...sayılar)` | En küçük değeri bulur        |

const puan = 23.43;

console.log(Math.round(puan));
console.log(Math.ceil(puan));
console.log(Math.floor(puan));

//string sayıya cevirme
const metin = "42";
const sayi = Number(metin);
const sayi2 = parseInt("3.14");
console.log(sayi2);

//sayıdan stringe cevirme
const yas = 21;
const metinYas = yas.toString(); // "21"

//| Değer       | Açıklama                       |
//| ----------- | ------------------------------ |
//| `NaN`       | "Not a Number" → Geçersiz sayı |
//| `Infinity`  | Sonsuz (örneğin 1/0)           |
//| `-Infinity` | Negatif sonsuz                 |

//isNaN(x) ile bir şey sayı mı değil mi diye kontrol edilebilir

console.log(5 / "elma");

console.log(1 / 0);

//if (kosul) {
//} else {
//}

const yas = 2;

if (yas >= 18) {
  console.log("reşit");
} else console.log("resit değil");

//

const not = 90;

if (not >= 90) {
  console.log("AA");
} else if (not >= 80) {
  console.log("BB");
} else if (not >= 70) {
  console.log("CC");
} else {
  console.log("daha yüksek alabilirdin");
}

// Karşılaştırma Operatörleri
//| Operatör | Açıklama            | Örnek (`true` verir) |
//| -------- | ------------------- | -------------------- |
//| `===`    | eşit mi (tip dahil) | `5 === 5`            |
//| `!==`    | eşit değil mi       | `"elma" !== "armut"` |
//| `>`      | büyük mü?           | `10 > 5`             |
//| `<`      | küçük mü?           | `2 < 3`              |
//| `>=`     | büyük veya eşit     | `7 >= 7`             |
//| `<=`     | küçük veya eşit     | `3 <= 4`             |

// Mantıksal Operatörler
//| Operatör | Anlamı                 | Örnek                        |                           |            |   |                  |
//| -------- | ---------------------- | ---------------------------- | ------------------------- | ---------- | - | ---------------- |
//| `&&`     | VE – ikisi de doğruysa | `yas > 18 && uyruk === "TR"` |                           |            |   |                  |
//| \`       |                        | \`                           | VEYA – biri bile doğruysa | \`not > 90 |   | bonus === true\` |
//| `!`      | DEĞİL – tersini alır   | `!girisYapildiMi`            |                           |            |   |                  |

// yas kontrolu

const yas2 = 16;

if (yas2 < 0) {
  console.log("gecersiz yas");
} else if (yas2 >= 0 && yas2 <= 12) {
  console.log("cocuk");
} else if (yas2 >= 13 && yas2 <= 17) {
  console.log("ergen");
} else {
  console.log("yetişkin");
}

//sayı pozitif mi negatif mi
const sayi3 = -4;

if (sayi3 > 0) {
  console.log("pozitif");
} else {
  console.log("negatif");
}

//switch - Genellikle çok sayıda eşitlik karşılaştırması (örn. if (x === ...)) yapacağımız zaman kullanılır.

const gun = "pazartesi";

switch (gun) {
  case "pazartesi":
    console.log("haftanın ilk günü");
    break;
  case "cuma":
    console.log("haftasonuna az kaldı");
    break;
  case "pazar":
    console.log("yarın pazartesi :(");
    break;

  default:
    console.log("sıradan bir gün");
}
//Eğer break yazmazsak, eşleşen case’den sonraki tüm case’ler çalışmaya devam eder.
//default ne işe yarar?
// - Hiçbir case eşleşmezse devreye girer.
// - else gibidir

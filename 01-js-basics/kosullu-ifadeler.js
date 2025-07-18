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

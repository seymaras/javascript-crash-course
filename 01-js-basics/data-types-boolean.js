// true ve false

const yas = 23;

console.log(yas > 18);
console.log(yas < 18);
console.log(yas >= 18);
console.log(yas <= 18);
console.log(yas == 18);
console.log(yas != 18);

//| Operatör | Anlamı                                 |
//| -------- | -------------------------------------- |
//| `===`    | eşittir (hem değer hem tip) ✅ önerilen |
//| `!==`    | eşit değil                             |
//| `>`      | büyük mü?                              |
//| `<`      | küçük mü?                              |
//| `>=`     | büyük veya eşit mi?                    |
//| `<=`     | küçük veya eşit mi?                    |

const girisYaptiMi = false;

if (girisYaptiMi) {
  console.log("Hoşgeldiniz");
} else {
  console.log("Lütfen giriş yapınız");
}

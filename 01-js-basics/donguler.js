for (let i = 0; i < 5; i++) {
  console.log("merhaba" + i);
}
// i = 0 → başlangıç
//i < 5 → döngü bu şart doğru olduğu sürece devam eder
//i++ → her seferinde i bir artar
//"Merhaba 0" → "Merhaba 4" yazdırır

//while döngü- Ne kadar döneceği önceden belli değilse ya da farklı koşullar varsa kullanılır.

let sayac = 0;
while (sayac < 3) {
  console.log("sayi:", sayac);
  sayac++;
}

//for...of döngüsü- Sadece diziler ve benzeri yapılar (array, string) üzerinde çalışır.
// Dizilerdeki her elemanı sırayla almak için kullanılır.Elemanın kendisini verir (index vermez).

const meyveler = ["elma", "muz", "cilek"];
for (const meyve of meyveler) {
  console.log(meyve);
}

//forEach()- dizilere özgü bir fonksiyondur. Her eleman için verilen fonksiyonu çalıştırır

const sayilar = [1, 2, 3];

sayilar.forEach((sayi, index) => {
  console.log(`${index + 1}. sayi: ${sayi}`);
});

//ornek

const sayi1 = 0;

for (i = 0; i < 5; i++) {
  console.log(sayi1 + i);
}

//

const isim2 = ["Rana", "Şeyma", "Ahmet"];
for (const isim of isim2) {
  console.log("Merhaba:", isim);
}
//
const isim = ["Rana", "Şeyma", "Ahmet"];

for (i = 0; i < 3; i++) {
  console.log(`Merhaba, ${isim[i]}`);
}

//cift sayıları yazdır
const ciftsayi = [12, 22, 9, 40, 7, 18];

for (let i = 0; i < ciftsayi.length; i++) {
  if (ciftsayi[i] % 2 === 0) {
    console.log("cift sayi");
  } else {
    console.log("tek sayi");
  }
}

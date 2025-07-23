//pure function (saf fonskiyon)

//1. Aynı girdi verildiğinde aynı çıktıyı verir
//2. Dış dünyaya bağımlı değilse (örn: dışarıdan veri almıyorsa)
//3. Sadece kendisine verilen parametreleri kullanır

const topla = (a, b) => {
  return a + b;
};
console.log(topla(2, 3)); // 5
console.log(topla(2, 3)); // 5 (her zaman aynı)

//saf olmayan fonksiyon örneği

let sayac = 0;
const artir = () => {
  sayac++;
  return sayac;
};

//Dış dünyadaki sayac değişkenine müdahale ediyor
//Her çağırmada farklı sonuç döner

//immutability
//Bir veriyi doğrudan değiştirmek yerine, kopyasını alıp onu değiştirmektir.
//Böylece orijinal veri bozulmaz. Özellikle React gibi yapılarda bu hayati önem taşır.

//Diziyi direkt değiştirdik. Bu mutable.
const kisiler = ["ali", "veli", "ayşe"];
kisiler.push("mehmet");

console.log(kisiler);

//immutable iicn örnek

const kisiler2 = ["rana", "seyma"];
const yeniKisiler = [...kisiler2, "ali"]; //orjinalini bozmadan yenisini ürettik

console.log(kisiler);
console.log(yeniKisiler);

//obje örneği
const kisi = { ad: "Rana", yas: 20 };

const yeniKisi = { ...kisi, yas: 21 };

console.log(kisi); // { ad: "Rana", yas: 20 }
console.log(yeniKisi); // { ad: "Rana", yas: 21 }

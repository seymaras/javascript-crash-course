const isim = "Rana ve Şeyma";
const sehir = "İstanbul";

//``: ${...} seklinde js calıştırmamızı saglar
const mesaj2 = `Merhaba ${isim}`;
const mesaj = `Merhaba ${3 + 4}`;
const mesaj1 = "Merhaba ${3 + 4}";
console.log(mesaj);
console.log(mesaj1);
console.log(mesaj2);

console.log(isim.length);
console.log(isim.toUpperCase());
console.log(isim.toLowerCase());

// Locale ekleyince bilgisayarında ki diline göre kücültme yapar Ş yi s olarak yapar mesela
console.log(isim.toLocaleUpperCase());
console.log(isim.toLocaleLowerCase());

//split: stringi parçalara ayırır. yani ['Rana', 've', 'Şeyma'] olarak ayırır.
console.log(isim.split(" "));

// aşağıda ki yapılan iki işlem aynı fakat sıralaması farklı olduğu için farklı işlemler yapmamız gerekiyor

console.log(isim.toUpperCase().split(" ")); // bu islem daha efektif
console.log(isim.split(" ").map((isim) => isim.toUpperCase()));

// Hem searchString, hem de isim toLocaleLowerCase yapıyoruz çünkü büyük küçük harf duyarlılığı var.
// includes: string içinde arama yapar.
const searchString = "ŞeYMa ";
console.log(
  isim.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
);

// replace: stringi değiştirir.
console.log(isim.replace("Rana", "Mehmet"));
console.log(isim);

console.log(isim.slice(0, 4));
console.log(isim.slice(-5));

console.log(
  isim.toLocaleLowerCase().includes(searchString.toLocaleLowerCase().trim())
);

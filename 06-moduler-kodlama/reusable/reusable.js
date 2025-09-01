// bir fonksiyon yalnızca tek bir iş yapar ve farklı yerlerde tekrar tekrar kullanılabilir
//kod kopyalayıp yapıştırmaktan kurtuluruz

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function kareAl(sayi) {
  return sayi * sayi;
}
console.log(kareAl(5));

function mesajYaz(isim, yaz) {
  return `Merhaba ${isim}, ${yas} yasıncdasın`;
}
console.log(mesajYaz("Seyma", 23));

function ortalama(arr) {
  if (arr.length === 0) return 0;
  let toplam = arr.reduce((a, b) => a + b, 0);
  return toplam / arr.length;
}
console.log(ortalama([10, 20, 30, 40, 50]));

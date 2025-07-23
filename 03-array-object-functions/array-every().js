//Dizi içindeki tüm elemanlar koşulu sağlıyorsa true döner.
//Bir tanesi bile sağlamazsa → false.

//yapsı - dizi.every((eleman) => kosul)

const sayilar = [2, 4, 6, 8];

const hepsiCiftMi = sayilar.every((sayi) => sayi % 2 === 0);

console.log(hepsiCiftMi); // true

//

const notlar = [70, 85, 92, 49];

const hepsiBasariliMi = notlar.every((not) => not >= 50);

console.log(hepsiBasariliMi); //  false

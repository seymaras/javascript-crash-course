const sayilar = [1, 2, 3];
const [a, b, c] = sayilar;

console.log(a);
console.log(b);
console.log(c);

//ilk elemznı al

const renkler = ["mavi", "pembe", "sari", "kirmizi"];

const [ilk, ikinci] = renkler;

console.log(ilk);
console.log(ikinci);
//
const karakterler = ["Harry", "Hermione", "Ron", "dumbledore"];

const [, , ucuncu, dorduncu] = karakterler;
console.log(ucuncu);
console.log(dorduncu);

//
const sayilar1 = [10, 20, 30, 40, 50];

const [birinci, ...geriKalan] = sayilar1;

console.log(birinci);
console.log(geriKalan);

// ... - kalan veriyi toplae

const sayilar2 = [3, 6];

const [x, y] = sayilar2;
console.log(x + y);

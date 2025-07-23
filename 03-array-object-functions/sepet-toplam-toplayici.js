const sepet = [
  { urun: "Elma", adet: 3, fiyat: 5 },
  { urun: "Ekmek", adet: 2, fiyat: 7 },
  { urun: "Süt", adet: 1, fiyat: 15 },
];

const urunToplamlari = sepet.map((urun) => {
  return urun.adet * urun.fiyat;
});

console.log(urunToplamlari);

const toplamTutar = urunToplamlari.reduce((acc, tutar) => acc + tutar, 0);
console.log(`sepet tutari: ${toplamTutar} TL`);

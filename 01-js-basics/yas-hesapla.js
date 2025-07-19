const yasHesapla = (dogumYil) => {
  const simdikiYil = new Date().getFullYear();
  return simdikiYil - dogumYil;
};
console.log(`Yaşınız: ${yasHesapla(2002)}`);

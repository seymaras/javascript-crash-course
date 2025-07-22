//Bazı durumlarda, bir objenin içindeki alanlara ulaşmak isteriz ama emin olamayız:
//acaba o alan gerçekten var mı? iç içe alanlar var mı?

//Eğer olmayan bir şeye nokta (.) ile ulaşmaya çalışırsak, JavaScript hata fırlatır.
//İşte burada ?. devreye girer.

const kullanici = {
  ad: "Seyma",
  adres: {
    sehir: "istanbul",
  },
};
console.log(kullanici.ad);
console.log(kullanici.adres.sehir);
console.log(kullanici?.adres?.sehir); // İstanbul
console.log(kullanici?.email?.adres); // undefined

//

const kisi = {
  ad: "Seyma",
  selamVer: () => {
    console.log("merhaba ben seyma");
  },
};

kisi?.selamVer?.();

//özellik (property) ekleme

const kisi = {
  ad: "melike",
  sehir: "ankara",
};

kisi.yas = 25;
console.log(kisi);

// update

kisi.sehir = "istanbul";
console.log(kisi);

// delete

delete kisi.yas;
console.log(kisi);

//obje icinde obje

const kullanici = {
  ad: "seyma",
  iletisim: {
    email: "jsgdhs@gmail.com",
    telefon: "5555555555",
  },
};
kullanici.iletisim.email = "seyma@gmail.com";

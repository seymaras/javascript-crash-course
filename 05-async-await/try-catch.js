try {
  //hata cıkabilir
} catch (error) {
  //hata olursa burası calısır
}

try {
  let sayi = 10;
  console.log(sayi / 2);
  console.log(bilinmeyen);
} catch (error) {
  console.log("bir hata oluştu:", error.message);
}
console.log("program devam ediyor");

// async, await, try/catch

async function veriCek() {
  try {
    let res = await fetch("https://yanlis-link.com/api"); //hatalı link
    let data = await res.json();
    console.log("veri", data);
  } catch (error) {
    console.log("hata yakalandı:", error.message);
  }
}
veriCek();

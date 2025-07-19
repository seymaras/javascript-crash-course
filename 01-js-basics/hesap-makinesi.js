const hesapla = (a, b, islem) => {
  if (islem === "topla") {
    return a + b;
  } else if (islem === "cikar") {
    return a - b;
  } else if (islem === "carp") {
    return a * b;
  } else {
    return a / b;
  }
};
console.log(hesapla(6, 7, "topla"));
console.log(hesapla(6, 7, "cikar"));
console.log(hesapla(6, 7, "carp"));
console.log(hesapla(6, 7, "bol"));

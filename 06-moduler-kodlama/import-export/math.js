// export: bir dosyadan başka dosyaya fonksiyon, değişken, class göndermek

/* export */ function topla(a, b) {
  return a + b;
}

/* export */ function carp(a, b) {
  return a * b;
}

module.exports = { topla, carp };

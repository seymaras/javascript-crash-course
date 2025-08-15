const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null; // EKSİKTİ: eklendi
let operator = null;
let waitingForSecondValue = false;

function updateDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", (e) => {
  const btn = e.target;
  if (!btn.matches("button")) return;

  const value = btn.value;

  if (value === "clear") {
    // AC: her şeyi sıfırla
    displayValue = "0";
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
    updateDisplay();
    return;
  }

  if (value === ".") {
    inputDecimal();
    updateDisplay();
    return;
  }

  if (["+", "-", "*", "/", "="].includes(value)) {
    handleOperator(value);
    updateDisplay();
    return;
  }

  // Rakam
  inputNumber(value);
  updateDisplay();
});

function inputNumber(num) {
  if (waitingForSecondValue) {
    // Operatörden sonra yeni sayı başlat
    displayValue = num;
    waitingForSecondValue = false;
  } else {
    // Başta 0 varsa, ilk rakam 0'ı değiştirir
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
}

function inputDecimal() {
  if (waitingForSecondValue) {
    // Operatörden hemen sonra nokta gelirse 0. ile başlat
    displayValue = "0.";
    waitingForSecondValue = false;
    return;
  }
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function calculate(first, second, op) {
  if (op === "+") return first + second;
  if (op === "-") return first - second;
  if (op === "*") return first * second;
  if (op === "/") return first / second;
  // Operatör yoksa ikinciyi döndür (ör. ilk giriş)
  return second;
}

function handleOperator(nextOperator) {
  const value = parseFloat(displayValue); // DÜZELTME: parseFloat (F büyük)

  // Üst üste operatör basıldıysa sadece değiştir
  if (operator && waitingForSecondValue) {
    operator = nextOperator;
    return;
  }

  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);
    // Sonucu kontrollü göster (gereksiz 0'ları atmak için parseFloat)
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstValue = result;
  }

  waitingForSecondValue = true;
  operator = nextOperator;

  // "=" sonrası yeni işleme temiz başlamak için sıfırla
  if (nextOperator === "=") {
    operator = null;
    waitingForSecondValue = false;
    firstValue = null;
  }
}

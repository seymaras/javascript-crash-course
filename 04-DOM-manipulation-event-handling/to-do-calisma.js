const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const liste = document.getElementById("todoList");

// 🔹 Görev ekleme işlemi
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const girilenGorev = input.value.trim();

  if (girilenGorev !== "") {
    const yeniGorev = document.createElement("li");

    yeniGorev.innerHTML = `
      ${girilenGorev}
      <button class="silBtn">Sil</button>
    `;

    liste.appendChild(yeniGorev);
    input.value = "";
  }
});

// 🔹 Event Delegation → listeye tıklama olayını sadece 1 kez tanımlıyoruz
liste.addEventListener("click", function(e) {
  if (e.target.classList.contains("silBtn")) {
    const silinecekGorev = e.target.parentElement;
    silinecekGorev.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("tamamlandi");
  }
});

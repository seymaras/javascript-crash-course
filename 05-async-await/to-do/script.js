const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todolist = document.getElementById("todolist");

window.addEventListener("DOMContentLoaded", loadTasks);

function gorevEkle(giris, kaydet = true) {
  if (!giris) {
    alert("Günlük görevini gir, disiplinli kal :)");
    return;
  }

  const li = document.createElement("li");
  li.textContent = giris;

  const silBtn = document.createElement("button");
  silBtn.textContent = "🗑️";
  silBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    li.remove();
    removeTask(giris); // localStorage’dan da sil
  });
  li.appendChild(silBtn);

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  todolist.appendChild(li);

  // localStorage’a kaydet
  if (kaydet) {
    saveTask(giris);
  }
  input.value = "";
  console.log("Yeni Görev: ", giris);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const giris = input.value.trim();
  gorevEkle(giris);
});

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const giris = input.value.trim();
    gorevEkle(giris);
  }
});

// LocalStorage’a kaydet
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// LocalStorage’tan sil
function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Sayfa açıldığında yükle
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => gorevEkle(task, false));
}

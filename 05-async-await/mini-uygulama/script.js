const btn = document.getElementById("btn");
const userIdInput = document.getElementById("userId");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

// Küçük yardımcılar
function setStatus(text, type = "") {
  statusEl.className = `status ${type}`;
  statusEl.textContent = text || "";
}
function setResult(obj) {
  resultEl.textContent = obj ? JSON.stringify(obj, null, 2) : "";
}

// Timeout'lu fetch (AbortController ile)
async function fetchWithTimeout(url, ms = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchUserById(id) {
  // 1) Giriş kontrolü
  if (!id || Number.isNaN(Number(id))) {
    throw new Error("Geçerli bir kullanıcı ID'si girin (örn. 1-10).");
  }

  // 2) İstek
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await fetchWithTimeout(url, 7000);

  // 3) HTTP hatası kontrolü
  if (!res.ok) {
    throw new Error(`HTTP Hatası: ${res.status} ${res.statusText}`);
  }

  // 4) JSON parse
  const data = await res.json();

  // 5) Boş veri kontrolü
  if (!data || !data.id) {
    throw new Error("Veri bulunamadı.");
  }
  return data;
}

btn.addEventListener("click", async () => {
  setStatus("⏳ Yükleniyor...", "");
  setResult(null);
  try {
    const id = userIdInput.value.trim();
    const user = await fetchUserById(id);
    setStatus("✅ Başarılı!", "ok");
    setResult(user);
  } catch (error) {
    if (error.name === "AbortError") {
      setStatus("⏱️ Zaman aşımı. Lütfen tekrar deneyin.", "err");
    } else {
      setStatus("⚠️ " + error.message, "err");
    }
    setResult(null);
    // İsterseniz debug için:
    // console.error(error);
  }
});

const cForm = document.getElementById("c-form");
const cQuery = document.getElementById("c-query");
const cStatus = document.getElementById("c-status");
const cList = document.getElementById("c-list");
const cDetail = document.getElementById("c-detail");

function setStatus(text, type = "") {
  cStatus.className = `status ${type}`;
  cStatus.textContent = text || "";
}
function setList(html) {
  cList.innerHTML = html || "";
}
function setDetail(html) {
  cDetail.innerHTML = html || "";
}

function countryItemTemplate(c) {
  const name = c.name?.common ?? "-";
  const region = c.region ?? "-";
  const pop = c.population?.toLocaleString?.("tr-TR") ?? "-";
  const flag = c.flags?.png ?? "";
  const cca3 = c.cca3 ?? "";
  return `
    <li class="country" data-cca3="${cca3}" title="detayı görmek için tıklayın">
      <img src="${flag}" alt="Bayrak" />
      <div>
        <div><strong>${name}</strong></div>
        <div class="meta">${region} • Nüfus: ${pop}</div>
      </div>
    </li>
  `;
}

async function fetchWithTimeout(url, ms = 10000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

cForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = cQuery.value.trim();
  setDetail("");

  if (!q) {
    setStatus("Lütfen bir ülke adı giriniz", "err");
    setList("");
    return;
  }

  setStatus("⏳ Yükleniyor...");
  setList("");

  try {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
      q
    )}?fields=name,cca3,capital,region,population,flags`;
    const res = await fetchWithTimeout(url, 10000);

    if (!res.ok)
      throw new Error(`HTTP Hatası: ${res.status} ${res.statusText}`);

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      setStatus("Sonuç bulunamadı.", "err");
      return;
    }

    setStatus(`✅ ${data.length} sonuç bulundu.`, "ok");
    setList(data.map(countryItemTemplate).join(""));
  } catch (err) {
    if (err.name === "AbortError") {
      setStatus("⏱️ Zaman aşımı. Tekrar deneyin.", "err");
    } else {
      setStatus("⚠️ " + err.message, "err");
    }
  }
});

cList.addEventListener("click", async (e) => {
  const li = e.target.closest("li.country");
  if (!li) return;

  const cca3 = li.dataset.cca3; // ✅ düzeltildi
  if (!cca3) return;

  setStatus("⏳ Yükleniyor...");
  setDetail("");

  try {
    const url = `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,capital,region,population,flags,languages,borders`;
    const res = await fetchWithTimeout(url, 10000);

    if (!res.ok) throw new Error(`HTTP Hatası: ${res.status}`);
    const [c] = await res.json();

    const name = c.name?.common ?? "-";
    const capital = Array.isArray(c.capital) ? c.capital.join(", ") : "-"; // ✅
    const region = c.region ?? "-";
    const pop = c.population?.toLocaleString("tr-TR") ?? "-";
    const flag = c.flags?.png ?? "";
    const langs = c.languages ? Object.values(c.languages).join(", ") : "-";

    let neighborsHtml = "";
    if (Array.isArray(c.borders) && c.borders.length > 0) {
      try {
        const nUrl = `https://restcountries.com/v3.1/alpha?codes=${c.borders.join(
          ","
        )}&fields=name,cca3`;
        const nRes = await fetchWithTimeout(nUrl, 10000);
        const nData = await nRes.json();
        neighborsHtml = nData.map((n) => n.name?.common).join(", ");
      } catch {
        neighborsHtml = "Alınamadı";
      }
    } else {
      neighborsHtml = "Komşu yok";
    }

    setDetail(`
        <div class="detail-card">
          <img src="${flag}" alt="Bayrak" />
          <h3>${name}</h3>
          <p><strong>Bölge:</strong> ${region}</p>
          <p><strong>Başkent:</strong> ${capital}</p>
          <p><strong>Nüfus:</strong> ${pop}</p>
          <p><strong>Diller:</strong> ${langs}</p>
          <p><strong>Komşular:</strong> ${neighborsHtml}</p>
        </div>
      `);
    setStatus("✅ Detay yüklendi.", "ok");
  } catch (err) {
    if (err.name === "AbortError") {
      setStatus("⏱️ Detay isteği zaman aşımına uğradı.", "err");
    } else {
      setStatus("⚠️ " + err.message, "err");
    }
  }
});

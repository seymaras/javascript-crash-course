const btn = document.getElementById("btn"); // Ara butonu
const statusEl = document.getElementById("status"); // Durum mesajı
const list = document.getElementById("list"); // Film listesi
const detailContainer = document.getElementById("detail-container"); // Film detay alanı
const detail = document.getElementById("detail"); // Overlay içindeki detay
const queryInput = document.getElementById("query"); // Arama input'u

const API_KEY = "1cf196f62dfd06806a74b9d6d6132078";

function posterUrl(poster_path, size = 200) {
  if (poster_path) {
    return `https://image.tmdb.org/t/p/w${size}${poster_path}`;
  } else {
    return "https://via.placeholder.com/200x300?text=No+Image";
  }
}

function setStatus(text, type = "ok") {
  statusEl.innerText = text;
  statusEl.className = type;
}

function setList(html) {
  list.innerHTML = html;
}

function setDetail(html) {
  detail.innerHTML = html;
}

btn.addEventListener("click", async function() {
  try {
    const q = queryInput.value.trim();

    if (!q) {
      setStatus("Lütfen bir film adı girin", "err");
      return;
    }
    await searchMovies(q);
  } catch (err) {
    setStatus("⚠️ " + err.message, "err");
  }
});

async function searchMovies(q) {
  try {
    setStatus("🔎 Aranıyor…", "loading");
    setList("");
    detailContainer.innerHTML = "";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("HTTP" + res.status);
    }

    const data = await res.json();

    const results = data.results || [];
    if (results.length === 0) {
      setStatus("Film bulunamadı", "err");
      return;
    }

    const html = results
      .map((movie) => {
        const year = movie.release_date ? movie.release_date.slice(0, 4) : "-";
        return `
      <li class="movie" data-id="${movie.id}">
          <img src="${posterUrl(movie.poster_path, 200)}" alt="${
          movie.title
        }" />
          <div>
            <h3>${movie.title}</h3>
            <p>${year}</p>
          </div>
        </li>
        `;
      })
      .join("");

    setList(html);
    setStatus(`✅ ${results.length} sonuç bulundu`, "ok");
  } catch (err) {
    setStatus("⚠️ " + err.message, "err");
  }
}

async function fetchMovieDetail(id) {
  try {
    setStatus("🔎 Film detayı alınıyor…", "loading");

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=tr-TR`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("HTTP" + res.status);
    }
    const data = await res.json();

    const year = data.release_date ? data.release_date.slice(0, 4) : "-";
    const html = `
      <div class="movie-detail">
        <img src="${posterUrl(data.poster_path, 300)}" alt="${data.title}" />
        <div>
          <h2>${data.title} (${year})</h2>
          <p><strong>⭐ Puan:</strong> ${data.vote_average}</p>
          <p><strong>📖 Açıklama:</strong> ${data.overview ||
            "Açıklama yok."}</p>
        </div>
      </div>
    `;

    // 5. Ekrana bas
    setDetail(html);
    document.getElementById("overlay").style.display = "flex";
    setStatus("✅ Detay yüklendi", "ok");
  } catch (err) {
    setStatus("⚠️ " + err.message, "err");
  }
}

list.addEventListener("click", async function(e) {
  try {
    const li = e.target.closest("li.movie");
    if (!li) return;

    const movieId = li.dataset.id;
    if (!movieId) return;
    await fetchMovieDetail(movieId);
  } catch (err) {
    setStatus("⚠️ " + err.message, "err");
  }
});

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target.id === "overlay") {
    this.style.display = "none"; // sadece dışına tıklayınca kapat
  }
});

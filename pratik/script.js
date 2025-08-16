const timeEl = document.querySelector(".time");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnLap = document.getElementById("lap");
const btnReset = document.getElementById("reset");
const lapsEl = document.getElementById("laps");

let startTime = null;
let elapsed = 0;
let timerId = null; // <-- isim tekilleştirildi (timerId)
let laps = [];
let lastLapMs = 0; // (şimdilik gerek yok ama kalsın)

function formatTime(ms) {
  const totalCs = Math.floor(ms / 10); // <-- floor düzeltildi
  const cs = totalCs % 100;
  const totalSec = Math.floor(totalCs / 100);
  const s = totalSec % 60;
  const m = Math.floor(totalSec / 60);

  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  const cc = String(cs).padStart(2, "0");
  return `${mm}:${ss}.${cc}`;
}

function render(ms) {
  timeEl.textContent = formatTime(ms);
}

function setButtons({ running }) {
  btnStart.disabled = running;
  btnPause.disabled = !running; // <-- disabled düzeltildi
  btnReset.disabled = !running && elapsed === 0;
  btnLap.disabled = !running;
}

function start() {
  if (timerId !== null) return; // <-- timerId tutarlı
  startTime = Date.now();
  timerId = setInterval(() => {
    const now = Date.now();
    const current = now - startTime + elapsed;
    render(current);
  }, 10);
  setButtons({ running: true });
}

function pause() {
  if (timerId === null) return;
  clearInterval(timerId);
  timerId = null;
  elapsed = Date.now() - startTime + elapsed;
  startTime = null;
  setButtons({ running: false });
}

function reset() {
  clearInterval(timerId);
  timerId = null;
  startTime = null;
  elapsed = 0;

  laps = [];
  lastLapMs = 0;
  lapsEl.innerHTML = "";

  render(0);
  setButtons({ running: false });
}

function addLap() {
  const now = timerId ? Date.now() - startTime + elapsed : elapsed;
  laps.unshift(now);
  renderLaps();
}

function renderLaps() {
  if (laps.length === 0) {
    lapsEl.innerHTML = "";
    return;
  }
  const totalCount = laps.length;
  const items = laps
    .map((t, idx) => {
      const prevTotal = laps[idx + 1] ?? 0;
      const split = t - prevTotal;
      const lapNo = totalCount - idx;
      return `
        <li>
          <strong>Tur ${lapNo}</strong>
          <div style="display:flex; justify-content:space-between;">
            <span>Toplam: ${formatTime(t)}</span>
            <span>Tur farkı: ${formatTime(split)}</span>
          </div>
        </li>
      `;
    })
    .join("");
  lapsEl.innerHTML = items;
}

// ---- EVENTLER ----
btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
btnLap.addEventListener("click", addLap);

// İlk ekran
render(0);
setButtons({ running: false });

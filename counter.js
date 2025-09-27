// ===== Countdown jusqu'à l'évènement =====
const target = new Date('2025-10-04T13:00:00');
const dd = document.getElementById('dd');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');
function tick() {
    const now = new Date();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24)); diff -= d * 24 * 60 * 60 * 1000;
    const h = Math.floor(diff / (1000 * 60 * 60)); diff -= h * 60 * 60 * 1000;
    const m = Math.floor(diff / (1000 * 60)); diff -= m * 60 * 1000;
    const s = Math.floor(diff / 1000);
    dd.textContent = String(d).padStart(2, '0');
    hh.textContent = String(h).padStart(2, '0');
    mm.textContent = String(m).padStart(2, '0');
    ss.textContent = String(s).padStart(2, '0');
}
tick();
setInterval(tick, 1000);
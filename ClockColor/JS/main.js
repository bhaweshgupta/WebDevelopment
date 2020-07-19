var d, h, m, s, clock, clor;

function tick() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  if (h <= 9) {
    h = '0' + h;
  }
  if (m <= 9) {
    m = '0' + m;
  }
  if (s <= 9) {
    s = '0' + s;
  }

  clock = h + ':' + m + ':' + s;
  clor = '#' + h + m + s;
  document.getElementById('clock').innerHTML = clock;
  document.body.style.background = clor;
  setTimeout(tick, 1000);
}

tick();

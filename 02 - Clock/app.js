const ROTATION_DEGREE = 6;
// getting all hands of clock from html through id
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  const now = new Date();

  //setting the actual seconds minutes and hour in clock

  const ms = now.getMilliseconds() * ROTATION_DEGREE;
  const hh = now.getHours() * 30;
  const mm = now.getMinutes() * ROTATION_DEGREE;
  const ss = now.getSeconds() * ROTATION_DEGREE + ms / 1000;

  //changing the degrees in the style as per the time

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1);

const clock = document.querySelector(".clock");
const hourHand = clock.querySelector(".hour-hand");
const minHand = clock.querySelector(".min-hand");
const secondHand = clock.querySelector(".second-hand");

for (let i = 0; i < 12; i++) {
  const tick = document.createElement("div");
  tick.classList.add("hour-indicator");

  //computing angles
  const angle = (360 / 12) * i;
  tick.style.transform = `rotate(${angle}deg)
                            translateY(-155px)`;
  clock.appendChild(tick);
}

for (let i = 0; i < 12; i++) {
  const text = document.createElement("div");
  text.classList.add("hour-indicator-text");
  if (i == 0) {
    text.innerHTML = "12";
  } else {
    text.innerHTML = i;
  }
  const angle = (360 / 12) * i;
  text.style.transform = `
        rotate(${angle}deg)
        translateY(-180px)`;
  clock.appendChild(text);
}

setInterval(() => {
  const date = new Date();
  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + date.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}, 1000);

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

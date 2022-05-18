const clockTitle = document.querySelector(".js-clock");
const ddayBtn = document.querySelector(".dday-btn");

const HIDDEN_CLASSNAME = "hidden";

function onddayBtnClick(event) {
  event.preventDefault();
  ddayBtn.classList.add(HIDDEN_CLASSNAME);
  getDDay();
  clockTitle.classList.remove(HIDDEN_CLASSNAME);
}

function getDDay() {
  const nowDate = new Date();
  const christmas = new Date("Dec 25, 2022, 00:00:00").getTime();
  const dday = christmas - nowDate;
  const ddayDate = Math.floor(dday / (1000 * 24 * 60 * 60));
  const ddayHour = String(Math.floor(dday % (1000 * 24 * 60 * 60) / (1000 * 60 * 60))).padStart(2, "0");
  const ddayMinutes = String(Math.floor(dday % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
  const ddaySeconds = String(Math.floor(dday % (1000 * 60) / 1000)).padStart(2, "0");
  clockTitle.innerText = `${ddayDate}d ${ddayHour}h ${ddayMinutes}m ${ddaySeconds}s`;
}

ddayBtn.addEventListener("click", onddayBtnClick);
getDDay();
setInterval(getDDay, 1000);
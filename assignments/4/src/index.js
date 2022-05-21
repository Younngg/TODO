const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
let colorChangeBtn = document.querySelector("button");
let chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
let chosenColor2 = colors[Math.floor(Math.random() * colors.length)];

function colorChangeBtnClick() {
  if(document.querySelector("body").style.background == "") {
  document.querySelector("body").style.background = `linear-gradient(90deg, ${chosenColor1}, ${chosenColor2}) no-repeat center`;
  } else {
    chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
    chosenColor2 = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("body").style.background = `linear-gradient(90deg, ${chosenColor1}, ${chosenColor2}) no-repeat center`;
  }
}

colorChangeBtn.addEventListener("click", colorChangeBtnClick);
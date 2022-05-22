const images = ["bg.png","bg2.png","bg3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)
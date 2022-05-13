const h1 = document.querySelector(".hello h1");

function handleh1Click(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
    alert("copy?");
}

function handleOffline() {
    alert("WIFI OFFLINE")
}

h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleOffline)
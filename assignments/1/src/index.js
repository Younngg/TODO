// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseEnter: function () {
    function handleMouseEnter() {
      h2.innerText = "The mouse is here!";
      h2.style.color = "#1abc9c";
    }
    h2.addEventListener("mouseenter", handleMouseEnter);
  },
  mouseLeave: function () {
    function handleMouseLeave() {
      h2.innerText = "The mouse is gone!";
      h2.style.color = "#3498db";
    }
    h2.addEventListener("mouseleave", handleMouseLeave);
  },
  rightClick: function () {
    function handleRightClick() {
      h2.innerText = "That was a right click!";
      h2.style.color = "#e74c3c";
    }
    window.addEventListener("contextmenu", handleRightClick);
  },
  resize: function () {
    function handleWindowResize() {
      h2.innerText = "You just resized!";
      h2.style.color = "#9b59b6";
    }
    window.addEventListener("resize", handleWindowResize);
  }
};

const h2 = document.querySelector("h2");

superEventHandler.mouseEnter();
superEventHandler.mouseLeave();
superEventHandler.resize();
superEventHandler.rightClick();

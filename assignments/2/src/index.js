const numForm = document.querySelector("#number-form")
const numRange = document.querySelector("#number-range")
const numUser = document.querySelector("#number-user")
const submitBtn = document.querySelector("#submit-btn")
const gameResult = document.querySelector("#game-result")

const HIDDEN_CLASSNAME = "hidden";


function onNumberSubmit(event) {
    event.preventDefault();
    const num = numUser.value;
    localStorage.setItem("num", num);
    gameResult.innerHTML = `You choose: ${numUser.value}, the machine choose: `;
}

numForm.addEventListener("submit", onNumberSubmit)

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
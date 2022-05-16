const numForm = document.querySelector("#number-form");
const numRange = document.querySelector("#number-range");
const numUser = document.querySelector("#number-user");
const gameResult = document.querySelector("#game-result");

function onNumberSubmit(event) {
    event.preventDefault();
    const num = numUser.value;
    const random = Math.ceil(Math.random() * numRange.value);
    if(num != random) {
        gameResult.innerHTML = `You chose: ${num}, the machine chose: ${random}.<br>You lost!`;
    } else {
        gameResult.innerHTML = `You chose: ${num}, the machine chose: ${random}.<br>You won!`;
    }
    
}

numForm.addEventListener("submit", onNumberSubmit);
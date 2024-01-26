let firstCard = 10;
let secondCard = 11;
let cardsTotal = firstCard + secondCard;
let extraCard = 0;


let messageInfo = document.getElementById("messageInfo");
let cardsDisplay = document.getElementById("cardsDisplay");
let totalDisplay = document.getElementById("totalDisplay");
// let message = "";

let startGame = document.getElementById("startBtn");
let newCardBtn = document.getElementById("newCardBtn");
let replayBtn = document.getElementById("replayBtn");

startGame.onclick = () => {
    cardsDisplay.textContent = "cards: " + firstCard + ' - ' + secondCard;
    totalDisplay.textContent = "Total: " + cardsTotal;

    if (cardsTotal < 21) {
        messageInfo.textContent = "Draw a new card?"
    }
    else if (cardsTotal === 21) {
        messageInfo.textContent = "You've got BlackJack!"
    }
    else {
        messageInfo.textContent = "You're bust sir!"
    }
}

newCardBtn.onclick = () => {
    updatedTotal = cardsTotal + extraCard
    totalDisplay.textContent = updatedTotal;

    /// line x does not work
    if (updatedTotal < 21) {
        messageInfo.textContent = "Draw a new card?"
    }
    else if (updatedTotal === 21) {
        messageInfo.textContent = "You've got BlackJack!"
    }
    else {
        messageInfo.textContent = "You're bust sir!"
    }

}

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard

let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")



function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message
}


function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7; //the new drawn card
    sum = sum + card;

    startGame()
    //calling another function inside a function.
}


function resetGame() {
    location.reload()
}






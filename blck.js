let player = {
    name: "Mishra",
    chips: 500
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let congratsImg = document.createElement("img");
congratsImg.src = "";
// let cngrtsEl = document.getElementById("cngrts-el")
// link.href="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"

// document.getElementById('cngrts-el').appendChild(link);

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "cards: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

   sumEl.textContent = "sum: " + sum
    if(sum <= 20) {
     message = "Do you want to draw a new card?"
     congratsImg.src = "";
    } else if(sum === 21){
     message= "Hurrah! you've got a balckjack !!"
     hasBlackJack = true
     congratsImg.src = "https://media1.tenor.com/images/ed7d78444997b145211a4f647cc5e21d/tenor.gif?itemid=14731521";
     var src = document.getElementById("cngrts-el");
     src.appendChild(congratsImg);
   } else{
    message= "you're out of the game!"
    isAlive = false
    congratsImg.src = "";
   }
   messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
var x = document.getElementById("myAudio").autoplay;

  
// function play(){
//      var audio = new Audio('https://open.spotify.com/track/1DIXPcTDzTj8ZMHt3PDt8p');
//     audio.play();
// }
 
// var link = document.createElement('a');
// link.textContent = 'Link Title';
// link.href = 'http://your.domain.tld/some/path';
// document.getElementById('where_to_insert').appendChild(link);
// function congrats(){
// if () {
//     var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// var src = document.getElementById("cngrts-el");
// src.appendChild(img);
// }
// cngrtsEl.textContent =  congrats()

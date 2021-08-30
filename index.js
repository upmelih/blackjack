let firstCard = 6   
let secondCard = 9
let sum = firstCard + secondCard 
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl= document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum = "+ sum
    //render out first and second card
    cardsEl.textContent = "Cards = "+ firstCard + " " + secondCard
    //render all the cards we have
    if ( sum <= 20){
        message = "you are still in the game wanna take new card"
    } else if(sum === 21){
        message= "you've won it is black jack"
     
    }else{
        message = "you are out"
      
    }
     messageEl.innerText=message
     
}

function newCard (){

    console.log("draw a new card")
    let card = 6
    sum += card
    renderGame()
}


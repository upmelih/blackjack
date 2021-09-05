
let cards = []//array ordered list of items
let sum = 0
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl= document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
   // return randomNumber

    if(randomNumber>10){
        return 10
    } else if (randomNumber===1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()   
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum =firstCard + secondCard 

    renderGame()
}

function renderGame(){

    sumEl.textContent = "Sum = "+ sum
    //render out first and second card
    cardsEl.textContent = "Cards = "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]+" "
        
    }

    
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    
    renderGame()
}

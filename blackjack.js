import { cardDeck } from './cardDeck.js'

/*     declare variables for a random numbers, array to hold 52 random rumbers, and 
       array to represent a deck of cards */

// let cardsArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
//     9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
//     'k','a','a','a','a']

let dealerCards = document.querySelector('.displayDealerCards')
let playerCards = document.querySelector('.displayPlayerCards')
let playerScore = document.querySelector('.playerCount')
let playerScore2 = document.querySelector('.playerCount2')
let dealerScore = document.querySelector('.dealerCount')
let dealerScore2 = document.querySelector('.dealerCount2')
let deckCardsLeft = document.querySelector('.deckCardsLeft')
let winLoseBust = document.querySelector('.winLoseBust')
let hitButton = document.querySelector('#hitButton')

let shuffledDeck = []
let dealerHand = []
let playerHand = []
let count
let count2
let playerCount
let playerCount2
let dealerCount
let dealerCount2
let hitOrStand=''
let aceCount
let existingAce=false
let card
let cardsLeft
let cardsLeftAfterDeal
let numberOfCards
let player



// const prompt = require("prompt-sync")();
// const input = prompt("Ready to play blackjack?");

function fisherYatesShuffle() {
    let cardsArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
        9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
        'k','a','a','a','a']
    let i = cardDeck.length;
        while (--i > 0) {
       let randomIndex = Math.floor(Math.random() * (i + 1));
       [cardDeck[randomIndex], cardDeck[i]] = [cardDeck[i], cardDeck[randomIndex]];
    }
shuffledDeck=cardDeck

}
// shuffledDeck=[
    
//         {
//             card: '2h',
//             value: 2,
//             image:'./images/2_of_hearts.png'
//         },
//         {
//             card: '2d',
//             value: 2,
//             image: './images/2_of_diamonds.png'
//         },
//         {
//             card: '2c',
//             value: 2,
//             image: './images/2_of_clubs.png'
//         },
//         {
//             card: '2s',
//             value: 2,
//             image: './images/2_of_spades.png'
//         },
//         {
//             card: '3s',
//             value: 3,
//             image: './images/3_of_spades.png'
//         }
// ]


// Function tp deal cards with parameter for # of cards to deal
function dealCard(numberOfCards, playerOrDealer) {
    
    cardsLeft = (shuffledDeck.length)
    cardsLeftAfterDeal = cardsLeft-numberOfCards
    while (--cardsLeft>=cardsLeftAfterDeal) {
        playerOrDealer.push(shuffledDeck.shift())
    }
    return(playerOrDealer)
}
    


// Function to count dealt cards
function countDealtCards(handToCount, aceCount) {
    // multipleAce(handToCount)
    existingAce=false
    console.log(!existingAce)
    count=0
    count2=0
    numberOfCards=handToCount.length
    console.log(numberOfCards)
    while (--numberOfCards>=0) {
        if (typeof(handToCount[numberOfCards].value)==='string') {
            if (handToCount[numberOfCards].value==='j'|| handToCount[numberOfCards].value==='q'||handToCount[numberOfCards].value==='k') {
                count += 10
                count2 += 10
            } else if (handToCount[numberOfCards].value==='a' && !existingAce) {
                existingAce=true
                count += 1;
                count2 += 11;
            } else if (handToCount[numberOfCards].value==='a' && existingAce) {
                count += 1
                count2 += 1
            } 
        } else {
                count += handToCount[numberOfCards].value 
                count2 += handToCount[numberOfCards].value
            }
            console.log(count,count2)
    }
    // if (count<21 || count2<21) {
    //     return (aceCount===1? count : count2)
    // } else if (count===21 || count2===21) {
    //     winLoseBust.innerHTML='BLACKJACK!'
    //     return (aceCount===1? count : count2)
    // } else {
    //     winLoseBust.innerHTML='BUST!'
    //     return (aceCount===1? count : count2)

    // }
    if (count===21 || count2===21) {
        winLoseBust.innerHTML='BLACKJACK!'
        return (aceCount===1? count : count2)
    } else if (count > 21 && count2 > 21) {
        winLoseBust.innerHTML='BUST!'
        return (aceCount===1? count : count2)
    } else {
        return (aceCount===1? count : count2)
    }
}   

        
        

//display current scores of dealer & player in header
function displayScores() {
    dealerCount = countDealtCards(dealerHand, 1)
    dealerCount2 = countDealtCards(dealerHand, 2)
    dealerScore.innerHTML=('Dealer Count : ' + dealerCount)
    if (dealerCount2 < 22 && dealerCount2 > dealerCount) { 
        dealerScore2.innerHTML=('dealer Count2 : ' + dealerCount2)
    }
    playerCount = countDealtCards(playerHand, 1)
    playerCount2 = countDealtCards(playerHand, 2)
    console.log(playerCount)
    playerScore.innerHTML=('Player Count : ' + playerCount)
    if (playerCount2 > playerCount) { 
        playerScore2.innerHTML=('Player Count2 : ' + playerCount2)
    }
}


//deal player another card when 'hit' button clicked and update page

function hitCard() {
    dealCard(1,playerHand)
    // playerCards.innerHTML=playerHand
    displayHand(playerHand, playerCards)
    displayScores()
    // playerScore.innerHTML=('Player Count : ' + countDealtCards(playerHand))
    deckCardsLeft.innerHTML=('Cards left: '+ shuffledDeck.length)
}

function initialDealerHand() {
    
        let image = document.createElement("img")
        dealerCards.appendChild(image)
        image.src = `${dealerHand[0].image}`
        let image2 = document.createElement("img")        
        dealerCards.appendChild(image2)
        image2.src = './images/back_of_card.jpeg' 
}

function displayHand (pOrDHand, pOrDCards) {
    while (pOrDCards.firstChild) {
        pOrDCards.removeChild(pOrDCards.firstChild);
      }
    pOrDHand.map(a => {
        let image = document.createElement("img")
        pOrDCards.appendChild(image)
        image.src = `${a.image}`
    })    
}

hitButton.addEventListener("click",hitCard)





fisherYatesShuffle()

// deal and display dealer's & player's first 2 cards
dealCard(2, playerHand)
dealCard(2, dealerHand)

displayHand(playerHand, playerCards)
// displayHand(dealerHand, dealerCards)
initialDealerHand()

// playerCards.innerHTML=playerHand
// dealerCards.innerHTML=dealerHand
displayScores()

//display # of cards left in deck in header
deckCardsLeft.innerHTML=('Cards left: '+ shuffledDeck.length)


console.log(cardDeck)











    





    














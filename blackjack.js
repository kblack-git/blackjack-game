/*     declare variables for a random numbers, array to hold 52 random rumbers, and 
       array to represent a deck of cards */

// let cardsArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
//     9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
//     'k','a','a','a','a']

let dealerCards = document.querySelector('.displayDealerCards')
let playerCards = document.querySelector('.displayPlayerCards')


let shuffledDeck = []
let dealerHand = []
let playerHand = []
let dealerCount
let dealerCount2
let playerCount
let playerCount2
let hitOrStand=''


// const prompt = require("prompt-sync")();
// const input = prompt("Ready to play blackjack?");

function fisherYatesShuffle() {
    let cardsArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
        9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
        'k','a','a','a','a']
    let i = cardsArray.length;
    while (--i > 0) {
       let randomIndex = Math.floor(Math.random() * (i + 1));
       [cardsArray[randomIndex], cardsArray[i]] = [cardsArray[i], cardsArray[randomIndex]];
    }
shuffledDeck=cardsArray
}

// Function tp deal cards with parameter for # of cards to deal
function dealCard(numberOfCards) {
    
    cardsLeft = (shuffledDeck.length)
    cardsLeftAfterDeal = cardsLeft-numberOfCards
    while (--cardsLeft>=cardsLeftAfterDeal) {
        playerHand.push(shuffledDeck.shift())
        

        // shuffledDeck.shift()
        
        // card = cardsArray[randomArray[randomArray.length-1]]
        // return card
        
    }
    return(playerHand)
}

// Function to count dealt cards
function countDealtCards(handToCount) {
    playerCount=0
    dealerCount=0
    numberOfCards=handToCount.length
    console.log(numberOfCards)
    while (--numberOfCards>=0) {
        if (typeof(handToCount[numberOfCards])==='string') {
            if (handToCount[numberOfCards]==='j'|| handToCount[numberOfCards]==='q'||handToCount[numberOfCards]==='k') {
                playerCount+=10
                playerCount2+=10

            } else {
                playerCount+=1;
                playerCount2+=11;
            }
        } else {
                playerCount += handToCount[numberOfCards] 
                playerCount2 += handToCount[numberOfCards]
            }
    }
    return(playerCount)
    // if (playerCount>21) {
    //     console.log('BUST!')
    //     } else if (playerCount===21) {
    //         console.log('BLACKJACK!')
    //     } else {
    //         hitOrStand = prompt('Hit or Stand?')
    //         console.log(hitOrStand)
    //     } 

    

    // if (hitOrStand==='Hit') {
        
    //     console.log('hit')
    //     dealCard(1)
    //     console.log(playerHand)
    // } else if (hitOrStand==='Stand') {
    //     console.log('stand)')
    // }
}




while (playerCount<21) {
    // hitOrStand = prompt('Hit or Stand?')
    if (hitOrStand==='Hit') {
        console.log(dealCard(1))
        console.log(shuffledDeck.length)
        console.log(countDealtCards())
    } else {
        break
    } 
}
if (playerCount===21) {
    console.log('BLACKJACK!!! You win!')
} else if (playerCount>21) {
    console.log('BUST')
}


fisherYatesShuffle()

// deal and display dealer's first 2 cards
dealCard(2)
console.log(shuffledDeck.length)



console.log('count= '+countDealtCards(playerHand))



//deal and display the player's first 2 cards
playerCards.innerHTML=playerHand


    





    














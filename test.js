function fisherYatesShuffle() {
    let cardsArray = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
        9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
        'k','a','a','a','a']
    let cardDeck = [
        {
            card: '2h',
            value: 2,
            image:'./images/2_of_hearts.png'
        },
        {
            card: '2d',
            value: 2,
            image: './images/2_of_diamonds.png'
        
        },
        {
            card: '10c',
            value: 10,
            image: './images/10_of_clubs.png'
        }
    ]
        
    
    let i = cardDeck.length;
    while (--i >= 0) {
       let randomIndex = Math.floor(Math.random() * (i + 1));
       [cardDeck[randomIndex], cardDeck[i]] = [cardDeck[i], cardDeck[randomIndex]];
    console.log(cardDeck[i].card)
    }
shuffledDeck=cardDeck
}

fisherYatesShuffle()
console.log(shuffledDeck)






// let playerHand = [10,'a',3,'j',8,'a']
// existingAce=false

// function multipleAce(playerHand) {
//     for (i=0;i<playerHand.length;i++) {
//         for (j=i+1;j<playerHand.length;j++){
//             if (playerHand[i]==='a' && playerHand[j]==='a') {
//                 existingAce=true
//             }

//         }
//     }
//     return existingAce
// }
// console.log(multipleAce(playerHand))

// card =[2,3]
// function findAceInDeck(cards) {
//     return cards==='a'
// }

// console.log(card.find(findAceInDeck))



// let array=[1,2,3,4,1,5]
// let randomArray=[]



// function duplicateCheck(array) {
//     randomArray = array.filter((currentValue,index) => 
//     // console.log(currentValue, index)
//     array.indexOf(currentValue) == index)

//     }

// function createRandomArray() {
//     for (let i=0;randomArray.length<52;i++) {
//         randomArray.push(Math.floor(Math.random()*52))
//         duplicateCheck(randomArray)
//         console.log(randomArray)
//         console.log(randomArray.length)
//     }
// }


    
    
// createRandomArray()
// console.log(randomArray.sort())
// // console.log(randomArray.sort())
// // console.log(randomArray.length)
// // console.log(duplicateCheck(array))

// FISHER-YATES SHUFFLE METHOD

// function fisher_yates(){
//     // let array = [40, 90, 50, 70, 80, 30, 60, 10, 20];
//     let array = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
//         9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
//         'k','a','a','a','a']
//     console.log(array)
//     let i = array.length;
//     while (--i > 0) {
//        let temp = Math.floor(Math.random() * (i + 1));
//        [array[temp], array[i]] = [array[i], array[temp]];
//     }
// console.log(array)
// }

// //fisher_yates()

// let playerCount2=0





    


    
        
    


      
    
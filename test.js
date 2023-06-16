
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

function fisher_yates(){
    // let array = [40, 90, 50, 70, 80, 30, 60, 10, 20];
    let array = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,
        9,9,9,9,10,10,10,10,'j','j','j','j','q','q','q','q','k','k','k',
        'k','a','a','a','a']
    console.log(array)
    let i = array.length;
    while (--i > 0) {
       let temp = Math.floor(Math.random() * (i + 1));
       [array[temp], array[i]] = [array[i], array[temp]];
    }
console.log(array)
}

//fisher_yates()

let playerCount2=0





    


    
        
    


      
    
//Creatimg the variables
const childs = document.querySelectorAll('.child')
const mole = document.querySelector('.mole')
const time_left = document.querySelector('#time')
const score = document.querySelector('#score')
//Creating defaults
let result = 0;
let hit = null;
let reset = 10;
let squareInterval = null

// console.log(childs)
//Creating a function that 
function random(){
    childs.forEach(child => {
        child.classList.remove('mole')//reMoving the class mole if it has been added
    })
    let randomSquare = childs[Math.floor(Math.random() * childs.length)]//Selecting a random index  of the array and appending the classlist mole on it
    // console.log(randomSquare)
    randomSquare.classList.add('mole')
    hit = randomSquare.id //Getting the id of the randomly selected div
}

//Selecting all child and checking if the current child id == id of the randomly selected child bhy adding a mousedown eventlistener
childs.forEach(child => {
    child.addEventListener('mousedown', () => {
        if(child.id == hit){
            result++
            score.textContent = result
        }
    })
} )


function timeId () {
    squareInterval = setInterval(random, 1000)
}
timeId()


//delivering the final blow
function counter (){
    reset--//Reduction of the reset value at equal interval
    time_left.textContent = reset
    if(reset === 0){
        clearInterval(counterInterval)
        clearInterval(squareInterval)
        alert(`Game Over Baba!! Your score is ${result}`)
    }
}
result = 0

let counterInterval = setInterval(counter, 1000)//Calling the function at intervals


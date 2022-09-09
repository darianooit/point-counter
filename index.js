//counting home
let countElHome = document.getElementById("count-el-home")

let countHome = 0

function plus1Home(){
    countHome += 1
    countElHome.textContent = countHome
}


function plus2Home(){
    countHome += 2
    countElHome.textContent = countHome
}


function plus3Home(){
    countHome += 3
    countElHome.textContent = countHome
}





//guest counting
let countElGuest = document.getElementById("count-el-guest")

let countGuest = 0

function plus1Guest(){
    countGuest += 1
    countElGuest.textContent = countGuest
}


function plus2Guest(){
    countGuest += 2
    countElGuest.textContent = countGuest
}


function plus3Guest(){
    countGuest += 3
    countElGuest.textContent = countGuest
}


//reset function
function reset(){
    countHome = 0
    countGuest = 0
    countElGuest.textContent = 0
    countElHome.textContent = 0
}
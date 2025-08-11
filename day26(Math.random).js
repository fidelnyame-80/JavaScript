//generating a random number from 1 to 30

const randomBtn = document.getElementById('randomBtn');
let randomNum = document.getElementById('randomNum');
let startNumber = 1;


function generateRandomNumber(){
    randomNum.textContent = startNumber;
}

generateRandomNumber();

randomBtn.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random(startNumber) * (30-1)+1);
    randomNum.textContent = randomNumber
})
//making the counter increase on click
const minusButton = document.getElementById('minusBtn');
const plusButton = document.getElementById('plusBtn'); 

let counterInTens = document.getElementById('tens');
let counterInOnes = document.getElementById('ones');

let count = 0;
//adding a click event listener to the plus button 
plusButton.addEventListener('click',()=>{
     count++;
    counterInOnes.textContent = count;
})

minusButton.addEventListener('click',()=>{
    if(count>=0 ){
    counterInOnes.textContent = count--;

}
})


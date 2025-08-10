//using setInterval() method in JavaScript to display a pop-up message over and over within 3second intervals

const popUp = document.getElementById('popUp');
const dismissPop = document.getElementById('dismissPop');

function keepDismissingPop(){
    setInterval(
        ()=>{
            popUp.classList.remove('hidden')
        }, 5000
    )

    dismissPop.addEventListener('click',()=>{
        popUp.classList.add('hidden')
    })
}

keepDismissingPop();
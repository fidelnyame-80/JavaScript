//setting a timeout for an event listener i.e when the dom content has loaded, there should be a popup after some second let's say 5 seconds

const popUp = document.getElementById('popUp');
const dismissPop = document.getElementById('dismissPop')

function showPopUp(){
    document.addEventListener('DOMContentLoaded',()=>{
        setTimeout(
            ()=>{
                popUp.classList.remove('hidden')
            }, 5000
        )
    })
}

showPopUp();

dismissPop.addEventListener('click',()=>{
    popUp.classList.add('hidden');
})
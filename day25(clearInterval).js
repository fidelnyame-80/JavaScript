//Applying clearInterval to a setInterval that adds a +1 increment to a counter every 3seconds

const counter = document.getElementById('count');
const congratsMsg = document.getElementById('congratsMsg');
const dismiss = document.getElementById('dismiss')
let count  = 0;


function increaseCount(){
    
    
    const interval1 = setInterval(()=>{
        counter.textContent = count;
        count++;

        if(count===6){
    clearInterval(interval1);
    congratsMsg.classList.remove('hidden')
}    

    }, 3000)

 

stopCounting()
}

dismiss.addEventListener('click',()=>{
    congratsMsg.classList.add('hidden')
})
increaseCount()


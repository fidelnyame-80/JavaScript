//creating logic for a simple modal
const modal = document.getElementById('modal');
const toggleModal = document.getElementById('toggleModal');

// toggleModal.addEventListener('click',()=>{
//     modal.classList.toggle('hidden');
// })

let angle = 0;

function modalBounce() {
  const y = Math.sin(angle) * 10; // bobbing value
  modal.style.transform = `translateY(${y}px)`; // dynamic transform
  angle += 0.08;
  requestAnimationFrame(modalBounce); // loop the animation
}

modalBounce();

function toggleTranslate(){
toggleModal.addEventListener('click', ()=>{
  toggleModal.classList.toggle('translate-x-[23rem]') 
})
};

requestAnimationFrame(toggleTranslate);


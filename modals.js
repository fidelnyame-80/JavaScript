//creating logic for a simple modal
const modal = document.getElementById('modal');
const toggleModal = document.getElementById('toggleModal');

toggleModal.addEventListener('click',()=>{
    modal.classList.toggle('hidden');
})

setInterval(()=>{
    modal.classList.toggle('translate-y-[2px]')
}, 500)

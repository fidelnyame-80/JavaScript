//using appendChild
const container = document.getElementById('container');
const createdDiv = document.createElement('p');

createdDiv.textContent = "Join expert instructors for a hands-on experience. Suitable for beginners and intermediate learners. Limited spots available.";



const seeMore = document.getElementById('seeMore');

seeMore.addEventListener('click', function(){
container.appendChild(createdDiv);
rotateIcon.style.transform = 'rotate(-80deg)';
})


const btn = document.getElementById('btn');
const changeHeading = document.getElementById('changeHeading')

btn.addEventListener('click',()=>{
    changeHeading.textContent = "Nice, you've changed the heading!";
   
});

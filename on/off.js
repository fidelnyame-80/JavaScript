const onSwitch = document.getElementById('switch')

onSwitch.addEventListener('click',()=>{
    onSwitch.classList.toggle('translate-x-12');
   if(onSwitch.classList.contains('translate-x-12')){
    onSwitch.classList.remove('bg-[#31C950]')
    onSwitch.classList.add('bg-[#fff]')
       }else{
    onSwitch.classList.remove('bg-[#fff]');
    onSwitch.classList.add('bg-[#31C950]')
   }
   
})


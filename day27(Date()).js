//date function
const dateUI = document.getElementById('dateUI'); 
let newDate = new Date();

const formattedDate = newDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

function showDate(){
    dateUI.textContent = formattedDate;

}

showDate();



setInterval(showTime, 100 )

function showTime(){
    let newTime = new Date();
    const formattedTime = newTime.toLocaleTimeString("en-US",{
});
    timeUI.textContent = formattedTime;
}

showTime();

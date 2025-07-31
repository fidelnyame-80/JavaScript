//this is some dummmy js file for practicing javascript from beginner to intermediate

// You’re writing code for a small coffee shop. The shop gives a discount based on the number of coffees a customer buys.

// If they buy more than 10, they get a 20% discount.

// If they buy between 6 and 10, they get a 10% discount.

// If they buy 5 or fewer, they get no discount.

// Task:
// Write a function called getDiscount that takes one parameter coffeeCount and returns the discount as a string (e.g., "20%", "10%", or "0%").



// code for small coffee shop
function getDiscount(coffeeCount) {
    if (coffeeCount > 10) {
        return "20%"
    } else if (coffeeCount >= 6 && coffeeCount <= 10) {
        return "10%";

    } else {
        return "0%"
    }
}

console.log(getDiscount(100));
console.log(getDiscount(6));

/*
## 🔄 Quick Recap: When to Use `switch`

Use `switch` when:

* You’re checking the **same variable** against many possible fixed values
* Each case leads to a **specific action**
* You want **cleaner, readable code** instead of a long chain of `if/else if`
---
Switch Exercise 1: Role Access Control**

### 🔹 Scenario:

You’re building access permissions for a company dashboard.

* If the role is `"admin"`, return `"Full access"`
* If the role is `"manager"`, return `"Limited access"`
* If the role is `"employee"`, return `"Restricted access"`
* For any unknown role, return `"No access"`

✅ **Your Task (in 2 Steps)**
#### 🔸 Step 1: Write a function `getAccessLevel(role)`
Use a `switch` statement to return the correct access message.
#### 🔸 Step 2: Test it with:

js
console.log(getAccessLevel("admin"));     // Full access
console.log(getAccessLevel("manager"));   // Limited access
console.log(getAccessLevel("employee"));  // Restricted access
console.log(getAccessLevel("guest"));     // No access
*/

// switch getAccessLevel()





/* Switch Exercise 3: Student Grading Scale
🔹 Scenario:
You’re building a quick grade-to-letter converter using numbers 1 to 5.

Grade Number	Letter Grade
5	A (Excellent)
4	B (Very Good)
3	C (Good)
2	D (Fair)
1	F (Fail)
Any other number	Invalid Grade

✅ Your Task:
Write a function getLetterGrade(score) that uses a switch statement.

Handle scores from 1 to 5 properly.

Use default to catch anything not in the range (like 0, 6, -1, etc).

🔍 Test Cases:
js
Copy
Edit
console.log(getLetterGrade(5)); // A (Excellent)
console.log(getLetterGrade(3)); // C (Good)
console.log(getLetterGrade(1)); // F (Fail)
console.log(getLetterGrade(0)); // Invalid Grade
console.log(getLetterGrade(7)); // Invalid Grade
*/

function getLetterGrade(score) {
    switch (score) {
        case 5: return "A (Excellent)";
        case 4: return "B (very Good)";
        case 3: return "C (Good)";
        case 2: return "D (Fair)";
        case 1: return "F (Fail)";
        default: return "Invalid Grade";
    }
}


/*Scenario: Determine Season Based on Month
Step 1: The Logic
Write a function that takes the name of a month (e.g. "January", "July") and returns the corresponding season:
If month is December, January, or February → return "Winter"
If month is March, April, or May → return "Spring"
If month is June, July, or August → return "Summer"
If month is September, October, or November → return "Autumn"
Otherwise → return "Invalid month"
What You're Practicing:
Grouping multiple case values under a single outcome.
Using switch with strings.
Clean structure and logic thinking.
 Your Task:
Now write the function getSeason(month) using switch
*/

function getSeason(month) {
    switch (month.toTitleCase()) {
        case "December":
        case "January":
        case "February":
            return "Winter";

        case "March":
        case "April":
        case "May":
            return "Spring";

        case "June":
        case "July":
        case "August":
            return "Summer";

        case "September":
        case "October":
        case "November":
            return "Autumn";

        default: return "Invalid Month";

    }
};

/*You're building a simple system where users select a data plan type using a number input.
Input	Plan Name	Output
1	Basic Plan	"You selected the Basic Plan (1GB - GHS 10)"
2	Standard Plan	"You selected the Standard Plan (5GB - GHS 40)"
3	Premium Plan	"You selected the Premium Plan (10GB - GHS 70)"
Any other number	—	"Invalid plan selected"*/

function getDataPlan(input) {
    switch (input) {
        case 1: return "You selected the Basic Plan(1GB - GHS 10)";
        case 2: return "You selected the Standard Plan(5GB - GHS 40)";
        case 3: return "You selected the Premium Plan(10GB - GHS 70)";
        default: return "Invalid plan selected";
    }
}

console.log(getDataPlan(5));

/*There are 3 plans:
Plan 1: Basic (1GB) – GHS 10
Plan 2: Standard (5GB) – GHS 40
Plan 3: Premium (10GB) – GHS 70
User will select a plan and enter how much they paid.
Your function should:
Return the plan name and “Payment successful” if the amount matches the price.
Return “Insufficient payment” if payment is less than required.
Return “Invalid plan selected” for plans not 1, 2, or 3.
*/

//if user inputs plan less than GHS 10 for plan 1, return "payment unsuccessful" otherwise return "payment successful" if user inputs ghs 10 for plan 1 
//if user inputs plan less than ghs 40 for plan 2

function getDataPlan1(input, price) {
    switch (input) {
        case 1:
            if (price < 10) {
                return "Insufficient plan amount"
            } else if (price === 10) {
                return "Payment successful for plan 1 (GHS 10 - 1GB)"
            } else {
                return "Invalid plan"
            }

        case 2:
            if (price < 40) {
                return "Insufficient plan amount"
            } else if (price === 40) {
                return "Payment successful for plan 2 (GHS 40 - 5GB)"
            } else {
                return "Invalid plan"
            }

        case 3:
            if (price < 70) {
                return "Insufficient plan amount"
            } else if (price === 70) {
                return "Payment successful for plan 3 (GHS 70 - 10GB)"
            } else {
                return "Invalid plan"
            }

        default:
            return "Please select a valid plan"
    }
}

console.log(getDataPlan1(1, 10))


/*Okay, here’s what I want. I’m building a simple fare calculator for my transport service. We have three transport options: bike, car, and van.
If someone picks a bike and the distance is less than 5 kilometers, just charge them GHS 10 flat. Simple.
But if the bike ride is 5 km or more, then charge them GHS 2 for each kilometer.
Now, if they pick a car, and the distance is under 5 km, charge them GHS 20 flat.
But if it’s 5 km or more, then it should be GHS 4 per kilometer.
For vans, we don’t want to calculate any fare. Just show a message that says, 'Vans are available only for group rides. Contact support.'
Oh, and if they select something weird or not supported, just tell them 'Invalid transport mode selected'.
*/

function calcFare(modeOfTransport, distance) {
    switch (modeOfTransport.toLowerCase()) {
        case "bike":
            if (distance < 5) {
                return "Rate - GHS 10"
            } else if (distance >= 5) {
                return "Rate - GHS 2 per kilometer"
            } else {
                return "Invalid transport mode selected"
            }

        case "car":
            if (distance < 5) {
                return "Rate - GHS 20"
            } else if (distance >= 5) {
                return "Rate - GHS 4 per kilometer"
            } else {
                return "Invalid transport mode selected"
            }

        case "van":
            return "Vans are only available for group rides. Contact support"

        default: if (modeOfTransport === "") {
            return "Please select a mode of transport"
        } else if (modeOfTransport !== "bike" || modeOfTransport !== "car" || modeOfTransport !== "van") {
            return "Invalid transport mode selected"
        } else {
            return "Error"
        }
    }

};

console.log(calcFare("", 10));

/*Here’s how the pricing should work:
If the customer selects "child" and the movie is before 5 PM → they should be charged GHS 10
If the customer selects "child" and the movie is after 5 PM → GHS 12
If the customer selects "adult" and the movie is before 5 PM → GHS 15
If the customer selects "adult" and the movie is after 5 PM → GHS 20
If the customer selects "senior" (like 60 years and above), they should always get a flat rate of GHS 8 no matter the time.
If the category is left empty or invalid → show “Please select a valid category”
*/

function moviePricing(category, time) {

    if (!category) { return "Please select a valid category" }


    switch (category.toLowerCase()) {
        case "child": if (time < 17) {
            return "You will be charged GHS 10"
        } else if (time > 17) {
            return "You would be charged GHS 12"
        } else {
            return "Invalid"
        }

        case "adult":
            if (time < 17) {
                return "You will be charged GHS 15"
            } else if (time > 17) {
                return "You will be charged GHS 20"
            } else {
                return "error"
            }

        case "senior":
            return "You will be charged GHS 8"
    }


}

console.log(moviePricing("",))

/*I want to build a simple system where customers can place food orders.
The customer selects a menu item by typing its code:
If they enter "A1" → respond with: "You ordered Jollof Rice with Chicken - GHS 30"
If they enter "B2" → respond with: "You ordered Banku with Tilapia - GHS 35"
If they enter "C3" → respond with: "You ordered Fried Yam with Turkey - GHS 25"
 If they enter "D4" → respond with: "You ordered Fufu with Goat Light Soup - GHS 40"
If they enter anything else → respond with: "Invalid menu code. Please try again.
*/

function placeOrder(entry) {
    if (!entry) { return "Invalid menu code. Please try again." }
    switch (entry) {
        case "A1": return "You ordered Jollof Rice with Chicken - GHS 30"
        case "B2": return "You ordered Banku with Tilapia -GHS 35"
        case "C3": return "You ordered Fried Yam with Turkey - GHS 25"
        case "D4": return "You ordered Fufu with Goat Light Soup - GHS 40"

        default: return "Please select a valid order"

    }

}

console.log(placeOrder("asfd"))

/*I run a clothing store online, and I want customers to see the size guide when they select a size.
So if they choose:
'S', tell them: ‘Small - Chest: 34-36 inches’
'M', tell them: ‘Medium - Chest: 38-40 inches’
'L', tell them: ‘Large - Chest: 42-44 inches’
'XL', tell them: ‘Extra Large - Chest: 46-48 inches’
*/

function selectSize(size) {
    switch (size.toUpperCase()) {
        case "S": return "'Small - Chest: 34-36 inches'"
        case "M": return "'Medium - Chest: 38-40 inches'"
        case "L": return "'Large - Chest: 42-44 inches'"
        case "XL": return "'Extra Large - Chest: 46-48 inches'"

        default: return "Please select a valid size"
    }
}

console.log(selectSize("a"))

/*A cinema charges GHS 15 per ticket. Write a for loop that prints the total cost of buying 1 to 10 tickets.
✅ Each line should say:
"X ticket(s) = GHS Y"
*/

for (i = 1; i <= 10; i++) {
    let ticketCost = i * 15;
    console.log(`${i} ticket(s) costs ${ticketCost}`)
}

/* Perfect! Let's build your `for` loop confidence with **real-life mini challenges**, starting simple and leveling up gradually. After each one, you’ll try to solve it, and I’ll check your code before we move to the next.

Exercise 1: Print a series of days
**Scenario**:
A fitness coach wants you to list the days of a 7-day workout challenge.
Each day should print like this:
`Day 1`, `Day 2`, ..., `Day 7`
**Your task**:
Use a `for` loop to print:
Day 1  
Day 2  
Day 3  
Day 4  
Day 5  
Day 6  
Day 7
*/

for (i = 1; i <= 7; i++) {
    console.log(`Day ${i}`)
}

/*Print all the even numbers between 1 and 20 (inclusive).
So your output should look like:
2
4
6
...
20*/

for (i = 3; i <= 20; i += 3) {
    console.log(`${i}`)
}

/*
Q1: Loop through an array of names**
You have this array:
js
const users = ["David", "Angela", "Michael"];
Write a `for` loop that prints:
Welcome, David!
Welcome, Angela!
Welcome, Michael!
*/

const users = ["David", "Angela", "Michael"];
for (i = 0; i < users.length; i++) {
    console.log(`Welcome ${users[i]}`);
}

//Question 2
// You have an array of products in stock:
// const products = ["Milk", "Bread", "Eggs", "Rice"];
// Write a `for` loop that prints this message for each item:
// Now stocking: Milk
// Now stocking: Bread ...

const products = ["Milk", "Bread", "Eggs", "Rice"];
for (i = 0; i < products.length; i++) {
    console.log(`Now stocking: ${products[i]}`)
}

const attendees = ["Kwame", "Esi", "Yaw", "Afia"];
//question3
// Loop through and print
// Thank you for registering, Kwame.
// Thank you for registering, Esi.
// ...

for (i = [0]; i < attendees.length; i++) {
    console.log(`Thank you for registering, ${attendees[i]}.`)
}

//question4
// const destinations = ["Accra", "Kumasi", "Takoradi", "Tamale"];
//Use a for loop to log each destination like this:
//Delivery scheduled for: Accra
// Delivery scheduled for: Kumasi
// ...

const destinations = ["Accra", "Kumasi", "Takoradi", "Tamale"];
for (i = 0; i < destinations.length; i++) {
    console.log(`Delivery scheduled for: ${destinations[i]}`)
}

//const itemsInCart = ["Shoes", "Hat", "Socks", "Jacket"];
// Use a for loop to log this for each item:
// "Item added to cart: Shoes" (and so on)

const itemsInCart = ["Shoes", "Hat", "Socks", "Jacket"];
for (i = 0; i < itemsInCart.length; i++) {
    console.log(`Item added to cart: ${itemsInCart[i]}`)
}

//**Exercise d:**
// You have an array of movies:
// js
// const movies = ["Inception", "Black Panther", "The Matrix", "Interstellar"];
// Write a `for` loop that prints:
// Now playing: Inception
// Now playing: Black Panther
// Now playing: The Matrix
// Now playing: Interstellar
// Your turn!

const movies = ["Inception", "Black Panther", "The Matrix", "Interstellar"];
for (i = 0; i < movies.length; i++) {
    console.log(`Now playing: ${movies[i]}`)
}

const customers = ["Ama", "Kwame", "Efua", "Kojo"];
// Write a for loop that logs: "Processing order for: [Customer Name]"
for (i = 0; i < customers.length; i++) {
    console.log(`Processing order for: [${customers[i]}]`)
}

const orderAmounts = [50, 100, 75, 30];
//Use a for loop to calculate and log "Total order: GHS X" for each amount
for (i = 0; i < orderAmounts.length; i++) {
    console.log(`Total order: GHS ${orderAmounts[i]}`)
}

// Write a for loop that logs:
// Kojo has checked in.
// Ama has checked in.
// Yaw has checked in.
// Akosua has checked in to the console

const attendees1 = ["Kojo", "Ama", "Yaw", "Akosua"];
for (i = 0; i < attendees.length; i++) {
    console.log(`${attendees1[i]} has checked in.`)
}

const deliveries = [10, 15, 8, 12];
//Using a for loop to log a message like:
// "Delivering package number: 10"
for (i = 0; i < deliveries.length; i++) {
    console.log(`Delivering package number: ${deliveries[i]}`)
}

// // Using a for loop to add each task in the array below as a <li> inside the #taskList element
// let tasksList = ["Wash dishes", "Do laundry", "Finish homework", "Call Mom"];
// let tasks = document.getElementById('taskList');

// for (let i = 0; i < tasksList.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = tasksList[i];
//     tasks.appendChild(li);
// }




const books = ["The Alchemist", "1984", "Sapiens", "Becoming"];
for (i = 0; i < books.length; i++) {
    console.log(`Book: ${books[i]}`)
}

books.forEach(function (book) {
    console.log(`Book: ${book}`)
});


// Exercise 1B:**
// const students = ["Selorm", "Kwesi", "Afia", "Abena"];
// Task
//  Print each student’s name like this:
// Student name: Selorm
// Student name: Kwesi
// Again, write it using:

// 1. `for` loop
// 2. `forEach`

const students = ["Selorm", "Kwesi", "Afia", "Abena"];
for (i = 0; i < students.length; i++) {
    console.log(`Student name: ${students[i]}`)
}

students.forEach(function (student) {
    console.log(`Student name ${student}`)
});

// Print numbers 1 to 5 using a while loop.




i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

// Given this array
// const shoppingList = ["Tomatoes", "Bread", "Soap", "Oil"];
// Use a `while` loop to print each item in the array, like this:**
// Shopping item: Tomatoes  
// Shopping item: Bread  
// Shopping item: Soap  
// Shopping item: Oil  


const shoppingList = ["Tomatoes", "Bread", "Soap", "Oil"];

i = 0;
while (i < shoppingList.length) {
    console.log(`Shopping item: ${shoppingList[i]}`)
    i++;
}


i = 0;
while (i <= 10) {
    console.log(`Counting: ${i}`);
    i++;
}

const registeredUsers = ["Nana", "Esi", "Kojo", "Afua"];
// while loop should log user ... has logged in

i = 0;
while (i < registeredUsers.length) {
    console.log(`User ${registeredUsers[i]} has logged in`)
    i++;
}

const groceryList = ["Yam", "Tomatoes", "Onions", "Fish"];
// log dont forget to buy groceryList item to the console

i = 0;
while (i < groceryList.length) {
    console.log(`Don't forget to buy ${groceryList[i]}`)
    i++;
}

// Alright! Let’s make this `while` loop task a bit more challenging.

// You have an array of people trying to check in to an event. The venue only allows **3 check-ins**, even if there are more people in the list.
// Use a `while` loop to check in only the first 3 people and print:
// Checked in: [name]"`
// const people = ["Kwame", "Abena", "Yaw", "Kojo", "Ama"];
// Your task:
// Use a `while` loop
// Stop after 3 check-ins (don’t use `.slice()` or `.splice()`)
// Print the correct message

const people = ["Kwame", "Abena", "Yaw", "Kojo", "Ama"];
i = 0;
while (i <= 2) {
    console.log(people[i])
    i++;
}

const scores = [15, null, 23, 8, null, 31];
// printing scores that are not null

i = 0;
while (i < scores.length) {
    if (scores[i] !== null) {
        console.log(scores[i])
    }
    i++;
}

// const names = ["Kojo", "Ama", "Benjamin", "Yaw", "Kwabena", "Efua"];
// Task
// Use a `while` loop to print only the names that are **longer than 4 characters**.
// But here's the twist:
//  Also print their **character count** next to them like this:
//   Benjamin (8 characters)
//   Kwabena (7 characters)

const names = ["Kojo", "Ama", "Benjamin", "Yaw", "Kwabena", "Efua"];
i = 0;
while (i < names.length) {
    if (names[i].length > 4) {
        console.log(`${names[i]} (${names[i].length} characters)`)
    }
    i++;
}


// Write a `switch` statement that takes a variable `day` and logs the type of day it is (weekday or weekend).
// js
// let day = "Saturday";
// switch (day) {
//   // your code here
// Expected Output** if `day = "Saturday"`:
// Weekend

function getDayofWeek(day){
switch (day) {
    case "Saturday":
    case "Sunday":
        return "Weekend";

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": 
    return "Weekday";

    default: "Invalid day of week"

}
}

console.log(getDayofWeek("Saturday"))


// "admin" → "Full access granted."
// "editor" → "Can edit content."
// "subscriber" → "Can only view content."
// Anything else → "Role not recognized.
// You are building an app with different user roles. Based on the role variable, print the level of access each user has.

function hasAccess(user){
    switch (user.toLowerCase()){
        case "admin": return "Full access granted.";
        case "editor": return "Can edit content.";
        case "subscriber": return "Can only view content."
        default: return "Role not recognized"
    }
}

console.log(hasAccess("aDmin"))

const middleNames = ["kojo", "abena", "yaw", "efua"];
for(i=0;i<middleNames.length;i++){
    console.log(`${middleNames[i]}`)
}

//forEach 
//greet users
// const dayNames = ["Kojo", "Abena", "Yaw", "Efua"];
// Use forEach to greet each user
// dayNames.forEach(function(names){
//     console.log(`Welcome ${names}`)
// })

 
//DOM manipulation
//changing the background color of a div id when i click a button below it

// const changeBgOfBox = document.getElementById('box');
// const bgCol = document.getElementById('changeBackgroundColor');

// function bgChange(){
//     changeBgOfBox.style.backgroundColor='green';
// }


const button = document.getElementById('clickToDisplay')

function doSomething(){
button.addEventListener('click',function(){
     button.style.display= none;
})}
doSomething();




















































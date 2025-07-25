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

        default:  if(modeOfTransport===""){
            return "Please select a mode of transport"
        }else if(modeOfTransport!=="bike" || modeOfTransport!=="car" || modeOfTransport!=="van"){
            return "Invalid transport mode selected"
        }else{
            return "Error"
        }
    }

};

console.log(calcFare("",10));
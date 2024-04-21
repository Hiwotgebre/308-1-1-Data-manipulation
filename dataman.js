// Part 1: Math Problems
// Initialize four numbers
let n1 = 15; 
let n2 = 13; 
let n3 = 23;
let n4 = 7; //This numbers add up to 50

//Declare another variable to hold the addition and do the comparison

const sumOf50 = (n1 + n2 + n3 + n4 ) === 50;

console.log("It is is " + sumOf50) // out put is false because the sum of the numbers are greater than 50.

//1. Check is all numbers are divisible by 5. Cache the result in a variable
const numDivisibleBy5 = (n1 % 5 === 0, n2 % 5 === 0, n3 % 5 === 0, n4 % 5 === 0);

console.log("It is " + numDivisibleBy5)// Out put is false because none of the numbers are not divisible by 5

//2. Check if the first number is larger than the localStorage. Cache the result in a variable
const isFirstNumGreaterThanFirst = n1 > n4;
console.log("It is " + isFirstNumGreaterThanFirst);//out put is True because n1 is greater than n4

// 3. Accomplish the following arithmetic chain:
    // 3.1 Subtract the first number from the second number
const subFirstNumFromSecondnum = n1 - n2;

console.log("The answer is " + subFirstNumFromSecondnum);// Output is 2; 15 - 13 = 2

    // 3.2 Multiply the result by the third number
const multResultByThirdNum = subFirstNumFromSecondnum * n3;

console.log("The result is " + multResultByThirdNum)// Output is 46; 2 * 23 = 46

    // 3.3 Find the remainder of dividing the result by the fourth number
const diviResultByFourthNum = multResultByThirdNum % n4;

console.log("The remainder is " + diviResultByFourthNum);// Output is 4; 46/7 the remainder is 4

// 4. Change the way that isOver25 calculates so tha we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate
    // 4.1 Checking number is over 25 by using NOT operator
const isOver25 = !(n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);//checking number and use the NOT (!) operator

console.log("Is any number over 25? " + isOver25);// Out put is False

    // 4.2 Checking number is over 25 without using NOT operator
const anyOver25 = (n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);// change variable name and compare by using logic operator
    
console.log("Is any number over 25? " + anyOver25);


// Part 2: Practical Math

// Planning a cross-country road trip!
let totalDis = 1500

// car efficiency
    // At 55 miles per hour, you get 30 miles per gallon
    // At 60 miles per hour, you get 28 miles per gallon
    // At 75 miles per hour, you get 23 miles per gallon
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

const distance =  1500; // Total miles
const budget = 175; //Total fuel budget
const fuelPrice = 3; // cost per gallon

const speeds = [55, 60, 75];// Array os speed
const mpgs = [30, 28, 23]; // Corresponding miles per gallon

for (let i = 0; i < speeds.length; i++){
    const speed = speeds[i];
    const mpg = mpgs[i];

    //Calculating trip details
    const gallonsNeeded = distance / mpg;
    const totalCost = gallonsNeeded * fuelPrice;
    const time = distance / speed;
    const withinBudget = totalCost <= budget;
    
    // Logging results
    console.log("At " + speed + " mpg");
    console.log("Gallons needed: " +  gallonsNeeded);
    console.log("Total cost: " + totalCost);
    console.log("Trip duration: " + time + " hours");
    console.log("Within budget: " + withinBudget);

}




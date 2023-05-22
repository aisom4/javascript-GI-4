// Exercise Number 1

// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

function average(arr) {
  //create a function that accepts an array
  let total = 0; // setting a variable to 0 to be ready to accept a value
  for (i = 0; i < arr.length; i++) {
    //for loop that will go through each index in the array //always use the parameter.length NOT the name of the function
    total += arr[i]; //adding the array indexes to the 0 total variable
  }
  let final = total / arr.length; //creating another variable to complete the math to find the average
  return final; //return the results of the math to find the average
}
console.log(average([1, 4, 7]));
console.log(average([10, 5]));
console.log(average([1.5, 3, 2.5, 1]));

//question 2

//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array, return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

//IGNORE THIS BLOCK
// function findNum(arr) {
//   for (let i = 0; i < arr.length; i++) {}
//   return arr.indexOf(target);
// }

// console.log(findNum([4, 5, 6, 7, 0, 1, 2]));
// target = 7;
//IGNORE THIS BLOCK

function findNum(arr, target) {
  //set up a function that accepts two parameters
  for (let i = 0; i < arr.length; i++) {
    //I wanted to create a for loop to go through my array //Code works without a forloop as well
    return arr.indexOf(target); //must return or you will get undefined
  }
}
console.log(findNum([4, 5, 6, 7, 0, 1, 2], 5)); //calling answer
console.log(findNum([4, 5, 6, 7, 0, 1, 2], 2));
console.log(findNum([6, 8, 8, 3, 9, 5, 2], 4));

// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background.

// Create a single function that takes an input className and updates the body's classList to ONLY include that className

// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js.

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function bodyChange(color) {
  document.body.className = color;
}

// *VERY HARD QUESTION: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you.
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

//MY STEPS TO TRY SOLVE THE PROBLEM---------------------------------------
//create a function
// let that function accept an array and a number as a second parameter
// functions needs to calculate the fewest number of coins to come up with that number
// if those coins do not calculate the output amount return -1
function coins(arr, number) {
  //arr = the coins ---- number = output
  let coinCount = 0; // an empty varible to keep count of the coins used
  for (let i = 0; i < arr.length; i++) {
    //creating a for loop to go through the coins array
    coinCount += arr[i];
  }
  return coinCount;
}
// I know that I will have to check to see if each coin denomination can go inside of the output amount.
// i know i will need a conditional to test if the array numbers can make up the output
//if the coin can be apart of the final amount we can add to the coin count
console.log(coins([1, 2, 3, 4, 5], 15));

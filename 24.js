//Question 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// //Tests for equality and inequality with strings:
var str1 = "Khaleel";
var str2 = "Faheem";
console.log(str1 === str2);
console.log(str1 === "Khaleel");
// // • Tests using the lower case function
var pasword = "me nahi btaonga";
var guess1 = "Me nahi btaonga".toLocaleLowerCase();
var guess2 = "Me nahi btaonga";
console.log(pasword === guess1);
console.log(pasword === guess2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var no1 = 0;
var no2 = 2;
console.log(no1 === no2);
console.log(no1 > no2);
console.log(no1 < no2);
console.log(no1 >= no2);
console.log(no1 <= no2);
//Tests using and or operator:
//Example of and :
var age = 19;
var hasDrivingLisence = false;
if (age >= 18 && hasDrivingLisence) {
    console.log("You are eligible to drive.");
}
else if (age >= 18 && hasDrivingLisence === false) {
    console.log("You have to pay 10rs for fine.");
}
else if (age <= 18 && hasDrivingLisence === false) {
    console.log("You are not eligible to drive and You have to pay 20rs for fine.");
}
//Example of or :
var temperature = 15;
var isRaining = true;
if (temperature < 10 || isRaining) {
    console.log("Bring a coat and an umbrella.");
}
else {
    console.log("Enjoy your day!");
}
// • Test whether an item is in a array and // • Test whether an item is not in a array
var fruits = ["apple", "orange", "banana", "pear"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("grapes"));
console.log(fruits.includes("banana"));

"use strict";
//Question 18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//printing array in original order:
let locations = ["Makkah", "Medina", "Dubai", "Japan", "America"];
console.log(locations);
//printing array in alphabetical order:
console.log(locations.sort());
// //Array is still in original order:
console.log(locations);
//Reverse alphabetical order of the list:
console.log(locations.sort().reverse());
// //Array is still in original order:
console.log(locations);
// //Reversing the array:
console.log(locations.reverse());
// //Array is still in original order:
console.log(locations);
//Sorting the array in alphabetical order:
locations = locations.sort();
console.log(locations);
//Sorting array in reverse alphabetical order:
locations = locations.reverse();
console.log(locations);

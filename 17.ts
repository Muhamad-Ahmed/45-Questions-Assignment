//Question 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests3: string[] = ["Muhammad", "Asif", "Arsalan"];

for (let i = 0; i < guests3.length; i++) {
  console.log(`I am excited to invite ${guests3[i]} to dinner.`);
}

console.log("\n");

console.log(`${guests3[2]} cannot visit today for dinner.`);
console.log("\n");
guests3[2] = "Shaikh Chilli";
for (let i = 0; i < guests3.length; i++) {
  console.log(`I am excited to invite ${guests3[i]} to dinner.`);
}

//beginning of question 16 part:
console.log(
  `I have found a bigger dinner table . So, I can invite 3 more guests.`
);
guests3.unshift("Abdul Qadir"); //inserts element at the beginning of the array.
guests3.push("Khalid"); //Appending new element to the end of an array.
let index = guests3.length / 2;
guests3.splice(index, 0, "Haroon"); //insers haroon at the middle of the array.

console.log(guests3);

//Beginning of question 17:
//Removing guests from array:
console.log(`Sorry Friends I can invite only 2 people for dinner.`);
for (let i = 0; i <= guests3.length; i++) {
  let n = guests3.length - 1;
  console.log(`Sorry! ${guests3[n]} I can't invite you for dinner`);
  guests3.pop();
  n -= 1;
}

console.log(guests3);

//inviting remaining guests:
for (let guests of guests3) {
  console.log(`${guests} is still invited for dinner.`);
}

//removing last two guests:
for(let i=0;i<=guests3.length;i++) {
    guests3.pop();
}
console.log(guests3);//empty array


//Question 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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
console.log(`I have found a bigger dinner table . So, I can invite 3 more guests.`);
guests3.unshift("Abdul Qadir");//inserts element at the beginning of the array.
guests3.push("Khalid")//Appending new element to the end of an array.
let index=guests3.length/2;
guests3.splice(index,0,"Haroon");//insers haroon at the middle of the array.

console.log(guests3);


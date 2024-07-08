"use strict";
//Question 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guests2 = ["Muhammad", "Asif", "Arsalan"];
for (let i = 0; i < guests2.length; i++) {
    console.log(`I am excited to invite ${guests2[i]} to dinner.`);
}
console.log("\n");
console.log(`${guests2[2]} cannot visit today for dinner.`);
console.log("\n");
guests2[2] = "Shaikh Chilli";
for (let i = 0; i < guests2.length; i++) {
    console.log(`I am excited to invite ${guests2[i]} to dinner.`);
}

//Question 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ["Ahmed", "Yasin", "Bilal", "Admin", "Umer"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
for (var item in usernames) {
    if (usernames[item] === "Admin") {
        console.log("Hello ".concat(usernames[item], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(usernames[item], ", thank you for logging in again."));
    }
}
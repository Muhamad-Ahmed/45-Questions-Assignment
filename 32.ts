//Question 32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Usman", "Umer", "Bashir", "Khizer", "Abdullah"];
let new_users: string[] = ["Ahmed", "Hamza", "KHIZER", "Ali", "Hassan"];

for (let i of new_users) {
  let isAvailable = true;
  for (let j of current_users) {
    if (i.toLowerCase() === j.toLowerCase()) {
      console.log(
        `Username ${i} is already taken Choose a different username.`
      );
      isAvailable = false;
      break;
    }
  }
  if (isAvailable) {
    console.log(`Username ${i} is available.`);
  }
}

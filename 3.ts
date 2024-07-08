//Question no 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name="Ahmed Shahid";
console.log(`lowercase: ${Name.toLowerCase()}`);
console.log(`uppercase: ${Name.toUpperCase()}`);
console.log(`titlecase: ${Name.replace(/\b\w/g,c=> c.toUpperCase())}`);
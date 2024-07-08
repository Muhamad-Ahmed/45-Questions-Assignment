//Question 42:
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=["Altaf","Saalim","Hussain","Shafqat","Azaad Cheema"];

function make_great(magicianNames:string[]){
    for(let i of magicianNames){
        console.log(`The Great ${i}.`);
        
    }
}
make_great(magicians);
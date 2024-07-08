//Question 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians:string[]=["Altaf","Saalim","Hussain","Shafqat","Azaad Cheema"];
let newMagicians:string[]=[];
function make_great(magicianNames:string[]){
   
    for(let i of magicianNames){
        let item:string=`The Great ${i}`;

    newMagicians.push(item);
        
    }
    return newMagicians;
}
make_great(magicians);
console.log(newMagicians);




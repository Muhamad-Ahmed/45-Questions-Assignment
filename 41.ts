//Question 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians:string[]=["Altaf","Saalim","Hussain","Shafqat","Azaad Cheema"];

function show_magicians(magicianNames:string[]){
    for(let i of magicianNames){
        console.log(i);
        
    }
}
show_magicians(magicians);
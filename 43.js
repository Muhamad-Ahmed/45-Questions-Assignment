//Question 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Altaf", "Saalim", "Hussain", "Shafqat", "Azaad Cheema"];
var newMagicians = [];
function make_great(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var i = magicianNames_1[_i];
        var item = "The Great ".concat(i);
        newMagicians.push(item);
    }
    return newMagicians;
}
make_great(magicians);
console.log(newMagicians);

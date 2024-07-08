//Question 42:
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Altaf", "Saalim", "Hussain", "Shafqat", "Azaad Cheema"];
function make_great(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var i = magicianNames_1[_i];
        console.log("The Great ".concat(i, "."));
    }
}
make_great(magicians);

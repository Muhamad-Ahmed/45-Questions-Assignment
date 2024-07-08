//Question 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Altaf", "Saalim", "Hussain", "Shafqat", "Azaad Cheema"];
function show_magicians(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var i = magicianNames_1[_i];
        console.log(i);
    }
}
show_magicians(magicians);

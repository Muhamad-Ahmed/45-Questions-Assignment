//Question 36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function t_shirt(sizeInches, message) {
    console.log("T-shirt size:".concat(sizeInches));
    console.log("T-shirt message:".concat(message));
}
t_shirt(33, "Addidas");
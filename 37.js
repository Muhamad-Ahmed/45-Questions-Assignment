//Question 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("T-shirt size: ".concat(size));
    console.log("T-shirt message: ".concat(message));
}
make_shirt(undefined, undefined);
function make_shirt2(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("T-shirt size: ".concat(size));
    console.log("T-shirt message: ".concat(message));
}
make_shirt2(undefined, undefined);
function make_shirt3(size, message) {
    if (size === void 0) { size = "small"; }
    if (message === void 0) { message = "I love Programming."; }
    console.log("T-shirt size: ".concat(size));
    console.log("T-shirt message: ".concat(message));
}
make_shirt3(undefined, undefined);

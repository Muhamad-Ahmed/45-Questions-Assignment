//Question 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript."
): void {
  console.log(`T-shirt size: ${size}`);
  console.log(`T-shirt message: ${message}`);
}
make_shirt(undefined, undefined);
function make_shirt2(
  size: string = "medium",
  message: string = "I love TypeScript."
): void {
  console.log(`T-shirt size: ${size}`);
  console.log(`T-shirt message: ${message}`);
}
make_shirt2(undefined, undefined);

function make_shirt3(
  size: string = "small",
  message: string = "I love Programming."
) {
  console.log(`T-shirt size: ${size}`);
  console.log(`T-shirt message: ${message}`);
}
make_shirt3(undefined, undefined);

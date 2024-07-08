//Question 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model) {
    var accessories = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        accessories[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        accessories: accessories,
    };
    return car;
}
console.log(createCar("Toyota", "Prius", "Black", "Hybrid"));

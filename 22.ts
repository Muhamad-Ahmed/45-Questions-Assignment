//Question 22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers[16]);//it will print undefined bcz at indx 16 value is not defined.
//soulution:give the index which is in the bound of array.
console.log(numbers[0]);


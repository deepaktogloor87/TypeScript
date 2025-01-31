// using java script
// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.warn(sum('10', 20));

// how to restrict in javascript that the value should be string / number
// to over come that we need to write if condition in javascript

function sum(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else
    {
        return new Error('value is not number');
    }
}
console.warn(sum('10', 20));

// so complexity will be increased, explicitly we have to write a conditions to restrict the values of the arguments.
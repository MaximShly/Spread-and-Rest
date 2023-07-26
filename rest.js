// Create the function sumAll using the rest operator
function sumAll(...args) {
    // Use the reduce function on args to add all elements
    let sum = args.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

//don't change this line
module.exports = { sumAll };
/**
 * 2620. Counter (Easy)
Given an integer n, return a counter function.
This counter function initially returns n
and then returns 1 more than the previous value
every subsequent time it is called (n, n + 1, n + 2, etc).
 */

/**
 * @param {number} new
 * @return {function} counter
 */
function createCounter(n) {
    return function() {
        return n++;
    };
};





// Example

let counter = createCounter(1);

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

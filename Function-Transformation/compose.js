// 2629. Function Composition
// Easy

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.



/**
 * @param {Function[]} functions
 * @return {Function}
 */
var composeIter = function(functions) {
    if (functions.length === 0) return function(x) {return x}
	return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};
var composeRedu = function(functions) {
    if (functions.length === 0) return function(x) {return x}
	return function(x) {
        const compFG = functions.reduceRight(cb = (func, gunc) => func(gunc))
        return compFG
    }
};

  // Example
  const fn = composeIter([x => x + 1, x => 2 * x])
  console.log(fn(4)) // 9

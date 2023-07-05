// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let time = false;

    return function(...args){

        if(!time ){
            time = true;
            return fn(...args);
        }// since nothing is retuned on this line whenever time is true, line 16 !time will be false which will return undefined. because nothing is defined on this line
    };
};
// Example
const fn = (a,b,c) => (a + b + c); const calls = [[1,2,3],[2,3,6]];
const  func = once(fn)
console.log(func(...calls[0]))
console.log(func(...calls[1]))

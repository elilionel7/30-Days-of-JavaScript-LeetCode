/**
 * 2704. To Be Or Not To Be (Easy)

Write a function expect that helps developers test their code.
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true
    if the two values === each other.
    If they are not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true
    if the two values !== each other.
    If they are equal, it should throw an error "Equal".

 */

/**
 * @param {string}
 * @return {object}
 */

var expect = function(val) {
    const obj = {
        toBe : otherVal => {if (val === otherVal) {
            return true
        } throw new Error('Not Equal');},

        notToBe : otherVal => {if (val !== otherVal) {
            return true
        } throw new Error(`Equal`);}

    };
    return obj
}

// Example
console.log(expect(10).toBe(10)); //  true
console.log(expect(10).notToBe(20)); //  true
console.log(expect(10).toBe(20));
console.log(expect(10).notToBe(10));

//line 39 will throw an error like this
//( throw new Error('Not Equal');},
//          ^

//          Error: Not Equal)

// and break meaning line 40 will not go through

// try {
//     console.log(expect(10).toBe(20)); // throws Error: Not Equal
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     console.log(expect(10).notToBe(10)); // throws Error: Equal
// } catch (error) {
//     console.error(error.message);
// }

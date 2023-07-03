/**
 * Write a function createHelloWorld.
 * It should return a new function that always returns "Hello World".
 * Any arguments could be passed but the func always returns "Hello World"
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
       return "Hello World";

    }

};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
console.log(createHelloWorld()())
console.log(createHelloWorld()("ahd {}hdegg"))

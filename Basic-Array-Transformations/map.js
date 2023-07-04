/**
 * 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i);
    }
    return newArray

};

const arr = [1, 2, 3, 4, 5];
const double = (num) => num * 2;

console.log(map(arr, double)); //  [2, 4, 6, 8, 10]

const arr1 = [1,2,3]; const fn = function plusone(n) { return n + 1; }
console.log(map(arr1, fn)); // [2,3,4]

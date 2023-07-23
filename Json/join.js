// 2722. Join Two Arrays by ID
// Given two arrays arr1 and arr2, return a new array joinedArray.
//All the objects in each of the two inputs arrays will contain
//an id field that has an integer value. joinedArray is an array
//formed by merging arr1 and arr2 based on their id key.
//The length of joinedArray should be the length of unique values of id.
//The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const mergedMap = {};

    for (const obj1 of arr1) {
        mergedMap[obj1.id] = { ...obj1 };
    }

    for (const obj2 of arr2) {
        if (mergedMap[obj2.id]) {

            mergedMap[obj2.id] = { ...mergedMap[obj2.id], ...obj2 };
        } else {

            mergedMap[obj2.id] = { ...obj2 };
        }
    }

    const result = Object.values(mergedMap);
    result.sort((a, b) => a.id - b.id);

    return result;
};

// this examples are from leetCode
Input:
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
],
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output:
console.log(join(arr1, arr2))
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
//]

/**
 * @return {number}
 */

var argumentsLength = function(...args) {
    return [...args].length;
};

//OR
var argumentsLength1 = function(...args) {
    let count = 0
    for( let i = 0 ; i < args.length; i++){
        count++
    }
    return count

};



  console.log(argumentsLength(1, 2, 3)); // 3

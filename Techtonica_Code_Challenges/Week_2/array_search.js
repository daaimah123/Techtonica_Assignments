/*

You are given an array of integers arr and a target element target. Your task is to implement a function findLastIndex(arr, target) that returns the last index at which the target element appears in the array. If the target element is not present in the array, the function should return -1.

Examples:
console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6));  // Output: -1

Input
first param => array of integers, 
second param => target: the element to search for in the array

Output
returning the last index of the target element in the array, if not found return -1


*/

function findLastIndex(arr, target){
    const lastIndex = arr.findLastIndex((el) => el === target)
    /*
    
    arr: [1, 2, 3, 4, 5, 2]  
    iteration 1: element = 2....if 2 === 2; length (6) - 1 = 5
    target: 2

    */
    //     if-condition  ?   true-condition  : false-condition
    return lastIndex !== -1 ? lastIndex : -1;
    // if(lastIndex !== -1){
    //     return lastIndex;
    // } else {
    //     return -1;
    // }
}

console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6)); // Output: -1
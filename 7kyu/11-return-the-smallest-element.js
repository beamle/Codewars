/*
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
* */

function removeSmallest(numbers) {
    let min = numbers.indexOf(Math.min(...numbers))
    return numbers.slice(0, min).concat(numbers.slice(min+1, numbers.length));
}
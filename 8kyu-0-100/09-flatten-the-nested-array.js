const integers = [1, 2, 3, [4, 5, 6, [6, 7], 3], 3];


// flat()
function flat(arr) {
    return arr.flat(Infinity)
}

// arr->string->arr of nums
function flatten(arr) {
    return arr.join('').split(',').map(el => Number(el))
}


//recursively
function flattenArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flattenArray(arr[i])); // Recursively flatten nested arrays
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

const flattenedArray = flattenArray(integers);
console.log(flattenedArray);
function flatten(arr) {
    return arr.join('').split(',').map(el => Number(el))
}
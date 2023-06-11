// write the function isAnagram
var isAnagram = function(test, original) {
    let result = arr => [...arr.toLowerCase('')].sort().join('')
    return result(test) === result(original)
};

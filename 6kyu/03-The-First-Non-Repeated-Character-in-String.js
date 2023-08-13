/*
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/


function firstNonRepeated(s) {
    for(var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s[i]
        }
    }
    return null
}

function firstNonRepeated(s) {
    let counterUnique, nonUniqueCoutner = 0
    let obj = {}
    let key;
    for (let i = 0; i < s.length; i++){
        key = s[i]
        if(!obj.hasOwnProperty(key)){
            obj[key] = 1
        } else obj[key]++
    }
    for (let key in obj){
        if (obj[key] === 1) {
            counterUnique++
            if(counterUnique === Object.keys(obj).length) return s[0]
        }
        if(obj[key] !== 1){
            nonUniqueCoutner++
            if(nonUniqueCoutner === Object.keys(obj).length) return null
        }
        if(obj[key] === 1) return key
    }
}
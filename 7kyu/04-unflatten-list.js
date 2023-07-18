// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/javascript

function unflatten (flatArray){
    let arr = [];
    let length = flatArray.length
    for(let i = 0; i < flatArray.length;){
        let flatNum = flatArray[i]
        if (flatNum < 3) {arr.push(flatNum); i++}
        else if (flatNum > 2) {
            let newArr = flatArray.slice(i, i+flatNum)
            arr.push(newArr)
            i += flatNum
        }
    }
    return arr
}
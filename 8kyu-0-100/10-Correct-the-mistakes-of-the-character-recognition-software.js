function correct(string){
    let newStr = string
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "0") {
            newStr = newStr.substring(0, i) + "O" + newStr.substring(i+1)
        }
        if (newStr[i] === "1") {
            newStr = newStr.substring(0, i) + "I" + newStr.substring(i+1)
        }
        if (newStr[i] === "5") {
            newStr = newStr.substring(0, i) + "S" + newStr.substring(i+1)
        }
    }
    return newStr
}
// Given a string str, reverse it and omit all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string


function reverseLetter(str) {

    let newStr = '';
    for (let i = str.length -1; i >= 0; i--) {
        if (str[i] >= 'a' && str[i] <= 'z'){
            newStr += str[i];
        }
    }
    return newStr;

}





function reverseLetter1(str) {
    return str.split('').reverse().filter((el) => {
        if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) !== -1) {
            return el;
        }
    }).join('');
}
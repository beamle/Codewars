// How can you tell an extrovert from an introvert at NSA?
//     Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
//     According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
//
//     For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
//
// Test examples:
//
//     "EBG13 rknzcyr." -> "ROT13 example."
//
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++ ){
        let charCode = str[i].charCodeAt()
        if (charCode >= 65 && charCode <=90) {
            if (charCode + 13 > 90){
                let remainder = (charCode + 12) - 90
                newStr += String.fromCharCode(65 + remainder)
            }
            else {
                newStr += String.fromCharCode(charCode + 13)
            }
        }
        else if(charCode >= 97 && charCode <= 122) {
            if (charCode + 13 > 122){
                let remainder = (charCode + 12) - 122
                newStr += String.fromCharCode(97 + remainder)
            }
            else {

                newStr += String.fromCharCode(charCode + 13)
            }
        }
        else newStr += str[i]



    }
    return newStr
}
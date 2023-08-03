/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.
    Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/
function SeriesSum1(n) {
    let sum = 0;
    let counter = 0;
    for (let div = 1; counter < n; div +=3 ){
        counter++
        sum += 1 / div
    }
    return String(sum.toFixed(2))
}



// function SeriesSum(n) {
//     let sum = 0;
//     let counter = 0;
//     for (let div = 1; counter < n; div += 3) {
//         sum += (1 / div)
//         counter++
//     }
//     return n === 0 ? '0.00' : parseFloat(sum).toFixed(2).toString()
// }
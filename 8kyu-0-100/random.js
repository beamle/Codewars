function shortcut (string) {
    string=  string.replace(/[ab]yes/g,'')
    return string
}

let tss = /yes/g;
let counter= 0

let match = "Aaaaa yes byeasiojsa yes".match(tss)
if (match){ counter = match.length}
console.log(counter)
console.log(typeof shortcut)

function getDivisorsCnt(n){
    let count = 0;
    for (let i = 0; i <= n; i++){
        if (n % i === 0){
            count++
        }
    }
    return count
}

console.log(10%1)
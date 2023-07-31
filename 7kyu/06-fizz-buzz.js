// Write a function that takes an integer and returns an array [A, B, C],
// where A is the number of multiples of 3 (but not 5) below the given integer,
// B is the number of multiples of 5 (but not 3) below the given integer and
// C is the number of multiples of 3 and 5 below the given integer.
//
//     For example, solution(20) should return [5, 2, 1]

function solution(number){
    let arrByThree = []
    let arrByFive = []
    let arrByThreeAndFive = []
    for (let i = 1; i < number; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            arrByThreeAndFive.push(i)
        }
        else if (i % 3 === 0 && i % 5 !== 0) {
            arrByThree.push(i)
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            arrByFive.push(i)
        }

    }
    return [arrByThree.length, arrByFive.length, arrByThreeAndFive.length]
}

function solution1(number){
    let Acount = 0, Bcount = 0, Ccount = 0;
    for (let i = 1; i < number; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            Ccount++
        }
        else if (i % 3 === 0 && i % 5 !== 0) {
            Acount++
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            Bcount++
        }

    }
    return [Acount,Bcount,Ccount]
}
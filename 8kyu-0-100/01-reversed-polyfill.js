const reverseSeq = n => { // 1 2 3 4
    debugger
    let temp;
    for (let i = 0; i < Math.floor(n.length / 2); i++){
        temp = n[(n.length - 1 - i)]; // 2
        n[(n.length - 1 - i)] = n[i]
        n[i] = temp

    }
    return n;
};

reverseSeq([1,2,3,4,5])
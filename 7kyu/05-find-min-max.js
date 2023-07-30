function getMinMax(arr){
    let sorted = arr.sort((a,b) => a-b)
    return [sorted[0], sorted[sorted.length - 1]]
};
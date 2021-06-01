console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

// productOfArray([1, 2, 3])
// productOfArray([1, 2, 3, 10])

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
}
console.log(flatten([1, 2, 3, [4, 5]]));    // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]));  // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]]));  // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))    // [1,2,3]


function flatten(arr) {
    // if (arr.length === 1) return result.push(arr[arr[0]]);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && Array.isArray(arr[i])) {
            result = [...result, ...flatten(arr[i])];
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
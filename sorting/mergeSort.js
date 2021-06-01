console.log(mergeSort([50, 10, 2, 9, 8]));

// function merge(arr1, arr2) {
//     let [i, j] = [0, 0];
//     let totalLength = arr1.length + arr2.length;
//     let result = new Array(totalLength);
//     while (i < arr1.length || j < arr2.length) {
//         if (i === arr1.length && j < arr2.length) {
//             result.push(arr2[j]);
//             j++;
//         } else if (j === arr2.length && i < arr1.length) {
//             result.push(arr1[i]);
//             i++;
//         } else if (arr1[i] < arr2[j] && i < arr1.length) {
//             result.push(arr1[i]);
//             i++;
//         } else if (arr2[j] < arr1[i] && j < arr2.length) {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     return result;
// }

// Instructor Approach

function merge(arr1, arr2) {
    let [i, j] = [0, 0];
    let result = [];
    // console.log(result);
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // If array 2 gets exhausted then we just push arr1 values to resultant array
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    // If array 1 gets exhausted then we just push arr2 values to resultant array
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    // console.log(arr.slice(0, mid));
    let arrLeft = mergeSort(arr.slice(0, mid));
    let arrRight = mergeSort(arr.slice(mid));
    return merge(arrLeft, arrRight);
}
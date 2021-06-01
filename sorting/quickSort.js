console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

// function pivot(arr, start, end) {
//     let pivotVal = arr[start];
//     let pivotCurrIndex = start;
//     start = 1;
//     while (start < end) {
//         if (pivotVal > arr[start]) {
//             pivotCurrIndex++;
//             arr = swap(arr, start, pivotCurrIndex);
//         }
//         start++;
//     }
//     arr = swap(arr, 0, pivotCurrIndex);
//     return arr;
// }

function swap(arr, start, swapIdx) {
    let temp = arr[start];
    arr[start] = arr[swapIdx];
    arr[swapIdx] = temp;
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotVal = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivotVal > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
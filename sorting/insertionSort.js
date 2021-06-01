console.log(insertionSort([5, 3, 4, 1, 2]));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        // while (j >= 0 && arr[j] > currentVal) {
        //     arr[j + 1] = arr[j];
        //     j--;
        // }
        for (; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}


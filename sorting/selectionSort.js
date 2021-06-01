console.log(selectionSort([34, 22, 10, 19, 17]));

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minValIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minValIndex]) {
                minValIndex = j;
            }
        }
        if (minValIndex !== i) {
            swap(arr, i, minValIndex);
        }
    }
    return arr;
}

function swap(arr, i, minValIndex) {
    let temp = arr[i];
    arr[i] = arr[minValIndex];
    arr[minValIndex] = temp;
    return arr;
}
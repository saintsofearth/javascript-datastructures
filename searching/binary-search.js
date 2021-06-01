console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10));
// console.log(binarySearch([]))
// console.log(binarySearch());
function binarySearch(arr, key) {
    let [left, right] = [0, arr.length - 1];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            right = mid - 1;
        } else if (arr[mid] < key) {
            left = mid + 1;
        }
    }
    return -1;
}
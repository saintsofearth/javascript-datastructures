
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], val => val > 10));

function someRecursive(arr, cb) {
    if (arr.length === 1) {
        return cb(arr[arr.length - 1]);
    }
    if (cb(arr[arr.length - 1])) {
        return true;
    }
    return someRecursive(arr.slice(0, arr.length - 1), cb);
}
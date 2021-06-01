console.log(countUniqueValue([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));

function countUniqueValue(arr) {
    if (arr.length === 0) {
        return;
    } 
    let curr = 0;
    let next = 1;
    let unique = 1;
    while (next < arr.length) {
        if (arr[curr] !== arr[next]) {
            unique++;
            curr = next;
            next++;
        } else {
            next++
        }
    }
    return unique;
}
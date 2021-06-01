console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

function averagePair(arr, targetAvg) {
    if (arr.length === 0) {
        return false;
    }
    let [p1, p2] = [0, arr.length - 1];
    while (p1 < p2) {
        let currAvg = (arr[p1] + arr[p2]) / 2;
        if (currAvg === targetAvg) {
            return true;
        }
        if (currAvg < targetAvg) {
            p1++;
        }
        if (currAvg > targetAvg) {
            p2--;
        }
    }
    return false;
}
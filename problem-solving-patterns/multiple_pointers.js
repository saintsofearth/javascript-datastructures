console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));


function sumZero(arr) {
    if (arr.length === 0) {
        return;
    }
    let [left, right] = [0, arr.length - 1];
    let sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            // return the pair [arr[left], arr[right]]
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            // arr[right] value is greater reduce the value of right
            right--;
        }
        if (sum < 0) {
            // arr[left] value is greater increase the value of left
            left++;
        }
    }
    return;
}
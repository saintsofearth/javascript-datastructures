/* Example Problem: Write a function called maxSubArraySum which accepts an array of integers and a numbers called n.
The function should calculate the maximum sum of n consecutive elements in the array */

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubArraySum([4, 2, 1, 6], 1));
// console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubArraySum([], 4));

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubArraySum([2, 3], 3));

function maxSubArraySum(arr, n) {
    if (arr.length === 0 || arr.length < n) {
        return null;
    }
    let [maxSum, tempSum] = [0, 0];
    // Step 1: determine the window sum using the tempSum

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

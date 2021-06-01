console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let bucket = [[], [], [], [], [], [], [], [], [], []];
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
        // arr = [...bucket];
    }
    return arr;
}
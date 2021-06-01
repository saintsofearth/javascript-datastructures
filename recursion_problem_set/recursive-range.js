console.log(recursiveRange(6));
console.log(recursiveRange(10));

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}
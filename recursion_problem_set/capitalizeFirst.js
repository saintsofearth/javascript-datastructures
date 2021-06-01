let result = [];
console.log(capitalizeFirst(['car', 'taco', 'banana']));
// capitalizeFirst(['car', 'taco', 'banana'])

function capitalizeFirst(arr) {
    if (arr.length === 0) {
        // This is my base condition after executing this block no more execution required.
        return;
    }
    let str = arr[arr.length - 1];
    let first = str.charAt(0).toUpperCase();
    let rest = str.substring(1);
    let final = first + rest;
    // console.log(final);
    capitalizeFirst(arr.slice(0, arr.length - 1));
    // console.log(`array returned: ${arr}`);
    result.push(final);
    // console.log(`${arr}`);
    return result;
}
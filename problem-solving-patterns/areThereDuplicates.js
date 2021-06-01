console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

function areThereDuplicates(...duplicates) {
    let frequency = {};
    for (let val of duplicates) {
        frequency[val] = (frequency[val] || 0) + 1;
    }
    // console.log(frequency);
    for (let key in frequency) {
        if (frequency[key] > 1) {
            return true;
        }
    }
    return false;
}
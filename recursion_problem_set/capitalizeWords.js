let words = ['i', 'am', 'learning', 'recursion'];
let result = [];
console.log(capitalizeWords(words));

// Instructor approach
function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let word = arr[arr.length - 1];
    arr = capitalizeWords(arr.slice(0, arr.length - 1));
    word = word.toUpperCase();
    arr.push(word);
    return arr;
}     

// My approach
// function capitalizeWords(arr) {
//     if (arr.length === 0) {
//         return;
//     }
//     let word = arr[arr.length - 1];
//     arr = capitalizeWords(arr.slice(0, arr.length - 1));
//     word = word.toUpperCase();
//     result.push(word);
//     return result;
// }
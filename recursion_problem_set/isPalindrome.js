console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) {
        if (str.charAt(0) === str.charAt(str.length - 1)) {
            return true;
        } else {
            return false;
        }
    }
    let result = isPalindrome(str.substring(1, str.length - 1));
    // console.log(result);
    if (result) {
        if (str.charAt(0) === str.charAt(str.length - 1)) return true;
    }
    return false;
}
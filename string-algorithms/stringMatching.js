/*

Problem Statement: Search a pattern in a given Text. The pattern is of length m and the text is of length n. Where m < n.

*/

// Brute force Search approach
function bruteForceSearch(pattern, text) {
    let m = pattern.length;
    let n = text.length;
    let [i, j] = [0, 0];
    let patternFound = false;
    while (i < n - m) {
        j = 0;
        while (j < m && pattern.charAt(j) === text.charAt(i + j)) {
            j++;
        }
        if (j === m) {
            patternFound = true;
            break;
        }
        i++;
    }
    return patternFound;
}

// Robin-Karp algorithm


console.log(bruteForceSearch('onre', 'amazonrecruitment'));
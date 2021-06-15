KNPSearch('abbcabb', 'abbdcabbcabb');

function computeLPSArray(pattern) {
    let j = 0;
    let i = 1;
    let lps = [];
    lps[0] = 0;

    while (i < pattern.length) {
        if (pattern.charAt(i) === pattern.charAt(j)) {
            j++;
            lps[i] = j;
            i++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                lps[i] = j;
                i++;
            }
        }
    }
    return lps;
}

function KNPSearch(pattern, text) {
    let m = pattern.length;
    let n = text.length;
    let lps = computeLPSArray(pattern);
    let [i, j] = [0, 0];
    while (i < n) {
        if (pattern.charAt(j) === text.charAt(i)) {
            j++;
            i++;
        }
        if (j === m) {
            console.log(`Found pattern at index ${i - j}`);
            j = lps[j - 1];
        } else if (i < n && pattern.charAt(j) !== text.charAt(i)) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}
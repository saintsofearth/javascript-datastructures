console.log(stringSearch("lorie loled", "pop"));

// This is Naive String Search implementation
function stringSearch(lStr, sStr) {
    let matchFound = 0;
    for (let i = 0; i < lStr.length; i++) {
        let j = 0;
        let k = i;
        while (j < sStr.length) {
            if (sStr[j] === lStr[k]) {
                j++;
                k++;
            } else {
                break;
            }
        }
        if (j === sStr.length) {
            matchFound++;
        }
    }
    return matchFound;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));


function sameFrequency(num1, num2) {
    // step 1: create frequency objects for both num and also determine their length;

    let [temp1, temp2, frequencyCounter1, frequencyCounter2, length1, length2] = [num1, num2, {}, {}, 0, 0];
    while (temp1 > 0) {
        let r = temp1 % 10;
        // console.log(r);
        temp1 = Math.floor(temp1/10);
        // console.log(temp1);
        length1++;
        frequencyCounter1[r] = (frequencyCounter1[r] || 0) + 1;
    }
    while (temp2 > 0) {
        let r = temp2 % 10;
        temp2 = Math.floor(temp2 / 10);
        length2++;
        frequencyCounter2[r] = (frequencyCounter2[r] || 0) + 1;
    }
    
    if (length1 !== length2) {
        return false;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}
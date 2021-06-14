// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         // map "a" to 1, "b" to "2", "c" to 3, etc...
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }


// Improvised Hash function

// function hash(key, arrayLen) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let idx = this.hash(key);
        let bucket = this.keyMap[idx];
        if (!bucket) bucket = new Array();
        bucket.push([key, value]);
        this.keyMap[idx] = bucket;
        return this.keyMap;
    }

    get(key) {
        let idx = this.hash(key);
        let bucket = this.keyMap[idx];
        if (!bucket) return undefined;
        for (let i = 0; i < bucket.length; i++) {
            let bucketItem = bucket[i];
            let bucketKey = bucketItem[0];
            let bucketValue = bucketItem[1];
            if (bucketKey === key) return bucketValue;
        }
        return undefined;
    }

    keys() {
        let hashTableKeys = new Array();
        for (let i = 0; i < this.keyMap.length; i++) {
            let bucket = this.keyMap[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    let bucketItem = bucket[j];
                    let bucketItemKey = bucketItem[0];
                    hashTableKeys.push(bucketItemKey);
                }
            }
        }
        return hashTableKeys;
    }

    values() {
        let hashTableValues = new Array();
        for (let i = 0; i < this.keyMap.length; i++) {
            let bucket = this.keyMap[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    let bucketItem = bucket[j];
                    let bucketItemValue = bucketItem[1];
                    hashTableValues.push(bucketItemValue);
                }
            }
        }
        return hashTableValues;
    }
}

let numberMap = new HashTable();
numberMap.set("one", 1);
numberMap.set("two", 2);
numberMap.set("three", 3);
numberMap.set("four", 4);
numberMap.set("twenty one", 21);

console.log(numberMap);

console.log(numberMap.get("three"));
console.log(numberMap.get("twenty one"));
console.log(numberMap.get("one"));
console.log(numberMap.get("four"));
console.log(numberMap.get("five"));

console.log(numberMap.keys());

console.log(numberMap.values());
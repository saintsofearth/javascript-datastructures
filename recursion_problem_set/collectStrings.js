const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

let stringArray = [];

function collectStrings(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj)) {
            collectStrings(obj[key]);
        } else if (typeof obj[key] === 'string') {
            // console.log('inside else if block');
            stringArray.push(obj[key]);
        }
    }
    return stringArray;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


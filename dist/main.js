"use strict";
function merge(collection_1, collection_2) {
    let sorted = [];
    let i = 0, j = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            sorted.push(collection_1[i]);
            i++;
        }
        else {
            sorted.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        sorted.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        sorted.push(collection_2[j]);
        j++;
    }
    return sorted;
}
let collection_1 = [1, 3, 5, 7, 9];
let collection_2 = [2, 4, 6, 8, 10];
console.log(merge(collection_1, collection_2));
//# sourceMappingURL=main.js.map
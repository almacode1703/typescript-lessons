"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createArray(value, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}
var outArr = createArray('B', 5);
console.log(outArr);
// ['A', 'A', 'A']

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
var x1 = identity(10);
var x2 = identity("John");
var x3 = identity(true);
console.log(x1);
console.log(x2);
console.log(x3);

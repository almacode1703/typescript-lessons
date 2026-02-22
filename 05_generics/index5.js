"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TestGenerics(data1, data2) {
    var arr = [];
    arr.push(data1);
    try {
        if (typeof data2 !== "string") {
            throw new Error("Enter String Value");
        }
        else {
            arr.push(data2);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Invalid Type...");
        }
    }
    return arr;
}
console.log(TestGenerics("Hello", "World"));

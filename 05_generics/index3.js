var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addToArray(arr, item) {
    return __spreadArray(__spreadArray([], arr, true), [item], false);
}
var arr = ["John", "Deepika", "Katrina"];
var isIt = addToArray(arr, "Salmaan");
console.log(isIt);
var isTrump = addToArray(isIt, "Trump");
console.log(isTrump);

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store() {
        this.items = [];
    }
    Store.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Store.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    return Store;
}());
var todoStore = new Store();
todoStore.addItem({ id: 1, text: "Jogging" });
todoStore.addItem({ id: 2, text: "Walking" });
var allItems = todoStore.getAll();
console.log(allItems);

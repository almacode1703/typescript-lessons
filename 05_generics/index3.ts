function addToArray<T>(arr:T[], item:T):T[]{
    return [...arr,item]
}

const arr = ["John", "Deepika", "Katrina"]

let isIt = addToArray(arr, "Salmaan")
console.log(isIt)

let isTrump = addToArray(isIt, "Trump")
console.log(isTrump)
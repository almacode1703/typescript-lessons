export {}
function objectMerge<T, U>(obj1 : T, obj2: U):T &U {
   return {...obj1, ...obj2}
}

let o1 = {
    "name" : "JOHN",
    "age" : 32
}

let o2 = {
    "salary" : "$4000",
    "city" : "NYC"
}

console.log(objectMerge(o1, o2))
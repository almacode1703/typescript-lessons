export {}

function identity<T>(value: T):T{
    return value
}

const x1 = identity(10)
const x2 = identity("John")
const x3 = identity(true)

console.log(x1)
console.log(x2)
console.log(x3)

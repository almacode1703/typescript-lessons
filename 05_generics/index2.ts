function getFirstElement<T>(arr:T[]):T | undefined {
    return arr[0]
}

const firstNum = getFirstElement([1,2,3])
const firstName = getFirstElement(["John", "David", "Poonam"])


console.log(firstName)
console.log(firstNum)

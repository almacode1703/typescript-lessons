export {}
function createArray<T>(value:T, count:number):T[]{
   let arr:T[] = [] 
   for(let i:number = 0; i< count; i++){
        arr.push(value)
   }
   return arr
}


let outArr = createArray('B', 5)
console.log(outArr)
// ['A', 'A', 'A']
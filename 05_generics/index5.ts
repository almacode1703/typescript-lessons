export {}
function TestGenerics<T,U>(data1:T, data2:U):(T|U)[]{
    let arr:(T|U)[] =[]
    arr.push(data1)
    try{
      if(typeof data2 !== "string"){
        throw new Error("Enter String Value")
    }
    else{
        arr.push(data2)
    }
    }
    catch(error:unknown){
        if(error instanceof Error){
            console.log("Invalid Type...")
        }
    }
    
    return arr
}

console.log(TestGenerics("Hello", "World"))
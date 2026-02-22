export {}

class Store<T>{
 private items:T[] =[]

 addItem(item: T):void{
    this.items.push(item)
 }
 
 getAll():T[]{
    return [...this.items]
 }
}

interface Todo {
    id:number;
    text:string
}

const todoStore = new Store<Todo>()

todoStore.addItem({ id: 1, text:"Jogging"})
todoStore.addItem({ id: 2, text:"Walking"})
let allItems = todoStore.getAll()
console.log(allItems)
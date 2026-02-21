export {}
type Role = "user" | "admin"

interface User {
    id : number;
    uname:string;
    email:string;
    role:Role
}
const users:User[] = []

function addUser(user:User):void{
    if (!user.email.includes("@")){
        throw new Error("Invalid email..")
    }
    const exists = users.some((u)=>{
        u.email === user.email
    })
  
    if(exists){
        throw new Error("Email already exists...") 
    }  

    users.push(user);
}

function getUserByEmail(email:string):User {
    
    const found = users.find((u)=>{
        u.email === email
    })

    if(!found){
        throw new Error("User not found")
    }

    return found
}

function deleteUser(id:number):void {
    const idx = users.findIndex((u)=>{
        u.id === id
    })

    if(idx === -1){
        throw new Error("User not found");
    }

    users.splice(idx,1)
}

try {
    const u1:User = {
        id:1,
        uname : "John",
        email:"john@patreon.com",
        role:"user"
    }

    const u2:User = {
        id:2,
        uname : "Dave",
        email:"dave.gray@patreon.com",
        role:"admin"
    }

    addUser(u1)
    addUser(u2)

    console.log(getUserByEmail("dave.gray@patreon.com"))

    // deleteUser(2)

    // console.log(getUserByEmail("dave.gray@patreon.com"))
}

catch(error: unknown){
    if(error instanceof Error){
        console.log(error.message)
    }
}



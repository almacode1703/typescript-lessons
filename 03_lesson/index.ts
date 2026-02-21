export{}

type Role = "user" | "admin"

interface User {
    id:number,
    uname:string,
    age:number,
    role:Role
}

class UserService {
    private users:User[] = []

    addUser(){

    }

    searchUser(){

    }
    deleteUser(){
        
    }
}
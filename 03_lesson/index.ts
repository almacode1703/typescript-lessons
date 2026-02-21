export {};

type Role = "user" | "admin";

interface User {
  id: number;
  uname: string;
  age: number;
  email: string;
  role: Role;
}

class UserService {
  private users: User[] = [];
  addUser(user: User):void {
    if (!user.email.includes("@")) {
      throw new Error("Invalid Email...");
    }

    var isPresent = this.users.some((usr) => {
      return usr.email === user.email;
    });

    if (isPresent) {
      throw new Error("Email already exists...");
    }
    this.users.push(user);
  }

  deleteUser(id: number):void {
    var idx = this.users.findIndex((usr) => {
      return usr.id === id;
    });

    if (idx === -1) {
      throw new Error("user not found");
    }

    this.users.splice(idx, 1);
  }

  getUserByEmail(email: string): User {
    var found = this.users.find((usr) => {
      return usr.email === email;
    });

    if (!found) {
      throw new Error("User not found");
    }
    return found;
  }

  getAllUsers(){
    for( let i = 0; i < this.users.length; i++){
        console.log(this.users[i])
    }
  }
}

try {
  const service = new UserService();

  var u1:User = {
    id: 101,
    uname: "Sachin",
    age: 25,
    email: "Sachin@rocketmail.com",
    role: "admin",
  };

  var u2:User = {
    id: 102,
    uname: "Neeraj",
    age: 26,
    email: "neeraj@gmail.com",
    role: "user",
  };

  service.addUser(u1);
  service.addUser(u2);
  
  service.getAllUsers()
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

export {}
// Typescript types
type Role = "user" | "admin";

// Typescript Interface
interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

function createUsers(
  id: number,
  name: string,
  email: string,
  role: Role,
): User {
  if (name.trim() === "") {
    throw new Error("name cant be empty ");
  }
  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }
  const newuser: User = {
    id,
    name,
    email,
    role,
  };
  return newuser;
}

try {
  const user1 = createUsers(123, "John", "a@b.com", "user");
  const user2 = createUsers(122, "David", "d@d.com", "admin");
  console.log(user1);
  console.log(user2);
} catch (e:unknown) {
    if(e instanceof Error){
        console.error("Error: ", e);
    }
}

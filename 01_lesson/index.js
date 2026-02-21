"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUsers(id, name, email, role) {
    if (name.trim() === "") {
        throw new Error("name cant be empty ");
    }
    if (!email.includes("@")) {
        throw new Error("Invalid email");
    }
    var newuser = {
        id: id,
        name: name,
        email: email,
        role: role,
    };
    return newuser;
}
try {
    var user1 = createUsers(123, "John", "a@b.com", "user");
    var user2 = createUsers(122, "David", "d@d.com", "admin");
    console.log(user1);
    console.log(user2);
}
catch (e) {
    if (e instanceof Error) {
        console.error("Error: ", e);
    }
}

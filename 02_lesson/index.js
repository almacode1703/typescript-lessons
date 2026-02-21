var users = [];
function addUser(user) {
    if (!user.email.includes("@")) {
        throw new Error("Invalid email..");
    }
    var exists = users.some(function (u) {
        return u.email === user.email;
    });
    if (exists) {
        throw new Error("Email already exists...");
    }
    users.push(user);
}
function getUserByEmail(email) {
    var found = users.find(function (u) {
        return u.email === email;
    });
    if (!found) {
        throw new Error("User not found");
    }
    return found;
}
function deleteUser(id) {
    var idx = users.findIndex(function (u) {
       return u.id === id;
    });
    if (idx === -1) {
        throw new Error("User not found");
    }
    users.splice(idx, 1);
}
try {
    var u1 = {
        id: 1,
        uname: "John",
        email: "john@patreon.com",
        role: "user"
    };
    var u2 = {
        id: 2,
        uname: "Dave",
        email: "dave.gray@patreon.com",
        role: "admin"
    };
    addUser(u1);
    addUser(u2);
    console.log(getUserByEmail("dave.gray@patreon.com"));
    deleteUser(2)
    console.log(getUserByEmail("dave.gray@patreon.com"))
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

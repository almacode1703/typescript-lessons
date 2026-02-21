"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.addUser = function (user) {
        if (!user.email.includes("@")) {
            throw new Error("Invalid Email...");
        }
        var isPresent = this.users.some(function (usr) {
            return usr.email === user.email;
        });
        if (isPresent) {
            throw new Error("Email already exists...");
        }
        this.users.push(user);
    };
    UserService.prototype.deleteUser = function (id) {
        var idx = this.users.findIndex(function (usr) {
            return usr.id === id;
        });
        if (idx === -1) {
            throw new Error("user not found");
        }
        this.users.splice(idx, 1);
    };
    UserService.prototype.getUserByEmail = function (email) {
        var found = this.users.find(function (usr) {
            return usr.email === email;
        });
        if (!found) {
            throw new Error("User not found");
        }
        return found;
    };
    UserService.prototype.getAllUsers = function () {
        for (var i = 0; i < this.users.length; i++) {
            console.log(this.users[i]);
        }
    };
    return UserService;
}());
try {
    var service = new UserService();
    var u1 = {
        id: 101,
        uname: "Sachin",
        age: 25,
        email: "Sachin@rocketmail.com",
        role: "admin",
    };
    var u2 = {
        id: 102,
        uname: "Neeraj",
        age: 26,
        email: "neeraj@gmail.com",
        role: "user",
    };
    service.addUser(u1);
    service.addUser(u2);
    service.getAllUsers();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

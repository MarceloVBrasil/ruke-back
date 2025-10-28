"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = UserFactory;
const inMemoryUserRepository_1 = require("../../repositories/userRepository/inMemoryUserRepository");
const UserService_1 = require("./UserService");
let userService = null;
function UserFactory() {
    if (!userService) {
        userService = new UserService_1.UserService(new inMemoryUserRepository_1.InMemoryUserRepository());
    }
    return userService;
}

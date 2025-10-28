import { InMemoryUserRepository } from "../../repositories/userRepository/inMemoryUserRepository";
import { UserService } from "./UserService";
let userService = null;
export function UserFactory() {
    if (!userService) {
        userService = new UserService(new InMemoryUserRepository());
    }
    return userService;
}

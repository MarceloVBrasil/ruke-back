import { InMemoryUserRepository } from "../../repositories/userRepository/inMemoryUserRepository";
import { UserService } from "./UserService";

let userService: UserService | null = null

export function UserFactory() {
    if (!userService) {
        userService = new UserService(new InMemoryUserRepository())
    }

    return userService
}
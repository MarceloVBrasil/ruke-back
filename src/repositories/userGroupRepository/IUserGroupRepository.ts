import { UserGroup } from "../../models/UserGroup/UserGroup";

export interface IUserGroupRepository {
    getAll(): Promise<UserGroup[]>
    getById(id: string): Promise<UserGroup>
}
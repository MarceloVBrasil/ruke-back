import { IUserGroupRepository } from "./IUserGroupRepository";
export declare enum USER_GROUP_IDS {
    'admin' = "e36eb84a-76c3-4bd2-945d-25fdeb42fce4",
    'limited' = "239e488c-fddb-46a9-8300-b125eb0960e5",
    'colaborador' = "49b4b23d-078a-48fe-8a61-23459316c9dc"
}
export declare class InMemoryUserGroup implements IUserGroupRepository {
    private _user_groups;
    getAll(): Promise<UserGroup[]>;
    getById(id: string): Promise<any>;
}
//# sourceMappingURL=inMemoryUserGroupRepository.d.ts.map
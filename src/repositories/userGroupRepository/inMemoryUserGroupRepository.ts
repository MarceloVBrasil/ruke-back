import { UserGroup } from "../../models/UserGroup/UserGroup";
import { IUserGroupRepository } from "./IUserGroupRepository";

export enum USER_GROUP_IDS {
    'admin' = 'e36eb84a-76c3-4bd2-945d-25fdeb42fce4',
    'limited' = '239e488c-fddb-46a9-8300-b125eb0960e5',
    'colaborador' = '49b4b23d-078a-48fe-8a61-23459316c9dc',
}

export class InMemoryUserGroup implements IUserGroupRepository {
    private _user_groups: UserGroup[] = [
        { id: USER_GROUP_IDS.admin, nome: 'admin' },
        { id: USER_GROUP_IDS.limited, nome: 'limited' },
        { id: USER_GROUP_IDS.colaborador, nome: 'colaborador' },
    ]

    async getAll() {
        return this._user_groups
    }

    async getById(id: string) {
        return this._user_groups.find(group => group.id === id)!
    }
}
export var USER_GROUP_IDS;
(function (USER_GROUP_IDS) {
    USER_GROUP_IDS["admin"] = "e36eb84a-76c3-4bd2-945d-25fdeb42fce4";
    USER_GROUP_IDS["limited"] = "239e488c-fddb-46a9-8300-b125eb0960e5";
    USER_GROUP_IDS["colaborador"] = "49b4b23d-078a-48fe-8a61-23459316c9dc";
})(USER_GROUP_IDS || (USER_GROUP_IDS = {}));
export class InMemoryUserGroup {
    _user_groups = [
        { id: USER_GROUP_IDS.admin, nome: 'admin' },
        { id: USER_GROUP_IDS.limited, nome: 'limited' },
        { id: USER_GROUP_IDS.colaborador, nome: 'colaborador' },
    ];
    async getAll() {
        return this._user_groups;
    }
    async getById(id) {
        return this._user_groups.find(group => group.id === id);
    }
}

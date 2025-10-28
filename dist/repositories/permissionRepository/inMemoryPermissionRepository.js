"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPermissionRepository = void 0;
const inMemoryUserGroupRepository_1 = require("../userGroupRepository/inMemoryUserGroupRepository");
class InMemoryPermissionRepository {
    constructor() {
        this._permissions = [
            {
                id: '11d01eb3-812d-42b2-9370-9167a350ec3f',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'produtos',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'c1c97dc4-aadd-4150-a667-b0ec5d3d526a',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'planos',
                permissoes: ['getAll', 'getAllByProdutoId', 'getPlanosContratados', 'add', 'update', 'delete']
            },
            {
                id: '239c46d3-7e44-4c3a-9678-6856b364b79a',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'tenants',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'aad6f34a-4524-4871-8fcb-45a3df22d795',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'usuarios',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '644a763c-8950-43e4-a186-3daa7708556e',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'BPC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'a22d590d-1c67-4d90-a7d2-1649bc1f03ba',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'RMC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '7102bd18-bb6f-48e5-84f0-f0469bcca4c5',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'agenda',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'cb498ac9-212a-4a44-83d4-0a5154ea418d',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'processos',
                permissoes: ['getAll', 'getMovimentacoes', 'salvar', 'filtrar']
            },
            {
                id: '49c74a2e-26ec-4f2b-8c7d-ab5bd81dcdd0',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'superendividamento',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '1e096c47-7fad-485e-8ce7-37c284684d0f',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.admin,
                dominio: 'trabalhista',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            // COLABORADOR
            {
                id: 'c08a67ce-4f4a-4a28-b97a-0f461604b31a',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'BPC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'fdc3971a-a149-4d1c-a0e7-7768fa4d742e',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'RMC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '6a2cd88c-e338-49a6-9c52-61018071f0c3',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'agenda',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'c4ef093f-6fe4-4777-9c99-09fbc4b5ed7a',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'processos',
                permissoes: ['getAll', 'getMovimentacoes', 'salvar', 'filtrar']
            },
            {
                id: '7ef8b210-830b-452d-b17e-698bf553f8a8',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'superendividamento',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '990d9e68-373a-4aa6-b94a-063c6a7cfefb',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.colaborador,
                dominio: 'trabalhista',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            // LIMITED
            {
                id: '48cbb29e-d667-4d4f-a8ac-18a04b7a9ab9',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'planos',
                permissoes: ['getPlanosContratados']
            },
            {
                id: '49e0715a-cee2-4adc-9d59-1c617548ec41',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'tenants',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '3ccb17c2-e2fe-41a7-996c-5b8a6836dcb4',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'usuarios',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '1461d5c3-9005-4d8d-8ee7-0dce66b31682',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'BPC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '090d1307-cf63-438f-b876-b00d01af070b',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'RMC',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'bd2c3a2e-f9ad-4744-a827-0f08c993ec7f',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'agenda',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: 'fdddcd41-f07f-4219-b389-920125136878',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'processos',
                permissoes: ['getAll', 'getMovimentacoes', 'salvar', 'filtrar']
            },
            {
                id: 'a261ee23-7e9b-481c-aebc-85fc10327da4',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'superendividamento',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
            {
                id: '025672ff-3138-40c6-a521-d4cec5ab75bb',
                user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
                dominio: 'trabalhista',
                permissoes: ['getAll', 'getById', 'add', 'update', 'delete']
            },
        ];
    }
    async getByUserGroupId(user_group_id) {
        return this._permissions.filter(p => p.user_group_id === user_group_id);
    }
}
exports.InMemoryPermissionRepository = InMemoryPermissionRepository;

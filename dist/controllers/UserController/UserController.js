"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserFactory_1 = require("../../services/UserService/UserFactory");
const UserSchema_1 = require("./UserSchema");
class UserController {
    async getAll(req, res) {
        try {
            const userService = (0, UserFactory_1.UserFactory)();
            const response = await userService.getAll(req.body.tenantId);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async getById(req, res) {
        try {
            const userService = (0, UserFactory_1.UserFactory)();
            const response = await userService.getById(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async add(req, res) {
        try {
            const userService = (0, UserFactory_1.UserFactory)();
            const data = await UserSchema_1.UserSchema.add().validate({ ...req.body }, { stripUnknown: true });
            const response = await userService.add(req.body.tenantId, data);
            res.status(201).json({ message: 'usuário adicionado com sucesso' });
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async update(req, res) {
        try {
            const userService = (0, UserFactory_1.UserFactory)();
            const data = await UserSchema_1.UserSchema.update().validate({ ...req.body, ...req.params }, { stripUnknown: true });
            const response = await userService.update(data.id, data);
            res.status(200).json({ message: 'usuário atualizado com sucesso' });
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async delete(req, res) {
        try {
            const userService = (0, UserFactory_1.UserFactory)();
            const data = await UserSchema_1.UserSchema.delete().validate({ ...req.params }, { stripUnknown: true });
            const response = await userService.delete(data.id);
            res.status(200).json({ message: 'usuário deletado com sucesso' });
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
exports.UserController = UserController;

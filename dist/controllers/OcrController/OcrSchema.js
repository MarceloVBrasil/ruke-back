"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcrSchema = void 0;
const yup_1 = require("yup");
const uploadSchema = (0, yup_1.object)().shape({
    files: (0, yup_1.array)().of((0, yup_1.mixed)()).required('nenhum arquivo foi recebido'),
    tenant_id: (0, yup_1.string)().required('tenant_id é obrigatório')
});
class OcrSchema {
    static upload() {
        return uploadSchema;
    }
}
exports.OcrSchema = OcrSchema;

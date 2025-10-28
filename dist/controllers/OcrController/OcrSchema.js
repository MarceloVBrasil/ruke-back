import { object, array, mixed, string } from "yup";
const uploadSchema = object().shape({
    files: array().of(mixed()).required('nenhum arquivo foi recebido'),
    tenant_id: string().required('tenant_id é obrigatório')
});
export class OcrSchema {
    static upload() {
        return uploadSchema;
    }
}

export declare class PlanoSchema {
    static getAllByProdutoId(): import("yup").ObjectSchema<{
        produto_id: string;
    }, import("yup").AnyObject, {
        produto_id: undefined;
    }, "">;
    static getById(): import("yup").ObjectSchema<{
        id: string;
    }, import("yup").AnyObject, {
        id: undefined;
    }, "">;
    static add(): import("yup").ObjectSchema<{
        produto_id: string;
        nome: string;
        descricao: string;
        limite_peticoes: string;
        limite_hipossuficiencia: string;
        limite_contratos: string;
        limite_procuracoes: string;
        preco: string;
        tipo_cobranca: string;
    }, import("yup").AnyObject, {
        produto_id: undefined;
        nome: undefined;
        descricao: undefined;
        limite_peticoes: undefined;
        limite_hipossuficiencia: undefined;
        limite_contratos: undefined;
        limite_procuracoes: undefined;
        preco: undefined;
        tipo_cobranca: undefined;
    }, "">;
    static update(): import("yup").ObjectSchema<{
        id: string;
        produto_id: string | undefined;
        nome: string | undefined;
        descricao: string | undefined;
        limite_peticoes: string | undefined;
        limite_hipossuficiencia: string | undefined;
        limite_contratos: string | undefined;
        limite_procuracoes: string | undefined;
        preco: string | undefined;
        tipo_cobranca: string | undefined;
    }, import("yup").AnyObject, {
        id: undefined;
        produto_id: undefined;
        nome: undefined;
        descricao: undefined;
        limite_peticoes: undefined;
        limite_hipossuficiencia: undefined;
        limite_contratos: undefined;
        limite_procuracoes: undefined;
        preco: undefined;
        tipo_cobranca: undefined;
    }, "">;
    static delete(): import("yup").ObjectSchema<{
        id: string;
    }, import("yup").AnyObject, {
        id: undefined;
    }, "">;
}
//# sourceMappingURL=PlanoSchema.d.ts.map
export declare class ProdutoSchema {
    static add(): import("yup").ObjectSchema<{
        nome: string;
    }, import("yup").AnyObject, {
        nome: undefined;
    }, "">;
    static update(): import("yup").ObjectSchema<{
        id: string;
        nome: string | undefined;
    }, import("yup").AnyObject, {
        id: undefined;
        nome: undefined;
    }, "">;
    static delete(): import("yup").ObjectSchema<{
        id: string;
    }, import("yup").AnyObject, {
        id: undefined;
    }, "">;
}
//# sourceMappingURL=ProdutoSchema.d.ts.map
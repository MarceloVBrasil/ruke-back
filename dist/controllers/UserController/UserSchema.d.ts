export declare class UserSchema {
    static add(): import("yup").ObjectSchema<{
        nome: string | undefined;
        email: string | undefined;
        telefone: string | undefined;
        nivel: string | undefined;
        numero_documento: string | undefined;
        oab: string | undefined;
        oab_estado: string | undefined;
    }, import("yup").AnyObject, {
        nome: undefined;
        email: undefined;
        telefone: undefined;
        nivel: undefined;
        numero_documento: undefined;
        oab: undefined;
        oab_estado: undefined;
    }, "">;
    static update(): import("yup").ObjectSchema<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        nivel: string;
        numero_documento: string;
        oab: string;
        oab_estado: string;
    }, import("yup").AnyObject, {
        id: undefined;
        nome: undefined;
        email: undefined;
        telefone: undefined;
        nivel: undefined;
        numero_documento: undefined;
        oab: undefined;
        oab_estado: undefined;
    }, "">;
    static delete(): import("yup").ObjectSchema<{
        id: string;
    }, import("yup").AnyObject, {
        id: undefined;
    }, "">;
}
//# sourceMappingURL=UserSchema.d.ts.map
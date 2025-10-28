export declare class ProcessoSchema {
    static add(): import("yup").ObjectSchema<{
        tenant_id: string;
        numero_processo: string;
        orgao_julgador: string;
        classe: string;
        cliente_principal: string;
        contrario_principal: string;
        movimentacoes: ({} | undefined)[];
    }, import("yup").AnyObject, {
        tenant_id: undefined;
        numero_processo: undefined;
        orgao_julgador: undefined;
        classe: undefined;
        cliente_principal: undefined;
        contrario_principal: undefined;
        movimentacoes: never[];
    }, "">;
    static filtrar(): import("yup").ObjectSchema<{
        numero_processo: string | undefined;
        orgao_julgador: string | undefined;
        classe: string | undefined;
        cliente_principal: string | undefined;
        contrario_principal: string | undefined;
        movimentacoes: ({} | undefined)[] | undefined;
    }, import("yup").AnyObject, {
        numero_processo: undefined;
        orgao_julgador: undefined;
        classe: undefined;
        cliente_principal: undefined;
        contrario_principal: undefined;
        movimentacoes: "";
    }, "">;
}
//# sourceMappingURL=ProcessoSchema.d.ts.map
type funcao = {
    id: string;
    cargo: string;
    periodo: periodo | null;
    data_inicial: string;
    data_final: string;
    salario_devido: number;
    diferenca_prevista: diferenca_prevista | null;
};
type periodo = 'todo_contrato' | 'periodo_delimitado';
type diferenca_prevista = 'convencao_coletiva' | 'acordo_coletivo';
export type pedido_act_cct = {
    cargos: funcao[] | null;
    valor_estimado_pedido: number | null;
};
export {};
//# sourceMappingURL=pedido_act_cct.d.ts.map
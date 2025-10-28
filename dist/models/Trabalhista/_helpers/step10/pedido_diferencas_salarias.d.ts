type paradigma = {
    id: string;
    nome: string;
    periodo: 'todo_periodo' | 'periodo_selecionado';
    data_inicial: string;
    data_final: string;
    atividades: string;
};
export type pedido_diferenca_salarial = {
    paradigmas: paradigma[] | null;
    valor_estimado_pedido: number | null;
};
export {};
//# sourceMappingURL=pedido_diferencas_salarias.d.ts.map
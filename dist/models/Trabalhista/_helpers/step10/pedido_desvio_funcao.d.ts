type fundamento = 'piso_lei' | 'piso_cct' | 'piso_pcs' | 'compra_empregados' | 'media_mercado' | 'outros';
type intervalo = {
    id: string;
    data_inicial: string;
    data_final: string;
    cargo_ctps: string;
    cargo_que_ocupava: string;
    salario_nao_conhecido: boolean;
    valor_salario: number;
    outros_fundamentos: string | null;
};
export type pedido_desvio_funcao = {
    todo_contrato: boolean | null;
    intervalos: intervalo[] | null;
    fundamento: fundamento[];
    outros_fundamentos: string | null;
    valor_estimado_pedido: number | null;
};
export {};
//# sourceMappingURL=pedido_desvio_funcao.d.ts.map
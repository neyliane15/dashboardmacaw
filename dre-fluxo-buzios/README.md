# DRE × Fluxo de Caixa — Búzios 2026

Painel de análise que compara, categoria a categoria, o **DRE (competência)** com o
**Fluxo de Caixa (pagamentos)**, a partir da planilha `DRE E FLUXO DE CAIXA BÚZIOS`.

`index.html` é um arquivo único e independente: basta abrir no navegador (ou publicar
como página estática). A leitura da planilha acontece no próprio navegador, via SheetJS
carregado por CDN; nenhum dado é enviado para servidor algum.

## O que o painel mostra

- **4 indicadores** do período escolhido: Faturamento Bruto (Receita Bruta), CMV,
  CMV Perfeito e EBITDA — todos lidos da aba `DRE`.
- **Um gráfico comparativo de barras** com as categorias Operacionais, Pessoal,
  Administrativo, CTO, Utilities, Terceiros, Marketing, Financeiras e o par
  Tributos Diversos (DRE) × Impostos (Fluxo). Clicar em uma categoria abre o
  detalhamento item a item nos dois regimes, na mesma escala.
- Filtro de período: acumulado ou mês a mês.

## Regras de negócio aplicadas

1. **Material de limpeza e descartáveis** e **Sistema operacional de vendas** ficam
   fora da somatória de Operacionais, mas continuam visíveis no detalhamento, em
   "Fora da somatória", com seus valores.
2. **Administrativo** exibe a observação de que a **Fee Holding** é lançada no DRE e
   não entra no Fluxo de Caixa — origem da discrepância.
3. **Utilities** exibe a observação de que o fluxo de janeiro pagou contas de
   dezembro/2025, quando janeiro está no período selecionado.
4. **Tributos Diversos** (DRE) é comparado com **Impostos** (Fluxo de Caixa). As
   deduções de faturamento aparecem no detalhamento como referência, fora do total.

Mapeamentos auxiliares: Administrativo do fluxo soma `ADMINISTRATIVO` + `HOLDING`;
Financeiras do fluxo soma `FINANCEIRAS` + `TARIFA`.

## Importar uma planilha nova

Botão **Importar planilha** no topo (ou arraste o arquivo `.xlsx` para a página).
O painel se refaz na hora e guarda a versão importada no navegador (`localStorage`),
com a opção "Voltar à planilha original".

A leitura procura as abas e as colunas **pelo nome**, não pela posição:

| Aba | Uso |
| --- | --- |
| `DRE` | totais das linhas (Receita Bruta, CMV, CMV Perfeito, EBITDA, Tributos Diversos) e itens por categoria, nas colunas `CATEGORIA` / `APLICACOES` |
| `RELATÓRIO FLUXO DE CAIXA` | bloco `FLUXO DETALHADO`: total pago por categoria em cada mês |
| `CONTAS A PAGAR` | detalhamento item a item, pelas colunas `MES PAGAMENTO`, `DESCRICAO`, `CATEGORIA DRE`, `CATEGORIA FLUXO` e `VALOR` |

Linhas podem ser inseridas ou removidas na planilha sem quebrar o painel; o que não
pode mudar são os nomes das abas, dos cabeçalhos de coluna e dos meses.

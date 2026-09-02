# DRE × Fluxo de Caixa — Búzios 2026

Painel de análise que compara, categoria a categoria, o **DRE (competência)** com o
**Fluxo de Caixa (pagamentos)**, a partir da planilha `DRE E FLUXO DE CAIXA BÚZIOS`.

`index.html` é um arquivo único e independente: basta abrir no navegador (ou publicar
como página estática). A leitura da planilha acontece no próprio navegador, via SheetJS
carregado por CDN; nenhum dado é enviado para servidor algum.

## O que o painel mostra

- **4 indicadores** do período escolhido: Faturamento Bruto (Receita Bruta), CMV,
  CMV Perfeito e EBITDA — todos lidos da aba `DRE`.
- **Um gráfico comparativo de barras**: para cada categoria, a barra do DRE e a barra
  do Fluxo de Caixa, com a diferença em R$ e %. Categorias: Operacionais, Pessoal,
  Administrativo, CTO, Utilities, Terceiros, Marketing, Financeiras e o par
  Tributos Diversos (DRE) × Impostos (Fluxo).
- **Clicando na categoria**, a tabela com os **itens do DRE** abre logo abaixo daquela
  linha do gráfico (não no fim da página), mostrando os itens que formam
  aquele valor — descrição, valor e participação na categoria. O detalhamento item a
  item existe apenas no DRE; do Fluxo de Caixa vem só o total da categoria, exibido no
  resumo (Total no DRE · Total no Fluxo · Diferença).
- Filtro de período: acumulado ou mês a mês.

## Regras de negócio aplicadas

1. **Material de limpeza e descartáveis** e **Sistema operacional de vendas** ficam
   fora da somatória de Operacionais, mas continuam visíveis no detalhamento, no bloco
   "Fora da somatória", com seus valores.
2. **Administrativo** exibe a observação de que a **Fee Holding** é lançada no DRE e
   não entra no Fluxo de Caixa — origem da discrepância.
3. **Utilities** exibe a observação de que o fluxo de janeiro pagou contas de
   dezembro/2025, quando janeiro está no período selecionado.
4. **Tributos Diversos** (DRE) é comparado com **Impostos** (Fluxo de Caixa). As
   deduções de faturamento aparecem no detalhamento como referência, fora do total.

Mapeamentos auxiliares: Administrativo do fluxo soma `ADMINISTRATIVO` + `HOLDING`;
Financeiras do fluxo soma `FINANCEIRAS` + `TARIFA`.

## Identidade

Segue o manual de marca Macaw:

| Uso | Cor |
| --- | --- |
| Fundo (claro) | OFF WHITE `#F2E3D6` |
| Marca, barras do DRE, botões | VERDE `#7A731C` |
| Apoio, sparklines, trilhos | VERDE CLARO `#CCC48F` |
| Barras do Fluxo de Caixa | MARROM `#69593B`, aprofundado para `#4A3B22` |

O marrom do manual foi escurecido só nas barras: lado a lado com o verde da marca, o
`#69593B` original não se distingue o suficiente (ΔE 9,6 — abaixo do mínimo legível,
inclusive para daltonismo). O `#4A3B22` é o mesmo matiz em um degrau mais escuro e
resolve a leitura. No tema escuro os dois viram `#A89D3D` e `#8A6A46`, mantendo a
mesma relação sobre fundo escuro.

A logomarca (pássaro + tipografia) foi extraída em vetor do manual e vai embutida como
SVG no `index.html`; os arquivos soltos estão em `logo-passaro.svg` e `logo-macaw.svg`.
As fontes do manual (Anita e Mont) não estão disponíveis para web, então o painel usa
**Poppins** — geométrica, próxima da Mont — e **IBM Plex Mono** nos números.

## Importar uma planilha nova

Botão **Importar planilha** no topo (ou arraste o arquivo `.xlsx` para a página).
O painel se refaz na hora e guarda a versão importada no navegador (`localStorage`),
com a opção "Voltar à planilha original".

A leitura procura as abas e as colunas **pelo nome**, não pela posição:

| Aba | Uso |
| --- | --- |
| `DRE` | linhas de indicadores (Receita Bruta, CMV, CMV Perfeito, EBITDA, Tributos Diversos) e itens por categoria, nas colunas `CATEGORIA` / `APLICACOES` |
| `RELATÓRIO FLUXO DE CAIXA` | bloco `FLUXO DETALHADO`: total pago por categoria em cada mês |

Linhas podem ser inseridas ou removidas na planilha sem quebrar o painel; o que não
pode mudar são os nomes das abas, dos cabeçalhos de coluna e dos meses.

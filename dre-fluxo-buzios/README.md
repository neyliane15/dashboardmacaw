# DRE × Fluxo de Caixa — Búzios 2026

Painel de análise que compara, categoria a categoria, o **DRE (competência)** com o
**Fluxo de Caixa (pagamentos)**, a partir da planilha `DRE E FLUXO DE CAIXA BÚZIOS`.

`index.html` é um arquivo único e independente: basta abrir no navegador (ou publicar
como página estática). A leitura da planilha acontece no próprio navegador, via SheetJS
carregado por CDN; nenhum dado é enviado para servidor algum.

## O que o painel mostra

- **Duas unidades em abas separadas**: Búzios (planilha embutida) e Camboinhas
  (entra pelo botão de importar). Cada uma tem sua própria planilha, seus próprios
  indicadores e seu próprio comparativo; o endereço guarda a aba (`#buzios`,
  `#camboinhas`).
- **4 indicadores** do período escolhido:

  | Indicador | Origem |
  | --- | --- |
  | Faturamento Bruto | linha `RECEITA BRUTA` do DRE |
  | Lucro Líquido | linha `LUCRO LIQUIDO` do DRE |
  | Resultado DRE | linha `SALDO FINANCEIRO` do DRE |
  | Caixa | linha `SALDO FINAL` do Fluxo de Caixa — é um saldo, então mostra o do último mês do período, não a soma |

- **Um gráfico comparativo de barras** com 12 comparativos: Operacionais, Pessoal,
  Comissões, Administrativo, CTO, Utilities, Terceiros, Marketing, Financeiras,
  Impostos, Pró-labore e Dividendos — cada um com a barra do DRE, a do Fluxo de
  Caixa e a diferença.
- **Clicando na categoria**, abre logo abaixo dela a comparação **item a item**:
  cada descrição do DRE com o valor reconhecido, o valor efetivamente pago e a
  diferença; abaixo, os pagamentos daquela categoria que não têm item
  correspondente no DRE; e por fim as linhas deixadas fora da somatória.
- Filtro de período: acumulado ou mês a mês.

## Como o DRE conversa com o Fluxo de Caixa

A ligação vem da aba `CONTAS A PAGAR`: cada pagamento traz uma **`CATEGORIA DRE`**
(a descrição do item, igual à coluna `APLICACOES` do DRE) e uma **`CATEGORIA FLUXO`**
(onde ele entra no fluxo de caixa). O painel usa isso para:

1. somar, por item do DRE, quanto foi pago no período;
2. fechar o total de cada categoria do fluxo (confere com a aba
   `RELATÓRIO FLUXO DE CAIXA`);
3. listar os pagamentos sem `CATEGORIA DRE` preenchida — eles entram no total pago,
   mas ficam sem item para comparar. Preencher essa coluna na planilha faz a linha
   subir para a tabela principal.

Duas regras fecham a conta para que a coluna "pago no fluxo" sempre some o total:

- **Comparativo de um item só** (Pró-labore, Dividendos, Comissões, Impostos): a
  categoria de fluxo é inteira daquele item, então os pagamentos sem `CATEGORIA DRE`
  são atribuídos a ele e listados abaixo em "composição do valor pago". Sem isso a
  linha do item ficava zerada enquanto o total mostrava o valor pago.
- **Pagamento cujo item do DRE é de outro comparativo** (Custo locomoção lançado no
  fluxo de Operacionais, Recreação lançada em Terceiros): ganha linha própria com o
  aviso de onde o DRE registra, e o item de origem mostra "pago em <categoria>".
  Antes esse dinheiro só aparecia no total.

## Regras de negócio aplicadas

1. **Operacionais** soma o **Sistema operacional de vendas** e deixa **Material de
   limpeza e descartáveis** fora do total (aparece como referência; no fluxo ele é
   categoria própria).
2. **Pessoal** não soma **Comissões** (virou comparativo próprio), **INSS** nem
   **Vale transporte com desconto** — a exclusão vale para os dois regimes, então o
   total pago também desconta esses pagamentos.
3. **Administrativo** avisa que a **Fee Holding** existe no DRE e não no fluxo.
4. **Utilities** avisa, quando janeiro está no período, que o fluxo de janeiro pagou
   contas de dezembro/2025.
5. **Impostos** compara a linha de impostos do DRE — chamada `IMPOSTOS` nas versões
   novas da planilha e `TRIBUTOS DIVERSOS` nas antigas, o painel aceita as duas — com
   `IMPOSTOS` do fluxo. O DRE reconhece no mês da competência e o caixa paga no mês
   seguinte, então a diferença no acumulado é justamente esse descasamento. As
   deduções de faturamento aparecem como referência.
6. **Pró-labore** sai da somatória de Administrativo (onde a planilha o lança) e vira
   comparativo próprio. Se a planilha não tiver essa linha no DRE, o painel avisa que
   ele só existe no fluxo.

Mapeamentos auxiliares: Administrativo do fluxo soma `ADMINISTRATIVO` + `HOLDING`;
Financeiras do fluxo soma `FINANCEIRAS` + `TARIFA`.

## Planilha compartilhada

Quando o painel roda publicado como Artifact, a planilha importada é gravada no
armazenamento compartilhado da página: **quem abrir depois, em qualquer navegador,
vê a mesma versão**, e quem estiver com a página aberta recebe a atualização na hora.
Fora dali (arquivo local, servidor estático) não existe esse armazenamento, e a
planilha importada fica guardada só no navegador de quem importou — o painel avisa
qual dos dois casos está valendo, na linha abaixo do gráfico.

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
| `DRE` | linhas de indicadores (Receita Bruta, Lucro Líquido, Saldo Financeiro, Tributos Diversos, Dividendos) e itens por categoria, nas colunas `CATEGORIA` / `APLICACOES` |
| `RELATÓRIO FLUXO DE CAIXA` | `SALDO FINAL` de cada mês e o bloco `FLUXO DETALHADO` (usado para conferir os totais) |
| `CONTAS A PAGAR` | cada pagamento com `MES PAGAMENTO`, `DESCRICAO`, `CATEGORIA DRE`, `CATEGORIA FLUXO` e `VALOR` — a ponte entre os dois regimes |

Linhas podem ser inseridas ou removidas na planilha sem quebrar o painel; o que não
pode mudar são os nomes das abas, dos cabeçalhos de coluna e dos meses.

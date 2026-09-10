# DRE × Fluxo de Caixa — Búzios 2026

Painel de análise que compara, categoria a categoria, o **DRE (competência)** com o
**Fluxo de Caixa (pagamentos)**, a partir da planilha `DRE E FLUXO DE CAIXA BÚZIOS`.

`index.html` é um arquivo único e independente: basta abrir no navegador (ou publicar
como página estática). A leitura da planilha acontece no próprio navegador, via SheetJS
carregado por CDN; nenhum dado é enviado para servidor algum.

## O que o painel mostra

- **Quatro unidades em abas separadas**: Búzios, Camboinhas e Central já vêm com a
  planilha embutida; Holding entra pelo botão de importar. Cada aba tem seus
  próprios indicadores, comparativo e DRE; o endereço guarda a aba (`#buzios`,
  `#camboinhas`, `#central`, `#holding`).
- **Uma aba à parte, `Central × Lojas`**, com o relatório de transferências: o
  que cada loja mandou para a central contra o que a central comprou para ela,
  mês a mês, em 2026 e 2025. Não é DRE nem fluxo de caixa, então essa aba não
  tem período, indicadores de competência nem botão de importar — vem da
  planilha `Central x Lojas`, embutida no painel.

  Os totais mensais vêm das abas de resumo `2026` e `2025`, que é o que a Macaw
  lê como fechamento — a aba `Resumo` é o fechamento de 2025 pela tabela de
  preço antiga e fica de fora, porque a aba `2025` refaz o ano inteiro com o
  preço novo. As transferências uma a uma vêm das abas de detalhe (`Camboinhas`,
  `Búzios`). **As duas fontes nem sempre batem** — em 2026 há quatro meses de
  Camboinhas em que a lista soma mais que o relatório, e em 2025 um de Búzios em
  que soma menos. Nesses meses o painel mostra o total do relatório, marca o mês
  com um sinal e diz a diferença ao abrir, em vez de escolher uma das fontes em
  silêncio.

- **Duas visões por unidade**, escolhidas ao lado das abas (nesta ordem):
  - **DRE detalhado** — o DRE inteiro da planilha, linha a linha e mês a mês, na
    ordem original: itens agrupados por categoria, linhas de total em destaque,
    percentuais sobre a receita bruta em cinza. A tabela traz **o ano inteiro, de
    janeiro a dezembro**, mesmo nos meses ainda sem lançamento, e o **total fecha
    a linha**, depois de dezembro. A descrição fica fixa à esquerda e o total à
    direita, com os meses rolando entre as duas. O **bloco de fornecedor fica de
    fora** da tabela — esse confronto está no comparativo `CMV × Fornecedor` —
    e a tabela **termina antes do bloco de cashflow**: dali para baixo é
    movimento de caixa, não resultado. Fios verticais separam os meses, e as
    linhas que não pertencem a bloco nenhum — a espinha do DRE — são coloridas
    pelo papel: **marcos** (Receita Bruta, Receita Líquida, Lucro Bruto, EBITDA,
    Lucro Líquido) com a linha inteira em verde, **receita**, **custo**
    (deduções, estoques, compras, CMV) em ocre e **despesa/resultado** (totais
    por categoria, SG&A, impostos) em marrom.
  - **Comparativo** — indicadores, gráfico DRE × Fluxo de Caixa e o detalhamento
    item a item ao clicar numa categoria.
    Cada bloco (receitas, descontos e cada categoria de despesa) tem **cor
    própria**, na faixa terrosa da marca: uma faixa colorida com o nome, e o
    tom claro na coluna dos itens. A fila **Blocos**, logo abaixo do título,
    liga e desliga cada um — as linhas de total do DRE continuam à vista, para
    a demonstração não perder o fio. A faixa de cada categoria tem **seta**: ela
    dobra e abre a categoria, e vale o mesmo que o botão na fila. Cada item
    também tem seta e **abre em lançamentos**, um por descrição do contas a
    pagar, pelo mês de competência. Quando a planilha lança direto no DRE —
    provisões e rateios —, uma linha *“restante lançado direto no DRE”* fecha a
    diferença, de modo que a abertura sempre soma o valor do item.

  Os nomes mudam de uma unidade para outra e o painel reconhece as variações:
  categoria `ADMINISTRATIVO` ou `ADMINISTRATIVAS` no DRE, `IMPOSTOS` ou `IMPOSTO`
  no fluxo, `MATERIAL DE LIMPEZA E DESCARTAVEIS (CMV)` ou `LIMPEZA E DESCARTAVEIS
  (CMV)` como item. Um item que virou comparativo próprio (Comissões, Pró-labore)
  sai do total da categoria onde foi pago, mesmo quando a planilha o lança em outra
  — em Camboinhas o pró-labore está no fluxo de Terceiros, e o painel o move para o
  comparativo certo em vez de contar duas vezes.
- **4 indicadores** do período escolhido:

  | Indicador | Origem |
  | --- | --- |
  | Faturamento Bruto | linha `RECEITA BRUTA` do DRE |
  | Receita Bruta | linha `RECEITAS` do Fluxo de Caixa — o dinheiro que entrou |
  | Lucro Líquido | linha `LUCRO LIQUIDO` do DRE |
  | Resultado DRE | linha `SALDO FINANCEIRO` do DRE, o saldo final da demonstração |

- **Um gráfico comparativo de barras** com 16 comparativos: Faturado × Receita,
  CMV × Fornecedor, Operacionais, Pessoal, Comissões, Administrativo, CTO,
  Utilities, Terceiros, Marketing, Financeiras, Impostos, Pró-labore,
  Dividendos, Aporte × Reembolso e Investimentos — cada um com a barra do DRE e
  a do Fluxo de Caixa. À direita, no
  lugar da diferença em reais, cada barra mostra **o peso dela sobre a base do
  seu regime**: o valor do DRE sobre o **faturamento bruto** (a receita bruta do
  DRE) e o do fluxo sobre a **receita bruta** (a linha `RECEITAS` do relatório
  de fluxo). A diferença em reais continua na dica do gráfico, na tabela dos
  comparativos e no detalhamento.

  **Faturado × Receita** é o único que não passa pelo contas a pagar: de um lado
  a `RECEITA BRUTA` do DRE, chamada ali de **Faturado**; do outro a linha
  `RECEITAS` do relatório de fluxo, chamada de **Receita** — o que foi
  reconhecido contra o que efetivamente entrou. Abaixo dele, como referência,
  a composição do faturamento (crédito, débito, dinheiro, PIX, serviços). Como
  a receita vale umas três vezes a maior despesa, essa linha desenha em
  **escala própria** — e diz isso na tela: se ela ditasse a escala do gráfico,
  as categorias pequenas (Aporte, Marketing, Pró-labore) virariam um risco de
  poucos pixels. As demais dividem a escala entre si, e os valores nas barras
  são sempre os reais.

  **Investimentos** é uma linha de **demonstração**: o investimento sai do bloco
  de *cashflow* do DRE — que não entra em nenhum total da demonstração e nem
  aparece na tabela detalhada — e ganha linha própria, contra a categoria
  `INVESTIMENTO` do Fluxo de Caixa, com os pagamentos vindos do contas a pagar.
  Não altera nenhum outro comparativo.

  **Impostos** compara a linha de imposto do DRE (`IMPOSTOS`, `IMPOSTO`,
  `TRIBUTOS DIVERSOS` ou `TRIBUTOS`, o nome que a planilha usar) com a categoria
  de imposto do Fluxo de Caixa. Quando a planilha não lança imposto no DRE — é o
  caso de Camboinhas, cuja linha `TRIBUTOS DIVERSOS` está zerada —, o lado da
  competência fica em zero e o detalhamento mostra os pagamentos que formam o
  lado do caixa, dizendo por que não há item para comparar.

  **Aporte × Reembolso** é o único comparativo que se identifica pelo **texto**
  do contas a pagar, e não por categoria: de um lado a linha `APORTE` do DRE, do
  outro os lançamentos marcados como **“Reembolso Alexandre”** na coluna
  `OBSERVACAO` — só eles. A categoria de fluxo `REEMBOLSO` tem outros pagamentos
  (troco de compra de funcionário, empréstimo, gasolina) que ficam de fora, então
  este total é menor que a linha `Reembolso` do relatório de fluxo, de propósito.
  A marcação vale em `OBSERVACAO`, `DESCRICAO` ou `CATEGORIA DRE`, tanto faz onde
  a planilha a escreva, e a composição agrupa os pagamentos por descrição.
  Unidade sem essa marcação não tem valor no lado do caixa.
- **Clicando na categoria**, abre logo abaixo dela a comparação **item a item**:
  cada descrição do DRE com o valor reconhecido, o valor efetivamente pago e a
  diferença em colunas, e duas barrinhas discretas sob o nome (na escala do maior
  item da tabela) com o valor em formato curto, para ler a proporção de relance; abaixo, os pagamentos daquela categoria que não têm item
  correspondente no DRE; e por fim as linhas deixadas fora da somatória. O
  detalhamento é **completo**: todos os itens do DRE e todos os lançamentos do
  fluxo aparecem, sem “ver mais” nem corte nas listas maiores. O item que dá
  nome ao comparativo (Aporte, Pró-labore, Comissões…) fica na tabela **mesmo
  zerado no DRE**, para o lado da competência não sumir.
- Filtro de período: **acumulado, trimestre ou mês**. Os trimestres são civis
  (1º = janeiro a março, e assim por diante) e ficam desabilitados enquanto
  nenhum dos seus meses tiver movimento. O **acumulado soma os doze meses**
  do ano, e não só os meses com movimento no fluxo de caixa — lançamentos que a
  planilha registra num mês sem pagamentos (provisões de SG&A, por exemplo)
  entram na soma como qualquer outro.

- O painel é **sempre claro**. O off white do manual faz parte da identidade,
  então a página não muda de cor com o tema de quem abre.

- A planilha embutida **tem data**, e essa data é o carimbo da unidade: uma
  cópia guardada no navegador só entra no lugar dela se for mais nova. Sem isso,
  uma importação antiga sobrevivia a cada atualização do painel e continuava
  mostrando números velhos, mesmo com o arquivo novo publicado. Uma importação
  feita depois da montagem continua valendo normalmente.

## Como o DRE conversa com o Fluxo de Caixa

A ligação vem da aba `CONTAS A PAGAR`: cada pagamento traz uma **`CATEGORIA DRE`**
(a descrição do item, igual à coluna `APLICACOES` do DRE) e uma **`CATEGORIA FLUXO`**
(onde ele entra no fluxo de caixa).

Os dois regimes têm **cada um o seu mês**, e o painel respeita essa separação:

| Lado | Mês que vale | De onde vem |
| --- | --- | --- |
| DRE (competência) | `MES COMPETENCIA` | a própria aba `DRE`, mês a mês |
| Fluxo de Caixa (pago) | `MES PAGAMENTO` | soma do `CONTAS A PAGAR` |

Um pagamento **sem `MES PAGAMENTO`** não entra no caixa de mês nenhum — nem no
relatório da própria planilha. Em vez de somá-lo num mês arbitrário, o painel
avisa, na visão de DRE detalhado, quais são esses lançamentos, para serem
corrigidos na origem.

O painel usa a mesma aba para:

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
6. **CMV × Fornecedor** compara o `CMV` do DRE (estoque inicial + compras − estoque
   final, ou seja, o que foi consumido) com o **pagamento aos fornecedores** no fluxo
   — todas as categorias de compra listadas sob `FORNECEDOR` no relatório, de Bebidas
   a Central. O grupo é lido pela ordem da própria planilha e para na primeira
   categoria que já pertence a outro comparativo; linhas que são só subtotal no
   relatório (`BEBIDAS`, que soma Ambev, Chopp, Vinhos...) não entram duas vezes,
   porque a soma vem do contas a pagar. As linhas do cálculo do CMV e o CMV perfeito
   aparecem como referência.
7. **Pró-labore** sai da somatória de Administrativo (onde a planilha o lança) e vira
   comparativo próprio. Se a planilha não tiver essa linha no DRE, o painel avisa que
   ele só existe no fluxo.

Mapeamentos auxiliares: Administrativo do fluxo soma `ADMINISTRATIVO` + `HOLDING`;
Financeiras do fluxo soma `FINANCEIRAS` + `TARIFA`.

## Planilha compartilhada e reprocessamento

Quando o painel roda publicado como Artifact, a planilha importada é gravada no
armazenamento compartilhado da página: **quem abrir depois, em qualquer navegador,
vê a mesma versão**, e quem estiver com a página aberta recebe a atualização na hora.
Fora dali (arquivo local, servidor estático) não existe esse armazenamento, e a
planilha importada fica guardada só no navegador de quem importou — o painel avisa
qual dos dois casos está valendo, na linha abaixo do gráfico.

Junto com os dados já lidos, o painel guarda **o arquivo original** (em pedaços, no
mesmo armazenamento). O parser tem um número de versão: quando o painel ganha um
comparativo novo, ele percebe que a planilha guardada foi lida por uma versão
anterior, reprocessa o arquivo sozinho e republica o resultado para todo mundo — sem
precisar reimportar. Se o arquivo original não estiver guardado (planilha importada
antes dessa mudança), o painel mostra um aviso pedindo uma reimportação, uma única
vez.

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

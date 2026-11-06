# Geração dos dados embutidos

O painel é um `index.html` único, sem etapa de build: ele já abre com os dados
de cada unidade embutidos. Estes scripts são o que regera esses dados quando
chega uma planilha nova.

**O parser não vive aqui.** Ele está dentro do `index.html`, entre os
marcadores `// ===== PARSER START =====` e `// ===== PARSER END =====`, e é de
lá que o `gen.js` o lê. É o mesmo código que o navegador executa quando alguém
importa uma planilha pela página — não existe uma segunda cópia para divergir.

## Atualizar uma unidade

```sh
cd build && npm install && cd ..          # só na primeira vez

node build/gen.js <planilha.xlsx> "<Nome>" dados.json
node build/injeta.js index.html <unidade>=dados.json
```

`<unidade>` é a chave em `var BASE` do `index.html`: `buzios`, `camboinhas`,
`central` ou `holding`. Dá para passar vários pares de uma vez.

O `gen.js` imprime a tabela de reconciliação. As duas colunas que importam:

- **fecha?** — a soma dos itens de cada categoria bate com o total dela no DRE.
- **planilha?** — o total vindo do `CONTAS A PAGAR` bate com o
  `RELATÓRIO FLUXO DE CAIXA`. Esse relatório é a referência, não o contrário:
  se divergir, a leitura perdeu ou dobrou pagamentos.

## Conferir

```sh
node build/extrai.js index.html /tmp/saida      # tira o BASE de volta do HTML
node build/confere-meses.js /tmp/saida/extraido-*.json
```

O `extrai.js` confirma que a injeção gerou JSON válido e permite conferir
também as unidades que não foram regeradas. O `confere-meses.js` repete as
checagens **mês a mês** — o ano inteiro pode fechar com meses errados que se
cancelam — e sai com código 1 se achar divergência.

## Versão do parser

`VERSAO_PARSER`, no `index.html`, sobe a cada mudança na leitura ou na
estrutura dos dados. O painel compara essa versão com a do pacote guardado no
navegador e reprocessa a planilha original quando a versão guardada é anterior.
Mexeu no parser, suba a versão e regere todas as unidades, não só a que mudou.

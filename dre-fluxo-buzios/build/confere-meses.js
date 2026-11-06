/* Conferencia mes a mes dos dois regimes, em cada unidade:
     - DRE (competencia): a soma dos itens de cada categoria tem de dar o total
       da categoria, naquele mes;
     - Fluxo (pagamento): o total vindo do CONTAS A PAGAR tem de dar o mesmo que
       o RELATORIO FLUXO DE CAIXA da planilha, naquele mes — e esse relatorio e
       a referencia, nao o contrario;
     - o atribuido por item mais o que ficou sem item tem de fechar o total.
   O ano inteiro pode fechar com meses errados que se cancelam: por isso mes a mes. */
const fs = require('fs');
const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const f = n => n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const TOL = 0.05;

let total = 0, ruins = 0;
for (const caminho of process.argv.slice(2)) {
  const d = JSON.parse(fs.readFileSync(caminho, 'utf8'));
  console.log('===== ' + d.meta.arquivo + ' (' + caminho + ') =====');
  console.log('  meses com movimento: ' + d.meta.mesesComDados.map(m => MESES[m]).join(', '));
  const falhas = [];
  for (const c of d.categorias) {
    for (const m of d.meta.mesesComDados) {
      const itens = c.dre.itens || [];
      if (itens.length) {
        total++;
        const s = itens.reduce((t, i) => t + ((i.dre || [])[m] || 0), 0);
        if (Math.abs(s - (c.dre.total[m] || 0)) > TOL)
          falhas.push([c.label, MESES[m], 'DRE: itens ' + f(s) + ' ≠ total ' + f(c.dre.total[m] || 0)]);
      }
      if (c.fluxo.planilha) {
        total++;
        const p = c.fluxo.planilha[m] || 0, t = c.fluxo.total[m] || 0;
        if (Math.abs(p - t) > TOL)
          falhas.push([c.label, MESES[m], 'FLUXO: contas a pagar ' + f(t) + ' ≠ relatório ' + f(p)]);
      }
      /* Composicao do lado pago. Quando a categoria de caixa toda pertence ao
         item do DRE (atribuido), os itens ja carregam o total e semItem guarda
         so a quebra por descricao — somar as duas coisas dobraria o valor.
         Fora desse caso, o total e itens + o que nao achou item + outros. */
      {
        total++;
        const porItem = itens.reduce((t, i) => t + ((i.fluxo || [])[m] || 0), 0);
        const outros = (c.fluxo.outros || []).reduce((t, e) => t + ((e.values || [])[m] || 0), 0);
        const semItem = c.fluxo.atribuido ? 0
          : (c.fluxo.semItem || []).reduce((t, e) => t + ((e.values || [])[m] || 0), 0);
        const comp = porItem + semItem + outros;
        if (Math.abs(comp - (c.fluxo.total[m] || 0)) > TOL)
          falhas.push([c.label, MESES[m], 'FLUXO: composição ' + f(comp) + ' ≠ total ' + f(c.fluxo.total[m] || 0)]);
      }
    }
  }
  if (falhas.length) {
    ruins += falhas.length;
    falhas.forEach(l => console.log('  ✗ ' + l[0] + ' · ' + l[1] + ' · ' + l[2]));
  }
  console.log();
}
console.log(total + ' verificações · ' + (ruins ? ruins + ' DIVERGÊNCIAS' : 'nenhuma divergência'));
process.exit(ruins ? 1 : 0);

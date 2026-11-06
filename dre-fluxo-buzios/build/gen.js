/* Gera o JSON de uma unidade a partir da planilha, usando o MESMO parser que
   o painel embute — a paridade entre o dado embutido e o importado no navegador
   depende de nao haver uma segunda leitura por aqui. */
const fs = require('fs'), path = require('path'), XLSX = require('xlsx');

/* O parser nao vive num arquivo proprio: ele e lido de dentro do index.html,
   entre os marcadores. Assim nao existe uma segunda copia para divergir da que
   o navegador executa quando o usuario importa uma planilha pela pagina. */
const PAINEL = process.env.PAINEL || path.join(__dirname, '..', 'index.html');
const painel = fs.readFileSync(PAINEL, 'utf8');
const ini = painel.indexOf('// ===== PARSER START =====');
const fim = painel.indexOf('// ===== PARSER END =====');
if (ini < 0 || fim < 0) { console.error('marcadores do parser nao encontrados em ' + PAINEL); process.exit(1); }
const src = painel.slice(ini, fim);
const mod = {};
new Function('module', 'exports', src + '\nmodule.exports={parseWorkbook:parseWorkbook,VERSAO_PARSER:VERSAO_PARSER};')(mod, {});

const arquivo = process.argv[2];
const nome = process.argv[3] || path.basename(arquivo);
const saida = process.argv[4];
if (!arquivo || !saida) { console.error('uso: node build/gen.js <xlsx> "<nome>" <saida.json>'); process.exit(1); }

const wb = XLSX.readFile(arquivo, { cellDates: false });
const data = mod.exports.parseWorkbook(wb, XLSX, nome);

/* dinheiro em 2 casas; fracoes (percentuais do DRE) precisam de mais precisao */
const round = o => {
  if (Array.isArray(o)) return o.map(round);
  if (o && typeof o === 'object') { const r = {}; for (const k in o) r[k] = round(o[k]); return r; }
  return typeof o === 'number' ? (Math.abs(o) < 1 ? Math.round(o * 1e6) / 1e6 : Math.round(o * 100) / 100) : o;
};
const limpo = round(data);
fs.writeFileSync(saida, JSON.stringify(limpo));

const f = n => n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const soma = a => limpo.meta.mesesComDados.reduce((t, m) => t + (a[m] || 0), 0);
console.log('gravado em', saida, '·', (JSON.stringify(limpo).length / 1024).toFixed(1) + ' KB', '· parser', mod.exports.VERSAO_PARSER);
console.log('meses com dados:', limpo.meta.mesesComDados.join(','), '| contas a pagar:', limpo.meta.temContasAPagar);
if ((limpo.meta.semMesPagamento || []).length) console.log('SEM MES PAGAMENTO:', JSON.stringify(limpo.meta.semMesPagamento));
console.log();
console.log('CATEGORIA'.padEnd(26), 'DRE'.padStart(14), 'FLUXO'.padStart(14), 'itens', ' fecha?', 'planilha?');
limpo.categorias.forEach(c => {
  const d = soma(c.dre.total), x = soma(c.fluxo.total);
  const itens = (c.dre.itens || []);
  const somaItens = itens.reduce((t, i) => t + soma(i.dre || []), 0);
  const fecha = !itens.length ? '-' : (Math.abs(somaItens - d) < 0.05 ? 'ok' : 'DIVERGE ' + f(somaItens - d));
  /* o relatorio de fluxo da planilha e a referencia: o total vindo do contas a
     pagar tem de bater com ele, senao a leitura perdeu (ou dobrou) pagamentos */
  const pl = c.fluxo.planilha ? soma(c.fluxo.planilha) : null;
  const okPl = pl === null ? '-' : (Math.abs(pl - x) < 0.05 ? 'ok' : 'DIVERGE ' + f(pl - x));
  console.log(c.label.padEnd(26), f(d).padStart(14), f(x).padStart(14), String(itens.length).padStart(5), '', fecha.padEnd(16), okPl);
});
console.log();
Object.keys(limpo.kpis).forEach(k => {
  const v = limpo.kpis[k];
  if (Array.isArray(v)) console.log('KPI', k.padEnd(16), f(soma(v)).padStart(16));
});

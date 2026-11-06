/* Troca o dado embutido de uma unidade dentro do index.html, no lugar.
   O painel guarda cada unidade numa linha de BASE; o parser fica entre os
   marcadores PARSER START/END e nao e tocado aqui.
   uso: node build/injeta.js <index.html> <unidade>=<json> [<unidade>=<json> ...] */
const fs = require('fs');
const alvo = process.argv[2];
const pares = process.argv.slice(3).map(a => {
  const i = a.indexOf('=');
  return { unidade: a.slice(0, i), json: a.slice(i + 1) };
});
if (!alvo || !pares.length) { console.error('uso: node build/injeta.js <index.html> <unidade>=<json> ...'); process.exit(1); }

let html = fs.readFileSync(alvo, 'utf8');
const antes = html.length;
for (const { unidade, json } of pares) {
  const dado = JSON.parse(fs.readFileSync(json, 'utf8'));
  const re = new RegExp('^(  ' + unidade + ': )\\{.*\\}(,?)$', 'm');
  if (!re.test(html)) { console.error('unidade "' + unidade + '" nao encontrada em BASE'); process.exit(1); }
  html = html.replace(re, (m, pre, virg) => pre + JSON.stringify(dado) + virg);
  console.log(unidade, '→', dado.meta.arquivo, '· parser', dado.meta.versaoParser, '· meses', dado.meta.mesesComDados.join(','));
}
fs.writeFileSync(alvo, html);
console.log('gravado', alvo, (antes / 1024).toFixed(1) + ' KB →', (html.length / 1024).toFixed(1) + ' KB');

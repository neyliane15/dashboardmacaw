/* Le de volta o BASE embutido no index.html: confirma que a injecao gerou JSON
   valido e permite conferir tambem as unidades que nao foram regeradas. */
const fs = require('fs');
const todo = fs.readFileSync(process.argv[2], 'utf8');
/* so o bloco BASE: outras partes do painel tambem tem linhas "chave: {...}" */
const ini = todo.indexOf('var BASE = {');
if (ini < 0) { console.error('BASE nao encontrado'); process.exit(1); }
const html = todo.slice(ini, todo.indexOf('\n};', ini));
const dir = process.argv[3] || '.';
const re = /^  ([a-z]+): (\{.*\}),?$/gm;
let m, n = 0;
while ((m = re.exec(html))) {
  const d = JSON.parse(m[2]);
  fs.writeFileSync(dir + '/extraido-' + m[1] + '.json', JSON.stringify(d));
  console.log(m[1].padEnd(12), d.meta.arquivo, '· parser', d.meta.versaoParser, '· meses', d.meta.mesesComDados.length);
  n++;
}
if (!n) { console.error('nada extraido'); process.exit(1); }

import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(logSymbols.success, chalk.green.italic('Servidor iniciado'));
console.log(logSymbols.warning, chalk.yellow.italic('Servidor com lentidão'));
console.log(logSymbols.error, chalk.red.italic('Servidor com problema'));
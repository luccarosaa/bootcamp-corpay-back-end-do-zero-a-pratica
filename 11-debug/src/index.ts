import { getBaseEmail } from './services/email';

async function main() {
  console.log(await getBaseEmail('João'));
  console.log('\n\nFinalizado');
  console.log('...');
}

main();
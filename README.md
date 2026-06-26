# Bootcamp Corpay - Back-end do Zero à Prática

Repositório de estudos com exercícios e projetos desenvolvidos durante a trilha de Node.js da DIO. O conteúdo está organizado por aula/módulo, avançando de scripts simples em JavaScript até APIs com Fastify e projetos em TypeScript.

## Conteúdo

| Pasta | Tema | Descrição |
| --- | --- | --- |
| `01-helloworld` | Primeiro script | Exemplo básico com `console.log`. |
| `02-meu-primeiro-projeto` | Projeto Node inicial | Estrutura mínima com `package.json` e execução de arquivo em `src/`. |
| `04-commonjs-modules` | CommonJS | Uso de `require`, `module.exports` e separação em serviços. |
| `05-esm-modules` | ES Modules | Uso de `import/export` com `"type": "module"`. |
| `07-npm-packeges-basic` | Pacotes NPM | Exemplo com dependências externas como `chalk` e `log-symbols`. |
| `08-npm-scripts` | Scripts NPM | Scripts de desenvolvimento, execução e watch. |
| `09-npm-enviroment` | Variáveis de ambiente | Leitura de variáveis com `--env-file` e `dotenv`. |
| `10-typescript` | TypeScript | Execução, build e organização de arquivos `.ts`. |
| `11-debug` | Debug com TypeScript | Exemplo de execução TypeScript com serviço separado. |
| `project-formula-1` | API Formula 1 | API HTTP com Fastify, CORS, rotas de equipes e pilotos. |

## Requisitos

- Node.js instalado
- NPM instalado

Alguns módulos possuem dependências próprias. Entre na pasta do módulo antes de instalar ou executar scripts.

```bash
cd nome-da-pasta
npm install
```

## Como executar

### Scripts simples

```bash
node 01-helloworld/hello.js
```

### Módulos com `package.json`

Entre na pasta desejada, instale dependências quando necessário e execute o arquivo ou script indicado.

```bash
cd 08-npm-scripts
npm install
npm run start:dev
```

## Comandos úteis por módulo

### `08-npm-scripts`

```bash
cd 08-npm-scripts
npm run iniciar
npm run start:dev
npm run start:watch
```

### `09-npm-enviroment`

```bash
cd 09-npm-enviroment
npm install
npm run start:dev
```

O módulo espera variáveis de ambiente para conexão:

```env
USERDATABASE=seu_usuario
PASSWORDDATABASE=sua_senha
```

### `10-typescript`

```bash
cd 10-typescript
npm install
npm run start:dev
npm run start:watch
npm run dist
```

### `11-debug`

```bash
cd 11-debug
npm install
npm run start:dev
```

### `project-formula-1`

```bash
cd project-formula-1
npm install
npm run start:dev
```

Por padrão, a API sobe na porta `3333`.

Rotas disponíveis:

```http
GET /teams
GET /drivers
GET /drivers/:id
```

Exemplos:

```bash
curl http://localhost:3333/teams
curl http://localhost:3333/drivers
curl http://localhost:3333/drivers/1
```

## Tecnologias praticadas

- Node.js
- JavaScript
- CommonJS
- ES Modules
- NPM scripts
- Variáveis de ambiente
- TypeScript
- TSX
- TSUP
- Fastify
- CORS

## Observações

- Cada pasta representa um estudo independente.
- Nem todos os módulos possuem script de inicialização padronizado.
- Arquivos em `dist/` são saídas de build dos módulos TypeScript.
- O projeto `project-formula-1` é o exemplo mais completo do repositório, com servidor HTTP e rotas reais.

## Autor

Lucca Rosa

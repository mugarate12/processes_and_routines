- [Overview](#overview)
- [Requerimentos](#requerimentos)
- [Instalação](#instalação)
- [Executar servidor](#executar-servidor)

## Overview

API criada para um artigo sobre monitoramento de uma API NodeJS com PM2 e uso de cron jobs para criação de rotinas

## Requerimentos

A instalação das ferramentas para Debian está descrita abaixo na sessão **[Instalação](#instalação)**

- **[Node.js e NPM](https://www.nodejs.org/)** (suportadas versões: 10.x.x)
- **[PM2](https://pm2.io/docs/plus/overview/)**

## Instalação

### NodeJS and NPM
```bash
curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
```
```bash
apt-get install -y nodejs
```

### Install PM2

#### One way: Curl Method
```bash
apt update && apt install sudo curl && curl -sL https://raw.githubusercontent.com/Unitech/pm2/master/packager/setup.deb.sh | sudo -E bash -
```

#### Two way: yarn or npm:
```bash
npm install pm2 -g
```

#### Install auto complete of PM2
```bash
pm2 completion install
```

#### Update PM2
```bash
npm install pm2 -g && pm2 update
```

## Executar servidor

#### Desenvolvimento

Por padrão, o servidor de desenvolvimento vai usar um banco local com as variaveis listadas no `.env` como descritas em `.env.example` e excluirá todos os dados anteriores, para esse comportamento, execute:
```bash
$ npm run dev
```

#### Produção
1. rode o build do projeto e aguarde a compilação
```bash
$ npm start
```
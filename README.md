
<h1 align="center">Challenge Facilita Juridico </h1>

<p align="center">
  <a href="#-techs">Techs</a>&nbsp;&nbsp;&nbsp;
  <a href="#-link">Link to access</a>&nbsp;&nbsp;&nbsp;
 
</p>


![image](https://github.com/feelipesantana/facilita-juridico/assets/130864526/d16fbdf9-2b02-4cc2-9661-39f2b5636b08)


> status: finished 🟢

#### Vite Application

## About Project: 

+ Name: Challenge Facilita Juridico
+ Description :
  
Requisito
Sistema de Gerenciamento de Clientes <br /><br />
Parte 1: 
Uma empresa que realiza limpeza em residências enfrenta desafios no gerenciamento de seus clientes e busca uma solução eficiente para cadastrar e visualizar as informações que hoje são controladas em planilhas. Para centralizar as informações e ajudar na expansão da empresa, ela deseja uma plataforma onde seja possível gerenciar os seus clientes. O sistema deve ser composto por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

A empresa utiliza as seguintes informações para gerenciar seus clientes: nome, email e telefone.

Na plataforma criada deve ser possível:
Listar os seus clientes e filtrar com base nas informações cadastradas
Cadastrar clientes novos <br /><br />
Parte 2:
Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância po

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.


## 🚀 Techs

This project was developed with the following technologies:
(Frontend)
- Vite
- TailwindCSS
- TypeScript
- React table Tanstack
- React Hook Form
- Zod

(Backend - SOLID)
- Nodejs
- TypeScript
- Prisma
- Fastify
- Zod
- Postgres
  

## ✨ Link
```
$ https://facilita-juridico.vercel.app/

```

## ⚙️ How to run

```
Fazer download do projeto

(Backend)
Pasta - /server

.env (Configurar )Banco de dados PostgreSQL
DATABASE_URL = postgresql://user:pass@localhost:5432/nome_banco_de_dados?schema=public

npm i
npx prisma migrate dev
npm run dev

(Frontend)
Pasta - /client

.env (Configurar chamada do backend)
VITE_BASE_URL=http://127.0.0.1:3333

npm i
npm run dev


```


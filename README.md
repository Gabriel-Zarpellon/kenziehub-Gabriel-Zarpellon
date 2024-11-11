# KenzieHub

## Descrição do projeto

O projeto KenzieHub consiste em uma aplicação onde é possível cadastrar um usuário e realizar o login, tendo acesso assim a uma página onde existem funções para a criação, atualização e exclusão de tecnologias possuídas pelo usuário e seu nível de conhecimento.

As funções desse projeto foram desenvolvidas em React, utilizando Context e estados em seus funcionamentos. A estilização foi desenvolvida com SASS.


## Implementações do projeto

### Cadastro e Login de usuários
    - Rotas desenvolvidas com React Router Dom;
    - Formulários utilizando React Hook Form;
    - Componentes de páginas Register, Login e Dashboard;
    - Validação de formulários;
    - Funcionalidades de login, logout e registro;
    - Consumo da API https://kenziehub.herokuapp.com com Axios;
    - Serviço de contexto para criação e leitura de perfis de usuário: UserContext.

### Autenticação
    - Rotas de usuário protegidas: apenas acessíveis por usuários logados e autenticados através de TOKEN fornecido na realização do login; 

### Cadastro, leitura, atualização e exclusão de tecnologias
    - Modais de criação e atualização de tecnologias;
    - Componentes de lista e card de tecnologias: Techlist e TechCard;
    - Serviço de contexto para CRUD completo de tecnologias: TechContext;
    - Integração de tecnologias e usuário através de estados.


## Visualizar deploy do [projeto no Vercel](https://kenziehub-gabriel-zarpellon.vercel.app/)

# Kilcy Game

Bem-vindo ao Kilcy Game! Este é um jogo desenvolvido com [Kaboom.js](https://kaboomjs.com/) e [Next.js](https://nextjs.org/).

## Descrição

Kilcy Game é um jogo divertido onde você controla a kilcy que precisa desviar de obstáculos para sobreviver. O jogo é renderizado diretamente no navegador e utiliza a biblioteca Kaboom.js para a lógica do jogo e Next.js para a estrutura do projeto. Esse jogo foi realizado em homenagem a uma grande amiga.

## Tecnologias Utilizadas

- [Kaboom.js](https://kaboomjs.com/): Biblioteca de jogos JavaScript.
- [Next.js](https://nextjs.org/): Framework React para aplicações web.
- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática.

## Como Executar o Projeto

### Pré-requisitos

- Node.js versão 22.x
- npm (gerenciador de pacotes do Node.js)

### Passos para Executar

1. Clone o repositório:

    ```sh
    git clone https://github.com/erick-gomes/kaboom-game.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd kaboom-game
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

4. Execute o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

5. Abra o navegador e acesse `http://localhost:3000` para ver o jogo em ação.

## Estrutura do Projeto

- pages: Contém as páginas do Next.js.
  - index.tsx: Página principal onde o jogo é renderizado.
- public: Contém os arquivos estáticos, como imagens e ícones.
- styles: Contém os arquivos de estilo.
- .next: Diretório gerado pelo Next.js após a build.
- package.json: Arquivo de configuração do npm com as dependências e scripts do projeto.
- tsconfig.json: Arquivo de configuração do TypeScript.
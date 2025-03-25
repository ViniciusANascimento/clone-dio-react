# Clone do site da DIO.me

Este projeto é um desafio da trilha React que utiliza o Create React App para criação de uma aplicação web com React, Styled Components e React Router. A aplicação simula uma interface de rede social com páginas de Home, Login, Sign Up e Feed, demonstrando o uso de componentes reutilizáveis e gerenciamento de rotas.

## Tecnologias Utilizadas

- React
- React Router DOM
- Styled Components
- Axios (para chamadas de API)
- Create React App

## Estrutura do Projeto

│  
├── public/  
│ └── index.html  
│  
├── src/  
│ ├── components/  
│ │ ├── Button/  
│ │ │ └── styles.js  
│ │ ├── Card/  
│ │ │ └── styles.js  
│ │ ├── Header/  
│ │ │ └── styles.js  
│ │ ├── Input/  
│ │ │ └── styles.js  
│ │ └── UserInfo/  
│ │ └── styles.js  
│ │  
│ ├── pages/  
│ │ ├── feed/  
│ │ │ └── styles.js  
│ │ ├── home/  
│ │ │ └── styles.js  
│ │ ├── login/  
│ │ │ └── styles.js  
│ │ └── signup/  
│ │ └── (component files)  
│ │  
│ ├── services/  
│ │ └── api.js  
│ │  
│ ├── styles/  
│ │ └── global.js  
│ │  
│ ├── App.js  
│ └── index.js  
│  
└── README.md

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.  
A página recarrega automaticamente quando você faz alterações. Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo watch interativo.\
Veja os detalhes na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a build para a melhor performance.

### `npm run eject`

(Remova essa opção somente se tiver certeza das alterações que deseja fazer.)  
Este comando copia todas as configurações e dependências transitivas (Webpack, Babel, ESLint, etc.) para o projeto, permitindo controle total sobre as mesmas.

## Configuração do Projeto

1. Clone o repositório:

```bash
git clone <https://github.com/ViniciusANascimento/clone-dio-react.git>
```

2. Navegue até a pasta do projeto:

```bash
cd clone-dio-react
```

3. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Após instalar as dependências, inicie o projeto com:

```bash
npm start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura e Funcionalidades

- **Rotas:**  
  A navegação é gerenciada utilizando o React Router. As rotas configuradas incluem:

  - `/` - Página inicial (Home)
  - `/login` - Página de login
  - `/signup` - Página de cadastro
  - `/feed` - Página de feed com cards de posts

- **Estilização:**  
  O projeto utiliza o Styled Components para criação e gerenciamento de estilos. O estilo global da aplicação é definido em `src/styles/global.js`.

- **Componentes Reutilizáveis:**  
  Componentes como Button, Input, Card e Header foram criados para promover a reutilização e a consistência visual na aplicação.

- **Integração com API:**  
  O arquivo `src/services/api.js` utiliza Axios para comunicação com a API, com a URL base configurada para `http://localhost:8001`.

## Contribuição

Sinta-se à vontade para enviar issues, sugestões ou pull requests para melhorar o projeto.

## Licença

Este projeto está licenciado sob os termos da licença MIT.

# API de Games 🎮

API simples para retornar uma lista de games, usando Node.js, Express e MongoDB.

## 🚀 Como executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/games-api.git
cd [nome do repositório]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

O servidor irá rodar em: `http://localhost:3000`

## 🛠 Configuração do Banco de Dados (MongoDB)

A API utiliza o MongoDB como banco de dados. Por padrão, espera-se que o serviço esteja rodando localmente.

- **Endereço padrão:** `mongodb://127.0.0.1:27017`
- **Nome do banco:** `games`

Se necessário, edite o arquivo `conn.js` para alterar a URL do MongoDB:

```js
// conn.js
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/games");
```

### 🪟 O que é necessário:

- Node.js
- MongoDb

## 📡 Rota disponível

- **GET** `/api/games` — retorna a lista de games.

Exemplo:
```http
GET http://localhost:3000/api/games
```

### 🪟 WorkFlow:

- Github Flow
- Este workflow foi escolhido devido a simplicidade do projeto, compatível com a do workflow

---

Feito com 💻 por Fagner Timoteo da Silva
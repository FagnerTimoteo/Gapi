# 🎮 API de Games

API simples construída com **Node.js**, **Express** e **MongoDB** para gerenciamento de jogos. Ela permite cadastrar, listar e gerenciar games, utilizando uma arquitetura baseada em máquinas virtuais com Vagrant.

---

## 🚀 Como executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/games-api.git
```

2. Instale os programas:
Virtual box: `https://www.virtualbox.org/wiki/Downloads`
Vagrant `https://developer.hashicorp.com/vagrant/install`

3. Suba o vagrant:
```bash
cd [nome do repositório]
vagrant up
```
---
## 💻 Como fazer testes

1. Acessar uma vm
```bash
# Acessar a vm1
vagrant ssh vm1

# Acessar a vm2
vagrant ssh vm2
```

2. Teste de post e get na vm1
- **GET**
```bash
curl http://192.168.56.11:3001/api/games
```

- **POST**
```bash
curl -X POST http://192.168.56.11:3001/api/games \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "The Legend of Zelda: Breath of the Wild",
    "genero": "Aventura",
    "dataLancamento": "2017-03-03",
    "plataforma": "Nintendo Switch",
    "desenvolvedora": "Nintendo",
    "email": "nintendo@zelda.com"
  }'
```
---


### 📦  Tecnologias Utilizadas:
1. Node.js
2. Express
3. MongoDB + Mongoose
4. Vagrant + VirtualBox
5. Nodemon

### 🪟 WorkFlow:

- Github Flow
- Este workflow foi escolhido devido a simplicidade do projeto, compatível com a do workflow

---

🧑‍💻 por Fagner Timoteo da Silva
## API

### instalação
```bash
...> git clone https://github.com/Lucasmaia435/Mongo-node-API.git

...\Mongo-node-API> npm install
```

### Run
```bash
...\Mongo-node-API> npm start
```
### Run como dev
```bash
...\Mongo-node-API> npm run dev
```

## Routes
Algumas rotas da API:
```Javascript
// Rota para checar os usuários no bando de dados
routes.get('/users', UserController.index);

//Rota para realizar a autenticação de login
routes.post('/users/login'UserController.authenticate);


```
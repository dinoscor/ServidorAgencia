import express from 'express';
import { Request, Response, Express } from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import { routerClientes } from './routes/routerClientes';
// Instanciamos express
const server: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
server.use(express.static('public'));
server.use(cors());
server.use(express.json());

// Base de datos
dbConnection();

server.use('/api/clientes', routerClientes);

// Puesta en marcha
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
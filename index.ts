import express from 'express';
import { Request, Response, Express } from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import { routerClientes } from './routes/routerClientes';
import { routerMayoristas } from './routes/routerMayoristas';
import { routerViajes } from './routes/routerViajes';
import { routerVentas } from './routes/routerVentas';
import { routerUsuarios } from './routes/routerUsuarios';
import { routerAuth } from './routes/routerAuth';
import { validarJWT } from './middlewares/validarJWT';
import { esAdminRol } from './middlewares/validarRoles';
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
server.use('/api/mayoristas', routerMayoristas);
server.use('/api/viajes', routerViajes);
server.use('/api/ventas', routerVentas);
server.use('/api/usuarios', [validarJWT, esAdminRol], routerUsuarios);
server.use('/api/auth', routerAuth);

// Puesta en marcha
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
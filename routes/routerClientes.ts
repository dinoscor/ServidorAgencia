import { Router } from "express";
import { deleteCliente, getClientePorId, getClientes, insertCliente, putCliente } from "../controllers/clientesController";

export const routerClientes = Router();
routerClientes.get('/', getClientes);
routerClientes.get('/:id', getClientePorId);
routerClientes.post('/', insertCliente);
routerClientes.put('/:id', putCliente);
routerClientes.delete('/:id', deleteCliente);
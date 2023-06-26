import { Router } from "express";
import { getClientes } from "../controllers/clientesController";

export const routerClientes = Router();
routerClientes.get('/', getClientes);
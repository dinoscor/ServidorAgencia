import { Router } from "express";
import { deleteCliente, getClientePorId, getClientes, insertCliente, putCliente } from "../controllers/clientesController";
import { check, param } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeClientePorId } from "../helpers/dbValidators";
import { esAdminRol } from "../middlewares/validarRoles";

export const routerClientes = Router();
routerClientes.get('/', getClientes);
routerClientes.get('/:id',
	[param('id').exists().isNumeric().custom(existeClientePorId), validarCampos],
	getClientePorId);
routerClientes.post('/',
	[
		check('nombre', 'El nombre es obligatorio y de 30 caracteres como mucho').not().isEmpty().isLength({max: 30}),
		check('poblacion', 'La población es obligatoria y de 40 caracteres como mucho').not().isEmpty().isLength({max: 40}),
		check('telefono', 'El teléfono es obligatorio').not().isEmpty().isLength({
			min: 9,
			max: 9
		}),
		validarCampos
	],
	insertCliente);
routerClientes.put('/:id',
	[
		param('id').exists().isNumeric().custom(existeClientePorId),
		check('nombre', 'El nombre es obligatorio y de 30 caracteres como mucho').not().isEmpty().isLength({max: 30}),
		check('poblacion', 'La población es obligatoria y de 40 caracteres como mucho').not().isEmpty().isLength({max: 40}),
		check('telefono', 'El teléfono es obligatorio').not().isEmpty().isLength({
			max: 9,
			min: 9
		}),
		validarCampos
	],
	putCliente);
routerClientes.delete('/:id',
	[param('id').exists().isNumeric().custom(existeClientePorId), esAdminRol, validarCampos],
	deleteCliente);
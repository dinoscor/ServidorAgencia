import { Router } from "express";
import { deleteVenta, getVentaPorId, getVentas, insertVenta, putVenta } from "../controllers/ventasController";
import { check, param } from "express-validator";
import { existeClientePorId, existeVentaPorId, existeViajePorId } from "../helpers/dbValidators";
import { validarCampos } from "../middlewares/validarCampos";

export const routerVentas = Router();
routerVentas.get('/', getVentas);
routerVentas.get('/:id',
[
	param('id').exists().isInt().custom(existeVentaPorId),
	validarCampos
],
getVentaPorId
);
routerVentas.post('/',
[
	check('idcliente').custom(existeClientePorId),
	check('fechasalida','Fecha no válida').isDate(),
	check('idviaje').custom(existeViajePorId),
	check('segurocancelacion','Sólo puede ser true o false').isBoolean(),
	validarCampos
],
insertVenta
);
routerVentas.put('/:id',
[
	check('idcliente').custom(existeClientePorId),
	check('fechasalida','Fecha no válida').isDate(),
	check('idviaje').custom(existeViajePorId),
	check('segurocancelacion','Sólo puede ser true o false').isBoolean(),
	validarCampos
],
putVenta
);
routerVentas.delete('/:id',
[
	param('id').exists().isInt().custom(existeVentaPorId),
	validarCampos
],
deleteVenta
);
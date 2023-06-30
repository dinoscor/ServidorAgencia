import { Router } from "express";
import { param, check } from "express-validator";
import { getViajes, getViajePorId, insertViaje, putViaje, deleteViaje } from "../controllers/viajesController";
import { existeViajePorId, existeMayoristaPorId } from "../helpers/dbValidators";
import { validarCampos } from "../middlewares/validarCampos";
import { validarJWT } from "../middlewares/validarJWT";
import { esAdminRol } from "../middlewares/validarRoles";

export const routerViajes = Router();
routerViajes.get("/", getViajes);
routerViajes.get(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		validarJWT,
		validarCampos
	],
	getViajePorId
);
routerViajes.post(
	"/",
	[
		check("nombre", "El nombre es obligatorio").notEmpty().isLength({ max: 20 }),
		check("duracion", "La duración debe ser un número entero igual o mayor que 1").notEmpty().isInt({ min: 1 }),
		check("precio", "El precio debe ser un número igual o mayor que 0").notEmpty().isFloat({ min: 0 }),
		check("idmayorista", "El ID del mayorista es obligatorio").custom(existeMayoristaPorId).notEmpty(),
		validarJWT,
		validarCampos
	],
	insertViaje
);

routerViajes.put(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		check("nombre", "El nombre es obligatorio").notEmpty().isLength({ max: 20 }),
		check("duracion", "La duración debe ser un número entero igual o mayor que 1").notEmpty().isInt({ min: 1 }),
		check("precio", "El precio debe ser un número igual o mayor que 0").notEmpty().isFloat({ min: 0 }),
		check("idmayorista", "El ID del mayorista es obligatorio").custom(existeMayoristaPorId).notEmpty(),
		validarJWT,
		validarCampos
	],
	putViaje
);

routerViajes.delete(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		validarJWT,
		esAdminRol,
		validarCampos
	],
	deleteViaje
);

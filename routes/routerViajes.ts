import { Router } from "express";
import { param, check } from "express-validator";
import { existeMayoristaPorId, existeViajePorId } from "../helpers/dbValidators";
import { validarCampos } from "../middlewares/validarCampos";
import { routerMayoristas } from "./routerMayoristas";
import { deleteViaje, getViajePorId, getViajes, insertViaje, putViaje } from "../controllers/viajesController";
import { generarJWT } from "../helpers/generarJWT";
import { esAdminRol } from "../middlewares/validarRoles";

export const routerViajes = Router();
routerViajes.get("/", getViajes);
routerViajes.get(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		generarJWT,
		validarCampos,
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
		generarJWT,
		validarCampos,
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
		generarJWT,
		validarCampos,
	],
	putViaje
);

routerViajes.delete(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		generarJWT,
		esAdminRol,
		validarCampos,
	],
	deleteViaje
);

import { Router } from "express";
import {
	deleteMayorista,
	getMayoristaPorId,
	getMayoristas,
	insertMayorista,
	putMayorista,
} from "../controllers/mayoristasController";
import { check, param } from "express-validator";
import { existeMayoristaPorId } from "../helpers/dbValidators";
import { validarCampos } from "../middlewares/validarCampos";

export const routerMayoristas = Router();
routerMayoristas.get("/", getMayoristas);
routerMayoristas.get(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeMayoristaPorId),
		validarCampos,
	],
	getMayoristaPorId
);
routerMayoristas.post(
	"/",
	[
		check("nombre", "El nombre es obligatorio y de 20 caracteres como mucho").not().isEmpty().isLength({max: 20}),
		check("telefono", "El teléfono es obligatorio").not().isEmpty().isLength({
			min: 9,
			max: 9,
		}),
		check("direccion", "La dirección es obligatoria y de 50 caracteres como mucho").not().isEmpty().isLength({max: 50}),
		check(
			"contacto",
			"El nombre completo de la persona de contacto es obligatorio y de 20 caracteres como máximo"
		)
			.not()
			.isEmpty()
			.isLength({max: 20}),
		validarCampos,
	],
	insertMayorista
);
routerMayoristas.put(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeMayoristaPorId),
		check("nombre", "El nombre es obligatorio y de 20 caracteres como mucho").not().isEmpty().isLength({max: 20}),
		check("telefono", "El teléfono es obligatorio").not().isEmpty().isLength({
			max: 9,
			min: 9,
		}),
		check("direccion", "La dirección es obligatoria y de 50 caracteres como mucho").not().isEmpty().isLength({max: 50}),
		check(
			"contacto",
			"El nombre completo de la persona de contacto es obligatorio y de 20 caracteres como mucho"
		)
			.not()
			.isEmpty()
			.isLength({max: 20}),
		validarCampos,
	],
	putMayorista
);
routerMayoristas.delete(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeMayoristaPorId),
		validarCampos,
	],
	deleteMayorista
);

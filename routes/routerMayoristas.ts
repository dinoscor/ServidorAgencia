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
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("telefono", "El teléfono es obligatorio").not().isEmpty().isLength({
			min: 9,
			max: 9,
		}),
		check("direccion", "La dirección es obligatoria").not().isEmpty(),
		check(
			"contacto",
			"El nombre completo de la persona de contacto es obligatorio"
		)
			.not()
			.isEmpty(),
		validarCampos,
	],
	insertMayorista
);
routerMayoristas.put(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeMayoristaPorId),
		check("nombre", "El nombre es obligatorio").not().isEmpty(),
		check("telefono", "El teléfono es obligatorio").not().isEmpty().isLength({
			max: 9,
			min: 9,
		}),
		check("direccion", "La dirección es obligatoria").not().isEmpty(),
		check(
			"contacto",
			"El nombre completo de la persona de contacto es obligatorio"
		)
			.not()
			.isEmpty(),
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

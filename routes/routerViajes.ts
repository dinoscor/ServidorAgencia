import { existeMayoristaPorId } from "../helpers/dbValidators";
import { routerMayoristas } from "./routerMayoristas";

export const routerViajes = Router();
routerViajes.get("/", getViajes);
routerViajes.get(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		validarCampos,
	],
	getViajePorId
);
routerViajes.post(
	"/",
	[
		check("nombre", "El nombre es obligatorio").not().isEmpty().isLength({
			max: 20,
		} ,
		check("duracion", "La duración debe ser un número entero igual o mayor que 1").notEmpty().isInt({ min: 1 }),
		check("precio", "El precio debe ser un número igual o mayor que 0").notEmpty().isFloat({ min: 0 }),
		check("idmayorista").custom(existeMayoristaPorId)
		.not()
			.isEmpty(),
		validarCampos,
	],
	insertViaje
);

routerViajes.put(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		check("nombre", "El nombre es obligatorio").not().isEmpty().isLength({
			max: 20,
		} ,
		check("duracion", "La duración debe ser un número entero igual o mayor que 1").notEmpty().isInt({ min: 1 }),
		check("precio", "El precio debe ser un número igual o mayor que 0").notEmpty().isFloat({ min: 0 }),
		check("idmayorista").custom(existeMayoristaPorId)
			.not()
			.isEmpty(),
		validarCampos,
	],
	putViaje
);

routerViajes.delete(
	"/:id",
	[
		param("id").exists().isNumeric().custom(existeViajePorId),
		validarCampos,
	],
	deleteViaje
);

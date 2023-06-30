import { Router } from "express";
import { param, check } from "express-validator";
import { getUsuarios, getUsuarioPorId, insertUsuario, deleteUsuario } from "../controllers/usuariosController";
import { validarCampos } from "../middlewares/validarCampos";
import { existeUsuarioPorId, emailExiste, esRolValido } from "../helpers/dbValidators";

export const routerUsuarios = Router();

routerUsuarios.get('/', getUsuarios);
routerUsuarios.get(
  '/:id',
  [param('id').exists().isNumeric().custom(existeUsuarioPorId), validarCampos],
  getUsuarioPorId
);

routerUsuarios.post(
  '/',
  [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').not().isEmpty().isLength({ min: 6 }),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom(emailExiste),
    check('roles_idRol').custom(esRolValido),
    validarCampos
  ],
  insertUsuario
);

routerUsuarios.delete(
  '/:id',
  [param('id').exists().isNumeric().custom(existeUsuarioPorId), validarCampos],
  deleteUsuario
);

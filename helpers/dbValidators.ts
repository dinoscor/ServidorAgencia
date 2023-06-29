import { Rol } from '../models/rol';
import { Usuario } from '../models/usuario';

export const esRolValido = async (rol = 0) => {
  const existeRol = await Rol.findByPk(rol);
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la BD`);
  }
};

export const emailExiste = async (email = '') => {
  const existeEmail = await Usuario.findOne({
    where: {
      email: email
    }
  });

  if (existeEmail) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }
};

export const existeUsuarioPorId = async (id: number) => {
  // Verificar si el id existe
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error(`El id no existe ${id}`);
  }
};
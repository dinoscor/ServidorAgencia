import { Cliente } from "../models/clientes";

export const existeClientePorId = async (id: number) => {
	const cliente = await Cliente.findByPk(id);
if(!cliente){
	throw new Error('No existe ningún cliente con este id.')
}
}
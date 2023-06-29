import { Cliente } from "../models/clientes";
import { Mayorista } from "../models/mayoristas";

export const existeClientePorId = async (id: number) => {
	const cliente = await Cliente.findByPk(id);
	if (!cliente) {
		throw new Error("No existe ningún cliente con este id.");
	}
};

export const existeMayoristaPorId = async (id: number) => {
	const mayorista = await Mayorista.findByPk(id);
	if (!mayorista) {
		throw new Error("No existe ningún mayorista con este id.");
	}
};

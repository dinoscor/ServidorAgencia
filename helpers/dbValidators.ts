import { Cliente } from "../models/clientes";
import { Mayorista } from "../models/mayoristas";
import { Viaje } from "../models/viajes";
import { Venta } from "../models/ventas";

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

export const existeViajePorId = async (id: number) => {
	const viaje = await Viaje.findByPk(id);
	if (!viaje) {
		throw new Error("No existe ningún viaje con este id.");
	}
};

export const existeVentaPorId = async (id: number) => {
	const venta = await Venta.findByPk(id);
	if (!venta) {
		throw new Error("No existe ninguna venta con este id.");
	}
};

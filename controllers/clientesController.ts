import { Request, Response } from "express";
import { Cliente } from "../models/clientes";
import { Venta } from "../models/ventas";

export const getClientes = async (req: Request, res: Response) => {
	try {
		const clientes = await Cliente.findAll();
		res.status(200).json(clientes);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const getClientePorId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const cliente = await Cliente.findByPk(id);
		res.status(200).json(cliente);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const insertCliente = async (req: Request, res: Response) => {
	const { nombre, poblacion, telefono } = req.body;
	try {
		const cliente = await Cliente.create({
			nombre,
			poblacion,
			telefono,
		});
		res.status(201).json(cliente);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador",
		});
	}
};

export const putCliente = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const cliente = await Cliente.findByPk(id);
		await cliente?.update(body);
		res.status(200).json(cliente);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador.",
		});
	}
};

export const deleteCliente = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const ventas = await Venta.findOne({
			where: {
				idcliente: id,
			},
		});
		if (ventas) {
			res.status(400).json({
				msg: "Este cliente tiene ventas asociadas y no se puede eliminar",
			});
		}
		const cliente = await Cliente.findByPk(id);
		cliente?.destroy();
		res.status(200).json(cliente);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}
};

import { Request, Response } from "express";
import { Venta } from "../models/ventas";

export const getVentas = async (req: Request, res: Response) => {
	try {
		const ventas = await Venta.findAll();
		res.status(200).json(ventas);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const getVentaPorId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const venta = await Venta.findByPk(id);
		res.status(200).json(venta);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const insertVenta = async (req: Request, res: Response) => {
	const { idcliente, fechasalida, idviaje, segurocancelacion } = req.body;
	try {
		const venta = await Venta.create({
			idcliente,
			fechasalida,
			idviaje,
			segurocancelacion,
		});
		res.status(201).json(venta);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador",
		});
	}
};

export const putVenta = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const venta = await Venta.findByPk(id);
		await venta?.update(body);
		res.status(200).json(venta);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador.",
		});
	}
};

export const deleteVenta = async (req: Request, res: Response) => {
	const { id } = req.params;
	const venta = await Venta.findByPk(id);
	await venta?.destroy();
	res.status(200).json(venta);
};

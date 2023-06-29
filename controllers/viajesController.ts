import { Request, Response } from "express";
import { Viaje } from "../models/viajes";

export const getViajes = async (req: Request, res: Response) => {
	try {
		const viajes = await Viaje.findAll();
		res.status(200).json(viajes);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const getViajePorId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const viaje = await Viaje.findByPk(id);
		res.status(200).json(viaje);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const insertViaje = async (req: Request, res: Response) => {
	const { duracion, nombre, precio, idmayorista } = req.body;
	try {
		const viaje = await Viaje.create({
			duracion,
			nombre,
			precio,
			idmayorista,
		});
		res.status(201).json(viaje);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador",
		});
	}
};

export const putViaje = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const viaje = await Viaje.findByPk(id);
		await viaje?.update(body);
		res.status(200).json(viaje);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador.",
		});
	}
};

export const deleteViaje = async (req: Request, res: Response) => {
	const { id } = req.params;
	const viaje = await Viaje.findByPk(id);
	await viaje?.destroy();
	res.status(200).json(viaje);
};

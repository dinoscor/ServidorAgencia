import { Request, Response } from "express";
import { Mayorista } from "../models/mayoristas";

export const getMayoristas = async (req: Request, res: Response) => {
	try {
		const mayoristas = await Mayorista.findAll();
		res.status(200).json(mayoristas);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const getMayoristaPorId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const mayorista = await Mayorista.findByPk(id);
		res.status(200).json(mayorista);
	} catch (error) {
		res.status(500).json({
			msg: "No se ha podido acceder a los datos",
		});
	}
};

export const insertMayorista = async (req: Request, res: Response) => {
	const { nombre, telefono, direccion, contacto } = req.body;
	try {
		const mayorista = await Mayorista.create({
			nombre,
			telefono,
			direccion,
			contacto,
		});
		res.status(201).json(mayorista);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador",
		});
	}
};

export const putMayorista = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const mayorista = await Mayorista.findByPk(id);
		await mayorista?.update(body);
		res.status(200).json(mayorista);
	} catch (error) {
		res.status(500).json({
			msg: "Contacte con el administrador.",
		});
	}
};

export const deleteMayorista = async (req: Request, res: Response) => {
	const { id } = req.params;
	const mayorista = await Mayorista.findByPk(id);
	await mayorista?.destroy();
	res.status(200).json(mayorista);
};

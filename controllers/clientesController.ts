import {Request,Response} from 'express';
import { Cliente } from "../models/clientes"

export const getClientes = async (req: Request, res: Response) => {
try{
	const clientes = await Cliente.findAll();
	res.status(200).json(clientes);
}	catch(error) {
	res.status(500).json({
		msg: 'No se ha podido acceder a los datos'
	});
};
}
import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";

interface ClienteAttributes {
	idcliente?: number;
	nombre: string;
	poblacion: string;
	telefono: string;
}

export const Cliente = db.define<Model<ClienteAttributes>>(
	"Cliente",
	{
		idcliente: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false
		},
		poblacion: {
			type: DataTypes.STRING,
			allowNull: false
		},
		telefono: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: 'clientes'
	}
);
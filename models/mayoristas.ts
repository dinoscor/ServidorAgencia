import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";

interface MayoristaAttributes {
	idmayorista?: number;
	nombre: string;
	telefono: string;
	direccion: string;
	contacto: string;
}

export const Mayorista = db.define<Model<MayoristaAttributes>>(
	"Mayorista",
	{
		idmayorista: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		telefono: {
			type: DataTypes.STRING,
			allowNull: true
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		contacto: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		tableName: 'mayoristas'
	}
);
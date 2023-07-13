import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";

interface UsuarioAttributes {
	idUsuario?: number;
	email: string;
	password: string;
	token?: string;
	roles_idRol: number;
}

export const Usuario = db.define<Model<UsuarioAttributes>>(
	"Usuario",
	{
		idUsuario: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		email: {
			type: DataTypes.STRING(75),
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(1000),
			allowNull: false,
		},
		token: {
			type: DataTypes.STRING(500),
			allowNull: true,
			defaultValue: "",
		},
		roles_idRol: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "usuarios",
	}
);

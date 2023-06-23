import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";
import { Mayorista } from "./mayoristas";

interface ViajesAttributes {
idviaje: number;
duracion: number;
nombre: string;
precio: number;
idmayorista: number;
}

export const Viaje = db.define<Model<ViajesAttributes>>(
	"Viaje",
	{
		idviaje: {
type: DataTypes.INTEGER.UNSIGNED,
allowNull: false,
autoIncrement: true,
primaryKey: true
		},
		duracion: {
			type: DataTypes.TINYINT,
			allowNull: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		precio: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		idmayorista: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: true
		}
	},
	{
		tableName: 'viajes'
	}
);

Viaje.hasMany(Mayorista, {
	sourceKey: 'idmayorista',
	foreignKey: 'viajes_idmyorista'
});

Mayorista.belongsTo(Viaje, {foreignKey: 'viajes_idmayorista'});
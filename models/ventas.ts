import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";
import { Cliente } from "./clientes";
import { Viaje } from "./viajes";

interface VentasAttributes {
	idventa?: number;
	idcliente: number;
	fechasalida: Date;
	idviaje: number;
	segurocancelacion: boolean;
}

const Venta = db.define<Model<VentasAttributes>>(
	"Venta",
	{
		idventa: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		idcliente: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		fechasalida: {
			type: DataTypes.DATE,
			allowNull: true
		},
		idviaje: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		segurocancelacion: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	},
	{
		tableName: 'ventas'
	}
);

Venta.hasMany(Cliente, {
	sourceKey: 'idcliente',
	foreignKey: 'idcliente'
});

Cliente.belongsTo(Venta, { foreignKey: 'idcliente' });

Venta.hasMany(Viaje, {
	sourceKey: 'idviaje',
	foreignKey: 'idviaje'
});

Viaje.belongsTo(Venta, { foreignKey: 'idviaje' });
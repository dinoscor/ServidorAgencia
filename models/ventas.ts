import { DataTypes, Model } from "sequelize";
import { db } from "../database/config";
import { Cliente } from "./clientes";
import { Viaje } from "./viajes";

interface VentasAttributes {
	idventa: number;
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
	foreignKey: 'ventas_idcliente'
});

Cliente.belongsTo(Venta, {foreignKey: 'ventas_idcliente'});
Venta.hasMany(Viaje, {
	sourceKey: 'idviaje',
	foreignKey: 'ventas_idviaje'
});
Viaje.belongsTo(Venta, {foreignKey: 'ventas_idviaje'});
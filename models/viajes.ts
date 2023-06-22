import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../database/config";

interface ClienteAttributes {
	idcliente?: number;
	nombre: string;
	poblacion: string;
	telefono: string;
}

interface ClienteCreationAttributes
	extends Optional<ClienteAttributes, "idcliente"> {}

// Al modelo le pasamos los atributos, los atributos de creación y los atributos timestamp de creación automática (en este caso no los tiene)
interface ClienteInstance
	extends Model<ClienteAttributes, ClienteCreationAttributes>,
		ClienteAttributes {}

export const Cliente = db.define<ClienteInstance>(
	"Cliente",
	{
		idcliente: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		poblacion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefono: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "clientes",
	}
);

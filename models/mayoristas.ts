import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../database/config";

interface MayoristaAttributes {
	idmayorista?: number;
	nombre: string;
	telefono: string;
	direccion: string;
	contacto: string;
}

interface MayoristaCreationAttributes
	extends Optional<MayoristaAttributes, "idmayorista"> {}

// Al modelo le pasamos los atributos, los atributos de creación y los atributos timestamp de creación automática (en este caso no los tiene)
interface MayoristaInstance
	extends Model<MayoristaAttributes, MayoristaCreationAttributes>,
		MayoristaAttributes {}

export const Mayorista = db.define<MayoristaInstance>(
	"Mayorista",
	{
		idmayorista: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		telefono: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		contacto: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "mayoristas",
	}
);

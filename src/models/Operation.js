import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import Usuario from './Usuarios.js';
import Producto from "./Producto.js";
import sequelize from "../db/connection.js";

const Operation = sequelize.define('Operation', {
    idOperation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    },
    idProducto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'idProducto'
        }
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    type: {
        type: DataTypes.ENUM('compra', 'venta'),
        allowNull: false
    }
});

export default Operation;
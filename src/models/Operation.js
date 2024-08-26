import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import Usuario from './Usuarios.js';
import Producto from "./Product.js";
import sequelize from "../db/connection.js";

const Operation = sequelize.define('Operation', {
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
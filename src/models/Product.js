import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Producto;
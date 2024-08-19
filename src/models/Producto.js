import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection.js';


const Producto = sequelize.define('Producto', {
  idProducto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id: {
    type: DataTypes.INTEGER,
    references: {
        model: operacion,
        key: 'idOperacion',
      },
  },
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
}, {
  sequelize,
  timestamps: true,
  modelName: 'Producto'
});

export default Producto;
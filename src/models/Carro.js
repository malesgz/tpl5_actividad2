import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection.js';
import Usuario from './Usuario.js';
import Producto from './Producto.js';

const Carro = sequelize.define('Carro', {
  idCarro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario, // El modelo debe ser Usuario
      key: 'idUsuario',
    },
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto, // El modelo debe ser Producto
      key: 'idProducto',
    },
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Carro'
});

// Un carro puede tener solamente un usuario.
Carro.belongsTo('usuario', { foreignKey: 'usuarioId' });

// Un carro puede tener muchos productos.
Carro.hasMany('productos', { foreignKey: 'carroId' });

export default Carro;
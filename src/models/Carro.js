import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import Usuario from './Usuarios.js'; 
import Producto from './Product.js';

const Carro = sequelize.define('Carro', {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

// Relaciones.
Carro.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'usuario' }); 
Carro.belongsTo(Producto, { foreignKey: 'idProducto', as: 'producto' });

export default Carro;
import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../db/connection.js';

export const Usuario = sequelize.define('Usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM ('cliente', 'vendedor', 'administrador'),
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'usuario'
});

export default Usuario;
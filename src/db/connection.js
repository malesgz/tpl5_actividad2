import { Sequelize } from 'sequelize'; // Importa la clase Sequelize correctamente
import { URI } from '../config/conf.js'; // Importa la URI de la configuración

// Crea una nueva instancia de Sequelize
const sequelize = new Sequelize(URI, 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize;
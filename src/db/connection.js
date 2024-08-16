import { Sequelize } from "sequelize";

import { URI } from "../config/conf.js";

const sequelize= new Sequelize(URI, 'root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false //Desactiva el loggin de sql en la consola.
})

export default sequelize
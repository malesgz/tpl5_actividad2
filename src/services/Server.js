import express from "express";
import cors from "cors";
import morgan from "morgan";
import sequelize from "../db/connection.js";
import productsRoutes from "../routes/productos.routes.js";
import Carro from "../models/Carro.js";
import Operation from "../models/Operation.js";
import Product from "../models/Product.js"; 
import Usuarios from "../models/Usuarios.js";
import router from "../routes/productos.routes.js";

class Server {

    constructor() {
        this.app = express();
        this.port = 3000;

        this.dbConnect(); 
        
        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        try{
            await sequelize.authenticate();
            console.log('Connection succesful with database');
            await sequelize.sync({force: true});
            console.log('Tables created in the database');
        } catch(error) {
            console.error('Error in the connection with the database:', error);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', router);
    }

    listen(){
        this.app.listen(this.port, ()=>console.log(`Servidor corriendo en http://localhost:${this.port}`))
    }
}

export default Server;
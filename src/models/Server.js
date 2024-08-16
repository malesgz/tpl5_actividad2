import express from "express";
import cors from "cors";
import morgan from "morgan";
import sequelize from "../db/connection.js";
import productsRoutes from "../routes/productos.routes.js";

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
        this.app.use('/api', productsRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;
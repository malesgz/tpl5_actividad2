import { Router } from 'express';
import productoRoute from './productos.routes.js';
import userRoute from './user.router.js';
import carroRoute from './carro.routes.js'

const router = Router();

router.use('/productos', productoRoute);
router.use('/users', userRoute);
router.use('/carrito', carroRoute);

export default router;

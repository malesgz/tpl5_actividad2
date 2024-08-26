import { Router } from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productos.controllers.js';
import { productValidator } from '../validations/ProductoValidations.js';
import { validationResult } from 'express-validator';
import { checkAdmin } from '../middleware/checkAdmin.js';

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Middleware checkAdmin para verificación de usuario admin para permisos correspondientes.
router.post('/', productValidator, validate, checkAdmin, createProduct);
router.get('/', getProducts);
router.put('/:id', productValidator, validate, checkAdmin, updateProduct);
router.delete('/:id', checkAdmin, deleteProduct);

export default router;

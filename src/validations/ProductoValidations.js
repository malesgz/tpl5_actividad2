import { body } from 'express-validator';

// Asegura que los datos que se envian por el clientes
//cumplan con los requisitos antes que se procesen.
export const productValidator = [
  body('nombre')
  .notEmpty()
  .withMessage('El nombre es obligatorio'),

  body('precio')
  .isFloat({ gt: 0 })
  .withMessage('El precio debe ser mayor que 0'),

  body('stock')
  .isInt({ gt: 0 })
  .withMessage('El stock debe ser mayor que 0'),
];
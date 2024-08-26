import { body } from 'express-validator';

export const userValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe ser númerica'),
    body('role').isIn(['cliente', 'vendedor', 'admin']).withMessage('Roles: cliente, vendedor, admin'),
];

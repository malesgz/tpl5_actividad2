import Producto from '../models/Producto.js';

// Crear un nuevo producto
export const createProducto = async (req, res) => {
    try {
        const { nombre, precio, stock, description } = req.body;

        // Crear el producto
        const producto = await Producto.create({ nombre, precio, stock, description });
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un producto por ID
export const getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, stock, description } = req.body;

        // Encontrar el producto por ID
        const producto = await Producto.findByPk(id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });

        // Actualizar el producto
        await producto.update({ nombre, precio, stock, description });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un producto por ID
export const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        await producto.destroy();
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
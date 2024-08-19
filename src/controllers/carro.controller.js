import Carro from '../models/Carro.js';
import Producto from '../models/Producto.js';
import Usuario from '../models/Usuario.js';

// Crear un nuevo carro
export const createCarro = async (req, res) => {
    try {
        const { idUsuario, idProducto, total } = req.body;

        // Verificar que el usuario y producto existan
        const usuario = await Usuario.findByPk(idUsuario);
        const producto = await Producto.findByPk(idProducto);
        
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });

        // Crear el carro
        const carro = await Carro.create({ idUsuario, idProducto, total });
        res.status(201).json(carro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los carros
export const getCarros = async (req, res) => {
    try {
        const carros = await Carro.findAll();
        res.status(200).json(carros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un carro por ID
export const getCarroById = async (req, res) => {
    try {
        const carro = await Carro.findByPk(req.params.id);
        if (!carro) return res.status(404).json({ message: 'Carro no encontrado' });
        res.status(200).json(carro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un carro
export const updateCarro = async (req, res) => {
    try {
        const { id } = req.params;
        const { idUsuario, idProducto, total } = req.body;

        // Encontrar el carro por ID
        const carro = await Carro.findByPk(id);
        if (!carro) return res.status(404).json({ message: 'Carro no encontrado' });

        // Verificar que el usuario y producto existan (si se actualizan)
        if (idUsuario) {
            const usuario = await Usuario.findByPk(idUsuario);
            if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        if (idProducto) {
            const producto = await Producto.findByPk(idProducto);
            if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Actualizar el carro
        await carro.update({ idUsuario, idProducto, total });
        res.status(200).json(carro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un carro por ID
export const deleteCarro = async (req, res) => {
    try {
        const carro = await Carro.findByPk(req.params.id);
        if (!carro) return res.status(404).json({ message: 'Carro no encontrado' });
        await carro.destroy();
        res.status(200).json({ message: 'Carro eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
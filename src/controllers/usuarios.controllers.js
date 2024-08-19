import Usuario from '../models/Usuario.js';

class UsuarioController {
    async createUser(req, res) {
        try {
            const { nombre, apellido, email, password, role } = req.body;

            const validRoles = ['cliente', 'vendedor', 'admin'];
            if (!validRoles.includes(role)) {
                return res.status(400).json({ message: 'Rol no válido' });
            }

            const usuario = await Usuario.create({ nombre, apellido, email, password, role });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUsers(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { nombre, apellido, email, password, role } = req.body;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

            const validRoles = ['cliente', 'vendedor', 'admin'];
            if (role && !validRoles.includes(role)) {
                return res.status(400).json({ message: 'Rol no válido' });
            }

            await usuario.update({ nombre, apellido, email, password, role });
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
            await usuario.destroy();
            res.status(200).json({ message: 'Usuario eliminado' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new UsuarioController();
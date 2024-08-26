import User from '../models/Usuarios.js';

// Verificación de si el usuario es admin.
export const checkAdmin = async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ message: 'Required userId' });

  try {
    // Búsqueda de usuario en base de datos.
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

    // Asignación de usuario.
    req.user = user; 
    next();
  } catch (err) {
    res.status(500).json({ message: 'Error checking admin', error: err });
  }
};

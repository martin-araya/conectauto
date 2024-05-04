import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from './userController';

const router = Router();

// Obtener todos los usuarios
router.get('/', getAllUsers);

// Obtener un usuario por ID
router.get('/:id', getUserById);

// Crear un nuevo usuario
router.post('/', createUser);

// Actualizar un usuario
router.put('/:id', updateUser);

// Eliminar un usuario
router.delete('/:id', deleteUser);

export default router;

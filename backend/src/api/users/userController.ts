import { Request, Response } from 'express';
import supabase from '../../config/supabaseClient';

export const getAllUsers = (req: Request, res: Response) => {
    res.send('Todos los usuarios');
};

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`Usuario con ID: ${id}`);
};

export const createUser = async (req: Request, res: Response) => {
   
        const { username, email, password } = req.body; // Asegúrate de validar y sanitizar los inputs

        const { data, error } = await supabase
            .from('Usuarios') // 'Usuarios' es el nombre de tu tabla en Supabase
            .insert([
                { username: username, email: email, password: password } // En un caso real, asegúrate de no guardar contraseñas como texto plano
            ]);

        if (error) {
            return res.status(400).send(error.message);
        }

        res.status(201).send('Usuario creado');
    };


    export const updateUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { username, email } = req.body;  // Ejemplo de datos que podrían ser actualizados
    
        // Validación y sanitización de los inputs deberían ser manejados aquí
    
        // Actualizar datos del usuario en Supabase
        const { data, error } = await supabase
            .from('Usuarios')  // 'Usuarios' es el nombre de tu tabla
            .update({
                username: username,
                email: email
            })
            .eq('id', id);  // Asegúrate de que el campo 'id' es el correcto y está indexado en Supabase
    
        if (error) {
            return res.status(400).send(error.message);
        }
    
        res.send(`Usuario con ID: ${id} actualizado`);
    };

    export const deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
    
        // Eliminar usuario en Supabase
        const { data, error } = await supabase
            .from('Usuarios')  // Asumiendo que 'Usuarios' es el nombre de tu tabla
            .delete()
            .match({ id: id });  // Usar 'match' para especificar el criterio de eliminación
    
        if (error) {
            return res.status(400).send(error.message);
        }
    
        res.send(`Usuario con ID: ${id} eliminado`);
    };
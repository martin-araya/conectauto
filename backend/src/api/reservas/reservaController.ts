import { Request, Response } from 'express';
import supabase from '../../config/supabaseClient';

export const getAllReservations = async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('Reservations')  // Make sure 'Reservations' matches your table name in Supabase
            .select('*');  // Fetches all columns

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send('Failed to fetch reservations: ' + err.message);
    }
};

export const getReservationById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
            .from('Reservations')  // Ensure this matches your table name in Supabase
            .select('*')  // Selects all fields
            .eq('id', id)  // Filters the results where 'id' equals the parameter id
            .single();  // Ensures that only one record is returned

        if (error) {
            throw error;
        }

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).send(`No reservation found with ID: ${id}`);
        }
    } catch (err: any) {
        res.status(500).send('Failed to fetch reservation: ' + err.message);
    }
};

export const createReservation = async (req: Request, res: Response) => {
    // Assuming body contains fields such as userId, date, and details
    const { userId, date, details } = req.body;

    // Validate and sanitize input data
    if (!userId || !date) { // Simple validation check
        return res.status(400).send('Missing required reservation details.');
    }

    try {
        const { data, error } = await supabase
            .from('Reservations')  // Ensure this matches your table name
            .insert([
                { userId: userId, date: date, details: details }
            ]);

        if (error) {
            throw error;
        }

        res.status(201).json({ message: 'Reservation created', reservation: data });
    } catch (err: any) {
        res.status(500).send('Failed to create reservation: ' + err.message);
    }
};

export const updateReservation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { date, details } = req.body;  // Assuming these are the fields you want to update

    // Validate input data
    if (!date && !details) {
        return res.status(400).send('No valid information provided for update.');
    }

    try {
        const { data, error } = await supabase
            .from('Reservations')  // Ensure this matches your table name
            .update({
                date: date,
                details: details
            })
            .match({ id: id });  // Filter to match the reservation ID

        if (error) {
            throw error;
        }

        if (data) {
            res.status(200).json({ message: `Reservation with ID: ${id} updated`, reservation: data });
        } else {
            res.status(404).send(`No reservation found with ID: ${id}`);
        }
    } catch (err: any) {
        res.status(500).send('Failed to update reservation: ' + err.message);
    }
};

export const deleteReservation = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const { data, error } = await supabase
            .from('Reservations')
            .delete()
            .match({ id });

        if (error) {
            throw error;  // Proper error handling if something goes wrong with the query
        }

        // Check if any records were actually deleted
        if (!data || (data as any[]).length === 0) {
            return res.status(404).send(`No reservation found with ID: ${id}`);
        }

        // If records were deleted, return a success response
        res.status(200).send(`Reservation with ID: ${id} deleted`);
    } catch (err: any) {
        res.status(500).send('Failed to delete reservation: ' + err.message);
    }
};

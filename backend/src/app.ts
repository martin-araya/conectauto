import express from 'express';
import userRoutes from './api/users/userRoutes';
import reservaRoutes from './api/reservas/reservaRoutes';
import paymentRoutes from './api/payments/paymentRoutes';

const app = express();
const PORT = 3000;
app.use(express.json());

// Usar las rutas de usuario
app.use('/api/usuarios', userRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/pay', paymentRoutes);


app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});
app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});
app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});
app.patch('/', (req, res) => {
    res.send('PATCH request to the homepage');
});
app.options('/', (req, res) => {
    res.send('OPTIONS request to the homepage');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
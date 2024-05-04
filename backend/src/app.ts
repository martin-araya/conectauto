import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'; // Middleware para parsear el cuerpo de las solicitudes HTTP
import cors from 'cors'; // Middleware para habilitar CORS

// Importa los routers de las APIs
// import reservaRoutes from './api/reservas/reservaRoutes';
// import usuarioRoutes from './api/usuarios/usuarioRoutes';
// import pagoRoutes from './api/pagos/pagoRoutes';

// Crea una instancia de Express
const app: Express = express();

// Configuración de Middlewares
app.use(cors()); // Habilita CORS
app.use(bodyParser.json()); // Parsea automáticamente los cuerpos JSON en las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: true })); // Parsea cuerpos con codificación URL

// Rutas
// app.use('/api/reservas', reservaRoutes);
// app.use('/api/usuarios', usuarioRoutes);
// app.use('/api/pagos', pagoRoutes);

// GET method route
app.get('/', (req: Request, res: Response) => {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req: Request, res: Response) => {
    res.send('POST request to the homepage');
});

// PUT method route
app.put('/', (req: Request, res: Response) => {
    res.send('PUT request to the homepage');
});

// DELETE method route
app.delete('/', (req: Request, res: Response) => {
    res.send('DELETE request to the homepage');
});

// PATCH method route
app.patch('/', (req: Request, res: Response) => {
    res.send('PATCH request to the homepage');
});

// OPTIONS method route
app.options('/', (req: Request, res: Response) => {
    res.send('OPTIONS request to the homepage');
});

// Exporta la configuración de la app
export default app;

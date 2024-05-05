import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { logger } from './middlewares/log/logger';
import userRoutes from './api/users/userRoutes';
import reservaRoutes from './api/reservas/reservaRoutes';
import paymentRoutes from './api/payments/paymentRoutes';
import { auth0 } from './middlewares/auth0';

const app = express();
const { requiresAuth } = require('express-openid-connect');
const PORT = 3000;
app.use(express.json());
app.use(logger);

// Usar las rutas de usuario
app.use('/api/usuarios', userRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/pay', paymentRoutes);
app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(auth0);


app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.get('/admin', isAuthenticated, isAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin panel' });
  });
  
  app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });
  
  app.get('/login', passport.authenticate('auth0', { scope: 'openid email profile' }));
  
  app.get('/callback', passport.authenticate('auth0', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
  });
  
  app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging out' });
      }
      req.session.destroy(() => {
        res.redirect('/');
      });
    });
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
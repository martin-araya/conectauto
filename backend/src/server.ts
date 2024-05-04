import http from 'http';
import app from './app';

const PORT = process.env.PORT || 3000;  // Ensure this environment variable is correctly set in your .env file or environment

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});

server.on('error', (error: Error) => {
  console.error('Server error:', error);
});

export default server;
import express from 'express'; // Import express
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath to handle import.meta.url
import { PORT, HOST } from '../src/utils/config_env.js';
import { app } from '../src/routes/server.js';

// Compute the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setting up static file serving
app.use(express.static(path.join(__dirname, '../../build'))); // Ensure correct path

// Handling all routes to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html')); // Ensure correct path
});

// Starting the server
app.listen(PORT, HOST, () =>
  console.log(`Running on port ${PORT} and HOST ${HOST}`)
);

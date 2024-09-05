import express from 'express'; // Import express
import path from 'path';
import { PORT, HOST } from '../src/utils/config_env.js'; // Correct path for config_env.js
import app from '../src/routes/server.js'; // Assuming server.js exports the app instance

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'dist', 'index.html'));
})

// Starting the server
app.listen(PORT, HOST, () =>
  console.log(`Running on port ${PORT} and HOST ${HOST}`)
);

import { app } from "./routes/server.js";
import { PORT, HOST } from "./utils/config_env.js";
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build'))); // Ensure correct path

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html')); // Ensure correct path
});

app.listen(PORT, HOST, () =>
	console.log(`running on port ${PORT} and HOST ${HOST}`),
);

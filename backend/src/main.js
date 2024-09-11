import express from 'express'; // Import express
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI) // Ensure MONGO is defined in your .env file
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const server = express();

server.use(express.json());
server.use(cookieParser());

// Serve static files from the React app
server.use(express.static(path.join(__dirname, '../dist')));

// Handle any requests that don't match the API routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


dotenv.config()

const uri = 'mongodb://localhost:27017/';
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)
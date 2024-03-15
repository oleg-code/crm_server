import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

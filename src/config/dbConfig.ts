import mongoose from 'mongoose';
import 'dotenv/config';

// * Establishes a connection to the MongoDB database.
export const DBConnection = async () => {
  const mongoUrl = process.env.URL_MONGODB || '';

  try {
    console.log('mongoUrl', mongoUrl);

    await mongoose.connect(mongoUrl);
    console.log('Connected successfully to MongoDB server');
  } catch (error) {
    console.log(error);
    console.log('Error connecting to MongoDB', error);

    throw new Error('Error connecting to MongoDB');
  }
};

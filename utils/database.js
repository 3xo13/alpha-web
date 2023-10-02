import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let isConnected = false; // track the connection

export async function connectToDB () {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    return true;
  } 

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "alpha-files",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

  } catch (error) {
    return error;
  }
}
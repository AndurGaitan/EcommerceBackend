import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Conectado a la DB')
} catch (error) {
    console.log('Error en la conxion a mongoDB:' + error);
}


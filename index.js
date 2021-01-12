import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
app.use(express.json());

//Connect MongoDB
connectDB();

app.use('/', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App running on port ' + PORT));

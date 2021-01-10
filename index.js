import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

//Connect MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Backend started');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App running on port ' + PORT));

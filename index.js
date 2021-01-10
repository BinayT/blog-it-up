import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Backend started');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App learning on port ' + PORT));

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Backend started');
});

app.listen(5000);

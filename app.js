require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('AWS Assignment Running with CI/CD');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
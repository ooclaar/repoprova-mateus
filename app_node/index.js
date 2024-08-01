const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Gaudium - Hello World v1');
});

app.listen(port, () => {
  console.log(`Aplicação operando na porta ${port}`);
});
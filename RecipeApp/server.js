const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  const { name, arguments } = req.body;
  console.log(`Received command: ${name} with arguments:`, arguments);
  res.send('Command received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

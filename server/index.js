const path = require('path');
const express = require('express');

const app = express();

const buildOutputPath = path.join(__dirname, '../client', 'build');

app.use(express.static(buildOutputPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
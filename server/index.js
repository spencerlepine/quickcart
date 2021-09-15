const path = require('path');
const express = require('express');

const app = express();

const buildOutputPath = path.join(__dirname, '../client', 'build');

// app.use('/static', express.static(path.join(__dirname, buildOutputPath, 'static')));

// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: buildOutputPath });
// });

app.use(express.static(buildOutputPath));

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port:', server.address().port);
});
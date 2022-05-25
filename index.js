const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.resolve(__dirname, './front/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './front/build', 'index.html'));
});

module.exports = app;
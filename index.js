const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();
// routing
const router = express.Router();
// port info
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.static(path.resolve(__dirname, './build/index.html')));
app.use(cors());
app.use(express.static(__dirname + "/build"));
app.use(express.json());

//home page
router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './build/', 'index.html'));
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})

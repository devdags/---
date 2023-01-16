const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors())

require('./database/index.js');

app.use(express.json());
app.use(routes);

app.listen(8800);
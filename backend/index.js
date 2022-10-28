const cors = require('cors');
const express = require('express');

const app = express();

const RouterHome = require('./router/home');

const { log } = console;
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/', RouterHome);

app.listen(PORT, () => log(`Olhando a porta ${PORT}`));
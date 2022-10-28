const app = require('./api');
const Controller = require('./controllers/userController');

const RouterHome = require('./router/home');

const { log } = console;

const PORT = 3001;

app.use('/user', RouterHome);
app.post('/user', Controller.createUser);

app.listen(PORT, () => log(`Olhando a porta ${PORT}`));
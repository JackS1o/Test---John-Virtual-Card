const app = require('./api');
const Controller = require('./controllers/userController');

const { log } = console;

const PORT = 3001;

app.get('/user', Controller.user);
app.post('/user', Controller.createUser);

app.listen(PORT, () => log(`Olhando a porta ${PORT}`));
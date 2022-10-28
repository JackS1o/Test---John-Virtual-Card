const Service = require('../services/userService');

const user = async (req, res) => {
  const { body } = req;
  const user = await Service.user(body);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(200).json(user);
}

const createUser = async (req, res) => {
  const { body } = req;
  console.log(body);
  const user = await Service.createUser(body);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(201).json(user);
}

module.exports = { user, createUser };

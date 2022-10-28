const express = require('express');
const Controller = require('../controllers/userController');

const RouterCreateUser = express.Router();

RouterCreateUser.post('/user', Controller.createUser);

module.exports = RouterCreateUser;

const express = require('express');
const UserHttpHandler = require('../handlers/user');
const UserServiceFactory = require('../db/factory');
const UserController = require('../controllers/user');

const router = express.Router();

// Crear el servicio y controlador
const userService = UserServiceFactory.create('fake');
const userController = new UserController(userService);

// Crear la instancia del handler
const userHandler = new UserHttpHandler(userController);

// Definir la ruta POST /login
router.post('/login', (req, res, next) => userHandler.login(req, res, next));

module.exports = router;
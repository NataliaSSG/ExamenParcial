const express = require('express');
const router = express.Router();
const UserHttpHandler = require('../handlers/user');
const UserServiceFactory = require('../db/factory');
const UserController = require('../controllers/user');

// Create the service and controller
const userService = UserServiceFactory.create('fake');
const userController = new UserController(userService);

// Create the handler instance
const userHandler = new UserHttpHandler(userController);

// Correct the route to use userHandler.login
router.post('/login', userHandler.login.bind(userHandler));

module.exports = router;
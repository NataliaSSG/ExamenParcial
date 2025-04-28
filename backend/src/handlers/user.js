const express = require('express');

function createUserHandler(userController) {
  const router = express.Router();

  // Endpoint POST /login
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await userController.login(username, password);

      return res.json({
        message: `¡Hola, ${user.fullName}! Gracias por ser parte de Café Aurora.`,
        membershipNumber: user.membershipNumber,
      });
    } catch (error) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
  });

  return router;
}

module.exports = createUserHandler;
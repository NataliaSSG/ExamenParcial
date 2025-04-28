class UserHttpHandler {
  constructor(userController) {
    this.userController = userController;
  }

  async login(req, res) {
    console.log('Request body:', req.body); // Log the incoming request body
    const { username, password } = req.body;
  
    try {
      const user = await this.userController.login(username, password);
      console.log('Login successful:', user); // Log the user object if login succeeds
  
      return res.json({
        message: `¡Hola, ${user.fullName}! Gracias por ser parte de Café Aurora.`,
        membershipNumber: user.membershipNumber,
      });
    } catch (error) {
      console.error('Login error:', error.message); // Log the error message
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }
  }
}

module.exports = UserHttpHandler;
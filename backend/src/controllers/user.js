class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  // This method should now call the `login` method on the service
  async login(username, password) {
    try {
      const user = await this.userService.login(username, password);
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }
}

module.exports = UserController;
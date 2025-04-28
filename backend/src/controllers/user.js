class UserController {
  constructor(service) {
    this.service = service;
  }

  async getAll() {
    return this.service.getAllUsers();
  }

  async getByUsername(username) {
    const user = await this.service.getUserByUsername(username);
    if (!user) throw new Error('User not found');
    return user;
  }

  async create(username, password, fullName, membershipNumber) {
    return this.service.createUser(username, password, fullName, membershipNumber);
  }

  async update(username, password, fullName, membershipNumber) {
    return this.service.updateUser(username, password, fullName, membershipNumber);
  }

  async delete(username) {
    await this.service.deleteUser(username);
    return { message: 'User deleted' };
  }
}

module.exports = UserController;
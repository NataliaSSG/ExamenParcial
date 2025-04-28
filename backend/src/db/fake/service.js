const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.users = new Map();

    // Initialize with 3 dummy users
    const dummyUsers = [
      { username: 'sandra.g', password: 'latte123', fullName: 'Sandra García', membershipNumber: 5001 },
      { username: 'roberto.m', password: 'capuccino456', fullName: 'Roberto Martínez', membershipNumber: 5002 },
      { username: 'esteban.l', password: 'espresso789', fullName: 'Esteban López', membershipNumber: 5003 },
    ];

    dummyUsers.forEach((user) => {
      this.users.set(user.username, user);
    });
  }

  async getAllUsers() {
    return Array.from(this.users.values());
  }

  async getUserByUsername(username) {
    return this.users.get(username);
  }

  // Modify login to validate username and password
  async login(username, password) {
    const user = this.users.get(username);

    // Check if user exists and password matches
    if (user && user.password === password) {
      return user;
    } else {
      throw new Error('Invalid username or password');
    }
  }

  async createUser(username, password, fullName, membershipNumber) {
    const user = { username, password, fullName, membershipNumber };
    this.users.set(username, user);
    return user;
  }

  async updateUser(username, password, fullName, membershipNumber) {
    const user = { username, password, fullName, membershipNumber };
    this.users.set(username, user);
    return user;
  }

  async deleteUser(username) {
    this.users.delete(username);
  }
}

module.exports = FakeService;
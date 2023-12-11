const {v4 : uuidV4} = require("uuid");
const {hash} = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
        userId: uuidV4(),
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        password: await hash("123456", 10),
        role: "trainee",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };
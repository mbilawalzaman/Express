const {v4 : uuidV4} = require("uuid");
const {hash} = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
    for(i=1; i<10; i++){

    
     queryInterface.bulkInsert('users', [
        {
        userId: uuidV4(),
        firstName: 'New',
        lastName: 'User'+i,
        email: 'newuser'+i+'@gmail.com',
        password: await hash("123456", 10),
        role: "trainee",
        createdAt: new Date(),
        updatedAt: new Date()
      },]);
    }
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };
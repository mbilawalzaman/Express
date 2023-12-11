const { models } = require ("./index");

module.exports = {
  createUser: async (body, userId) => {
    try {
        const user = await models.Users.create({
          userId,
            ...body
        })
        return {
            response: user,
            
        };
        

    } catch (error) {
        return {
            error: error,
        };

    }

},
  getUserByEmail: async (email) => {
    try {     
      const user = await models.Users.findOne({
        where: {
          email: email,
      }
    });
    return{
      response: user
    }
    } catch (error) {
  
      return {
        error: error
      }
    }
  },
  getAllUsers: async (offset, query) => {
    try {
      const users = await models.Users.findAll({
        // attributes : ["firstName", "lastName", "role", "email"]
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
      },
      where: [
        {
          ...(query.firstName
            ? { firstName: { [Op.substring]: query.firstName } }
            : true),
        },
        {
          ...(query.lastName
            ? { lastName: { [Op.substring]: query.lastName } }
            : true),
        },
        {
          ...(query.email
            ? { email: { [Op.substring]: query.email } }
            : true),
        },
        {
          ...(query.role ? { role: { [Op.in]: [query.role] } } : true),
        },
      ],
      offset: offset,
      limit: query.limit
    })
    return{
      response: users,
    };
      
    } catch (error) {
      return{
        error: error,
      }
    }
    },
    deleteUser: async (query) => {
      try {
        const user = await models.Users.destroy({
          where:{
            userId: query.userId,
          }
        });
        return{
          response:user
        }
      } catch (error) {
        return{
          error: error
        }
      }
      },
      updateUser: async (body) => {
      try {
        const user = await models.Users.update({
          ...body
        },{
          where: {
            userId: body.userId,
          }
        });
        return{
          response: user, 
        }
      } catch (error) {
        return{
          error: error
        }
        
      }
      },
}
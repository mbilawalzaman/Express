const {models} = require ("./index");

module.exports = {
    login: async (email) => {
      try{
        const user = await models.Users.findOne({
          where:{
            email:email,
          },attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          }
        });
        return {
            response: user,
        }
      }catch (error){
        return {
            error: error, 
      };
    }
    },
    logout: async (email) => {
      try {
        // Assuming you have a User model with a field like "isLoggedIn"
        const user = await models.Users.findOne({ where: { email } });
  
        if (user) {
          // Update the user's status to indicate they are logged out
          await models.Users.update({ getUserByEmail: false }, { where: { email } });
  
          return {
            response: `User with email ${email} is logged out`,
          };
        } else {
          return {
            error: `User with email ${email} not found`,
          };
        }
      } catch (error) {
        return {
          error: error,
        };
      }
    },
      signUp: (body) => {
        try{
          return {
              response:body,
          }
        }catch (error){
          return {
              error: error, 
        };
      }
      },
      forgotPassword: () => {
        try{
          return {
              response: "Your new password",
          }
        }catch (error){
          return {
              error: error, 
        };
      }
      },
      resetPassword: () => {
        try{
          return {
              response: "Your password is reset",
          }
        }catch (error){
          return {
              error: error, 
        };
      }
      },
}
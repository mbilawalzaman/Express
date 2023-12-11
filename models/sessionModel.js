const { response } = require("express");
const { models } = require ("./index");

module.exports = {
  createSession: async (sessionsId, userId, token) => {
    try {
        
        const session = await models.Sessions.create({
          sessionsId:sessionsId,
          userId:userId,
          token:token
        })

        return {
            response: session,           
        };
        

    } catch (error) {
        return {
            error: error,
        };

    }

},
getSession: async (userId, token) => {
    try {     
      const session = await models.Sessions.findOne({
        where: {
          userId: userId,
          token: token
      }
    });
    return{
      response: session
    }
    } catch (error) {
  
      return {
        error: error
      }
    }
  },
  deleteSession: async (userId) => {
    try {
      const user = await models.Sessions.destroy({
        where:{
            userId: userId,
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
    getSessionByUserId: async (userId) => {
        try {     
          const session = await models.Sessions.findOne({
            where: {
              userId: userId,
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
}
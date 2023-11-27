module.exports = {
    login: () => {
      try{
        
        return {
            response: "You are logged in",
        }
      }catch (error){
        return {
            error: error, 
      };
    }
    },
    logout: (body) => {
        try{
          return {
              response: "You are logged out",
          }
        }catch (error){
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
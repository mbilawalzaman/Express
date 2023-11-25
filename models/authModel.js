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
    logout: () => {
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
      signUp: () => {
        try{
          return {
              response: "You are Siggned up",
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
module.exports = {
    createUser: () => {
      try{
        return {
            response: "The user has been created, sucessfully.",
        }
      }catch (error){
        return {
            error: error, 
      };
    }
    },
    getAllUser: () => {
      try{
        return {
            response: "Get all users",
        }
      }catch (error){
        return {
            error: error, 
      };
    }
    },
    deleteUser: () => {
      try{
        return {
            response: "The user has been deleted.",
        }
      }catch (error){
        return {
            error: error, 
      };
    }
    },
    blockUser: () => {
      try{
        return{
          response: "The user has been blocked."
        }
      } catch (error){
        return{
          error: error,
        };
      }
    },
    updateUser: () => {
      try{
        return{
          response: "The user has been updated."
        }
      } catch (error){
        return{
          error: error,
        };
      }
    },
}
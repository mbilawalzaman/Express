const userService = require("../services/userService");

module.exports ={
    createUser : (req, res) => {
        try{
            const createUserResponse = userService.createUser();
            if(createUserResponse.error){
                res.send({
                    error: createUserResponse.error,
                });
            }
            res.send({
                response: createUserResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    getAllUser : (req, res) => {
        try{
            const getAllUserResponse = userService.getAllUser();
            if(getAllUserResponse.error){
                res.send({
                    error: getAllUserResponse.error,
                });
            }
            res.send({
                response: getAllUserResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    deleteUser : (req, res) => {
        try{
            const deleteUserResponse = userService.deleteUser();
            if(deleteUserResponse.error){
                res.send({
                    error: deleteUserResponse.error,
                });
            }
            res.send({
                response: deleteUserResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    blockUser : (req, res) => {
        try{
            const blockUserResponse = userService.blockUser();
            if(blockUserResponse.error){
                res.send({
                    error: blockUserResponse.error,
                });
            }
            res.send({
                response: blockUserResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    updateUser : (req, res) => {
        try{
            const updateUserResponse = userService.updateUser();
            if(updateUserResponse.error){
                res.send({
                    error: updateUserResponse.error,
                });
            }
            res.send({
                response: updateUserResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
}
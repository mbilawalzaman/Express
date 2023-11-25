const userModel = require("../models/userModel");

module.exports = {
    createUser: () => {
        try {
            const createUserResponse = userModel.createUser();
            if (createUserResponse.error){
                return {
                    error: createUserResponse.error,
                };
            }
            return {
                response: createUserResponse.response,
            };
         } catch (error){
                return {
                    error: error,
                };
            }
        },
        getAllUser: () => {
            try {
                const getAllUserResponse = userModel.getAllUser();
                if (getAllUserResponse.error){
                    return {
                        error: getAllUserResponse.error,
                    };
                }
                return {
                    response: getAllUserResponse.response,
                };
             } catch (error){
                    return {
                        error: error,
                    };
                }
            },
            deleteUser: () => {
                try {
                    const deleteUserResponse = userModel.deleteUser();
                    if (deleteUserResponse.error){
                        return {
                            error: deleteUserResponse.error,
                        };
                    }
                    return {
                        response: deleteUserResponse.response,
                    };
                 } catch (error){
                        return {
                            error: error,
                        };
                    }
                },
                blockUser: () => {
                    try {
                        const blockUserResponse = userModel.blockUser();
                        if (blockUserResponse.error){
                            return {
                                error: blockUserResponse.error,
                            };
                        }
                        return {
                            response: blockUserResponse.response,
                        };
                     } catch (error){
                            return {
                                error: error,
                            };
                        }
                    },
                    updateUser: () => {
                        try {
                            const updateUserResponse = userModel.updateUser();
                            if (updateUserResponse.error){
                                return {
                                    error: updateUserResponse.error,
                                };
                            }
                            return {
                                response: updateUserResponse.response,
                            };
                         } catch (error){
                                return {
                                    error: error,
                                };
                            }
                        },
    }
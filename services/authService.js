const authModel = require("../models/authModel");

module.exports = {
    login: () => {
        try {
            const loginResponse = authModel.login();
            if (loginResponse.error){
                return {
                    error: loginResponse.error,
                };
            }
            return {
                response: loginResponse.response,
            };
         } catch (error){
                return {
                    error: error,
                };
            }
        },
        logout:  (body) => {
            try {
                var result ;
                const num = (body.number)%2
                if (num == 0){
                    result = "even"
                    console.log("Number is even.")
                }
                else {
                    result = "odd"
                    console.log("number is odd")
                }
                const logoutResponse =  authModel.logout(body.number);
                if (logoutResponse.error){
                    return {
                        error: logoutResponse.error,
                    };
                }
                return {
                    response: logoutResponse.response,
                    val:num,
                    number:body.number,
                    result:result,

                };
             } catch (error){
                    return {
                        error: error,
                    };
                }
            },
            signUp: async(body) => {
                try {
                    // delete body.repeat_password;
                    // body.password = await bcryptjs.hash(body.password,10)
                    const signUpResponse =  authModel.signUp(body);
                    if (signUpResponse.error){
                        return {
                            error: signUpResponse.error,
                        };
                    }
                    return {
                        response: signUpResponse.response,
                    };
                 } catch (error){
                        return {
                            error: error,
                        };
                    }
                },
                forgotPassword: () => {
                    try {
                        const forgotPasswordResponse = authModel.forgotPassword();
                        if (forgotPasswordResponse.error){
                            return {
                                error: forgotPasswordResponse.error,
                            };
                        }
                        return {
                            response: forgotPasswordResponse.response,
                        };
                     } catch (error){
                            return {
                                error: error,
                            };
                        }
                    },
                    resetPassword: () => {
                        try {
                            const resetPasswordResponse = authModel.resetPassword();
                            if (resetPasswordResponse.error){
                                return {
                                    error: resetPasswordResponse.error,
                                };
                            }
                            return {
                                response: resetPasswordResponse.response,
                            };
                         } catch (error){
                                return {
                                    error: error,
                                };
                            }
                        },
    }
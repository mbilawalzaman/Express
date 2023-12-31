const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken")
const config = require("../config.json")
const bcrypt=require("bcryptjs")
const {v4: uuidV4}=require("uuid");
const sessionModel = require("../models/sessionModel");

module.exports = {
    login: async (body) => {
        try {
            const user = await authModel.login(body.email);
            if (user.error || !user.response){
                return {
                    error: "invalid credentials",
                };
            }
            const login = await bcrypt.compare(
                body.password,
                user.response.dataValues.password
            );
            if(!login){
                return{
                    error: "invalid credentials",
                };
            }
            const token = jwt.sign(user.response.dataValues, config.jwt.secret, {
                expiresIn: "1h"
            })
            const session = await sessionModel.getSessionByUserId(user.response.dataValues.userId)
            // if(session.error) {return {error: error "invalid user"}
            const userId =  user.response.dataValues.userId
            const deleteSession = await sessionModel.deleteSession(userId)
            if(deleteSession.error){
                return {
                    error: error
                }}
                delete user.response.dataValues.password;

                const sessionId = uuidV4();

                const createSession = await sessionModel.createSession(
                sessionId,
                userId,
                token)
      if(createSession.error || !createSession.response){
        return { error: 'invalid user 234'}
      }

           
            return {
                response: token,
            };
         } catch (error){
                return {
                    error: error,
                };
            }
        },
        logout:  async (body) => {
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
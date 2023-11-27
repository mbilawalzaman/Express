const authService = require("../services/authService");
const joi=require("joi");
const bcryptjs=require("bcryptjs");
const Joi = require("joi");

const loginSchema=joi.object().keys({
    email: joi.string().required().email().min(3).max(60),
    password: joi.string().required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

const signUpSchema=joi.object().keys({
email:joi.string().required().email().min(3).max(30),
password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
repeat_password: joi.ref('password')
})

module.exports ={
    login : async(req, res) => {
        try{
            const validate = await loginSchema.validateAsync(req.body);
            const loginResponse = authService.login(validate);
            if(loginResponse.error){
                res.send({
                    error: loginResponse.error,
                });
            }
            console.log(req.body)
            res.send({
                response: loginResponse.response,
                body: req.body
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    logout : (req, res) => {
        try{
            console.log(req.body)
            const logoutResponse = authService.logout(req.body);
            if(logoutResponse.error){
                res.send({
                    error: logoutResponse.error,
                });
            }
            res.send({
                response: logoutResponse.response,
                val:logoutResponse.val,
                result:logoutResponse.result,
                number:logoutResponse.number
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    signUp : async (req, res) => {
        try{
            const validate = await signUpSchema.validateAsync(req.body);
            const signUpResponse = await authService.signUp(validate);
            if(signUpResponse.error){
                res.send({
                    error: signUpResponse.error,
                });
            }
            res.send({
                response: signUpResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    forgotPassword : (req, res) => {
        try{
            const forgotPasswordResponse = authService.forgotPassword();
            if(forgotPasswordResponse.error){
                res.send({
                    error: forgotPasswordResponse.error,
                });
            }
            res.send({
                response: forgotPasswordResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
    resetPassword : (req, res) => {
        try{
            const resetPasswordResponse = authService.resetPassword();
            if(resetPasswordResponse.error){
                res.send({
                    error: resetPasswordResponse.error,
                });
            }
            res.send({
                response: resetPasswordResponse.response,
            });
        }
        catch(error){
            res.send({
                error: error,
            });
        }
    },
}
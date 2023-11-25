const authService = require("../services/authService");


module.exports ={
    login : (req, res) => {
        try{
            const loginResponse = authService.login();
            if(loginResponse.error){
                res.send({
                    error: loginResponse.error,
                });
            }
            res.send({
                response: loginResponse.response,
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
    signUp : (req, res) => {
        try{
            const signupResponse = authService.signUp();
            if(signupResponse.error){
                res.send({
                    error: signupResponse.error,
                });
            }
            res.send({
                response: signupResponse.response,
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
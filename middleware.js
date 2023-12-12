const jwt = require("jsonwebtoken");
const config = require("./config.json")
const getSession = require ("./models/sessionModel");
const sessionModel = require("./models/sessionModel");


module.exports = {
    trainee: async (req, res, next) => {
        try {
          const token = req.cookies.auth;
          if (!token || token == undefined) {
            return res.send({
              error: "unauthorized User",
            });
          }

          jwt.verify(token, config.jwt.secret, async (error, user,) => {
            if (error) {
              return res.send({
                error: error,
              });
            }
              if (user.role !== "trainee") {
              return res.send({
                error: "unauthorized User",
              });
            }
            next();
          });
        } catch (error) {
          return res.send({
            error: "unauthorized User",
          });
        }
      },
      instructor: async (req, res, next) => {
        try {
          const token = req.cookies.auth;
          if (!token || token == undefined) {
            return res.send({
              error: "unauthorized User",
            });
          }
          jwt.verify(token, config.jwt.secret, async (error, user) => {
            if (error) {
              return res.send({
                error: error,
              });
            }
            console.log(user.role);
            if (user.role !== "instructor") {
              return res.send({
                error: "unauthorized User",
              });
            }
            next();
          });
        } catch (error) {
          return res.send({
            error: "unauthorized User",
          });
        }
      },
      auth : async (req, res, next) => {
          try {
  
              const token  = req.cookies.auth;
              
              if(!token || token === undefined){
                  return res.send({
                      error:"unauthorized User",
                  });
              }
  
              jwt.verify(token, config.jwt.secret, async (error, user)=>{
  
                  if(user){
                    const session =  await sessionModel.getSessionByUserId(user.userId);
                    if(session.response){
                      return res.send({
                          error:"already signed in "
                      })
                  }
                  }

                  // if(error){
                  //     return res.send({
                  //         error:error,
                  //     });
                  // }
                  console.log("data",user);
                  next();
              });
  
          } catch (error) {
              return res.send({
                  error:"unauthorized User",
              });
            }},
logout: async (req, res, next) => {
    try {
      const token = req.cookies.auth;

      if (!token || token === undefined) {
        return res.json({ error: "Unauthorized User" });
      }

      jwt.verify(token, config.jwt.secret, async (error, user) => {
        if (error) {
          return res.json({ error: "Unauthorized User" });
        }

        // Your logout logic here, e.g., invalidate the session
        const deleteSession = await sessionModel.deleteSession(user.userId);

        if (deleteSession.error) {
          return res.json({ error: "Internal Server Error" });
        }

        return res.json({ response: "Logout successful" });
      });
    } catch (error) {
      return res.json({ error: "Internal Server Error" });
    }
  },
};

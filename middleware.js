const jwt = require("jsonwebtoken");
const config = require("./config.json")
const {getSession} = require ("./models/sessionModel")


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
      
};
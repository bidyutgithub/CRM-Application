const authJwt = require("../middlewares/authjwt")
const userController = require("../controller/user.controller")

module.exports = function (app) {
    app.get('/crm/api/users/', 
    [authJwt.verifyToken, authJwt.isAdmin],
      userController.findAll)
    //  jwt token  -> userId -> response
    app.get('/crm/api/users/:userId',
      [authJwt.verifyToken,authJwt.isAdmin],
      userController.findById
    )
    app.put('/crm/api/users/:userId',
     [authJwt.verifyToken,authJwt.isAdmin],
     userController.findById
  )
}
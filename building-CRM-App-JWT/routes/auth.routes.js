const authController = require("../controller/auth.controller")



module.exports = function(app){
    app.post('/crm/api/auth/signup', authController.signup)
    
    app.post('/crm/api/auth/signin', authController.signin)
} 
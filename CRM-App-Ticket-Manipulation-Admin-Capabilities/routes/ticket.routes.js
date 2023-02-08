const ticketController = require("../controller/ticket.controller")
const authJwt = require("../middlewares/authjwt")

module.exports = function (app) {
app.post("/crm/api/ticket/",[authJwt.verifyToken],ticketController.createTicket)
    
app.put("/crm/api/tickets/:id",[authJwt.verifyToken],ticketController.updateTicket)
}
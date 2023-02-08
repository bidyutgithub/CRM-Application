const nodemailer = require("nodemailer")



 module.exports = nodemailer.createTransport({
   service:"gmail",
   port:465,
   host:"smtp.gmail.com",
    auth : {
       user : 'bidyut.sahoo73@gmail.com',
       pass : 'bpaadtpnljzwmlgg'
       
      }
 })
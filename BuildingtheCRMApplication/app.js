const dbConfig = require('./config/db.config')
const mongoose = require("mongoose")
const authController = require("./controller/auth.controller")
const express = require('express')
const User = require('./model/user.model')
const app = express()
const bcrypt = require('bcryptjs')
const constants = require('./utils/constants')


async function init(){
    let user = await User.findOne({userId : "admin"})
       if(user){
          console.log("Admin user already present")
          return
       }
       try{
          user = await User.create({
               name: "bidyut",
               userId : "admin",
               email: "bidyut.sahoo73@gamil.com",
               userType: "ADMIN",
               password: bcrypt.hashSync("Welcome",8),
               userStatus : constants.userStatus.approved
             })
             console.log(user)
          }catch(err){
              console.log(err.message)
          }

   }

mongoose.connect(dbConfig.DB_URL)
app.use(express.json())
const db = mongoose.connection
db.on("error", ()=>console.log("can't connect to DB"))
db.once("open", () =>{
     console.log("Connected to mongo DB")
         init()})


let authRouter = require('./routes/auth.routes')
authRouter(app)



app.post('/crm/api/auth/signup',authController.signup)
app.get("/", (request,response) => response.send("hi"))

app.listen(4000, () => {
     console.log("Listening on port localhost:4000") 
})
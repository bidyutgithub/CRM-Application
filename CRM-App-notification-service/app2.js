// const cron = require("node-cron")
 // cron.schedule('*/5 * * * * *', ()=> console.log("please take care of your eyes"))

                    // //second,minute,hour, day of month, day of week

          require("./crons/cron")
    const dbConfig = require('./configs/db.configs')
    const mongoose = require("mongoose")
    const express = require('express')

    const app = express()
    app.use(express.json())

    mongoose.connect(dbConfig.DB_URL,
        () => {console.log("connected to mongo DB")},
        err => {console.log("Error:",err.message)}
    )
    require("./routes/ticketNotification.route")(app)
    
    
    app.listen(3030,() => {
        console.log("Application started on the port number 3030")
    })

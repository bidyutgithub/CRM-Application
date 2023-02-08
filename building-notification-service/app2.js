const cron = require("node-cron")


cron.schedule('*/5 * * * * *', ()=> console.log("please take care of your eyes"))

//second,minute,hour, day of month, day of week
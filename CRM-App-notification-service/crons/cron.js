const cron = require('node-cron')
const TicketNotificationModel = require("../models/ticketNotification.model")
const EmailTransporter = require("../notifier/emailService")

cron.schedule('*/10 * * * * *',async () => {
    /**
     * Seconds (optional): 0 – 59
       Minute: 0 – 59
       Hour: 0 – 23
       Day of the Month: 1 – 31
       Month: 1 – 12
       Day of the week
            */
    const notifications = await TicketNotificationModel.find({
        sentStatus:"UN_SENT"
    })

    console.log(`Count of unsent notification : ${notifications.length}`)

    notifications.forEach(notification => {
        const  mailData = {
            from: 'bidyut.sahoo73@gmail.com',
            to: notification.receipientEmails,
            subject: notification.subject,
            text: notification.content
        }
        console.log(mailData)

 EmailTransporter.sendMail(mailData, async(err,info)=>{
    console.log("in serv")
            if(err) {
                console.log(err.message)
            }else{
                console.log(info)
                const savedNotification = await TicketNotificationModel
                             .findOne({_id: notification._id })
                 savedNotification.sentStatus = "SENT"
                 await savedNotification.save()
            }
        })
        
    })
})
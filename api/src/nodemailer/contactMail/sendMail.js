const transporter = require('../transporter')

const {USER} = process.env

const emailSender = async (sender, name, message) => {
    const mailOptions = {
        replyTo: sender,
        to: USER,
        subject: `A message from ${name}`,
        text: message
    }

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error)
            return error
        }
        console.log(`Email sent ${info.response}`)
        return info.response
    })

}

module.exports = emailSender
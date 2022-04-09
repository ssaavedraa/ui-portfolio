const emailSender = require("../../nodemailer/contactMail/sendMail")

const send = async (req, res) => {

    const {sender, subject, message} = req.body

    try {
        emailSender(sender, subject, message)
            .then(res.json({
                status: 'OK',
                message: `Email sent`
            }))
            .catch(error => res.status(400).json({
                status: 'email error',
                message: error
            }))
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error
        })
    }
}

module.exports = send
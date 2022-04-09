const emailSender = require("../../nodemailer/contactMail/sendMail")

const send = async (req, res) => {

    const {sender, fullName, message, phone} = req.body

    console.log(req.body)

    try {
        emailSender(sender, fullName, message, phone)
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
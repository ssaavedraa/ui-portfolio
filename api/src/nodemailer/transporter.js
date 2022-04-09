const nodemailer = require('nodemailer')

const {USER, PASS} = process.env
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER,
        pass: PASS
    }
})

module.exports = transporter
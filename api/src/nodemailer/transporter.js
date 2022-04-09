const nodemailer = require('nodemailer')

const {USER, PASS} = process.env
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'santiagosaavedra98@gmail.com',
        pass: 'mckoxgitpnzcefzh'
    }
})

module.exports = transporter
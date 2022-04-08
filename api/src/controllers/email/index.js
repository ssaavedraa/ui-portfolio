const fs = require('fs')
const { dirname, basename } = require('path')
const path = require('path')

const bsename = path.basename(__filename)

emailControllers = {}

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const [filename] = file.split('.')
        emailControllers[filename] = require(path.join(__dirname, file))
    })

module.exports = {
    ...emailControllers
}
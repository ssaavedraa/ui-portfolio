const send = async (req, res) => {
    try {
        res.send('testing')
    } catch (error) {
        res.send('testingCatch')
    }
}

module.exports = send
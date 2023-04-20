const {v4} = require('uuid');

const createUser = async (req, res) => {


    const sessionId = req.headers.sessionid ? req.headers.sessionid : v4(undefined, undefined, undefined)
    const name = req.body.name
    res.status(201).json({sessionId: sessionId, name: name})
}

module.exports = {createUser}

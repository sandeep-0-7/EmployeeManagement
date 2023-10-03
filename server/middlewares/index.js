const ObjectId = require('mongoose').Types.ObjectId

const validateDbId = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id)) {
        res.status(404).json({
            error: 'invalid id'
        })
    }
    else
        next()
}

const raiseRecord404Error = (req, res, next) => {
    res.status(404).json({
        error: 'no employee found with given id'
    })
    // next()
}

const errorHandler = (err, req, res, next) => {
    res.status(500).json({ error: err})
    console.log(err)
}

module.exports = { validateDbId, raiseRecord404Error, errorHandler }
class ExpressError extends Error{
    constructor(message,statusCode){
        this.message = message,
        this.statusCode = statusCode
    }
}

module.exports = ExpressError


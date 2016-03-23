var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String,
    steamID: String,
    email: String,
    phone: Number,
    tradeUrl: String
})

UserSchema.pre('add', function(next) {
    if (this.isNew) {

    }

    next()
})

UserSchema.static = {
    fetch: function(cb) {
        return this
            .find({})
            .sort('')
            .exec(cb)
    },
    findById: function(id, cb) {
        return this
            .findOne({
                _id: id
            })
            .exec(cb)
    }
}

module.exprots = UserSchema

const { mongoose } = require('../db/mongoose.js');

const User = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
})

module.exports = {
    User
}
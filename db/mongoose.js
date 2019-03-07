const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oliviercrochet:lolbite999@cluster0-3n0v9.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

module.exports = {
    mongoose
}
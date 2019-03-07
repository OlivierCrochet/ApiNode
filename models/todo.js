const { mongoose } = require('../db/mongoose.js');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: String,
        default: new Date().getTime()
    }
});

module.exports = {
    Todo
}
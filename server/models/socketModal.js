const mongoose = require('mongoose');

const socketSchema = mongoose.Schema({
    userId: String,
    socketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

const socketModel = mongoose.model("Socket",socketSchema);

module.exports = socketModel;




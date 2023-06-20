const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    descp: String,
    type: String,
    name: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    file: String,
    Like: Number,
},{
    timestamps: true,
})

const postModel = mongoose.model("post",postSchema);

module.exports = postModel;


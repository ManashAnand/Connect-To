const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    college: String,
    cover: String,
    alumni: Boolean
},
{
    timestamps: true,
});

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;
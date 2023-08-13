const fs = require('fs');
const UserModel = require('../models/userModal');
const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
const registerRoute = async (req,res) => {
    try {
        const { originalname,path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path+'.'+ext;
        fs.renameSync(path,newPath);
    
          const {name,email,password,alumni,college} = req.body;
          var hashPassword = bcrypt.hashSync(password, salt);

          const postDoc = await UserModel.create({
            name,
            email,
            password: hashPassword,
            alumni,
            cover: newPath,
            college 
          });
    
    
          res.json(postDoc);
        
    } catch (error) {
        console.log(error);
    }
    
}


const loginRoute = async (req,res) => {
    try {
        const {name,password} = req.body;
        const userDoc = await UserModel.findOne({name});
        const pass = userDoc.password;

        if(bcrypt.compareSync(password, pass))
        {
            res.send(userDoc);
        }
    } catch (error) {
        console.log(error);
        console.log("Error coming from authcontroller.js")
    }
}

const profileData = async (req,res) => {
    try {
        const id = req.params.id;
        // console.log(id);
       
        const userDoc = await UserModel.findById(id);
        res.send(userDoc);
        
    } catch (error) {
        console.log(error)
    }
    // res.send(id);
}

module.exports = {registerRoute,loginRoute,profileData}
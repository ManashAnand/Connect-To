const fs = require('fs');
const postModal = require('../models/postModal');


const posthandler = async (req,res) => {
    try {
        const { originalname,path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path+'.'+ext;
        fs.renameSync(path,newPath);
    
          const {Title,descp,type,Like,name} = req.body;
            // console.log(file)
            // const author = await postModal.findById(name);
          const postDoc = await postModal.create({
            Title,
            descp,
            type,
            Like,
            file: newPath,
            name
          });
    
    
          res.json(postDoc);
        
    } catch (error) {
        console.log(error);
    }
}

const getAllPost = async (req,res) => {
    try {
        const allPost  = await postModal.find().populate('name',{password: 0}).sort({createdAt:-1});
        res.send(allPost)
    } catch (error) {
        console.log(error)
    }
}

const incLike = async (req,res) => {
    try {
        const {id,inc_or_dec} = req.body;
        // const prevPost = await postModal.findById(id);
        // var number = prevPost.Like;
        // console.log(inc_or_dec);
        if(inc_or_dec)
            number = 1;
        else number = -1;
        console.log(number);
        const post = await postModal.findByIdAndUpdate(
            id,
            { $inc: { Like: number } }, 
            { new: true } 
          )

        res.send(post);
    } catch (error) {
        res.json(error);
    }
}

module.exports = { posthandler,getAllPost,incLike }
const express = require('express');
const multer = require('multer');
const { posthandler, getAllPost, incLike } = require('../controller/postController');
const upload = multer({ dest: 'post-uploads/' })

const router = express.Router();

router.post('/create-post',upload.single('file'),posthandler);
router.get('/getAllPost',getAllPost);
router.put('/incLike',incLike)

module.exports = router; 

const express = require('express');
const multer = require('multer');
const { registerRoute, loginRoute , profileData } = require('../controller/authController');
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/register',upload.single('file'),registerRoute);
router.post('/login',loginRoute);
router.get('/profile/:id',profileData)
module.exports = router;
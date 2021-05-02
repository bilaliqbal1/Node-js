const express = require('express');

const postController = require('../controllers/post');

const router = express.Router()
const validator = require ('../validator')
router.get('/', postController.getposts)
//post keonke hamain data bhejna he or link me post ya kuch bhi add karsakhte hain .createpost 
// controllers me se araha he
router.post('/post', validator.createPostValidator, postController.createPost)


module.exports = router;

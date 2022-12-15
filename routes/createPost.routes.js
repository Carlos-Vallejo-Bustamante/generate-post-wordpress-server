const router = require('express').Router();
const CreatePost = require('../controller/createPost.controller');

router.post('/', CreatePost)

module.exports = router;

const express = require('express');
const router = express.Router();
const comment_Controller = require('./CommentController');

/**
 * GET all posts
 * url: /posts?post_id=&page=
 */
router.get('/', comment_Controller.get_all_comments);

module.exports = router;
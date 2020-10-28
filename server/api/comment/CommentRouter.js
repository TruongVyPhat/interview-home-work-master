const express = require('express');
const router = express.Router();
const comment_Controller = require('./CommentController');

/**
 * GET all comments
 * url: /comments?post_id=&page=
 */
router.get('/', comment_Controller.get_all_comments);

/**
 * GET 2 lasted comments
 * url: /comments?post_id=&page=
 */
router.get('/lasted', comment_Controller.get_lasted);

module.exports = router;
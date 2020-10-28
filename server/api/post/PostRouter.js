const express = require('express');
const router = express.Router();
const post_Controller = require('./PostControlller');

/**
 * GET all posts
 * url: /posts?page=
 */
router.get('/', post_Controller.get_all_posts);

/**
 * GET all posts
 * url: /posts/:id
 */
router.get('/:id', post_Controller.get_post);

module.exports = router;

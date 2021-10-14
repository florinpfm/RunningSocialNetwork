const { request, response } = require('express');
const express = require('express');
const router = express.Router();

// @route    POST api/posts
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Post Router pfm'));

module.exports = router;
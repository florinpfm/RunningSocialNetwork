const { request, response } = require('express');
const express = require('express');
const router = express.Router();

// @route    GET api/posts
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Post Router'));

module.exports = router;
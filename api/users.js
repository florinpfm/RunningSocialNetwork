const { request, response } = require('express');
const express = require('express');
const router = express.Router();

// @route    GET api/users
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Users Router'));

module.exports = router;
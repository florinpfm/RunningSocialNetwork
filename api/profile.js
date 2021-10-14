const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('')

// @route    GET api/profile
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Profile Router pfm'));

module.exports = router;
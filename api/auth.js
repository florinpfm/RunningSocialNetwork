const { request, response } = require('express');
const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Auth Router'));

module.exports = router;

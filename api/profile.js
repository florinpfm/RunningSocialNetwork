const { request, response } = require('express');
const express = require('express');
const router = express.Router();

// @route    GET api/profile
// @desc     Test route
// @access   Public

router.get('/', (request, response) => response.send('Test Profile Router'));

module.exports = router;
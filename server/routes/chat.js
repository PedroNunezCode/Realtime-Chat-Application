/**
 * This file handles all the router calls that have to do with chat and will
 * forward them to the controller handles in the "controllers" folder.
 */

const express = require('express');
const router = express.Router();

/**
 * Import the controllers that are needed with this route.
 */
const chatController = require('../controllers/ChatControllers');


/**
 * Assign the route to its corresponding controllers.
 */
router.get('/chat', chatController.chat);

/**
 * Export the router for our server to be able to find it.
 */
module.exports = router;
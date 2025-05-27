/**
 * Good Evening Route Handler Module
 * 
 * This module implements the secondary endpoint ("/good-evening") route handler
 * for the Express.js tutorial application. It demonstrates multiple route handling
 * capabilities and endpoint expansion patterns for application growth.
 * 
 * Features:
 * - Standardized Express.js middleware signature (req, res)
 * - Static "Good evening" response with HTTP 200 status code
 * - Modular design for integration with Express Router system
 * - Performance parity with root endpoint through static content delivery
 * 
 * Requirements Fulfilled:
 * - F-003-RQ-001: Route Registration - GET endpoint route handler implemented
 * - F-003-RQ-002: Response Content - Returns exact "Good evening" text string
 * - F-003-RQ-003: HTTP Status - Returns HTTP 200 OK status code
 * - F-003-RQ-004: Path Uniqueness - Accessible via distinct URL path
 */

/**
 * Good Evening Route Handler Function
 * 
 * Express.js middleware function that handles HTTP GET requests to the
 * "/good-evening" endpoint. Returns a static "Good evening" response
 * with HTTP 200 status code.
 * 
 * @param {Object} req - Express.js request object containing HTTP request data
 * @param {Object} res - Express.js response object for sending HTTP response
 * 
 * @returns {void} Sends HTTP response directly through res.status().send()
 * 
 * @example
 * // Usage in Express.js application:
 * const goodEveningHandler = require('./routes/goodEveningRoute');
 * app.get('/good-evening', goodEveningHandler);
 * 
 * @example
 * // Expected HTTP response:
 * // Status: 200 OK
 * // Content-Type: text/html; charset=utf-8
 * // Body: "Good evening"
 */
function goodEveningHandler(req, res) {
    // Send static "Good evening" response with HTTP 200 status code
    // Using res.status(200).send() for explicit status code specification
    // and consistent response format with other endpoints
    res.status(200).send('Good evening');
}

/**
 * Module Export
 * 
 * Exports the goodEveningHandler function using Node.js module.exports
 * pattern for dynamic import by the main Express.js application.
 * This enables modular route organization and clean separation of concerns.
 */
module.exports = goodEveningHandler;
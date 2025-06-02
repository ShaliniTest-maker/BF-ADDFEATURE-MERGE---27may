/**
 * Good Evening Route Handler Module
 * 
 * Modular route handler for the secondary endpoint ("/good-evening") that exports a standardized 
 * Express.js handler function returning "Good evening" response. This module implements the 
 * GoodEvening route handler with function signature `goodEveningHandler(req, res)` for 
 * registration with Express Router system. Demonstrates multiple route handling capabilities 
 * and endpoint expansion patterns for application growth.
 * 
 * Requirements Fulfilled:
 * - F-003-RQ-001: Route Registration - GET endpoint route handler implemented on distinct path
 * - F-003-RQ-002: Response Content - Returns exact "Good evening" text string
 * - F-003-RQ-003: HTTP Status - Returns HTTP 200 OK status code
 * - F-003-RQ-004: Path Uniqueness - Endpoint accessible via URL path different from root endpoint
 * 
 * Performance Target: Equivalent to root endpoint performance (<100ms response time) through static content delivery
 */

/**
 * Good Evening Route Handler Function
 * 
 * Standard Express.js middleware function that handles HTTP GET requests to the "/good-evening" path.
 * Returns a static "Good evening" response with HTTP 200 status code for educational 
 * demonstration of multiple endpoint Express.js routing patterns and application expansion.
 * 
 * @param {Object} req - Express.js request object containing HTTP request information
 * @param {Object} res - Express.js response object for sending HTTP response
 * @returns {void} - Sends HTTP response directly through res.status().send()
 * 
 * @example
 * // Usage in Express Router registration:
 * const goodEveningHandler = require('./routes/goodEveningRoute');
 * app.get('/good-evening', goodEveningHandler);
 */
function goodEveningHandler(req, res) {
    // Return exact "Good evening" text string with HTTP 200 OK status code
    // Using res.status(200).send() for explicit status code specification
    // Static content delivery ensures performance parity with root endpoint (<100ms response time)
    res.status(200).send('Good evening');
}

/**
 * Module Export
 * 
 * Export the goodEveningHandler function using Node.js module.exports for dynamic import 
 * by the main application. This enables modular route organization and integration 
 * with the Express Router system, following Express.js route handler patterns.
 */
module.exports = goodEveningHandler;
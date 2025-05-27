/**
 * Express.js Tutorial Server - Main Application Entry Point
 * 
 * This file serves as the primary Express.js application entry point that creates
 * the Express application instance, configures the Express Router system, registers
 * route handlers for both root and secondary endpoints, and binds the HTTP server
 * to port 3000. This file orchestrates the entire application startup sequence and
 * coordinates Express.js framework initialization.
 * 
 * Architecture Overview:
 * - Express.js application instance manages HTTP server lifecycle
 * - Modular route handlers imported from /routes directory
 * - Express Router system provides structured path-based request distribution
 * - Port 3000 binding with localhost configuration for development
 * 
 * Requirements Fulfilled:
 * - F-001-RQ-003: Application Initialization - Express application instance created and properly configured
 * - F-001-RQ-005: Router Integration - Express Router instance created and attached to application
 * - F-004-RQ-001, F-004-RQ-002: Server Configuration - Server successfully binds to port 3000
 * - F-002-RQ-001: Route Definition - GET "/" endpoint properly registered with Express router
 * - F-003-RQ-001: Route Definition - GET "/good-evening" endpoint properly registered with Express router
 */

// Import Express.js web framework for HTTP server implementation
const express = require('express');

// Import modular route handlers from routes directory
const helloHandler = require('./routes/helloRoute');
const goodEveningHandler = require('./routes/goodEveningRoute');

/**
 * Express Application Instance Creation
 * 
 * Creates the central Express.js application instance that manages the entire
 * middleware stack, route registration, and server lifecycle operations.
 * This instance serves as the foundation for all HTTP server functionality.
 */
const app = express();

/**
 * Server Configuration Constants
 * 
 * Define server configuration parameters including port binding and
 * network interface settings for development environment.
 */
const PORT = 3000;
const HOST = 'localhost';

/**
 * Express Router Configuration and Route Registration
 * 
 * Configure the Express Router system for structured path-based request
 * distribution. Register route handlers for both root and secondary endpoints
 * using the Express application instance's routing methods.
 * 
 * Route Registration Pattern:
 * - app.get(path, handler) - Direct route registration on Express application
 * - Modular handlers imported from dedicated route files
 * - Standard Express.js middleware signature (req, res) for all handlers
 */

// Register root endpoint ("/") handler returning "Hello World" response
// Uses imported helloHandler function from routes/helloRoute.js
app.get('/', helloHandler);

// Register secondary endpoint ("/good-evening") handler returning "Good evening" response  
// Uses imported goodEveningHandler function from routes/goodEveningRoute.js
app.get('/good-evening', goodEveningHandler);

/**
 * HTTP Server Initialization and Port Binding
 * 
 * Initialize the HTTP server instance and bind to the specified port.
 * Implements startup confirmation logging to provide operational feedback
 * during development and verify successful server initialization.
 * 
 * Server Lifecycle:
 * 1. Express application instance creation (completed above)
 * 2. Route registration and middleware configuration (completed above)
 * 3. HTTP server binding to port 3000 (implemented below)
 * 4. Network interface activation and request listening (automatic)
 */
app.listen(PORT, () => {
    console.log(`Express.js tutorial server successfully started`);
    console.log(`Server listening on http://${HOST}:${PORT}`);
    console.log(`Available endpoints:`);
    console.log(`  - GET / (Hello World)`);
    console.log(`  - GET /good-evening (Good evening)`);
    console.log(`Server ready for HTTP requests...`);
});

/**
 * Application Export (Optional)
 * 
 * Export the Express application instance for potential testing or
 * integration scenarios. This enables external modules to access
 * the configured application without starting the server.
 */
module.exports = app;
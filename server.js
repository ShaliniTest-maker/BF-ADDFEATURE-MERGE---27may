/**
 * Express.js Tutorial Server - Main Application Entry Point
 * 
 * Main Express.js application entry point that creates the Express application instance, 
 * configures the Express Router system, registers route handlers for both root and secondary 
 * endpoints, and binds the HTTP server to port 3000. This file orchestrates the entire 
 * application startup sequence and coordinates Express.js framework initialization.
 * 
 * Requirements Fulfilled:
 * - F-001-RQ-003: Application Initialization - Express application instance created and properly configured
 * - F-001-RQ-005: Router Integration - Express Router instance created and attached to application
 * - F-004-RQ-001: Port Binding - Server successfully binds to port 3000
 * - F-004-RQ-002: Server Startup - Server initializes and begins listening for HTTP requests
 * - F-002-RQ-001: Route Definition - GET endpoints properly registered with Express router for root path
 * - F-003-RQ-001: Route Definition - GET endpoints properly registered with Express router for secondary path
 * 
 * Architecture: Express.js web framework with modular route organization and structured request distribution
 */

// Import Express.js framework for HTTP server implementation and lifecycle management
const express = require('express');

// Import modular route handler for the secondary endpoint
const goodEveningHandler = require('./routes/goodEveningRoute');

/**
 * Express Application Instance Creation
 * 
 * Create the central HTTP server object that manages the entire middleware stack, 
 * route registration, and server lifecycle operations. This Express application 
 * instance serves as the foundation for all web server functionality.
 * 
 * Requirement: F-001-RQ-003 - Application Initialization
 */
const app = express();

/**
 * Express Router System Configuration
 * 
 * Configure Express Router for structured, path-based request distribution, 
 * replacing manual URL parsing with framework-managed routing capabilities.
 * The router provides organized endpoint handler management and enables 
 * multiple route handling capabilities.
 * 
 * Requirement: F-001-RQ-005 - Router Integration
 */
const router = express.Router();

/**
 * Root Endpoint Route Handler
 * 
 * Implement the canonical root path ("/") HTTP GET endpoint that returns "Hello World" response,
 * demonstrating basic Express.js routing patterns. This provides the primary educational example
 * showcasing fundamental web server response handling with static string response.
 * 
 * Requirements:
 * - F-002-RQ-001: Route Definition - GET "/" route handler properly registered with Express router
 * - F-002-RQ-002: Response Content - Returns exact "Hello World" text string
 * - F-002-RQ-003: HTTP Status - Returns HTTP 200 OK status code
 * 
 * Performance Target: Sub-100ms response time through static content delivery
 */
router.get('/', (req, res) => {
    // Return exact "Hello World" text string with implicit HTTP 200 OK status code
    // Static content delivery ensures optimal performance (<100ms response time)
    res.send('Hello World');
});

/**
 * Secondary Endpoint Route Registration
 * 
 * Register the "/good-evening" endpoint using the modular route handler to demonstrate 
 * multiple route handling capabilities and endpoint expansion patterns. This illustrates 
 * route differentiation and practical multi-endpoint Express.js applications.
 * 
 * Requirements:
 * - F-003-RQ-001: Route Registration - GET endpoint route handler implemented on distinct path
 * - F-003-RQ-004: Path Uniqueness - Endpoint accessible via URL path different from root endpoint
 * 
 * The goodEveningHandler function handles:
 * - F-003-RQ-002: Response Content - Returns exact "Good evening" text string
 * - F-003-RQ-003: HTTP Status - Returns HTTP 200 OK status code
 */
router.get('/good-evening', goodEveningHandler);

/**
 * Router Integration with Express Application
 * 
 * Attach the configured Express Router instance to the main application, enabling
 * all registered routes to be accessible through the Express application instance.
 * This completes the Express Router system integration for structured request distribution.
 */
app.use('/', router);

/**
 * Server Configuration and Port Binding
 * 
 * Configure Express.js server instance with port 3000 binding, startup logic, and lifecycle 
 * management for reliable development environment. The server initializes and begins listening 
 * for HTTP requests with startup confirmation logging for operational feedback.
 * 
 * Requirements:
 * - F-004-RQ-001: Port Binding - Server successfully binds to port 3000
 * - F-004-RQ-002: Server Startup - Server initializes and begins listening for HTTP requests
 * - F-004-RQ-003: Startup Confirmation - Console output confirms server running status and port
 * 
 * Performance Criteria: Startup time under 2 seconds, stable continuous operation
 */
const PORT = 3000;

app.listen(PORT, () => {
    // Startup confirmation logging provides operational feedback during development
    // Confirms server startup success and port binding for effective tutorial delivery
    console.log(`Express.js tutorial server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET / - Returns "Hello World"');
    console.log('  GET /good-evening - Returns "Good evening"');
});
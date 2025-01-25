# Backend for Business QR Code Generator

This is the backend service for the Business QR Code Generator application. It acts as a proxy server for communicating with the Google Places API to fetch business autocomplete suggestions.

## Features

- Fetches business autocomplete suggestions from the Google Places API.
- Implements a clean and structured codebase.
- Supports Cross-Origin Resource Sharing (CORS).
- Utilizes environment variables for sensitive configurati

## Tech Stack

- Frontend: React.js
- Backend: Node.js (ExpressJS) 

## Setup Instructions

To get this application up and running on your local machine, follow the steps below:

### 1. Ensure you have Node.js installed. If not, you can download it from [here](https://nodejs.org/)

### 2. Clone the repository

git clone <repository-url>
cd be

### 3. Install the dependencies

npm install

### 4. Environment Variables

Create a .env file in the root directory and add the following variables:

PORT=5000
GOOGLE_API_KEY=your_google_api_key_here

Replace your_google_api_key_here with your actual Google Places API key.

## Usage

### Start the server

To start the backend server: 
- npm start
The server will start at http://localhost:{PORT}.

### API Endpoint

GET /api/autocomplete
Fetches business autocomplete suggestions based on the input.
Query Parameters: input (string): The search term for business suggestions
Response Format:

```json
{
  "success": true,
  "message": "Autocomplete results fetched successfully",
  "data": {
    "predictions": [
      {
        "description": "Business Name, Address",
        "place_id": "unique_place_id"
      }
    ]
  }
}
```

## Scripts

Development: npm start
Starts the server with nodemon for automatic restarts during development.

Production: node index.js
Runs the server in production mode.

## Dependencies

- express: Fast, unopinionated, minimalist web framework.
- axios: Promise-based HTTP client for the browser and Node.js.
- cors: Middleware for enabling Cross-Origin Resource Sharing.

## Dev Dependencies

- nodemon: Utility that monitors for changes in the source code and automatically restarts the server.
- dotenv: Loads environment variables from a .env file
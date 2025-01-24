# Business QR Code Generator

This project is a sample full-stack application that allows users to generate customizable QR codes linking to their business's Google review page. The app fetches business details using the Google Places API and provides a user-friendly interface for customization.

## Features

### Frontend

- Search and Autocomplete: Users can search for their business by name or address using Google Places API.
- Business Confirmation: Users can confirm business details before proceeding.
- Customizable QR Codes: Users can:
- Choose from multiple pre-designed templates.
- Customize the business name and review request text.
- Preview the QR code in real-time.
- Contact Details: Users can add their contact information before downloading the QR code.

### Backend

- Acts as a proxy server to interact with the Google Places API.
- Returns results in a structured response format (success, message, and optional data).
- Supports CORS for seamless integration with the frontend.

## Usage
Please go through each folder at take a look at the descriptions and instructions of each side.

## Dependencies

Frontend
- React: Library for building the user interface.
- qrcode.react: QR code generation.
- Axios: HTTP client for API requests.
- Tailwind CSS: Styling framework.

Backend
- Express: Web framework for Node.js.
- Axios: Promise-based HTTP client.
- CORS: Middleware for cross-origin resource sharing.

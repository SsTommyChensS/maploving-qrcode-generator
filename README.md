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
Please go through each folder and take a look at the descriptions and instructions to know how to run at the local side.

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

## Live Demo

Take a look at this website: https://maploving-qrcode-generator-tommy.vercel.app/

## Notes and Thoughts

This project marks my first experience working with Google APIs, specifically the Google Places API. It was an exciting challenge to understand how to interact with such a robust API and use it effectively within a real-world application. Along the way, I learned:

- API Key Management: Ensuring security and proper setup for API keys, including hiding them in environment variables.
- Understanding Google Places API: The API provides extensive and detailed data, but structuring and filtering responses to meet the application’s specific requirements proved to be a challenge. Learning to utilize features like types and fields for focused data retrieval was particularly insightful.
- Frontend-Backend Integration: Ensuring smooth communication between the React-based frontend and the Node.js backend was both challenging and rewarding.

## Challenges Encountered

- Response Complexity: Parsing and utilizing nested JSON structures in API responses, especially for predictions and place details, required extra effort to understand.
- Limited Documentation Examples: While the official documentation is comprehensive, practical examples for specific use cases (like restricting searches to businesses) were limited, which added to the learning curve.
- Debugging: Errors like rate limiting, invalid API keys, or CORS restrictions occasionally surfaced, demanding patience and persistence to resolve.

## Potential Future Enhancements

- User Authentication: Add login and user-specific QR code management to save customization history.
- Dynamic QR Code Templates: Expand template options and allow users to upload custom designs.
- Analytics Dashboard: Provide users with data on QR code scans, including time and location details (using a tracking service or Google Analytics).
- Multi-Language Support: Enable support for international users by adding localization for different languages.
- Offline Mode: Allow users to generate QR codes offline using cached data from previous API responses.

## Summary 

While this project presented several challenges, it was an invaluable learning experience. I am excited to explore more advanced features of Google APIs and bring additional value to similar projects in the future
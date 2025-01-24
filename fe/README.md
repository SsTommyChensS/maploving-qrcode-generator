# Business QR Code Generator

This web application allows business owners to generate a custom QR code linking directly to their Google Maps review page. It also allows users to customize the business name, review request text, and download the generated QR code for use in marketing materials or customer interactions.

## Features

- Business Search: Search for businesses by name or address.
- Business Details: Select a business from search results to automatically populate the business name.
- Customizable QR Code: Customize the display name and review request text for the QR code.
- QR Code Preview: Preview the QR code with your customizations.
- Template Selector: Choose from different color templates for the QR code.
- Contact Details: Optionally add phone number and email address for contact.
- Downloadable QR Code: Download the generated QR code as a PNG file.

## Tech Stack

- Frontend: React.js
- Backend: Node.js (ExpressJS) 
- API Call: Axios for HTTP requests
- QR Code Generation: qrcode.react library
- CSS: Tailwind CSS for styling

## Installation

To get this application up and running on your local machine, follow the steps below:

### 1. Ensure you have Node.js installed. If not, you can download it from [here](https://nodejs.org/)

### 2. Clone the repository

git clone <repository-url>
cd fe

### 3. Install the dependencies

npm install

## Running the Application

The app will be available at http://localhost:5173 in your browser

## Environment Variables

The app uses environment variables to manage the base URL for the backend API. To set these up, create a .env file in the root of the project and add the following:

VITE_SERVER_BASE_URL=http://localhost:5000

Make sure to replace http://localhost:5000 with the appropriate URL for your backend server if it's different.

## Folder Structure

Here's a quick overview of the project's folder structure:

fe
│
├── public/              # Static files like index.html
├── src/                 # All source code files
│   ├── components/      # React components
│   ├── services/        # API service logic (businessService.js)
│   ├── App.js           # Main App component
│   ├── index.js         # React entry point
│   ├── App.css          # Global styles
│   └── tailwind.config.js
│
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

## Contact Details

Users are required to provide a phone number and email before downloading the QR code. This ensures that the business can be contacted if needed.

## Usage

- Search for a Business: Enter the name or address of the business in the search bar.
- Select a Business: From the search results, click on a business to automatically populate the business name.
- Customize QR Code: You can update the business display name and the review request message.
- Select a Template: Choose a color template for the QR code.
- Enter Contact Details: Add a phone number and email address (required to enable the download button).
- Download QR Code: Once everything is set, click the "Download QR Code" button to download the image.

## API Integration

This application uses the Google Places API to search for businesses. To use the API in production, you must:

- Set up a Google Cloud project and enable the Places API.
- Generate an API key and ensure it is securely stored.


## Troubleshooting

- "No businesses found": Ensure you entered a valid business name or address. If the issue persists, check the API key and server URL.
- QR Code not downloading: Make sure you've entered contact details (phone number and email) before attempting to download.
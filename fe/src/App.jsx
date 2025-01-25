import { useState } from "react";
import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import { fetchBusinessDetails } from "./services/businessService";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [qrCodeData, setQrCodeData] = useState({
    businessName: "",
    reviewText: "Please leave us a review!",
  });
  const [contact, setContact] = useState({ phone: "", email: "" });
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchBusinesses = async () => {
    try {
      setHasSearched(true);
      const fetchedBusinesses = await fetchBusinessDetails(searchTerm); // Use the service
      setBusinesses(fetchedBusinesses);
    } catch (error) {
      console.error("Error fetching business details:", error);
    }
  };

  const handleBusinessSelect = (business) => {
    setHasSearched(false);
    setSelectedBusiness(business);
    setQrCodeData({
      ...qrCodeData,
      businessName: business.description,
    });
    setBusinesses([]);
    setSearchTerm("");
  };

  const validateForm = () => {
    const { businessName, reviewText } = qrCodeData;
    const { phone, email } = contact;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
    // Validate Business Name, Review Text, Phone Number, and Email
    if (!businessName || !reviewText) return false;
    if (!phone || !email) return false; // Ensure both phone and email are filled
    if (phone && !phoneRegex.test(phone)) return false; // Validate phone format
    if (email && !emailRegex.test(email)) return false; // Validate email format

    return true;
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "business-qr-code.png";
    downloadLink.click();
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Business QR Code Generator
      </h1>

      {/* Business Search */}
      <div className="mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search for your business name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={fetchBusinesses}
          className={`w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition ${
            !searchTerm ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!searchTerm}
        >
          Search
        </button>
        {hasSearched && businesses.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No businesses found. Try a different search!</p>
        )}
        {businesses.length > 0 && (
          <ul className="border mt-4 bg-white rounded-lg shadow-md">
            {businesses.map((business) => (
              <li
                key={business.place_id}
                className="p-3 cursor-pointer hover:bg-gray-100 border-b last:border-none"
                onClick={() => handleBusinessSelect(business)}
              >
                {business.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Business Details */}
      {selectedBusiness && (
        <div className="p-4 border rounded-lg bg-white mb-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Confirm Business Details</h2>
          <p className="text-gray-600">Name: {selectedBusiness.description}</p>
        </div>
      )}

      {/* QR Code Customization */}
      <div className="space-y-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Customize QR Code</h2>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Business Display Name"
          value={qrCodeData.businessName}
          onChange={(e) =>
            setQrCodeData({ ...qrCodeData, businessName: e.target.value })
          }
          disabled={!selectedBusiness}
        />
        <textarea
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Review Request Text"
          value={qrCodeData.reviewText}
          onChange={(e) =>
            setQrCodeData({ ...qrCodeData, reviewText: e.target.value })
          }
          disabled={!selectedBusiness}
        />

        {/* QR Code Preview */}
        <div className="border p-6 bg-white rounded-lg shadow-md flex justify-center items-center">
          <QRCodeCanvas
            id="qrCodeCanvas"
            value={`https://www.google.com/maps/search/?q=${encodeURIComponent(
              qrCodeData.businessName
            )}&review=1`}
            size={200}
            fgColor={
              selectedTemplate === 1
                ? "#000000"
                : selectedTemplate === 2
                ? "#FF5722"
                : selectedTemplate === 3
                ? "#4CAF50"
                : selectedTemplate === 4
                ? "#2196F3"
                : "#9C27B0"
            }
            bgColor={
              selectedTemplate === 2
                ? "#EEEEEE"
                : selectedTemplate === 3
                ? "#F0F4C3"
                : selectedTemplate === 4
                ? "#E3F2FD"
                : selectedTemplate === 5
                ? "#F3E5F5"
                : "#FFFFFF"
            }
          />
        </div>

        {/* Template Selector */}
        <div className="flex flex-wrap space-x-3 gap-3">
          {[1, 2, 3, 4, 5].map((template) => (
            <button
              key={template}
              className={`p-2 rounded-lg border ${
                selectedTemplate === template
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              Template {template}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Enter Contact Details</h2>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Phone Number"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <input
          type="email"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Email Address"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQRCode}
        className={`w-full ${
          !validateForm()
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700 transition cursor-pointer"
        } font-medium py-3 rounded-lg`}
        disabled={!validateForm()}
      >
        Download QR Code
      </button>
    </div>
  );
};

export default App;

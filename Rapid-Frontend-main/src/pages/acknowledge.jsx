import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { CheckCircle, Mail, Loader, AlertCircle, Phone, MapPin, Calendar, Users, Truck } from "lucide-react";
import Navbar from '@/components/CommonComponents/Navbar';
import Footer from '@/components/CommonComponents/Footer';

const AcknowledgePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [emailLoading, setEmailLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success", "error", "info"
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  const quoteId = router.query.quote_id;
  const customerEmail = router.query.email || "";
  const customerName = router.query.name || "";

  // Fetch form data from API
  useEffect(() => {
    if (!router.isReady) return;

    const fetchFormData = async () => {
      if (!quoteId) {
        setError("Quote ID not found");
        setLoading(false);
        return;
      }

      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
        const response = await fetch(
          `${backendUrl}/api/form/by-quote/${quoteId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch form data: ${response.statusText}`);
        }

        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching form data:", err);
        setError(err.message || "Failed to load booking details");
        setLoading(false);
      }
    };

    fetchFormData();
  }, [router.isReady, quoteId]);

  // Auto-send email on successful data fetch
  useEffect(() => {
    if (formData && !emailSent && formData.email) {
      handleSendEmail();
    }
  }, [formData]);

  const generateEmailTemplate = () => {
    if (!formData) return "";

    const mainCar = formData.cars?.[0] || {};
    const acknowledgedAt = new Date(formData?.added_on).toLocaleString();

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Acknowledgment Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f7fa;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #003366; padding: 30px 20px; text-align: center; color: #ffffff; border-radius: 10px 10px 0 0;">
              <h1 style="font-size: 24px; font-weight: bold; margin: 0; color: #ffffff;">✓ ACKNOWLEDGMENT RECEIVED</h1>
              <p style="font-size: 14px; margin: 10px 0 0 0; opacity: 0.9;">Customer has acknowledged the booking</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <h2 style="font-size: 18px; color: #003366; margin: 0 0 20px 0;">Booking Details:</h2>
              
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0f4f8; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Quote ID</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #003366;">${formData?.quote_id || "N/A"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Customer Name</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #003366;">${formData?.username || "N/A"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Email</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #003366;">${formData?.email || "N/A"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Phone</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #003366;">${formData?.phone || "N/A"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Vehicle</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #003366;">${formData?.year || ""} ${formData?.make || ""} ${formData?.model || ""}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 20px;">
                    <p style="margin: 0; font-size: 13px; color: #666;">Acknowledged At</p>
                    <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #28a745;">${acknowledgedAt}</p>
                  </td>
                </tr>
              </table>

              <div style="background-color: #e8f5e9; border-left: 4px solid #28a745; padding: 15px 20px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 14px; color: #2e7d32; font-weight: bold;">Status: ✓ Customer has acknowledged and opened the booking page</p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #003366; color: #ffffff; text-align: center; padding: 15px; font-size: 12px; border-radius: 0 0 10px 10px;">
              <p style="margin: 5px 0;">© 2025 Rapid Auto Shipping</p>
              <p style="margin: 5px 0;">USDOT: 4320359 | MC: 1685548</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
  };

  const handleSendEmail = async () => {
    try {
      setEmailLoading(true);
      setMessage("");
      setMessageType("");

      const emailHTML = generateEmailTemplate();
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

      const response = await fetch(`${backendUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@rapidautoshipping.com", // Send to admin
          subject: `✓ Customer Acknowledged - Quote #${quoteId || "N/A"} - ${formData?.username || ""}`,
          message: emailHTML,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "✓ Acknowledgment notification sent to admin!"
        );
        setMessageType("success");
        setEmailSent(true);
      } else {
        setMessage(
          data.message || "Failed to send notification. Please try again later."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred while sending the notification. Please try again.");
      setMessageType("error");
    } finally {
      setEmailLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <Loader size={48} className="mx-auto mb-4 text-blue-600 animate-spin" />
          <p className="text-gray-600 text-lg">Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <AlertCircle size={32} />
            <h2 className="text-2xl font-bold">Error</h2>
          </div>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Quote ID: {quoteId}</p>
        </div>
      </div>
    );
  }

  const mainCar = formData?.cars?.[0] || {};
  const pickupAddress = formData?.extra_pickup_info?.[0];
  const deliveryAddress = formData?.extra_delivery_info?.[0];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 md:p-12 text-center">
          <CheckCircle size={64} className="mx-auto mb-4 text-green-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Acknowledgment Received</h1>
          <p className="text-lg opacity-90">Thank you for confirming your booking</p>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10">
          
          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              Welcome, {formData?.username || customerName || "Valued Customer"}!
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Your booking acknowledgment has been successfully recorded in our system.
              We will send you a confirmation email with all the details.
            </p>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`flex items-center gap-3 p-4 rounded-lg mb-6 border ${
                messageType === "success"
                  ? "bg-green-50 border-green-300 text-green-800"
                  : "bg-red-50 border-red-300 text-red-800"
              }`}
            >
              {messageType === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span className="font-medium text-sm md:text-base">{message}</span>
            </div>
          )}

          {/* Booking Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Confirmation Details */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-900">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Confirmation Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Confirmation ID</p>
                  <p className="font-semibold text-blue-900">{formData?.quote_id || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">✓ Acknowledged</p>
                </div>
                <div>
                  <p className="text-gray-600">Confirmed At</p>
                  <p className="font-semibold text-blue-900">{new Date(formData?.added_on).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Your Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-semibold text-blue-900">{formData?.email || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="font-semibold text-blue-900">{formData?.phone || "N/A"}</p>
                </div>
               
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-8 border border-orange-200">
            <div className="flex items-center gap-2 mb-4">
              <Truck size={24} className="text-orange-600" />
              <h3 className="text-lg font-bold text-blue-900">Vehicle Information</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Vehicle</p>
                <p className="font-semibold text-blue-900">
                  {formData?.year} {formData?.make} {formData?.model}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Vehicle Type</p>
                <p className="font-semibold text-blue-900">{formData?.vehicle_type || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Transport Method</p>
                <p className="font-semibold text-blue-900 ">{formData?.transport_method || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Pickup & Delivery Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Pickup */}
            {pickupAddress && (
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-blue-600" />
                  <h4 className="font-bold text-blue-900">Pickup Location</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong> {formData?.ship_form || "N/A"}</p>
                </div>
              </div>
            )}

            {/* Delivery */}
            {deliveryAddress && (
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-green-600" />
                  <h4 className="font-bold text-blue-900">Delivery Location</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong> {formData?.ship_to || "N/A"}</p>
                  
                </div>
              </div>
            )}
          </div>

         
         

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Check your email for booking confirmation</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Review all booking details carefully</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Prepare your vehicle according to guidelines</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Await driver assignment notification</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Driver will contact you 4-24 hours before pickup</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-blue-50 border-t border-blue-200 p-6 md:p-8 text-center">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Need Assistance?</h3>
          <p className="text-gray-600 mb-4">Our team is ready to help you</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <a
              href="tel:+18332334447"
              className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg border border-orange-300 hover:bg-orange-50 transition-colors"
            >
              <Phone size={20} className="text-orange-600" />
              <span className="font-semibold text-blue-900">(833) 233-4447</span>
            </a>
            
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-900 text-white p-6 text-center text-sm">
          <p className="mb-2">© 2025 Rapid Auto Shipping. All Rights Reserved.</p>
          <p>USDOT: 4320359 | MC: 1685548</p>
        </div>
      </div>
    </div>
     <Footer />
    </>
  );
};

export default AcknowledgePage;
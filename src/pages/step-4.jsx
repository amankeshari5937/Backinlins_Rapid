"use client"; // Ensure this is at the top for Next.js client-side features

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlinePhone } from "react-icons/md";
import DynamicStepper from "@/components/CommonComponents/Stepper";

// Helper function to initialize contact info with primaryContact when contactOption is "contactMe"
const getInitialContactInfo = (
  defaultContactOption = "contactMe",
  primaryContact = {}
) => ({
  address: "",
  addressType: {
    residential: true,
    business: false,
    businessType: "",
    vin_number: "",
    your_buyer: "",
    booking_id: "",
    company_name: "",
  },
  personName:
    defaultContactOption === "contactMe" ? primaryContact.name || "" : "",
  contactNumber:
    defaultContactOption === "contactMe" ? primaryContact.number || "" : "",
  email: defaultContactOption === "contactMe" ? primaryContact.email || "" : "",
  instruction: "",
  contactOption: defaultContactOption, // Ensure default is "contactMe"
});

export default function PickupForm() {
  const router = useRouter();
  const { quote_id } = router.query;
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [primaryContact, setPrimaryContact] = useState({});
  const [pickupInfo, setPickupInfo] = useState(
    getInitialContactInfo("contactMe", {})
  );
  const [deliveryInfo, setDeliveryInfo] = useState(
    getInitialContactInfo("contactMe", {})
  );
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resize textarea based on content
  function resizeInput(e) {
    const input = e.target;
    const lineHeight = 24;
    const minHeight = 48;
    const lines = input.value.split("\n").length;
    const contentHeight = Math.max(lines * lineHeight, minHeight);
    input.style.height = `${contentHeight}px`;
  }

  // Parse address into city, state, and zip
  const parseAddress = (address) => {
    if (!address) return { city: "", state: "", zip: "" };
    const parts = address.split(",");
    if (parts.length < 2) return { city: address.trim(), state: "", zip: "" };
    const city = parts[0].trim();
    const stateZip = parts[1].trim().split(" ");
    const state = stateZip[0];
    const zip = stateZip.length > 1 ? stateZip[1] : "";
    return { city, state, zip };
  };

  // Calculate transit time based on distance
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

  // Fetch form data and initialize state
  useEffect(() => {
    const fetchFormData = async () => {
      if (!quote_id) return;
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quote_id}`
        );
        if (!response.ok)
          throw new Error(`Failed to fetch data: ${response.status}`);
        const data = await response.json();
        setFormData(data);

        // Set primary contact
        const newPrimaryContact = {
          name: data.username || "",
          number: data.phone || "",
          email: data.email || "",
        };
        setPrimaryContact(newPrimaryContact);

        // Update pickup info
        if (data.extra_pickup_info && data.extra_pickup_info.length > 0) {
          const pickup = data.extra_pickup_info[0];
          setPickupInfo({
            address: pickup.address || "",
            addressType: {
              residential: pickup.address_type?.type === "residential" || true,
              business: pickup.address_type?.type === "business" || false,
              businessType: pickup.address_type?.businessType || "",
              vin_number: pickup.address_type?.vin_number || "",
              your_buyer: pickup.address_type?.your_buyer || "",
              booking_id: pickup.address_type?.booking_id || "",
              company_name: pickup.address_type?.company_name || "",
            },
            personName:
              pickup.contactOption === "contactMe"
                ? newPrimaryContact.name
                : pickup.person_name || "",
            contactNumber:
              pickup.contactOption === "contactMe"
                ? newPrimaryContact.number
                : pickup.contact_number || "",
            email:
              pickup.contactOption === "contactMe"
                ? newPrimaryContact.email
                : pickup.email || "",
            instruction: pickup.instruction || "",
            contactOption: pickup.contactOption || "contactMe",
          });
        } else {
          setPickupInfo({
            ...getInitialContactInfo("contactMe", newPrimaryContact),
            personName: newPrimaryContact.name || "",
            contactNumber: newPrimaryContact.number || "",
            email: newPrimaryContact.email || "",
          });
        }

        // Update delivery info
        if (data.extra_delivery_info && data.extra_delivery_info.length > 0) {
          const delivery = data.extra_delivery_info[0];
          setDeliveryInfo({
            address: delivery.address || "",
            addressType: {
              residential:
                delivery.address_type?.type === "residential" || true,
              business: delivery.address_type?.type === "business" || false,
              businessType: delivery.address_type?.businessType || "",
              vin_number: delivery.address_type?.vin_number || "",
              your_buyer: delivery.address_type?.your_buyer || "",
              booking_id: delivery.address_type?.booking_id || "",
              company_name: delivery.address_type?.company_name || "",
            },
            personName:
              delivery.contactOption === "contactMe"
                ? newPrimaryContact.name
                : delivery.person_name || "",
            contactNumber:
              delivery.contactOption === "contactMe"
                ? newPrimaryContact.number
                : delivery.contact_number || "",
            email:
              delivery.contactOption === "contactMe"
                ? newPrimaryContact.email
                : delivery.email || "",
            instruction: delivery.instruction || "",
            contactOption: delivery.contactOption || "contactMe",
          });
        } else {
          setDeliveryInfo({
            ...getInitialContactInfo("contactMe", newPrimaryContact),
            personName: newPrimaryContact.name || "",
            contactNumber: newPrimaryContact.number || "",
            email: newPrimaryContact.email || "",
          });
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [quote_id]);

  // Update pickupInfo and deliveryInfo when primaryContact changes
  useEffect(() => {
    setPickupInfo((prev) => ({
      ...prev,
      personName:
        prev.contactOption === "contactMe"
          ? primaryContact.name || ""
          : prev.personName,
      contactNumber:
        prev.contactOption === "contactMe"
          ? primaryContact.number || ""
          : prev.contactNumber,
      email:
        prev.contactOption === "contactMe"
          ? primaryContact.email || ""
          : prev.email,
    }));
    setDeliveryInfo((prev) => ({
      ...prev,
      personName:
        prev.contactOption === "contactMe"
          ? primaryContact.name || ""
          : prev.personName,
      contactNumber:
        prev.contactOption === "contactMe"
          ? primaryContact.number || ""
          : prev.contactNumber,
      email:
        prev.contactOption === "contactMe"
          ? primaryContact.email || ""
          : prev.email,
    }));
  }, [primaryContact]);

  // Pre-fetch the next page (/confirmation)
  useEffect(() => {
    if (quote_id) {
      router.prefetch(`/confirmation?quote_id=${quote_id}`);
    }
  }, [quote_id, router]);

  // Handle input changes
  const handleInputChange = (e, setInfo) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle address type changes
  const handleAddressTypeChange = (e, setInfo) => {
    const { name, checked, value } = e.target;
    setInfo((prev) => {
      const newAddressType = { ...prev.addressType };
      if (name === "residential") {
        newAddressType.residential = checked;
        newAddressType.business = !checked;
        if (!checked && !newAddressType.business)
          newAddressType.residential = true;
      } else if (name === "business") {
        newAddressType.business = checked;
        newAddressType.residential = !checked;
        if (!checked && !newAddressType.residential)
          newAddressType.business = true;
        if (!checked) {
          newAddressType.businessType = "";
          newAddressType.vin_number = "";
          newAddressType.your_buyer = "";
          newAddressType.booking_id = "";
          newAddressType.company_name = "";
        }
      } else {
        newAddressType[name] = value;
      }
      return { ...prev, addressType: newAddressType };
    });
  };

  // Handle radio button changes
  const handleRadioChange = (e, setInfo) => {
    const value = e.target.value;
    setInfo((prev) => ({
      ...prev,
      contactOption: value,
      personName: value === "contactMe" ? primaryContact.name || "" : "",
      contactNumber: value === "contactMe" ? primaryContact.number || "" : "",
      email: value === "contactMe" ? primaryContact.email || "" : "",
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    if (!pickupInfo.address || !deliveryInfo.address) {
      setError("Pickup and delivery addresses are required.");
      return false;
    }
    if (pickupInfo.contactOption === "someoneElse" && !pickupInfo.personName) {
      setError("Pickup person name is required.");
      return false;
    }
    if (
      deliveryInfo.contactOption === "someoneElse" &&
      !deliveryInfo.personName
    ) {
      setError("Delivery person name is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pickupInfo.email && !emailRegex.test(pickupInfo.email)) {
      setError("Invalid pickup email address.");
      return false;
    }
    if (deliveryInfo.email && !emailRegex.test(deliveryInfo.email)) {
      setError("Invalid delivery email address.");
      return false;
    }
    if (
      pickupInfo.addressType.business &&
      !pickupInfo.addressType.businessType
    ) {
      setError("Please select a business type for pickup.");
      return false;
    }
    if (
      deliveryInfo.addressType.business &&
      !deliveryInfo.addressType.businessType
    ) {
      setError("Please select a business type for delivery.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const pickupAddressType = {
      type: pickupInfo.addressType.residential ? "residential" : "business",
      ...(pickupInfo.addressType.business && {
        businessType: pickupInfo.addressType.businessType,
        vin_number: pickupInfo.addressType.vin_number,
        your_buyer: pickupInfo.addressType.your_buyer,
        booking_id: pickupInfo.addressType.booking_id,
        company_name: pickupInfo.addressType.company_name,
      }),
    };

    const updatedPickupInfo = [
      {
        address: pickupInfo.address,
        address_type: pickupAddressType,
        person_name: pickupInfo.personName,
        contact_number: pickupInfo.contactNumber,
        email: pickupInfo.email,
        instruction: pickupInfo.instruction,
        contactOption: pickupInfo.contactOption,
      },
    ];

    const deliveryAddressType = {
      type: deliveryInfo.addressType.residential ? "residential" : "business",
      ...(deliveryInfo.addressType.business && {
        businessType: deliveryInfo.addressType.businessType,
        vin_number: deliveryInfo.addressType.vin_number,
        your_buyer: deliveryInfo.addressType.your_buyer,
        booking_id: deliveryInfo.addressType.booking_id,
        company_name: deliveryInfo.addressType.company_name,
      }),
    };

    const updatedDeliveryInfo = [
      {
        address: deliveryInfo.address,
        address_type: deliveryAddressType,
        person_name: deliveryInfo.personName,
        contact_number: deliveryInfo.contactNumber,
        email: deliveryInfo.email,
        instruction: deliveryInfo.instruction,
        contactOption: deliveryInfo.contactOption,
      },
    ];

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/${formData?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        extra_pickup_info: updatedPickupInfo,
        extra_delivery_info: updatedDeliveryInfo,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              response.status === 404
                ? "Quote not found."
                : `Failed to update form: ${response.status} - ${text}`
            );
          });
        }
        console.log("Form updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating form:", error);
        setError(error.message);
      })
      .finally(() => setIsSubmitting(false));

    router.push(`/step-5?quote_id=${quote_id}`);
  };

  // Parse addresses for display
  const pickupAddressParts = parseAddress(formData?.ship_form);
  const deliveryAddressParts = parseAddress(formData?.ship_to);

  if (loading) return <div>Loading...</div>;
  if (error && !isSubmitting) return <div>Error: {error}</div>;

  return (
    <div
      className="container flex flex-col justify-center mx-auto"
      style={{
        background:
          "linear-gradient(0deg, rgba(255,212,198,1) 0%, rgba(253,253,253,1) 76%)",
      }}
    >
      <div className="container">
        <div className="container mx-auto py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/rapidautoshipping-logo.webp"
              alt="Logo"
              className="h-8 md:h-14 w-auto"
            />
          </div>
          <button className="bg-white border-2 font-[600] border-rapidcolor text-rapidcolor flex items-center gap-3 px-1 md:px-3 xl:px-5 py-3 rounded-full hover:bg-rapidcolor hover:text-white text-sm xl:text-lg">
            <MdOutlinePhone className="text-xl xl:text-4xl text-green-500" />
            <span className="text-sm xl:text-2xl"> (833) 233-4447</span>
          </button>
        </div>
      </div>

      <DynamicStepper
        status={2} // Step 2 (Pickup & Delivery)
        steps={[
          { title: "Reservation" },
          { title: "Pickup & Delivery" },
          { title: "Confirmation" },
        ]}
      />

      {/* Main Content */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-[95%] sm:w-[90%] gap-4 p-2 sm:p-4 mx-auto font-sans"
      >
        {/* Left Section: Pickup and Delivery Forms */}
        <div className="flex-1 border border-gray-700 bg-white rounded-lg">
          {/* Pickup Information */}
          <div className="w-full bg-white rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 sm:p-6">
              <h1 className="text-white text-xl sm:text-2xl font-bold">
                Pickup Information
              </h1>
            </div>

            <div className="p-3 sm:p-6">
              <div className="mb-4">
                <label
                  htmlFor="pickup-address"
                  className="block text-gray-700 font-bold mb-2 text-xl sm:text-3xl"
                >
                  Pickup Address
                </label>
                <input
                  type="text"
                  id="pickup-address"
                  name="address"
                  placeholder="Street Address"
                  value={pickupInfo.address}
                  onChange={(e) => handleInputChange(e, setPickupInfo)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 mb-3"
                />
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <input
                    type="text"
                    id="pickup-city"
                    placeholder="City"
                    value={pickupAddressParts.city}
                    readOnly
                    className="flex-1 min-w-[100px] px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                  <input
                    type="text"
                    id="pickup-state"
                    placeholder="State"
                    value={pickupAddressParts.state}
                    readOnly
                    className="w-20 sm:flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                  <input
                    type="text"
                    id="pickup-zip"
                    placeholder="Zip Code"
                    value={pickupAddressParts.zip}
                    readOnly
                    className="w-24 sm:flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Shipping Type
                  </h2>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        name="residential"
                        checked={pickupInfo.addressType.residential}
                        onChange={(e) =>
                          handleAddressTypeChange(e, setPickupInfo)
                        }
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                      />
                      <span className="ml-2 text-sm sm:text-base text-gray-700">
                        Residential Shipping
                      </span>
                    </label>
                    <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        name="business"
                        checked={pickupInfo.addressType.business}
                        onChange={(e) =>
                          handleAddressTypeChange(e, setPickupInfo)
                        }
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                      />
                      <span className="ml-2 text-sm sm:text-base text-gray-700">
                        Business Shipping
                      </span>
                    </label>
                  </div>
                </div>
                {pickupInfo.addressType.business && (
                  <div className="mt-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={pickupInfo.addressType.businessType}
                      onChange={(e) =>
                        handleAddressTypeChange(e, setPickupInfo)
                      }
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                    >
                      <option value="">Select Business Type</option>
                      <option value="dealership">Dealership</option>
                      <option value="auction">Auction</option>
                      <option value="usport">US Port</option>
                      <option value="other_buisness">Other Business</option>
                    </select>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      {pickupInfo.addressType.businessType !==
                        "other_buisness" && (
                        <>
                          <div className="w-full sm:w-1/2">
                            <label className="block text-gray-700 font-semibold mb-2 mt-4 text-base sm:text-lg">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company_name"
                              placeholder="Company Name"
                              value={pickupInfo.addressType.company_name || ""}
                              onChange={(e) =>
                                handleAddressTypeChange(e, setPickupInfo)
                              }
                              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                            />
                          </div>
                          {pickupInfo.addressType.businessType !== "usport" && (
                            <div className="w-full sm:w-1/2">
                              <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                                VIN Number
                              </label>
                              <input
                                type="text"
                                name="vin_number"
                                placeholder="VIN Number"
                                value={pickupInfo.addressType.vin_number || ""}
                                onChange={(e) =>
                                  handleAddressTypeChange(e, setPickupInfo)
                                }
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                              />
                            </div>
                          )}
                        </>
                      )}
                      {pickupInfo.addressType.businessType === "auction" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Your Buyer No{" "}
                            <span className="text-[10px] sm:text-[12px] font-[200]">
                              (Optional)
                            </span>
                          </label>
                          <input
                            type="text"
                            name="your_buyer"
                            placeholder="Your Buyer"
                            value={pickupInfo.addressType.your_buyer || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setPickupInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                      {pickupInfo.addressType.businessType === "usport" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Booking ID
                          </label>
                          <input
                            type="text"
                            name="booking_id"
                            placeholder="Booking ID"
                            value={pickupInfo.addressType.booking_id || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setPickupInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                      {pickupInfo.addressType.businessType ===
                        "other_buisness" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company Name"
                            value={pickupInfo.addressType.company_name || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setPickupInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-lg sm:text-xl">
                  Pickup Person
                </label>
                <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="pickupContact"
                      value="contactMe"
                      checked={pickupInfo.contactOption === "contactMe"}
                      onChange={(e) => handleRadioChange(e, setPickupInfo)}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-base sm:text-xl">
                      Contact Me
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="pickupContact"
                      value="someoneElse"
                      checked={pickupInfo.contactOption === "someoneElse"}
                      onChange={(e) => handleRadioChange(e, setPickupInfo)}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-base sm:text-xl">
                      Someone Else
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="mb-4 w-full sm:w-1/2">
                  <label
                    htmlFor="pickup-full-name"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Contact Person Full Name
                  </label>
                  <input
                    type="text"
                    id="pickup-full-name"
                    name="personName"
                    placeholder="Contact Person Full Name"
                    value={pickupInfo.personName}
                    onChange={(e) => handleInputChange(e, setPickupInfo)}
                    disabled={pickupInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
                <div className="mb-4 w-full sm:w-1/2">
                  <label
                    htmlFor="pickup-contact"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="pickup-contact"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={pickupInfo.contactNumber}
                    onChange={(e) => handleInputChange(e, setPickupInfo)}
                    disabled={pickupInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="mb-4 w-full sm:w-1/3">
                  <label
                    htmlFor="pickup-email"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="pickup-email"
                    name="email"
                    placeholder="E-Mail Address"
                    value={pickupInfo.email}
                    onChange={(e) => handleInputChange(e, setPickupInfo)}
                    disabled={pickupInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
                <div className="mb-4 w-full sm:w-2/3">
                  <label
                    htmlFor="pickup-special-instructions"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Special Instruction For Pick Up (Optional)
                  </label>
                  <textarea
                    id="pickup-special-instructions"
                    name="instruction"
                    placeholder="If Any"
                    value={pickupInfo.instruction}
                    onChange={(e) => handleInputChange(e, setPickupInfo)}
                    onInput={resizeInput}
                    rows="1"
                    className="w-full h-12 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="w-full bg-white rounded-lg overflow-hidden mt-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 sm:p-6">
              <h1 className="text-white text-xl sm:text-2xl font-bold">
                Delivery Information
              </h1>
            </div>

            <div className="p-3 sm:p-6">
              <div className="mb-4">
                <label
                  htmlFor="delivery-address"
                  className="block text-gray-700 font-bold mb-2 text-xl sm:text-3xl"
                >
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="delivery-address"
                  name="address"
                  placeholder="Street Address"
                  value={deliveryInfo.address}
                  onChange={(e) => handleInputChange(e, setDeliveryInfo)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 mb-3"
                />
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <input
                    type="text"
                    id="delivery-city"
                    placeholder="City"
                    value={deliveryAddressParts.city}
                    readOnly
                    className="flex-1 min-w-[100px] px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                  <input
                    type="text"
                    id="delivery-state"
                    placeholder="State"
                    value={deliveryAddressParts.state}
                    readOnly
                    className="w-20 sm:flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                  <input
                    type="text"
                    id="delivery-zip"
                    placeholder="Zip Code"
                    value={deliveryAddressParts.zip}
                    readOnly
                    className="w-24 sm:flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Shipping Type
                  </h2>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        name="residential"
                        checked={deliveryInfo.addressType.residential}
                        onChange={(e) =>
                          handleAddressTypeChange(e, setDeliveryInfo)
                        }
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                      />
                      <span className="ml-2 text-sm sm:text-base text-gray-700">
                        Residential Shipping
                      </span>
                    </label>
                    <label className="flex items-center p-2 sm:p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                      <input
                        type="checkbox"
                        name="business"
                        checked={deliveryInfo.addressType.business}
                        onChange={(e) =>
                          handleAddressTypeChange(e, setDeliveryInfo)
                        }
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                      />
                      <span className="ml-2 text-sm sm:text-base text-gray-700">
                        Business Shipping
                      </span>
                    </label>
                  </div>
                </div>
                {deliveryInfo.addressType.business && (
                  <div className="mt-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={deliveryInfo.addressType.businessType}
                      onChange={(e) =>
                        handleAddressTypeChange(e, setDeliveryInfo)
                      }
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                    >
                      <option value="">Select Business Type</option>
                      <option value="dealership">Dealership</option>
                      <option value="usport">US Port</option>
                      <option value="other_buisness">Other Business</option>
                    </select>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      {deliveryInfo.addressType.businessType ===
                        "dealership" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company Name"
                            value={deliveryInfo.addressType.company_name || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setDeliveryInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                      {deliveryInfo.addressType.businessType === "usport" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Port Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Port Name"
                            value={deliveryInfo.addressType.company_name || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setDeliveryInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                      {deliveryInfo.addressType.businessType ===
                        "other_buisness" && (
                        <div className="w-full sm:w-1/2">
                          <label className="block text-gray-700 font-semibold mb-2 mt-2 sm:mt-4 text-base sm:text-lg">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company Name"
                            value={deliveryInfo.addressType.company_name || ""}
                            onChange={(e) =>
                              handleAddressTypeChange(e, setDeliveryInfo)
                            }
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-lg sm:text-xl">
                  Delivery Person
                </label>
                <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="deliveryContact"
                      value="contactMe"
                      checked={deliveryInfo.contactOption === "contactMe"}
                      onChange={(e) => handleRadioChange(e, setDeliveryInfo)}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-base sm:text-xl">
                      Contact Me
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="deliveryContact"
                      value="someoneElse"
                      checked={deliveryInfo.contactOption === "someoneElse"}
                      onChange={(e) => handleRadioChange(e, setDeliveryInfo)}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700 text-base sm:text-xl">
                      Someone Else
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="mb-4 w-full sm:w-1/2">
                  <label
                    htmlFor="delivery-full-name"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Contact Person Full Name
                  </label>
                  <input
                    type="text"
                    id="delivery-full-name"
                    name="personName"
                    placeholder="Contact Person Full Name"
                    value={deliveryInfo.personName}
                    onChange={(e) => handleInputChange(e, setDeliveryInfo)}
                    disabled={deliveryInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
                <div className="mb-4 w-full sm:w-1/2">
                  <label
                    htmlFor="delivery-contact"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="delivery-contact"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={deliveryInfo.contactNumber}
                    onChange={(e) => handleInputChange(e, setDeliveryInfo)}
                    disabled={deliveryInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-5">
                <div className="mb-4 w-full sm:w-1/3">
                  <label
                    htmlFor="delivery-email"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="delivery-email"
                    name="email"
                    placeholder="E-Mail Address"
                    value={deliveryInfo.email}
                    onChange={(e) => handleInputChange(e, setDeliveryInfo)}
                    disabled={deliveryInfo.contactOption === "contactMe"}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 disabled:bg-gray-100"
                  />
                </div>
                <div className="mb-4 w-full sm:w-2/3">
                  <label
                    htmlFor="delivery-special-instructions"
                    className="block text-gray-700 font-semibold mb-2 text-base sm:text-lg"
                  >
                    Special Instruction For Delivery (Optional)
                  </label>
                  <textarea
                    id="delivery-special-instructions"
                    name="instruction"
                    placeholder="If Any"
                    value={deliveryInfo.instruction}
                    onChange={(e) => handleInputChange(e, setDeliveryInfo)}
                    onInput={resizeInput}
                    rows="1"
                    className="w-full h-12 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 resize-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 sm:py-3 px-4 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Information"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="w-full md:w-72 bg-white space-y-2 md:ml-4">
          <div className="md:sticky md:top-4 space-y-2">
            <div className="border border-gray-700 rounded-lg p-4">
              <h2 className="text-2xl text-[#535353] font-semibold mb-2">
                Reservation Details
              </h2>
              <div className="h-[10px] w-[50%] bg-[#d9d9d9] mb-1"></div>
              <div className="text-4xl font-bold">
                <span className="text-rapidcolor text-6xl">$</span>
                <span className="text-5xl">0</span>
                <span className="text-3xl font-normal text-gray-600">
                  /Due Now
                </span>
              </div>
            </div>
            <div className="border border-gray-700 rounded-lg px-4 py-2">
              <h2 className="text-xl text-black font-semibold mb-2">
                Total Shipping Price
              </h2>
              <div className="font-bold">
                <span className="text-green-500 text-3xl">$</span>
                <span className="text-3xl">{formData.price + formData?.insurance_price}.00</span>
              </div>
            </div>
            <div className="border border-gray-700 rounded-lg flex justify-center items-center bg-red-50 p-2">
              <h2 className="text-2xl text-center font-semibold mb-2">
                Overview of the Quote
              </h2>
            </div>
            <div className="border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Route Details</h2>
              </div>
              {loading ? (
                <p className="text-gray-600">Loading...</p>
              ) : (
                <>
                  {/* Quote ID */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">Quote ID</span>
                    </div>
                    <p className="ml-7">
                      {formData?.quote_id || quote_id || "1234567890"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* From */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">From</span>
                    </div>
                    <p className="ml-7">
                      {formData?.ship_form || "Los Angeles, CA"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* To */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">To</span>
                    </div>
                    <p className="ml-7">
                      {formData?.ship_to || "Philadelphia, PA"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* First Pick up Date */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">
                        First Pick up Date
                      </span>
                    </div>
                    <p className="ml-7">{formData?.pickup_date || "1 May"}</p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* Vehicle */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          d="M1.5 13.5h21v3h-21zm2-8h17v2h-17z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 10.5H4.5v2h-3v7h3v2h15v-2h3v-7h-3v-2H17"
                        />
                        <circle cx="7.5" cy="16.5" r="1.5" />
                        <circle cx="16.5" cy="16.5" r="1.5" />
                      </svg>
                      <span className="text-gray-600 text-lg">Vehicle</span>
                    </div>
                    <p className="ml-7">
                      {formData
                        ? `${formData.year || ""} ${formData.make || ""} ${
                            formData.model || ""
                          }`.trim()
                        : "Mercedes 2000 C class"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* Transit Time */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">
                        Transit Time
                      </span>
                    </div>
                    <p className="ml-7">
                      {calculateTransitTime(formData?.distance)}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* Transport Type */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">
                        Transport Type
                      </span>
                    </div>
                    <p className="ml-7">
                      {formData?.transport_method || "Open"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* Vehicle Condition */}
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                      <span className="text-gray-600 text-lg">
                        Vehicle Condition
                      </span>
                    </div>
                    <p className="ml-7">
                      {formData?.vehicle_type || "Running"}
                    </p>
                    <hr className="mt-2 border-gray-200" />
                  </div>
                  {/* Price (if available) */}
                  {formData?.price && (
                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <svg
                          className="w-5 h-5 mr-2 text-gray-500"
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
                        <span className="text-gray-600 text-lg">Price</span>
                      </div>
                      <p className="ml-7">${formData.price + formData?.insurance_price}</p>
                      <hr className="mt-2 border-gray-200" />
                    </div>
                  )}
                  {/* FMCSA Information */}
                  <div className="flex items-center mt-6">
                    <div className="w-20 h-20 mr-2">
                      <img src="/images/US_DOT_Triskelion.png" alt="FMCSA" />
                    </div>
                    <div className="text-[#003e7e] font-bold">
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
      </form>
    </div>
  );
}

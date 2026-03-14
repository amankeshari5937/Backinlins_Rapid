import axios from "axios";
import Head from "next/head";
import Navbar from "@/components/CommonComponents/Navbar";
import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Calendar,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { MdOutlinePhone } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import Footer from "@/components/CommonComponents/Footer";
import { useLoadScript } from "@react-google-maps/api";
import TestimonialSwiper from "@/components/Home/swipper";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";
import { useRouter } from "next/router";

function Calculator() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    ship_form: "",
    ship_to: "",
    transport_method: "open",
    year: "",
    make: "",
    model: "",
    sourceUrl: "",
    vehicle_type: "running",
    distance: "",
    status: "",
    note: "",
    note_time: "",
    price: "",
    pickup_id: "",
    pickup_date: new Date().toISOString().split("T")[0],
    extra_pickup_info: [
      {
        address: "",
        person_name: "",
        contact_number: "",
        email: "",
        instruction: "",
      },
    ],
    extra_delivery_info: [
      {
        address: "",
        person_name: "",
        contact_number: "",
        email: "",
        instruction: "",
      },
    ],
  });

  const [errors, setErrors] = useState({});
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    libraries: ["places"],
  });

  const shipFromRef = useRef(null);
  const shipToRef = useRef(null);

  // Fetch makes from API
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/make`,
        );
        const data = await response.json();
        setMakes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    };
    fetchMakes();
  }, []);

  // Fetch models when make changes
  useEffect(() => {
    if (formData.make) {
      const selectedMake = makes.find((make) => make.make === formData.make);
      if (selectedMake) {
        fetchModels(selectedMake.id);
      } else {
        setModels([]);
      }
    } else {
      setModels([]);
    }
  }, [formData.make, makes]);

  const fetchModels = async (makeId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/model?make_id=${makeId}`,
      );
      const data = await response.json();
      setModels(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching models:", error);
      setModels([]);
    }
  };

  // Google Maps Autocomplete
  useEffect(() => {
    if (!isLoaded) return;

    const autocompleteFields = [
      { ref: shipFromRef, field: "ship_form", setPlace: setOriginPlace },
      { ref: shipToRef, field: "ship_to", setPlace: setDestinationPlace },
    ];

    autocompleteFields.forEach(({ ref, field, setPlace }) => {
      if (ref.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          ref.current,
          { types: ["geocode"] },
        );
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          setPlace(place);
          if (place.formatted_address) {
            setFormData((prev) => ({
              ...prev,
              [field]: place.formatted_address,
            }));
            setErrors((prev) => ({ ...prev, [field]: "" }));
          }
        });
      }
    });
  }, [isLoaded, currentStep]);

  // Calculate Distance using Routes API
  useEffect(() => {
    if (isLoaded && originPlace?.geometry && destinationPlace?.geometry) {
      calculateDistance();
    }
  }, [originPlace, destinationPlace, isLoaded]);

  const calculateDistance = async () => {
    const originLat = originPlace.geometry.location.lat();
    const originLng = originPlace.geometry.location.lng();
    const destLat = destinationPlace.geometry.location.lat();
    const destLng = destinationPlace.geometry.location.lng();

    const routesUrl =
      "https://routes.googleapis.com/directions/v2:computeRoutes";

    try {
      const response = await fetch(routesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
          "X-Goog-FieldMask": "routes.duration,routes.distanceMeters",
        },
        body: JSON.stringify({
          origin: {
            location: {
              latLng: {
                latitude: originLat,
                longitude: originLng,
              },
            },
          },
          destination: {
            location: {
              latLng: {
                latitude: destLat,
                longitude: destLng,
              },
            },
          },
          travelMode: "DRIVE",
        }),
      });

      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const distanceMiles = (route.distanceMeters / 1609.34).toFixed(2);
        setFormData((prev) => ({
          ...prev,
          distance: `${distanceMiles} miles`,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          distance: "No route found",
        }));
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
      setFormData((prev) => ({
        ...prev,
        distance: "Error calculating distance",
      }));
    }
  };

  // Phone number formatting
  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, "");
    if (numbers.length > 10) numbers = numbers.slice(0, 10);
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
    )}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formattedNumber = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedNumber }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.ship_form)
      newErrors.ship_form = "Pickup location is required";
    if (!formData.ship_to) newErrors.ship_to = "Delivery location is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.make) newErrors.make = "Make is required";
    if (!formData.model) newErrors.model = "Model is required";
    if (!formData.pickup_date)
      newErrors.pickup_date = "Pickup date is required";
    if (!formData.transport_method)
      newErrors.transport_method = "Transport method is required";
    if (!formData.vehicle_type)
      newErrors.vehicle_type = "Vehicle type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (formData.phone.replace(/\D/g, "").length !== 10)
      newErrors.phone = "Phone number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("Please fill all required fields correctly.");
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) {
      alert("Please fill all required fields correctly.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form`,
        { ...formData, sourceUrl: window.location.href },
      );
      console.log("Form submitted successfully:", response);
      router.push("/get_qoute");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>
          Auto Shipping Calculator | Rapid Auto Shipping – Free Quote
        </title>
        <meta
          name="title"
          content="Auto Shipping Calculator | Rapid Auto Shipping – Free Quote"
        />
        <meta
          name="description"
          content="Calculate your car shipping cost instantly with Rapid Auto Shipping's free calculator. Get accurate vehicle transportation rates in seconds!"
        />
        <link rel="canonical" href="/calculator" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Navbar />
      <div
        className="bg-gray-100 flex flex-col justify-center items-center p-0 md:p-4 relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1742817079/calculator/auto-transport-calculator.webp')",
          backgroundSize: "100% 200%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 w-full flex flex-col lg:flex-row gap-8 p-2 md:p-6">
          <div className="w-full lg:w-[60%] space-y-6">
            <div className="bg-[#e3e2e2] rounded-2xl px-4 py-4">
              {/* Step Indicator */}
              <div className="flex justify-center items-center mb-6 gap-4">
                <div
                  className={`flex items-center ${
                    currentStep === 1 ? "text-rapidcolor" : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep === 1
                        ? "bg-rapidcolor text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    1
                  </div>
                  <span className="ml-2 font-semibold">Vehicle Details</span>
                </div>
                <div className="w-16 h-1 bg-gray-300"></div>
                <div
                  className={`flex items-center ${
                    currentStep === 2 ? "text-rapidcolor" : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep === 2
                        ? "bg-rapidcolor text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    2
                  </div>
                  <span className="ml-2 font-semibold">Contact Info</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center mb-6">
                {currentStep === 1
                  ? "Enter Vehicle & Shipping Details"
                  : "For your Customized Quote"}
              </h1>

              <form className="space-y-2" onSubmit={handleSubmit}>
                {/* STEP 1: Vehicle & Shipping Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    {/* Start Location & Finish Location */}
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        Shipping Locations
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="w-full">
                          <label
                            htmlFor="ship_form"
                            className="block text-gray-700 text-xs mb-1"
                          >
                            Pickup Location *
                          </label>
                          <div className="relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                            <MapPin size={20} className="text-red-400 mr-2" />
                            <input
                              id="ship_form"
                              ref={shipFromRef}
                              name="ship_form"
                              value={formData.ship_form}
                              onChange={handleChange}
                              placeholder="Pickup Zip Code"
                              className={`w-full text-gray-700 placeholder-gray-600 bg-transparent focus:outline-none ${
                                errors.ship_form ? "border-red-500" : ""
                              }`}
                            />
                          </div>
                          {errors.ship_form && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.ship_form}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="ship_to"
                            className="block text-gray-700 text-xs mb-1"
                          >
                            Delivery Location *
                          </label>
                          <div className="relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                            <MapPin size={20} className="text-red-400 mr-2" />
                            <input
                              id="ship_to"
                              ref={shipToRef}
                              name="ship_to"
                              value={formData.ship_to}
                              onChange={handleChange}
                              placeholder="Delivery Zip Code"
                              className={`w-full text-gray-700 placeholder-gray-600 bg-transparent focus:outline-none ${
                                errors.ship_to ? "border-red-500" : ""
                              }`}
                            />
                          </div>
                          {errors.ship_to && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.ship_to}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="pickup_date"
                            className="block text-gray-700 text-xs mb-1"
                          >
                            Pickup Date *
                          </label>
                          <div className="relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                            <Calendar size={20} className="text-red-400 mr-2" />
                            <input
                              id="pickup_date"
                              name="pickup_date"
                              type="date"
                              min={new Date().toISOString().split("T")[0]}
                              value={formData.pickup_date}
                              onChange={handleChange}
                              className={`w-full text-gray-700 bg-transparent focus:outline-none ${
                                errors.pickup_date ? "border-red-500" : ""
                              }`}
                            />
                          </div>
                          {errors.pickup_date && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.pickup_date}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        Vehicle Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="w-full relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                          <ChevronDown
                            size={20}
                            className="text-gray-500 mr-2"
                          />
                          <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className={`w-full text-gray-700 bg-transparent focus:outline-none appearance-none ${
                              errors.year ? "border-red-500" : ""
                            }`}
                          >
                            <option value="" disabled hidden>
                              Year of the Vehicle *
                            </option>
                            {Array.from(
                              { length: currentYear - 1900 + 2 }, // +2 to include next year
                              (_, i) => currentYear + 1 - i, // start from next year and go backward
                            ).map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                          {errors.year && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.year}
                            </p>
                          )}
                        </div>

                        <div className="w-full relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                          <ChevronDown
                            size={20}
                            className="text-gray-500 mr-2"
                          />
                          <select
                            id="make"
                            name="make"
                            value={formData.make}
                            onChange={handleChange}
                            className={`w-full text-gray-700 bg-transparent focus:outline-none appearance-none ${
                              errors.make ? "border-red-500" : ""
                            }`}
                          >
                            <option value="" disabled hidden>
                              Select Make *
                            </option>
                            {makes.map((make) => (
                              <option key={make.id} value={make.make}>
                                {make.make}
                              </option>
                            ))}
                          </select>
                          {errors.make && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.make}
                            </p>
                          )}
                        </div>

                        <div className="w-full relative flex items-center bg-white rounded-[15px] border border-gray-300 px-4 py-4">
                          <ChevronDown
                            size={20}
                            className="text-gray-500 mr-2"
                          />
                          <select
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            disabled={!formData.make}
                            className={`w-full text-gray-700 bg-transparent focus:outline-none appearance-none ${
                              errors.model ? "border-red-500" : ""
                            }`}
                          >
                            <option value="" disabled hidden>
                              Select Model *
                            </option>
                            {models.map((model) => (
                              <option key={model.id} value={model.model}>
                                {model.model}
                              </option>
                            ))}
                          </select>
                          {errors.model && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.model}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Status & Transport Method */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl">
                          Vehicle Status *
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4">
                          {["Running", "Not Running"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center justify-between bg-white p-2 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-rapidcolor hover:bg-blue-50"
                            >
                              <span className="text-lg font-semibold text-black">
                                {option}
                              </span>
                              <input
                                type="radio"
                                name="vehicle_type"
                                value={option.toLowerCase().replace(" ", "-")}
                                checked={
                                  formData.vehicle_type ===
                                  option.toLowerCase().replace(" ", "-")
                                }
                                onChange={handleChange}
                                className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 bg-gray-200 checked:bg-orange-500 checked:border-orange-500 ml-2"
                              />
                            </label>
                          ))}
                        </div>
                        {errors.vehicle_type && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.vehicle_type}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl">
                          Transport Method *
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4">
                          {["Open", "Enclosed"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center justify-between bg-white p-2 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-rapidcolor hover:bg-blue-50"
                            >
                              <span className="text-lg font-semibold text-black">
                                {option}
                              </span>
                              <input
                                type="radio"
                                name="transport_method"
                                value={option.toLowerCase()}
                                checked={
                                  formData.transport_method ===
                                  option.toLowerCase()
                                }
                                onChange={handleChange}
                                className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 bg-gray-200 checked:bg-orange-500 checked:border-orange-500 ml-2"
                              />
                            </label>
                          ))}
                        </div>
                        {errors.transport_method && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.transport_method}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <div className="w-full md:w-[60%] group mx-auto">
                        <div className="bg-rapidcolor hover:bg-blue-700 shadow-3d h-auto flex flex-col justify-center items-center rounded-2xl transition-all">
                          <button
                            type="button"
                            onClick={handleNext}
                            className="text-white px-4 py-4 text-[1.3rem] font-semibold w-full"
                          >
                            <div className="justify-center items-center flex">
                              Final Step
                              <ArrowRight className="ml-2" size={24} />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-gray-700 text-sm mb-2 font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Enter Your Full Name"
                          className={`w-full px-4 py-4 rounded-[15px] border text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rapidcolor ${
                            errors.username
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.username && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.username}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-sm mb-2 font-medium"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email Address"
                          className={`w-full px-4 py-4 rounded-[15px] border text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rapidcolor ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 text-sm mb-2 font-medium"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(XXX) XXX-XXXX"
                          className={`w-full px-4 py-4 rounded-[15px] border text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rapidcolor ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                      <div className="w-full md:w-[25%] group">
                        <div className="bg-gray-300 hover:bg-gray-400 shadow-3d h-auto flex flex-col justify-center items-center rounded-2xl transition-all">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="text-gray-700 px-4 py-4 text-[1.3rem] font-semibold w-full"
                          >
                            <div className="justify-center items-center flex">
                              <ArrowLeft className="mr-2" size={24} />
                              Previous
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="w-full md:w-[65%] group">
                        <div className="bg-rapidcolor hover:bg-green-600 shadow-3d h-auto flex flex-col justify-center items-center rounded-2xl transition-all">
                          <button
                            type="submit"
                            className="text-white px-4 py-4 text-[1.3rem] font-semibold w-full"
                          >
                            <div className="justify-center items-center flex">
                              Calculate Shipping Cost
                              <FaAnglesRight className="ml-2" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col justify-end space-y-4">
            <div className="w-full rounded-2xl text-center bg-transparent py-6">
              <h3 className="text-2xl font-bold text-white">
                Proudly <span className="text-rapidcolor">American-Owned</span>{" "}
                Transport Company
              </h3>
              <p className="text-xl my-3 text-white">
                Get Accurate Shipping Cost, Not Just A Quote OR CALL
              </p>
              <p className="text-2xl flex justify-center items-center">
                <MdOutlinePhone className="text-4xl text-green-500" />
                <span className="font-bold ml-2 text-white">
                  +1 (833) 233-4447
                </span>
              </p>
            </div>
            <div className="flex flex-row pb-28 justify-center items-end gap-4">
              <div className="w-[fit-content] p-4 rounded-xl flex flex-col bg-white justify-center gap-4">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742818340/icons/BBB-A-Rating.webp"
                  className="w-60"
                  alt="Clutch"
                />
              </div>
              <div className="w-[fit-content] p-3 rounded-xl flex flex-col bg-white justify-center shadow-3d gap-4">
                <img
                  src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742818528/icons/google-review.webp"
                  className="w-60"
                  alt="Google Review badge for reliable auto transportation "
                />
              </div>
            </div>
            <div className="flex justify-end items-end w-full">
              <div className="self-end flex justify-end items-center w-full gap-5">
                <div className="w-28">
                  <img
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742818711/icons/us-dot.png"
                    className="w-full h-full"
                    alt="US DOT certification for trusted auto transportation services"
                  />
                </div>
                <div className="text-white text-xl">
                  MC #: 1685548
                  <br /> U.S.DOT #: 4320359
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSwiper />
      <Key_banner />
      <Footer />
    </>
  );
}

export default Calculator;

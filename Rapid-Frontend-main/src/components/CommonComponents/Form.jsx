import React, { useEffect, useState, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { FaCheck, FaCarSide, FaTruck } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
import axios from "axios";

const TransportForm = () => {
  const [step, setStep] = useState(1);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [isCustomMake, setIsCustomMake] = useState(false);
  const [isCustomModel, setIsCustomModel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
  const shipFromRef = useRef(null);
  const shipToRef = useRef(null);
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const router = useRouter();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places"],
  });

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
    sourceUrl: "https://rapidautoshipping.com/",
    vehicle_type: "running",
    distance: "",
    status: "",
    note: "",
    note_time: "",
    price: "",
    pickup_id: "",
    pickup_date: "",
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

  const allowedMakes = [
    "Acura",
    "Alfa Romeo",
    "AM General",
    "American Motors (AMC)",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Daewoo",
    "Daihatsu",
    "Datsun",
    "Dodge",
    "Eagle",
    "Ferrari",
    "FIAT",
    "Fisker",
    "Ford",
    "Freightliner",
    "Genesis",
    "Geo",
    "GMC",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Karma",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lordstown",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Mercury",
    "Merkur",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Oldsmobile",
    "Peugeot",
    "Plymouth",
    "Polestar",
    "Pontiac",
    "Porsche",
    "Ram",
    "Renault",
    "Rivian",
    "Rolls-Royce",
    "Saab",
    "Saturn",
    "Scion",
    "Skoda",
    "Smart",
    "Sterling",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "VinFast",
    "Volkswagen",
    "Volvo",
    "Yugo",
    "boat/yacht",
    "RV",
    "ATV",
    "Truck",
    "Tractor",
    "Rimac",
    "Bugatti",
    "Koenigsegg",
    "Shelby",
    "Lucid",
    "Pagani",
  ];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/make`
        );
        const data = await response.json();
        setMakes(Array.isArray(data) ? [...data] : []);
      } catch (error) {
        console.error("Error fetching makes:", error);
        setMakes([{ id: "other", make: "Other" }]);
      }
    };
    fetchMakes();
  }, []);

  useEffect(() => {
    if (formData.make && !isCustomMake && formData.make !== "Other") {
      const selectedMake = makes.find((make) => make.make === formData.make);
      if (selectedMake) fetchModels(selectedMake.id);
      else setModels([{ id: "other", model: "Other" }]);
    } else {
      setModels([{ id: "other", model: "Other" }]);
    }
  }, [formData.make, makes, isCustomMake]);

  const fetchModels = async (makeId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/model?make_id=${makeId}`
      );
      const data = await response.json();
      setModels(
        Array.isArray(data)
          ? [{ id: "other", model: "Other" }, ...data]
          : [{ id: "other", model: "Other" }]
      );
    } catch (error) {
      console.error("Error fetching models:", error);
      setModels([{ id: "other", model: "Other" }]);
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const originAutocomplete = new window.google.maps.places.Autocomplete(
      shipFromRef.current,
      { types: ["geocode"] }
    );
    originAutocomplete.addListener("place_changed", () => {
      const place = originAutocomplete.getPlace();
      setOriginPlace(place);
      setFormData((prevData) => ({
        ...prevData,
        ship_form: place.formatted_address || shipFromRef.current.value,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, ship_form: "" }));
    });

    const destinationAutocomplete = new window.google.maps.places.Autocomplete(
      shipToRef.current,
      { types: ["geocode"] }
    );
    destinationAutocomplete.addListener("place_changed", () => {
      const place = destinationAutocomplete.getPlace();
      setDestinationPlace(place);
      setFormData((prevData) => ({
        ...prevData,
        ship_to: place.formatted_address || shipToRef.current.value,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, ship_to: "" }));
    });
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && originPlace && destinationPlace) {
      calculateDistance();
    }
  }, [originPlace, destinationPlace, isLoaded]);

  const calculateDistance = async () => {
    if (!originPlace?.geometry || !destinationPlace?.geometry) {
      console.error("Invalid origin or destination geometry.");
      return;
    }

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
            location: { latLng: { latitude: originLat, longitude: originLng } },
          },
          destination: {
            location: { latLng: { latitude: destLat, longitude: destLng } },
          },
          travelMode: "DRIVE",
        }),
      });

      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        const distanceMiles = (route.distanceMeters / 1609.34).toFixed(2);
        setFormData((prevData) => ({
          ...prevData,
          distance: `${distanceMiles} miles`,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          distance: "No route found",
        }));
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
      setFormData((prevData) => ({
        ...prevData,
        distance: "Error calculating distance",
      }));
    }
  };

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, "");
    if (numbers.length > 10) numbers = numbers.slice(0, 10);
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6
    )}`;
  };

  const handleNChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, [e.target.name]: formattedNumber });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    // Validate phone has 10 digits before submitting
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must be 10 digits",
      }));
      return;
    }

    setIsSubmitting(true); // Set loading state

    const dataToSubmit = { ...formData, sourceUrl: window.location.href };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form`,
        dataToSubmit
      );
      console.log("Form submitted successfully:", response);
      router.push("/get_qoute");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
      setIsSubmitting(false); // Reset loading state on error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "make") {
      const isOtherSelected = value === "Other";
      setIsCustomMake(isOtherSelected);
      setFormData((prev) => ({
        ...prev,
        make: isOtherSelected ? "" : value,
        model: "", // Reset model when make changes
      }));
      setIsCustomModel(false); // Reset model input state
    } else if (name === "model") {
      const isOtherSelected = value === "Other";
      setIsCustomModel(isOtherSelected);
      setFormData((prev) => ({ ...prev, model: isOtherSelected ? "" : value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleNextStep = () => {
    let isValid = false;
    if (step === 1) isValid = validateStep1();
    else if (step === 2) isValid = validateStep2();
    else if (step === 3) isValid = validateStep3();
    if (isValid) setStep(step + 1);
  };

  const validateStep1 = () => {
    const { ship_form, ship_to, transport_method } = formData;
    const newErrors = {};
    if (!ship_form) newErrors.ship_form = "Pickup location is required";
    if (!ship_to) newErrors.ship_to = "Delivery location is required";
    if (!transport_method)
      newErrors.transport_method = "Transport method is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const { year, make, model, vehicle_type } = formData;
    const newErrors = {};
    if (!year) newErrors.year = "Year is required";
    if (!make) newErrors.make = "Make is required";
    if (!model) newErrors.model = "Model is required";
    if (!vehicle_type) newErrors.vehicle_type = "Vehicle type is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const { username, email, pickup_date, phone } = formData;
    const newErrors = {};
    if (!username) newErrors.username = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!pickup_date) newErrors.pickup_date = "Pickup date is required";
    if (!phone) {
      newErrors.phone = "Phone is required";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length !== 10) {
        newErrors.phone = "Phone must be 10 digits";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToStep = (stepNumber) => {
    if (stepNumber < step) {
      setStep(stepNumber);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-3d rounded-xl py-4 px-6 space-y-6 lg:max-w-md w-full ml-auto md:mr-3"
      method="post"
    >
      <div className="text-center text-xl font-bold">
        Get a free
        <span className="text-rapidcolor font-bold"> Instant Quote</span>
      </div>

      {step === 1 && (
        <>
          <div>
            <div className="relative">
              <input
                id="ship_form"
                type="text"
                name="ship_form"
                className={`w-full  px-4 py-5 border-2 ${
                  errors.ship_form ? "border-red-500" : "border-rapidcolor"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor peer text-xl text-gray-700`}
                value={formData.ship_form}
                onChange={handleChange}
                ref={shipFromRef}
                placeholder=""
              />
              <label
                htmlFor="ship_form"
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 pointer-events-none ${
                  formData.ship_form ? "hidden" : "peer-placeholder-shown:block"
                } peer-focus:hidden`}
              >
                <span className="text-gray-700 font-bold text-md lg:text-xl">
                  Pickup From
                </span>{" "}
                <span className="text-gray-500 text-xs lg:text-lg">
                  (ZIP or City, State)
                </span>
              </label>
              {errors.ship_form && (
                <p className="text-red-500 text-sm mt-1">{errors.ship_form}</p>
              )}
            </div>
          </div>
          <div className="relative">
            <input
              id="ship_to"
              type="text"
              name="ship_to"
              placeholder=""
              className={`mt-1 w-full px-4 py-5 border-2 ${
                errors.ship_to ? "border-red-500" : "border-rapidcolor"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor text-xl text-gray-700 peer`}
              value={formData.ship_to}
              onChange={handleChange}
              ref={shipToRef}
            />
            <label
              htmlFor="ship_to"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 pointer-events-none ${
                formData.ship_to ? "hidden" : "peer-placeholder-shown:block"
              } peer-focus:hidden`}
            >
              <span className="text-gray-700 font-bold text-md lg:text-xl">
                Delivery To
              </span>{" "}
              <span className="text-gray-500 text-xs lg:text-lg">
                (ZIP or City, State)
              </span>
            </label>
            {errors.ship_to && (
              <p className="text-red-500 text-sm mt-1">{errors.ship_to}</p>
            )}
          </div>

          <div className="md:flex hidden flex-col md:flex-row items-center gap-2">
            <span className="text-base text-gray-700 font-bold whitespace-nowrap">
              Transport Method:
            </span>
            <div className="flex items-center space-x-4">
              <label className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="transport_method"
                  value="open"
                  className="hidden peer"
                  onChange={handleChange}
                  checked={formData.transport_method === "open"}
                />
                <span className="w-28 h-12 px-6 py-2 bg-white border-2 border-rapidcolor rounded-lg text-gray-400 cursor-pointer ml-1 peer-checked:bg-rapidcolor peer-checked:text-white peer-checked:border-rapidcolor transition flex items-center justify-center relative font-bold">
                  Open
                  <span className="absolute left-3 w-3 h-3 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-white"></span>
                </span>
              </label>
              <label className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="transport_method"
                  value="enclosed"
                  className="hidden peer"
                  onChange={handleChange}
                  checked={formData.transport_method === "enclosed"}
                />
                <span className="w-28 h-12 pl-8 pr-6 py-2 bg-white border-2 border-rapidcolor rounded-lg text-gray-400 cursor-pointer peer-checked:bg-rapidcolor peer-checked:text-white peer-checked:border-rapidcolor transition flex items-center justify-center relative font-bold">
                  Enclosed
                  <span className="absolute left-1 ml-1 w-3 h-3 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-white"></span>
                </span>
              </label>
            </div>
            {errors.transport_method && (
              <p className="text-red-500 text-sm mt-1">
                {errors.transport_method}
              </p>
            )}
          </div>

          <div className="flex w-full md:w-[50%] ml-auto justify-end items-center space-x-4 md:hidden">
            <label
              htmlFor="transport_method"
              className="text-base text-gray-700 font-bold"
            >
              Transport Method:
            </label>
            <select
              id="transport_method"
              name="transport_method"
              className="w-full md:w-32 h-12 py-2 bg-white border-2 text-lg px-4 border-rapidcolor"
              value={formData.transport_method}
              onChange={handleChange}
            >
              <option value="open">Open</option>
              <option value="enclosed">Enclosed</option>
            </select>
            {errors.transport_method && (
              <p className="text-red-500 text-sm mt-1">
                {errors.transport_method}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNextStep}
            className="w-full bg-rapidcolor text-white py-3 rounded-3xl hover:bg-rapidcolor transition duration-200 text-xl"
          >
            <b>Vehicle Details </b>
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex gap-4">
            <div className="w-1/2 relative">
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-5 border ${
                  errors.year ? "border-red-500" : "border-gray-500"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor appearance-none text-gray-700 bg-white`}
              >
                <option value="">Year</option>
                {Array.from(
                  { length: currentYear - 1900 + 2 }, // +2 instead of +1 to include next year
                  (_, i) => 1900 + i
                )
                  .reverse()
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>

              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                <IoIosArrowDropdown className="w-5 h-5" />
              </span>
              {errors.year && (
                <p className="text-red-500 text-sm mt-1">{errors.year}</p>
              )}
            </div>
            <div className="w-1/2 relative">
              {formData.make && !allowedMakes.includes(formData.make) ? (
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="Enter Make"
                  className={`mt-1 w-full px-4 py-5 border ${
                    errors.make ? "border-red-500" : "border-gray-500"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor text-gray-700`}
                />
              ) : (
                <select
                  name="make"
                  value={
                    makes.some((make) => make.make === formData.make)
                      ? formData.make
                      : ""
                  }
                  onChange={handleChange}
                  className={`mt-1 w-full px-4 py-5 border ${
                    errors.make ? "border-red-500" : "border-gray-500"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor appearance-none text-gray-700 bg-white`}
                >
                  <option value="">Select Make</option>
                  <option value=" ">Other Make</option>
                  {makes.map((make) => (
                    <option key={make.id} value={make.make}>
                      {make.make}
                    </option>
                  ))}
                </select>
              )}
              {!isCustomMake && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                  <IoIosArrowDropdown className="w-5 h-5" />
                </span>
              )}
              {errors.make && (
                <p className="text-red-500 text-sm mt-1">{errors.make}</p>
              )}
            </div>
          </div>

          <div className="relative">
            {formData.model || !allowedMakes.includes(formData.make) ? (
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Enter Model"
                className={`mt-1 w-full px-4 py-5 border ${
                  errors.model ? "border-red-500" : "border-gray-500"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor text-gray-700`}
              />
            ) : (
              <select
                name="model"
                value={
                  models.some((model) => model.model === formData.model)
                    ? formData.model
                    : ""
                }
                onChange={handleChange}
                disabled={!formData.make || isCustomMake}
                className={`mt-1 w-full px-4 py-5 border ${
                  errors.model ? "border-red-500" : "border-gray-500"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor appearance-none text-gray-700 bg-white ${
                  !formData.make || isCustomMake
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <option value="">Select Model</option>
                <option value=" ">Other Model</option>
                {[...models]
                  .sort((a, b) => a.model.localeCompare(b.model))
                  .map((model) => (
                    <option key={model.id} value={model.model}>
                      {model.model}
                    </option>
                  ))}
              </select>
            )}

            {!isCustomModel && !isCustomMake && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                <IoIosArrowDropdown className="w-5 h-5" />
              </span>
            )}
            {errors.model && (
              <p className="text-red-500 text-sm mt-1">{errors.model}</p>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-base text-gray-500 whitespace-nowrap">
              Vehicle Type:
            </span>
            <div className="hidden md:flex flex-wrap md:flex-nowrap items-center space-x-2 md:space-x-6 gap-2 md:gap-0">
              <label className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="vehicle_type"
                  value="running"
                  className="hidden peer"
                  onChange={(e) =>
                    setFormData({ ...formData, vehicle_type: e.target.value })
                  }
                  checked={formData.vehicle_type === "running"}
                />
                <span className="w-30 h-12 px-8 py-2 bg-white border border-rapidcolor rounded-lg text-gray-700 cursor-pointer peer-checked:bg-rapidcolor peer-checked:text-white peer-checked:border-rapidcolor transition flex items-center justify-center relative">
                  Running
                  <span className="absolute left-3 w-3 h-3 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-white"></span>
                </span>
              </label>
              <label className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="vehicle_type"
                  value="non-running"
                  className="hidden peer"
                  onChange={(e) =>
                    setFormData({ ...formData, vehicle_type: e.target.value })
                  }
                  checked={formData.vehicle_type === "non-running"}
                />
                <span className="w-36 h-12 pl-6 py-2 bg-white border border-rapidcolor rounded-lg text-gray-700 cursor-pointer peer-checked:bg-rapidcolor peer-checked:text-white peer-checked:border-rapidcolor transition flex items-center justify-center relative">
                  Not Running
                  <span className="absolute left-5 w-3 h-3 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-white"></span>
                </span>
              </label>
            </div>
            <div className="flex md:hidden items-center w-full">
              <label className="relative flex items-center justify-center w-full">
                <select
                  name="vehicle_type"
                  onChange={(e) =>
                    setFormData({ ...formData, vehicle_type: e.target.value })
                  }
                  value={formData.vehicle_type}
                  className="w-full h-12 py-2 bg-white border-2 text-lg px-4 border-rapidcolor appearance-none rounded-lg text-gray-700 cursor-pointer"
                >
                  <option value="running">Running</option>
                  <option value="non-running">Not Running</option>
                </select>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl">
                  <IoIosArrowDropdown />
                </span>
              </label>
            </div>
            {errors.vehicle_type && (
              <p className="text-red-500 text-sm mt-1">{errors.vehicle_type}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNextStep}
            className="w-full bg-rapidcolor text-lg text-white py-3 rounded-3xl hover:bg-orange-600 transition duration-200 mt-4"
          >
            Last Step
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div className="relative">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Name"
              className={`mt-1 w-full px-4 py-5 border ${
                errors.username ? "border-red-500" : "border-gray-500"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor`}
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className={`mt-1 w-full px-4 py-5 border ${
                errors.email ? "border-red-500" : "border-gray-500"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 relative">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleNChange}
                className={`mt-1 w-full px-4 py-5 border ${
                  errors.phone ? "border-red-500" : "border-gray-500"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="w-1/2 relative">
              <label
                htmlFor="pickup_date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pickup Date
              </label>
              <input
                id="pickup_date"
                type="date"
                name="pickup_date"
                min={new Date().toISOString().split("T")[0]} // This prevents past dates
                className={`mt-1 w-full px-4 py-5 border ${
                  errors.pickup_date ? "border-red-500" : "border-gray-500"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-rapidcolor focus:border-rapidcolor`}
                value={formData.pickup_date}
                onChange={(e) =>
                  setFormData({ ...formData, pickup_date: e.target.value })
                }
                required
              />
              {errors.pickup_date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickup_date}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-lg text-white py-3 rounded-3xl transition duration-200 mt-4 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rapidcolor hover:bg-orange-600"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              "Get Free Quote »"
            )}
          </button>
        </>
      )}

      {step > 1 && (
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="absolute top-4 left-0 w-full flex justify-between items-center px-12">
              <div
                className={`w-2/5 h-0.5 border-t-4 ${
                  step > 1 ? "border-green-500" : "border-gray-400"
                } border-dashed transition-all duration-500`}
                style={{ marginLeft: "40px", marginRight: "20px" }}
              />
              <div
                className={`w-2/5 h-0.5 border-t-4 ${
                  step > 2 ? "border-green-500" : "border-gray-400"
                } border-dashed transition-all duration-500`}
                style={{ marginLeft: "60px", marginRight: "20px" }}
              />
            </div>

            <div className="flex justify-between w-full relative z-10">
              <div className="flex flex-col items-center">
                <div
                  onClick={() => goToStep(1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    step >= 1
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-500 cursor-pointer"
                  } transition-all duration-300`}
                >
                  {step > 1 ? (
                    <FaCheck className="w-5 h-5" />
                  ) : (
                    <span className="text-sm text-gray-500">1</span>
                  )}
                </div>
                <span className="text-xs text-gray-600 mt-1">Destination</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  onClick={() => goToStep(2)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    step >= 2
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-500 cursor-pointer"
                  } transition-all duration-300`}
                >
                  {step > 2 ? (
                    <FaCheck className="w-5 h-5" />
                  ) : (
                    <FaCarSide className="text-gray-500 w-4 h-4" />
                  )}
                </div>
                <span className="text-xs text-gray-600 mt-1">Vehicle</span>
              </div>

              <div className="flex flex-col items-center">
                <div
                  onClick={() => goToStep(3)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    step >= 3
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-gray-500 cursor-pointer"
                  } transition-all duration-300`}
                >
                  {step >= 3 ? (
                    <FaCheck className="w-5 h-5" />
                  ) : (
                    <FaTruck className="text-gray-500 w-4 h-4" />
                  )}
                </div>
                <span className="text-xs text-gray-600 mt-1">Date</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default TransportForm;
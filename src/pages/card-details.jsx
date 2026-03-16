"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CardForm = () => {
  const router = useRouter();
  const { quote_id, username, email, ship_form, ship_to, pickup_date } =
    router.query;

  const [formData, setFormData] = useState({
    quote_id: "",
    username: "",
    email: "",
    ship_form: "",
    ship_to: "",
    pickup_date: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    card_name: "",
    card_number: "",
    card_expiry: "",
    card_cvv: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const fields = [
      "quote_id",
      "username",
      "email",
      "ship_form",
      "ship_to",
      "pickup_date",
    ];
    fields.forEach((field) => {
      if (eval(field)) {
        setFormData((prev) => ({ ...prev, [field]: eval(field) }));
        localStorage.setItem(field, eval(field));
      } else {
        const storedValue = localStorage.getItem(field);
        if (storedValue) {
          setFormData((prev) => ({ ...prev, [field]: storedValue }));
        }
      }
    });
  }, [quote_id, username, email, ship_form, ship_to, pickup_date]);

  const validate = () => {
    let newErrors = {};
    if (!formData.billing_address.trim())
      newErrors.billing_address = "Billing address is required.";
    if (!formData.billing_city.trim())
      newErrors.billing_city = "City is required.";
    if (!formData.billing_state.trim())
      newErrors.billing_state = "State is required.";
    if (!formData.billing_zip.match(/^\d{5}$/))
      newErrors.billing_zip = "Invalid ZIP code.";
    if (!formData.card_name.trim())
      newErrors.card_name = "Cardholder name is required.";
    if (!formData.card_number.match(/^\d{16}$/))
      newErrors.card_number = "Invalid card number.";
    if (!formData.card_expiry.match(/^(0[1-9]|1[0-2])\/(\d{2})$/))
      newErrors.card_expiry = "Invalid expiry format (MM/YY).";
    if (!formData.card_cvv.match(/^\d{3}$/))
      newErrors.card_cvv = "Invalid CVV.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Card details submitted successfully!");
        setError("");

        const emailRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email,
            subject: "Card Submission Successful",
            message: `<div style="margin: 0; width: 100%;">
       <div style=width:100%;height:150px;background-color:#ff4500;display:grid;justify-content:center;align-items:center><img src=https://rapidautoshipping.com/assets/images/Untitled-1-Recovered.png width=350px style=margin:auto></div>
        <div style="padding: 2% 5%;">
        <p style="font-size:1.5rem;font-weight: 500;;">Hello ${formData.username},</p>
        <p style="font-size:1.5rem;font-weight: 500;">Quote Id :  ${formData.quote_id} RAS </b></p>
        <p style="line-height: 1.5; font-size: 1.2rem;">Thank you for booking with <b>Rapid Auto Shipping</b>! Here are your booking details:</p>
        <ul style="line-height: 1.5;">      
            <li><b>Pickup Address:</b> '${formData.ship_form}'</li>
            <li><b>Destination Address:</b>'${formData.ship_to}'</li>
            <li><b>1st Available Pickup Date:</b'${formData.pickup_date}'</li>
        </ul>
        <p style="line-height: 1.5; font-size: 1.2rem;">We’ll contact you on the day of pickup or one day before with updates. If you have questions, contact us at
            <a href="mailto:info@rapidautoshipping.com">info@rapidautoshipping.com</a> or call us at <b>+1 (833) 233-4447</b>.</p>
            <p style="line-height: 1.1; font-size: 1.5rem;font-weight: 700;">===============================</p>
            <p style="line-height: 1.5; font-size: 1.2rem;"> <a href="mailto:info@rapidautoshipping.com">info@rapidautoshipping.com</a> <br>
                WE ARE HERE TO ANSWER YOUR QUESTIONS FROM 7 AM TO 5 PM CENTRAL TIME. WE LOOK FORWARD TO HEARING FROM YOU.<br>Sincerely,<br><a href="https://rapidautoshipping.com/">Rapid Auto Shipping</a><br>Toll Free Number +1 (833) 233-4447<br>
            </div></div>
    <div style=display:flex;align-items:center;justify-content:center;margin:auto;><div style=display:flex;align-items:center;justify-content:center;margin:auto;gap:3%;><a href=https://www.facebook.com/Rapidautoshipping target=_blank style=margin:3%;><img style=height:50px;width:50px; src=https://rapidautoshipping.com/assets/images/facebook-icon.webp></a><a href=https://www.instagram.com/rapidautoshipping target=_blank style=margin:3%;><img style=height:50px;width:50px; src=https://rapidautoshipping.com/assets/images/instagram-icon.png></a><a href=https://www.linkedin.com/in/rapid-a-shipping/ target=_blank style=margin:3%;><img style=height:50px;width:50px; src=https://rapidautoshipping.com/assets/images/linkedin-icon.webp></a><a href=https://www.youtube.com/@rapidautoshipping9439 target=_blank style=margin:3%;><img style=height:50px;width:50px; src=https://rapidautoshipping.com/assets/images/yt.png></a></div></div></div>
</body>`,
          }),
        });

        if (!emailRes.ok) {
          setError("Card submitted but email failed to send.");
        }

        setFormData({
          quote_id: "",
          username: "",
          email: "",
          billing_address: "",
          billing_city: "",
          billing_state: "",
          billing_zip: "",
          card_name: "",
          card_number: "",
          card_expiry: "",
          card_cvv: "",
        });
        setCurrentStep(1);
      } else {
        const errorData = await res.json();
        setError(errorData.message);
      }
    } catch (err) {
      setError("Error submitting form");
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className=" p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
            Card Details
          </h2>
          {/* Payment Logos */}
          <div className="flex justify-center gap-4 mb-4 w-full">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png"
              alt="Visa"
              className="w-36 h-16"
            />
            <img
              src="https://i.pinimg.com/736x/ca/0c/70/ca0c7039ddcf224cb6b075cb59e4677e.jpg"
              alt="MasterCard"
              className="w-36 h-16"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="w-36 h-16"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div>
                <input
                  type="text"
                  name="quote_id"
                  value={formData.quote_id}
                  onChange={handleChange}
                  placeholder="Quote ID"
                  className="w-full p-2 border border-gray-300 rounded mb-2 bg-gray-100"
                  readOnly
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                />
                <input
                  type="text"
                  name="billing_address"
                  value={formData.billing_address}
                  onChange={handleChange}
                  placeholder="Billing Address"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                  pattern="^[a-zA-Z0-9\s.,#-]+$"
                  title="Only letters, numbers, spaces, and ,.#- are allowed"
                />

                {/* City */}
                <input
                  type="text"
                  name="billing_city"
                  value={formData.billing_city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                  pattern="^[A-Za-z\s]+$"
                  title="Only letters and spaces are allowed"
                />

                {/* State */}
                <input
                  type="text"
                  name="billing_state"
                  value={formData.billing_state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                  pattern="^[A-Za-z\s]+$"
                  title="Only letters are allowed"
                />

                {/* Zip Code */}
                <input
                  type="text"
                  name="billing_zip"
                  value={formData.billing_zip}
                  onChange={handleChange}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 9))
                  }
                  placeholder="Zip Code"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  required
                  pattern="^\d{5}(-\d{4})?$"
                  title="Enter a valid 5 or 9 digit ZIP code"
                />
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full p-2 bg-blue-600 text-white rounded mt-2 hover:bg-blue-700"
                >
                  Next Step
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <>
                {/* Cardholder Name */}
                <input
                  type="text"
                  name="card_name"
                  value={formData.card_name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="Cardholder Name"
                  required
                  pattern="[A-Za-z\s]+"
                  title="Only letters and spaces are allowed"
                />
                {/* Card Number */}
                <input
                  type="text"
                  name="card_number"
                  value={formData.card_number}
                  onChange={handleChange}
                  onInput={(e) => {
                    let value = e.target.value.replace(/\D/g, "").slice(0, 19); // Remove non-numeric characters & limit length
                    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space after every 4 digits
                    e.target.value = value;
                  }}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="Card Number"
                  required
                />

                {/* Expiry Date & CVV */}

                <input
                  type="text"
                  name="card_expiry"
                  value={formData.card_expiry}
                  onChange={handleChange}
                  onInput={(e) => {
                    let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                    if (val.length >= 2)
                      val = val.slice(0, 2) + "/" + val.slice(2);
                    e.target.value = val;
                  }}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="MM/YY"
                  required
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  title="Format: MM/YY"
                />

                <input
                  type="text"
                  name="card_cvv"
                  value={formData.card_cvv}
                  onChange={handleChange}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 3))
                  }
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  placeholder="CVV"
                  required
                  pattern="\d{3}"
                  title="CVV must be 3 digits"
                />

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="p-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  >
                    Previous Step
                  </button>
                  <button
                    type="submit"
                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardForm;

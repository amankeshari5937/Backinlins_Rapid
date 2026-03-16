import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import Head from "next/head";
import BusinessDetails from "@/components/Contact/BusinessInformation";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captchaAnswer: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: 0,
    num2: 0,
    operation: "+",
    correctAnswer: 0,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const generateCaptcha = () => {
    const operations = ["+", "-", "×"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let num1, num2, correctAnswer;

    switch (operation) {
      case "+":
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;
        break;
      case "-":
        num1 = Math.floor(Math.random() * 10) + 5;
        num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
        correctAnswer = num1 - num2;
        break;
      case "×":
        num1 = Math.floor(Math.random() * 7) + 2;
        num2 = Math.floor(Math.random() * 5) + 2;
        correctAnswer = num1 * num2;
        break;
      default:
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;
    }

    setCaptcha({
      num1,
      num2,
      operation,
      correctAnswer,
    });
    setCaptchaVerified(false);
    setCaptchaError("");
    setFormData((prev) => ({
      ...prev,
      captchaAnswer: "",
    }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "captchaAnswer") {
      if (parseInt(value) === captcha.correctAnswer) {
        setCaptchaVerified(true);
        setCaptchaError("");
      } else {
        setCaptchaVerified(false);
        if (value) {
          setCaptchaError("Incorrect answer, please try again.");
        }
      }
    }
  };

  const generateEmailTemplate = ({ name, email, subject, message }) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { background: #007bff; padding: 20px; text-align: center; color: white; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .field label { font-weight: bold; color: #333; }
          .field p { margin: 5px 0; padding: 10px; background: #f9f9f9; border-radius: 4px; color: #555; }
          .footer { background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <label>From:</label>
              <p>${name} ${email}</p>
            </div>
            <div class="field">
              <label>Subject:</label>
              <p>${subject}</p>
            </div>
            <div class="field">
              <label>Message:</label>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div class="footer">
            <p>Received on ${new Date().toLocaleString()}</p>
            <p>Rapid Contact Form</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const generateUserConfirmationEmail = ({ name, subject }) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { background: #28a745; padding: 20px; text-align: center; color: white; }
          .content { padding: 20px; }
          .footer { background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Request Received Successfully</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting us! Your request regarding "${subject}" has been successfully submitted.</p>
            <p>Our team will review your message and get back to you as soon as possible.</p>
            <p>If you have any urgent queries, feel free to reply to this email.</p>
            <p>Best regards,<br>The Rapid Team</p>
          </div>
          <div class="footer">
            <p>Received on ${new Date().toLocaleString()}</p>
            <p>Rapid Support System</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setCaptchaError("Please solve the math problem correctly to submit.");
      return;
    }

    setSubmissionStatus("submitting");

    const adminEmailContent = generateEmailTemplate({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    const userEmailContent = generateUserConfirmationEmail({
      name: formData.name,
      subject: formData.subject,
    });

    try {
      const adminResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "info@rapidautoshipping.com",
            subject: `Contact Form: ${formData.subject}`,
            message: adminEmailContent,
          }),
        }
      );

      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email,
            subject: "Your Request Has Been Received",
            message: userEmailContent,
          }),
        }
      );

      const adminResult = await adminResponse.json();
      const userResult = await userResponse.json();

      if (adminResponse.ok && userResponse.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          captchaAnswer: "",
        });
        generateCaptcha();
        setSubmissionStatus("success");
        setTimeout(() => setSubmissionStatus(null), 3000);
      } else {
        throw new Error(adminResult.message || userResult.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus(null), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact Rapid Auto Shipping | Get a Free Quote & Expert Support
        </title>
        
        <meta
          name="description"
          content="Need auto transport assistance? Contact Rapid Auto Shipping for expert support, free quotes, and 24/7 customer service. Call us or fill out our form today!"
        />

        <link rel="canonical" href="https://rapidautoshipping.com/contact-us" />
      </Head>
      <Navbar />

      {/* Hero Banner - Improved responsiveness */}
      <div className="container mx-auto px-4 py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-8 md:mb-12"
        >
          <div
            className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] items-center justify-center flex bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1743492896/contact-us/rapid-contact-us.jpg')",
            }}
          >
            <h1 className="bg-[rgba(0,0,0,0.466)] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full h-full items-center justify-center flex">
              Contact Us
            </h1>
          </div>
        </motion.div>

        {/* Two column layout - Improved for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Business Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-sm bg-white/90 rounded-2xl p-4 sm:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border border-gray-100"
          >
            <BusinessDetails />
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-5 sm:p-7 md:p-9 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-rapidcolor before:to-purple-500"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-xl font-bold text-black mb-4 md:mb-6 relative overflow-hidden"
            >
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-rapidcolor after:w-0 after:transition-all after:duration-700 hover:after:w-full">
                Get in Touch with Rapid !
              </span>
            </motion.h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rapidcolor/50 focus:border-rapidcolor transition-all duration-200 shadow-sm hover:border-rapidcolor/30"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rapidcolor/50 focus:border-rapidcolor transition-all duration-200 shadow-sm hover:border-rapidcolor/30"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rapidcolor/50 focus:border-rapidcolor transition-all duration-200 shadow-sm hover:border-rapidcolor/30"
                  required
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-4 sm:mb-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rapidcolor/50 focus:border-rapidcolor transition-all duration-200 shadow-sm hover:border-rapidcolor/30 resize-none"
                  required
                  placeholder="Please share your thoughts, questions or details about your request..."
                />
              </div>

              {/* Improved captcha section for mobile */}
              <div className="mb-5 sm:mb-7">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Verification
                </label>
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-2">
                  <div className="bg-gray-50 p-2 sm:p-3 rounded-xl border border-gray-100 shadow-sm">
                    <span className="font-medium text-gray-800">
                      {captcha.num1} {captcha.operation} {captcha.num2} = ?
                    </span>
                  </div>
                  <input
                    type="text"
                    name="captchaAnswer"
                    value={formData.captchaAnswer}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 2);
                      handleChange({
                        target: { name: "captchaAnswer", value },
                      });
                    }}
                    placeholder="Enter answer"
                    maxLength={2}
                    className="flex-1 w-full sm:w-auto px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rapidcolor/50 focus:border-rapidcolor transition-all duration-200 shadow-sm hover:border-rapidcolor/30 text-center"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{1,2}"
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 sm:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200 hover:border-gray-300 shadow-sm"
                    title="Generate new problem"
                  >
                    🔄
                  </button>
                </div>
                {captchaError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 pl-1"
                  >
                    {captchaError}
                  </motion.p>
                )}
                {captchaVerified && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm mt-1 pl-1 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Correct!
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rapidcolor font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.01] ${
                  submissionStatus === "submitting"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-rapidcolor text-white shadow-lg hover:bg-rapidcolor-700 hover:shadow-xl"
                } ${captchaVerified ? "animate-pulse" : ""}`}
                disabled={!captchaVerified || submissionStatus === "submitting"}
              >
                {submissionStatus === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status messages */}
              {submissionStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 mt-4 sm:mt-6 rounded-lg"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Your message has been sent successfully! Check your
                        email for confirmation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submissionStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 mt-4 sm:mt-6 rounded-lg"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        Failed to submit form. Please try again or contact us
                        directly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-rapidcolor after:w-12">
            Our Location
          </h3>
          <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <iframe
              src="https://maps.google.com/maps?q=817+Herman+Road%2C+Horsham+PA+19044&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

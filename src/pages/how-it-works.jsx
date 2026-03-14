// pages/auto-shipping-guide.js
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import Key_banner from "@/components/CommonComponents/key-banner";
import YoutubeVideo from "@/components/State-to-State/YoutubeVideo";
import Head from "next/head";
import Link from "next/link";

export default function AutoShippingGuide() {
  const steps = [
    {
      id: 1,
      title: "Research and Choose a Reliable Auto Transport Company",
      icon: "📋",
      content: [
        "Check for Licensing and Insurance: Ensure the company is licensed and insured with the FMCSA.",
        "Read Online Reviews: Look for positive customer feedback and accreditations.",
        "Compare Quotes: Get multiple quotes for the best price and service.",
        "Verify Coverage: Confirm damage protection during transit.",
        "Reputable Companies: Choose Rapid Auto Shipping for reliable service.",
      ],
    },
    {
      id: 2,
      title: "Inspect and Document Your Vehicle",
      icon: "🔍",
      content: [
        "Thorough Inspection: Wash your car to spot dents or scratches.",
        "Document Condition: Take photos from all angles and note issues.",
        "Fuel Level: Keep the tank at 1⁄4 full to minimize weight.",
      ],
    },
    {
      id: 3,
      title: "Gather Information and Get Quotes",
      icon: "💰",
      content: [
        "Vehicle Details: Prepare make, model, year, and condition.",
        "Pickup and Delivery Locations: Specify exact addresses or zip codes.",
        "Transport Type: Choose open or enclosed shipping.",
        "Desired Pickup Date: Set your preferred pickup time.",
        "Use Online Calculators: Get instant quotes online.",
        "Compare Quotes: Shop around for the best deal.",
        "Consider Factors: Distance, vehicle type, and season affect costs.",
      ],
    },
    {
      id: 4,
      title: "Booking Your Shipment",
      icon: "📱",
      content: [
        "Choose a Company: Pick the best mix of price and reliability.",
        "Provide Details: Share accurate vehicle and location info.",
        "Confirm and Pay: Review terms and make payment.",
        "Schedule Pickup: Get driver details and estimated dates.",
      ],
    },
    {
      id: 5,
      title: "Prepare Your Vehicle for Shipping",
      icon: "🚗",
      content: [
        "Clean the Car: Wash it to document its condition.",
        "Remove Items: Clear out personal belongings.",
        "Secure Accessories: Fix or remove aftermarket parts.",
        "Check Leaks: Ensure no fluid leaks.",
        "Check Tires and Battery: Verify inflation and charge.",
        "Disable Alarms: Turn off alarms to avoid issues.",
        "Fold Mirrors: Protect side mirrors.",
        "Disable Tags: Remove toll tags and passes.",
        "Spare Key: Provide a spare key.",
        "Special Instructions: Share any specific needs.",
        "Inspection: Driver documents condition on pickup.",
        "Pickup: Vehicle is loaded securely.",
      ],
    },
    {
      id: 6,
      title: "Delivery and Inspection",
      icon: "✅",
      content: [
        "Track Shipment: Monitor progress with tracking info.",
        "Transit Time: Expect a few days to weeks based on distance.",
        "Delivery: Vehicle arrives at your location.",
        "Final Inspection: Check condition on arrival.",
        "Sign Bill: Confirm delivery with your signature.",
        "Follow-Up: Contact us with any post-delivery concerns.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 font-sans">
        <Head>
          <title>Auto Shipping Guide | Rapid Auto Shipping</title>
          <meta
            name="description"
            content="Your guide to shipping vehicles with Rapid Auto Shipping"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href="https://rapidautoshipping.com/how-it-works"
          />
        </Head>

        {/* Hero Section with Background Image */}
        <section
          className="bg-cover bg-center text-white py-24"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dz2zovmf1/image/upload/v1743840262/rapid-home/Auto-Shipping-Process.webp')`, // Replace with your image URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.83)",
          }}
        >
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              A Detailed Guide To Auto Shipping Process @{" "}
              <span className="text-rapidcolor">Rapid Auto Shipping</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Car lovers are passionate about their car and want to ensure it
              gets the best treatment possible. The love between a man and his
              car can only be understood by those who have felt it. At Rapid
              Auto Shipping, we know this. We are as passionate about
              transporting a car as a car lover would be about owning and
              possessing it. We also know that navigating the auto-shipping
              process can seem daunting, but with the right information, you can
              ensure a smooth and secure journey for your vehicle. To ensure
              your car transport experience is as stress-free as possible, from
              initial planning to final delivery, a detailed, step- by-step
              guide to the auto shipping process is provided. To ship a car in
              the USA, you'll need to research and prepare your vehicle, get
              quotes, choose a shipping method (open or enclosed), and then
              prepare for pickup and delivery, including inspections and signing
              the bill of lading.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/calculator"
                className="bg-rapidcolor text-white py-3 px-8 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-rapidcolor transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Steps Section - Always Open */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Your Step-by-Step Guide
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-xl shadow-lg transform transition-all duration-300"
              >
                <div className="p-6 flex items-center text-left">
                  <span className="flex-shrink-0 w-20 h-20   bg-rapidcolor text-white rounded-full flex items-center justify-center text-5xl mr-4">
                    {step.icon}
                  </span>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.id}. {step.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 pt-0 bg-gray-50 border-t border-gray-200">
                  <ul className="space-y-4 text-gray-700">
                    {step.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-rapidcolor rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        <YoutubeVideo />
        <Key_banner />

        <Footer />
      </div>
    </>
  );
}

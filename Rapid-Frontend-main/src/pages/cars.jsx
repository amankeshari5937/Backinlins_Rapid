import Head from "next/head";
import CarBrandLogos from "@/components/Cars/CompnayList";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import TestimonialSwiper from "@/components/Home/swipper";

import React from "react";
import HowItWorks from "@/components/CommonComponents/Howitworks";

function cars() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://www.rapidautoshipping.com",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id": "https://rapidautoshipping.com/cars",
                    name: "States We Serve for Auto Shipping",
                  },
                },
              ],
            },
          ])}
        </script>

        <title>
          Car Shipping Services | Affordable Vehicle Transport by Rapid Auto
          Shipping
        </title>
        <meta
          name="description"
          content="Ship your car safely anywhere in the USA with Rapid Auto Shipping. We offer reliable, insured, and affordable vehicle transport services tailored for all types of cars."
        />

        <link rel="canonical" href="https://rapidautoshipping.com/cars" />
      </Head>
      <Navbar />
      <div className="bg-white py-10 px-5 text-center">
        <h1 className="text-5xl font-bold">
          List Of Cars{" "}
          <span className="text-rapidcolor">Rapid Auto Shipping</span> Ship
        </h1>
        <div className="w-24 h-1 bg-rapidcolor mx-auto my-2"></div>
        <p className="text-gray-700 max-w-6xl mx-auto mt-4 text-lg">
          Yes! We ship your car. We will provide you with the best
          representatives to help you out if you have any questions regarding
          auto shipping. Here is the list of cars we ship. You can ship your
          vehicle without any hassle, just by contacting us. Here is the car's
          list and car brands we serve in.
        </p>
      </div>

      <CarBrandLogos />
      <HowItWorks />
      <TestimonialSwiper />
      <Footer />
    </>
  );
}

export default cars;

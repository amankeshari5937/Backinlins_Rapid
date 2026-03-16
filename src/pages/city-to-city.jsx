import Head from "next/head";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import ShippingCostTable from "@/components/State-main/HowMuchDoesItCost";
import React from "react";
import TestimonialSwiper from "@/components/Home/swipper";
import HoverCardSection from "@/components/Home/HoverCard";
import CityTable from "@/components/city-to-city-main/all-city-to-city";

const jsonLdData = JSON.stringify([
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
          "@id": "https://rapidautoshipping.com/city-to-city",
          name: "City to City Auto Transport Services",
        },
      },
    ],
  },
]);

export async function getStaticProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/city_to_city`,
      {
        headers: { "Cache-Control": "max-age=3600" },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const apiData = await response.json();

    return {
      props: { apiData },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { apiData: null, error: error.message },
      revalidate: 60,
    };
  }
}

function Cities({ apiData, error }) {
  if (error) return <div>Error: {error}</div>;
  if (!apiData) return <div>No data available</div>;

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdData }}
        />
        <title>
          City to City Auto Transport Services | Nationwide Car Shipping USA
        </title>
        <meta
          name="description"
          content="Explore trusted city-to-city auto transport routes across the USA. Click on any city pairing to get detailed info, pricing, and delivery timelines for fast and reliable vehicle shipping."
        />
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_FRONT_URL ?? "https://www.rapidautoshipping.com"
          }/city-to-city`}
        />
      </Head>
      <Navbar apiData={apiData} />
      <CityTable apiData={apiData} />
      <ShippingCostTable apiData={apiData} />
      <HoverCardSection apiData={apiData} />
      <TestimonialSwiper apiData={apiData} />
      <Footer apiData={apiData} />
    </>
  );
}

export default Cities;
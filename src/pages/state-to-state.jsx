import React from "react";
import Head from "next/head";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import ShippingCostTable from "@/components/State-main/HowMuchDoesItCost";
import TestimonialSwiper from "@/components/Home/swipper";
import States_to_Table from "@/components/State-to-State/state-to-state-table";

// Static props for server-side fetching
export async function getStaticProps() {
  try {
    // Fetch both APIs in parallel
    const [response1, response2] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/state_to_state`, {
        headers: { "Cache-Control": "max-age=3600" },
      }),
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new_state_to_state`, {
        headers: { "Cache-Control": "max-age=3600" },
      }),
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error("Failed to fetch data");
    }

    const [api1Data, api2Data] = await Promise.all([
      response1.json(),
      response2.json(),
    ]);

    return {
      props: { api1Data, api2Data },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { api1Data: null, api2Data: null, error: error.message },
      revalidate: 60,
    };
  }
}

const canonicalUrl = `${
  process.env.NEXT_PUBLIC_FRONT_URL ?? "https://www.rapidautoshipping.com"
}/state-to-state`;

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
          "@id": "https://rapidautoshipping.com/states",
          name: "States We Serve for Auto Shipping",
        },
      },
    ],
  },
]);

function States({ api1Data, api2Data, error }) {
  if (error) return <div>Error: {error}</div>;
  if (!api1Data || !api2Data) return <div>No data available</div>;

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdData }}
        />
        <title>
          State to State Auto Transport Services | Nationwide Car Shipping USA
        </title>
        <meta
          name="description"
          content="Explore trusted state-to-state auto transport routes across the USA. Click on any state pairing to get detailed info, pricing, and delivery timelines for fast and reliable vehicle shipping."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Navbar api1Data={api1Data} api2Data={api2Data} />
      <States_to_Table api1Data={api1Data} api2Data={api2Data} />
      <ShippingCostTable api1Data={api1Data} api2Data={api2Data} />
      <TestimonialSwiper api1Data={api1Data} api2Data={api2Data} />
      <Footer api1Data={api1Data} api2Data={api2Data} />
    </>
  );
}

export default States;
import React from "react";
import Head from "next/head";
import VehicleShippingComponent from "@/components/Cars/Header";
import ToyotaTransport from "@/components/Cars/SecondComponent";
import ShippingBenefits from "@/components/Cars/ShippingBenifits";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import ReviewSwiper from "../../components/Home/swipper.jsx";
import StartComponent from "@/components/Cars/ThirdComponent";
import FourthComponent from "@/components/Cars/FourthComponent";
import SixthComponent from "@/components/Cars/SixthComponent";
import SeventhComponent from "@/components/Cars/SeventhComponent";
import EighthComponent from "@/components/Cars/EighthComponent";
import NinthComponent from "@/components/Cars/NinthComponent";
import TenthComponent from "@/components/Cars/TenthComponent";
import ShippingCostTable from "@/components/Cars/FifthComponent.jsx";
import BookingProcess from "@/components/Cars/Booking.jsx";

function Cars({ data, error, slug }) {
  // Function to safely parse meta tags
  const parseMetaTags = (metaString) => {
    if (!metaString || typeof metaString !== "string") return [];

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        `<head>${metaString}</head>`,
        "text/html"
      );
      const metaElements = doc.head.querySelectorAll("meta");
      return Array.from(metaElements).map((meta) => ({
        name: meta.getAttribute("name"),
        property: meta.getAttribute("property"),
        content: meta.getAttribute("content"),
      }));
    } catch (error) {
      console.error("Error parsing meta tags:", error);
      return [];
    }
  };

  // If there's an error or no data, redirect to 404 (handled server-side)
  if (error || !data) {
    return null; // Next.js will handle 404 redirect
  }

  const metaTags = parseMetaTags(data?.meta);

  // Convert slug to lowercase
  const lowercaseSlug = slug.toLowerCase();

  // Generate canonical URL using lowercase slug
  const canonicalUrl = `https://rapidautoshipping.com/cars/${lowercaseSlug}`;

  // JSON-LD Schema for Breadcrumbs
  const breadcrumbSchema = {
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
          "@id": "https://www.rapidautoshipping.com/cars",
          name: "Car Shipping Services",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `https://www.rapidautoshipping.com/cars/${lowercaseSlug}`,
          name: `Best ${lowercaseSlug} Transport Company`,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{`Rapid Auto Shipping ${data.company_name} Car Transport Service | (833) 233-4447`}</title>
        <meta
          name="title"
          content={`Rapid Auto Shipping ${data.company_name} Car Transport Service | (833) 233-4447`}
        />
        <meta
          name="description"
          content={`Choose Number 1 ${data.company_name} Car Transport Service for secure and timely transportation. Rapid Auto Shipping works with your budget, needs, and timetable.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
          <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <VehicleShippingComponent data={data} />
      <ShippingBenefits data={data} />
      <ReviewSwiper />
      <ToyotaTransport data={data} />
      <BookingProcess data={data} />
      <ShippingCostTable data={data} />
      <SixthComponent data={data} />
      <StartComponent data={data} />
      <FourthComponent data={data} />
      <SeventhComponent data={data} />
      <EighthComponent data={data} />
      <NinthComponent data={data} />
      <TenthComponent data={data} />
      <Footer />
    </>
  );
}

// Fetch data server-side
export async function getServerSideProps(context) {
  const { slug } = context.params; // Get slug from URL

  if (!slug) {
    return {
      notFound: true, // Redirect to 404
    };
  }

  // Convert slug to lowercase for API fetch
  const lowercaseSlug = slug.toLowerCase();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cars/slug/${lowercaseSlug}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();

    if (!data) {
      throw new Error("No data found");
    }

    return {
      props: {
        data,
        slug: lowercaseSlug, // Pass lowercase slug to component
        error: null,
      },
    };
  } catch (err) {
    console.error("Fetch error:", err.message);
    return {
      notFound: true, // Redirect to 404
    };
  }
}

export default Cars;
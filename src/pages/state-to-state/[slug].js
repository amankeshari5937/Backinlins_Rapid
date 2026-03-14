import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import FAQSection from "@/components/State-to-State/FAQSection";
import CaliforniaMissouri from "@/components/State-to-State/FifthComponent";
import CarShippingEstimate from "@/components/State-to-State/FirstText";
import AutoTransportServices from "@/components/State-to-State/FourthComponent";
import Header from "@/components/State-to-State/Header";
import ReviewCards from "../../components/Home/ReviewCards";
import ReviewSwiper from "../../components/State-to-State/swipper.jsx";
import AutoShipping from "@/components/State-to-State/SecondComponent";
import QSection from "@/components/State-to-State/SecondText";
import ShippingBenefits from "@/components/city-to-city/ShippingBenifits";
import ShippingService from "@/components/State-to-State/ShippingService";
import ShipmentFactors from "@/components/State-to-State/SixthComponent";
import AutoTransportTable from "@/components/State-to-State/TableComponent";
import YoutubeVideo from "@/components/State-to-State/YoutubeVideo";
import ZipTable1 from "@/components/State-to-State/ZipCode1";
import ZipTable2 from "@/components/State-to-State/ZipCode2";
import AutoShippingAdvantages from "@/components/CommonComponents/Advantage";
import React from "react";
import Head from "next/head";
import HowItWorks from "@/components/State-to-State/Howitworks";

// Function to parse meta tags safely
const parseMetaTags = (metaData) => {
  if (!metaData) {
    console.warn("parseMetaTags: metaData is null or undefined");
    return [];
  }

  try {
    if (typeof metaData === "string") {
      if (metaData.trim().startsWith("{") || metaData.trim().startsWith("[")) {
        const parsed = JSON.parse(metaData);
        console.log("parseMetaTags: Successfully parsed JSON string", parsed);
        return parsed || [];
      } else {
        console.warn(
          "parseMetaTags: String does not appear to be JSON:",
          metaData,
        );
        console.log(
          "parseMetaTags: Treating string as meta description",
          metaData,
        );
        return [
          {
            name: "description",
            content: metaData,
          },
        ];
      }
    }

    if (Array.isArray(metaData)) {
      console.log("parseMetaTags: metaData is already an array", metaData);
      return metaData;
    }

    if (typeof metaData === "object") {
      console.log("parseMetaTags: Converting object to array", metaData);
      return Object.entries(metaData).map(([key, value]) => ({
        name: key,
        content: value,
      }));
    }

    console.warn(
      "parseMetaTags: Unhandled metaData type",
      typeof metaData,
      metaData,
    );
    return [];
  } catch (error) {
    console.error("parseMetaTags: Error parsing meta tags:", error.message);
    console.error("parseMetaTags: Problematic metaData:", metaData);
    return [];
  }
};

// Function to generate dynamic schema
const generateDynamicSchema = (data, slug) => {
  // Capitalize the slug for display (e.g., "georgia-to-california" -> "Georgia to California")
  const statePair = slug
    .split("-to-")
    .map((state) => state.charAt(0).toUpperCase() + state.slice(1))
    .join(" to ");
  const baseUrl = "https://www.rapidautoshipping.com";
  const pageUrl = `${baseUrl}/state-to-state/${slug}`;

  // Extract meta description or provide a fallback
  const metaDescription =
    data?.meta?.description ||
    `Reliable and affordable auto shipping services from ${statePair} provided by Rapid Auto Shipping.`;

  // Dynamic image URL (adjust based on your data structure)
  const imageUrl = data?.image || `${data?.map_image}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Auto Shipping from ${statePair} | Rapid Auto Shipping`,
        description: metaDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          caption: `Auto shipping from ${statePair} by Rapid Auto Shipping`,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        name: "Rapid Auto Shipping",
        url: baseUrl,
        logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745397312/icons/Rapid-Auto-Shipping.webp",
        description:
          "Rapid Auto Shipping provides professional auto transport services across the United States, specializing in state-to-state vehicle shipping.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "United States",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-833-233-4447",
          contactType: "Customer Service",
          areaServed: "US",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.facebook.com/Rapidautoshipping/",
          "https://x.com/ShippingRapid",
          "https://www.instagram.com/rapidautoshipping",
          "https://www.youtube.com/@rapidautoshipping9439",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness-Horsham`,
        name: "Rapid Auto Shipping - Horsham",
        url: baseUrl,
        telephone: "+1-833-233-4447",
        address: {
          "@type": "PostalAddress",
          streetAddress: "817 Herman Road",
          addressLocality: "Horsham",
          addressRegion: "PA",
          postalCode: "19044",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.1860675,
          longitude: -75.1732966,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        parentOrganization: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
        },
        description:
          "Rapid Auto Shipping’s Horsham office, offering professional auto transport services nationwide.",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness-GulfShores`,
        name: "Rapid Auto Shipping - Gulf Shores",
        url: baseUrl,
        telephone: "+1-833-233-4447",
        address: {
          "@type": "PostalAddress",
          streetAddress: "701 Commerce Dr",
          addressLocality: "Gulf Shores",
          addressRegion: "AL",
          postalCode: "36542",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.2833464,
          longitude: -87.6765321,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        parentOrganization: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
        },
        description:
          "Rapid Auto Shipping’s Gulf Shores office, providing reliable vehicle shipping across the U.S.",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness-NewCastle`,
        name: "Rapid Auto Shipping - New Castle",
        url: baseUrl,
        telephone: "+1-833-233-4447",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1209 Orange Street",
          addressLocality: "New Castle",
          addressRegion: "DE",
          postalCode: "19801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 39.7459,
          longitude: -75.5466,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        parentOrganization: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
        },
        description:
          "Rapid Auto Shipping’s New Castle office, specializing in nationwide auto transport services.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${statePair} Auto Shipping`,
        description: `Professional auto shipping service from ${statePair}, offering safe and timely vehicle transport with Rapid Auto Shipping.`,
        url: pageUrl,
        image: imageUrl,
        provider: {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "Rapid Auto Shipping",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "0.00", // Adjust if dynamic pricing is available
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
    ],
  };
};

function StateToState({ data }) {
  const metaTags = parseMetaTags(data?.meta);

  // Capitalize the slug for display (e.g., "georgia-to-california" -> "Georgia to California")
  const slug = data?.slug || "alabama-to-california"; // Fallback slug
  const capitalizedSlug = slug
    .split("-to-")
    .map((state) => state.charAt(0).toUpperCase() + state.slice(1))
    .join(" to ");

  // Breadcrumb Schema
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
          "@id": "https://rapidautoshipping.com/state-to-state",
          name: "States We Serve for Auto Shipping",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `https://rapidautoshipping.com/state-to-state/${slug}`,
          name: `Best Car Transport Company In ${capitalizedSlug}`,
        },
      },
    ],
  };

  // Generate the dynamic schema
  const dynamicSchema = generateDynamicSchema(data, slug);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/state-to-state/${slug}`;

  return (
    <>
      <Head>
        <title>{`${data?.from} to ${data?.to} Auto Shipping | Rapid Auto Shipping`}</title>
        <meta
          name="title"
          content={`${data?.from} to ${data?.to} Auto Shipping | Rapid Auto Shipping`}
        />
        <meta
          name="description"
          content={`Trust Rapid Auto Shipping for fast and affordable ${data?.from} to ${data?.to} auto shipping. Get an instant quote. Door-to-door service. No hassles. Book now!`}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Dynamic Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicSchema) }}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar data={data} />
      <Header data={data} />
      <ShippingBenefits data={data} />
      <ReviewSwiper data={data} />
      <AutoShipping data={data} />
      <AutoShippingAdvantages />
      <AutoTransportTable data={data} />
      <YoutubeVideo data={data} />
      <CarShippingEstimate data={data} />
      <HowItWorks data={data} />
      <AutoTransportServices data={data} />
      <ReviewCards data={data} />
      <ShippingService data={data} />
      <ShipmentFactors data={data} />
      <QSection data={data} />
      <ZipTable1 data={data} />
      <ZipTable2 data={data} />
      <CaliforniaMissouri data={data} />
      <FAQSection data={data} />
      <Footer data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params || {};

  if (!slug) {
    console.log("getServerSideProps: No slug provided");
    return {
      notFound: true,
    };
  }

  try {
    console.log("getServerSideProps: Fetching data for slug:", slug);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/state_to_state/slug/${slug}`,
    );
    if (!response.ok) {
      console.error(
        "getServerSideProps: Fetch failed:",
        response.status,
        response.statusText,
      );
      return {
        notFound: true,
      };
    }
    const data = await response.json();

    if (!data) {
      console.log("getServerSideProps: No data returned for slug:", slug);
      return {
        notFound: true,
      };
    }

    // Add slug to data object for use in the component
    data.slug = slug;

    console.log("getServerSideProps: Successfully fetched data:", data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("getServerSideProps: Error fetching data:", error.message);
    return {
      notFound: true,
    };
  }
}

export default StateToState;

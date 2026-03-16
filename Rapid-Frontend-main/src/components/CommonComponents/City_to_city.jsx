import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import VehicleShippingComponent from "../city-to-city/Header";
import ShippingBenefits from "../city-to-city/ShippingBenifits";
import AutoShipping from "../city-to-city/SecondComponent";
import ThirdComponent from "../city-to-city/ThirdComponent";
import FourthComponent from "../city-to-city/FourthComponent";
import HowItWorks from "../city-to-city/Howitworks";
import VehicleShippingTips from "../city-to-city/SixthComponent";
import AutoShippingCard from "../city-to-city/Seventhcomponent";
import Routes from "../city-to-city/Routes";
import RoutesTwo from "../city-to-city/RoutesTwo";
import FifthComponent from "../city-to-city/FifthComponent";
import ReviewSwiper from "../Home/swipper";
import ZipTable1 from "../../components/city-to-city/zipcodes_state";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";

function parseMetaTags(meta) {
  if (!meta) return [];

  if (typeof meta === "string") {
    const trimmedMeta = meta.trim();
    if (trimmedMeta.startsWith("{") || trimmedMeta.startsWith("[")) {
      try {
        return JSON.parse(trimmedMeta);
      } catch (error) {
        console.error("Error parsing meta tags:", error);
        return [{ name: "description", content: trimmedMeta }];
      }
    } else {
      return [{ name: "description", content: trimmedMeta }];
    }
  }

  if (Array.isArray(meta)) {
    return meta;
  }

  if (typeof meta === "object") {
    return Object.entries(meta).map(([key, value]) => ({
      name: key,
      content: value,
    }));
  }

  return [];
}

function City_to_city({ city_to_city }) {
  const metaTags = parseMetaTags(city_to_city?.meta);

  // Capitalize the slug for display (e.g., "new-york-to-los-angeles" -> "New York To Los Angeles")
  const slug = city_to_city?.slug || "default";
  const capitalizedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // JSON-LD Schema for Breadcrumbs
  const breadcrumbSchema = [
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
            "@id": `https://www.rapidautoshipping.com/${slug}`,
            name: `Car Shipping ${capitalizedSlug}`,
          },
        },
      ],
    },
  ];

  const generateDynamicSchema = (data, slug) => {
    // Capitalize the slug for display (e.g., "georgia-to-california" -> "Georgia to California")
    const statePair = slug
      .split("-to-")
      .map((state) => state.charAt(0).toUpperCase() + state.slice(1))
      .join(" to ");
    const baseUrl = "https://www.rapidautoshipping.com";
    const pageUrl = `${baseUrl}/${slug}`;

    // Extract meta description or provide a fallback
    const metaDescription =
      data?.meta?.description ||
      `Reliable and affordable auto shipping services from ${statePair} provided by Rapid Auto Shipping.`;

    // Dynamic image URL
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
            "Rapid Auto Shipping provides professional auto transport services across the United States, specializing in city-to-city vehicle shipping.",
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

  const dynamicSchema = generateDynamicSchema(city_to_city, slug);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/${slug}`;

  return (
    <>
      <Head>
        <title>{city_to_city?.meta_title || "Default Title"}</title>
        {metaTags.map((tag, index) => {
          const key = tag.name || tag.property || `meta-${index}`;
          return tag.name ? (
            <meta key={key} name={tag.name} content={tag.content} />
          ) : tag.property ? (
            <meta key={key} property={tag.property} content={tag.content} />
          ) : null;
        })}
        <meta name="description" content={city_to_city?.meta_description} />
        <meta name="title" content={city_to_city?.meta_title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicSchema) }}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <VehicleShippingComponent data={city_to_city} />
      <ShippingBenefits data={city_to_city} />
      <ReviewSwiper />
      <AutoShipping data={city_to_city} />
      <FifthComponent data={city_to_city} />
      <FourthComponent data={city_to_city} />
      <HowItWorks data={city_to_city} />
      <ThirdComponent data={city_to_city} />
      <VehicleShippingTips data={city_to_city} />
      <AutoShippingCard data={city_to_city} />
      <div className="py-10">
        <Key_banner />
      </div>
      <ZipTable1 data={city_to_city} />
      <Routes data={city_to_city} />
      <RoutesTwo data={city_to_city} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  if (!slug) {
    console.log("getServerSideProps: No slug provided");
    return {
      notFound: true,
    };
  }

  try {
    console.log("getServerSideProps: Fetching data for slug:", slug);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/city_to_city/slug/${slug}`,
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
    const city_to_city = await response.json();

    if (!city_to_city) {
      console.log("getServerSideProps: No data returned for slug:", slug);
      return {
        notFound: true,
      };
    }

    // Add slug to city_to_city object for use in the component
    city_to_city.slug = slug;

    console.log("getServerSideProps: Successfully fetched data:", city_to_city);
    return {
      props: {
        city_to_city,
      },
    };
  } catch (error) {
    console.error("getServerSideProps: Error fetching data:", error.message);
    return {
      notFound: true,
    };
  }
}

export default City_to_city;

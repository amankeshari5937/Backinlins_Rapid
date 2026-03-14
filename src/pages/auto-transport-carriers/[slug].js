import Footer from "@/components/CommonComponents/Footer";
import TransportForm from "@/components/CommonComponents/Form";
import Navbar from "@/components/CommonComponents/Navbar";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Function to parse carrier.addr2 (e.g., "235 Buttercup Loop Kalispell Montana 59901")
const parseAddress = (addr2, addr1Fallback) => {
  if (!addr2 || typeof addr2 !== "string") {
    return {
      streetAddress: addr1Fallback || "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
    };
  }

  const parts = addr2.trim().split(" ");

  // List of US state names for validation
  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // Find the state and postal code
  let postalCode = parts[parts.length - 1]; // Last part is postal code
  let stateIndex = -1;

  // Look for the state by checking against the usStates list
  for (let i = parts.length - 2; i >= 0; i--) {
    const potentialState = parts.slice(i, parts.length - 1).join(" ");
    if (usStates.includes(potentialState)) {
      stateIndex = i;
      break;
    }
  }

  let state, city, street;

  if (stateIndex !== -1) {
    // Extract state
    state = parts.slice(stateIndex, parts.length - 1).join(" ");
    // Extract city (part before the state)
    city = parts.slice(stateIndex - 1, stateIndex).join(" ");
    // Extract street (everything before the city)
    street = parts.slice(0, stateIndex - 1).join(" ");
  } else {
    // Fallback: assume last three parts are city, state, postal code
    postalCode = parts.pop() || "";
    state = parts.pop() || "";
    city = parts.pop() || "";
    street = parts.join(" ") || "";
  }

  return {
    streetAddress: street || addr1Fallback || "",
    addressLocality: city,
    addressRegion: state,
    postalCode: postalCode,
  };
};

const AutoTransportCarrier = ({ carrier, reviews, error }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [isVisible, setIsVisible] = useState(false);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/auto-transport-carriers/${slug}`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!carrier) {
    return <div className="text-center py-10">Carrier not found</div>;
  }

  // Capitalize the slug for display
  const capitalizedSlug = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // Parse SEO data
  const parseMetaTags = (seoString) => {
    if (!seoString || typeof seoString !== "string") {
      return { title: null, metaTags: [], canonical: null, scriptTags: [] };
    }

    const titleMatch = seoString.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : null;

    const metaTags = [];
    let canonical = null;
    const scriptTags = [];

    const tagRegex =
      /(<meta[^>]+>|<link[^>]+>|<script[^>]*>[\s\S]*?<\/script>)/gi;
    const tags = seoString.match(tagRegex) || [];

    tags.forEach((tag, index) => {
      const metaMatch = tag.match(
        /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]+)"\s*\/?>/i,
      );
      const canonicalMatch = tag.match(
        /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/i,
      );
      const scriptMatch = tag.match(
        /<script(?:\s+type="([^"]+)")?\s*>\s*([\s\S]*?)\s*<\/script>/i,
      );

      if (metaMatch) {
        metaTags.push(
          <meta
            key={`meta-${index}`}
            name={metaMatch[1].startsWith("og:") ? undefined : metaMatch[1]}
            property={metaMatch[1].startsWith("og:") ? metaMatch[1] : undefined}
            content={metaMatch[2]}
          />,
        );
      } else if (canonicalMatch) {
        canonical = (
          <link key="canonical" rel="canonical" href={canonicalMatch[1]} />
        );
      } else if (scriptMatch) {
        scriptTags.push(
          <script
            key={`script-${index}`}
            type={scriptMatch[1] || "text/javascript"}
            dangerouslySetInnerHTML={{ __html: scriptMatch[2] }}
          />,
        );
      } else {
        console.warn(`Unparsed tag: ${tag}`);
      }
    });

    return { title, metaTags, canonical, scriptTags };
  };

  const {
    title: seoTitle,
    metaTags,
    canonical,
    scriptTags,
  } = parseMetaTags(carrier.seo);

  // Parse address from carrier.addr2
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    parseAddress(carrier.addr2, carrier.addr1);

  // JSON-LD Schemas
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
          "@id": "https://rapidautoshipping.com/auto-transport-carriers",
          name: "States We Serve for Auto Shipping",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `https://rapidautoshipping.com/auto-transport-carriers/${slug}`,
          name: `Best Car Transport Company In ${capitalizedSlug}`,
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: carrier?.company_name || "Reliable Auto Transport",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1747123932/auto-tranport-carrier/auto-tranport-carrier.webp",
    url: slug
      ? `https://rapidautoshipping.com/auto-transport-carriers/${slug}`
      : "https://rapidautoshipping.com/auto-transport-carriers/reliable-transport",
    telephone: carrier?.phone || "+1-800-555-1234",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress || "123 Main Street",
      addressLocality: addressLocality || "Springfield",
      addressRegion: addressRegion || "IL",
      postalCode: postalCode || "62701",
      addressCountry: "US",
    },
    description: `${
      carrier?.company_name || "Reliable Auto Transport"
    } is a ${addressLocality || "Springfield"}-based auto transport company offering nationwide vehicle shipping services. They provide both open and enclosed transport options, ensuring safe and reliable delivery of vehicles across the United States.`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.ratting || 5,
      reviewCount: reviews?.length?.toString() || "10",
    },
    review:
      reviews?.length > 0
        ? reviews.map((review) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.name || "John Doe",
            },
            datePublished: review.date || "2023-05-14",
            reviewBody:
              review.review ||
              "Great service, delivered my car on time and in perfect condition!",
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.ratting || "4",
              bestRating: "5",
              worstRating: "1",
            },
          }))
        : [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "John Doe",
              },
              datePublished: "2023-05-14",
              reviewBody:
                "Great service, delivered my car on time and in perfect condition!",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4",
                bestRating: "5",
                worstRating: "1",
              },
            },
          ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://rapidautoshipping.com/auto-transport-carriers/${slug}`,
    name: `${carrier.company_name} Reviews, Rating & Company Info`,
    description: `Read reviews, ratings, and company information for ${carrier.company_name}, a ${addressLocality}-based auto transport company offering reliable nationwide vehicle shipping services.`,
  };

  const content = carrier?.company_text || "Default content goes here";

  // Function to style the HTML content for paragraph only
  const createMarkup = (htmlContent) => {
    // Add style to make anchor tags blue
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"',
    );
    return { __html: styledContent };
  };

  return (
    <>
      <Head>
        {seoTitle ? (
          <title>{seoTitle}</title>
        ) : (
          <title>Carrier Information</title>
        )}
        {metaTags}
        {canonical || <link rel="canonical" href={canonicalUrl} />}
        {scriptTags}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="bg-gray-50">
        <Navbar />

        {/* Banner Section */}
        <div
          className="relative bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), 
              url(https://res.cloudinary.com/dz2zovmf1/image/upload/v1743153389/Service/Auto-Shipping.webp)
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            minHeight: "400px",
          }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fill="#FFFFFF"
                d="M43.5,-57.5C57.9,-46.8,72.3,-36.5,79.2,-21.7C86.1,-6.9,85.6,12.4,77.9,27.7C70.2,43,55.3,54.3,39.6,62.1C24,69.9,7.6,74.2,-9.6,75.3C-26.7,76.4,-44.6,74.4,-58.6,64.4C-72.6,54.4,-82.7,36.4,-85.3,17.5C-87.8,-1.5,-82.8,-21.4,-71.9,-35.7C-61,-50,-44.3,-58.6,-28.4,-68.7C-12.5,-78.8,2.7,-90.3,16.1,-87.3C29.5,-84.2,41,-68.6,43.5,-57.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h1
                  className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                  style={{ lineHeight: 1.2 }}
                >
                  Rapid Auto Shipping
                </h1>
                <p className="text-white text-xl">
                  Connecting You With Top Rated American Auto Transport Carriers
                  like {carrier.company_name} for Safe, On-time, and Reliable
                  Vehicle Shipping Nationwide
                </p>
                <div className="pt-4 hidden md:block">
                  <p className="text-white text-lg mb-4"></p>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_48,c_scale/v1742461263/review-card/bbb-review.webp"
                        alt="BBB Rating"
                        className="h-12 object-contain"
                        width="100"
                        height="48"
                      />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_48,c_scale/v1742461263/review-card/goggle-review.webp"
                        alt="Google Reviews"
                        className="h-12 object-contain"
                        width="100"
                        height="48"
                      />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                      <img
                        src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_100,h_48,c_scale/v1742461263/review-card/Trustpilot.webp"
                        alt="Trustpilot Rating"
                        className="h-12 object-contain"
                        width="100"
                        height="48"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex justify-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="rounded-xl p-6 w-full max-w-lg border-blue-600">
                  <TransportForm className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company and Address Section */}
        <div className="mx-auto px-4 md:px-6 py-16">
          <div
            className={`max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 py-6 px-8">
              <h2 className="text-2xl font-bold text-black text-center">
                {carrier.company_name}
              </h2>
            </div>

            <div className="bg-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Address
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {streetAddress}
                    {streetAddress && addressLocality ? ", " : ""}
                    {addressLocality}
                    {addressLocality && addressRegion ? ", " : ""}
                    {addressRegion} {postalCode}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Contact
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Phone: {carrier.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carrier Info Section */}
        <div className="mx-auto px-4 md:px-6 py-12 bg-white">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-6 soddisfare:8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                  About {carrier.company_name}
                </h2>
                <div
                  className="text-gray-600 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={createMarkup(content)}
                />
              </div>

              <div className="rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                <img
                  src={`https://res.cloudinary.com/dz2zovmf1/image/upload/v1747123932/auto-tranport-carrier/auto-tranport-carrier.webp`}
                  alt={`${carrier.company_name}`}
                  className="w-full h-[600px] object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        Category
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        Auto Transport Carriers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        Phone
                      </div>
                      <p className="text-blue-600 font-medium text-sm mt-1">
                        {carrier.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        MC#
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{carrier.mc}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        US DOT#
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {carrier.us_dot}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        Address
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {streetAddress}
                        {streetAddress && addressLocality ? ", " : ""}
                        {addressLocality}
                        {addressLocality && addressRegion ? ", " : ""}
                        {addressRegion} {postalCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="container mx-auto px-4 md:px-6 py-16 bg-gray-50">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Customers Say About {carrier.company_name}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read testimonials from customers who have experienced our
                professional auto transport services
              </p>
            </div>

            {reviews.length === 0 ? (
              <div className="text-center text-gray-600">
                No reviews available for {carrier.company_name} yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review) => (
                  <div
                    key={review._id}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative"
                  >
                    <div className="absolute top-4 right-4 text-yellow-500 text-3xl"></div>
                    <div className="flex items-center mb-6">
                      <div className="ml-4">
                        <p className="font-semibold text-lg text-gray-800">
                          {review.name}
                        </p>
                        <div className="flex text-yellow-500 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < review.ratting
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{review.review}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      Verified Customer •
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const carrierResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auto_transport_carrier/${slug}`,
    );
    const carrier = carrierResponse.data;

    if (!carrier) {
      return {
        props: {
          error: "Carrier not found",
        },
      };
    }

    const reviewsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/${slug}`,
    );
    const reviews = reviewsResponse.data;

    return {
      props: {
        carrier,
        reviews,
      },
    };
  } catch (err) {
    console.error("Fetch error:", err.message);
    return {
      notFound: true,
    };
  }
}

export default AutoTransportCarrier;

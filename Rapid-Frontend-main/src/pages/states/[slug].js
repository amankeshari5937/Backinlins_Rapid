import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import Header from "@/components/state/Header";
import ShippingBenefits from "@/components/state/ShippingBenifits";
import AutoTransportServices from "@/components/state/FourthComponent";
import AutoTransportTable from "@/components/state/table";
import ReviewSwiper from "../../components/state/swipper.jsx";
import HowItWorks from "@/components/state/How-It";
import Carshipping from "@/components/state/Carshipping";
import SixthComponent from "@/components/state/SixthComponent";
import Key_banner from "@/components/CommonComponents/key-banner.jsx";
import WhyUs_state from "@/components/state/why-us-state.jsx";
import ShipmentFactors_state from "@/components/state/Factors-affectingcost.jsx";
import New_Content from "@/components/state/New_Content.jsx";
import FAQSection from "@/components/state/FaqSection.jsx";
const CarShippingTips = dynamic(() => import("@/components/state/things.jsx"), {
  ssr: false,
});

function StatePage({ data, slug }) {
  // Function to parse meta tags from a string
  const parseMetaTags = (metaString) => {
    if (!metaString) return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      `<head>${metaString}</head>`,
      "text/html"
    );
    const metaElements = doc.getElementsByTagName("meta");

    const metaTags = [];
    for (let meta of metaElements) {
      const tag = {};
      if (meta.getAttribute("name")) {
        tag.name = meta.getAttribute("name");
      }
      if (meta.getAttribute("property")) {
        tag.property = meta.getAttribute("property");
      }
      tag.content = meta.getAttribute("content") || "";
      metaTags.push(tag);
    }

    return metaTags;
  };

  // If there's no data, return null (handled by notFound)
  if (!data) {
    return null;
  }

  const metaTags = parseMetaTags(data?.meta);

  // Use lowercase slug or a proper display name from data
  const displayName = data.state_name || slug; // Fallback to slug if state_name is unavailable

  // Generate canonical URL using lowercase slug
  const canonicalUrl = `https://rapidautoshipping.com/states/${slug}`;

  // Dynamic Title and Description using displayName
  const pageTitle = `${displayName} Auto Transport Company | Get instant Quotes online!`;
  const pageDescription = `Get an instant quote on our website to check the cost of shipping a car to or from ${displayName} with our safe and reliable ${displayName} transport company.`;

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
          "@id": "https://www.rapidautoshipping.com/states",
          name: "States We Serve for Auto Shipping",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `https://www.rapidautoshipping.com/states/${slug}`,
          name: `Best Car Transport Company In ${displayName}`,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {metaTags.map((tag, index) => (
          <meta
            key={index}
            {...(tag.name ? { name: tag.name } : {})}
            {...(tag.property ? { property: tag.property } : {})}
            content={tag.content}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <Header data={data} />
      <ShippingBenefits data={data} />
      <ReviewSwiper data={data}/>
      <SixthComponent data={data} />
      <WhyUs_state data={data} />
      <Carshipping data={data} />
      <AutoTransportTable data={data} />
      <AutoTransportServices data={data} />
      <HowItWorks data={data} />
      <New_Content data={data} />
      <CarShippingTips data={data} />
      <ShipmentFactors_state data={data} />
      <Key_banner />
      <FAQSection data={data}/>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const states = ["alabama", "arizona"];

  const paths = states.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const originalSlug = params.slug;
  const slug = originalSlug.toLowerCase();

  // If the original slug is not lowercase, redirect to the lowercase version
  if (originalSlug !== slug) {
    return {
      redirect: {
        destination: `/states/${slug}`,
        permanent: true, // Use true for SEO-friendly permanent redirect (301)
      },
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/state/slug/${slug}`
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
        slug, // Pass the lowercase slug
      },
      revalidate: 60, // Incremental Static Regeneration after 60 seconds
    };
  } catch (err) {
    console.error("Fetch error:", err.message);
    return {
      notFound: true, // Return 404 for failed fetches
    };
  }
}

export default StatePage;
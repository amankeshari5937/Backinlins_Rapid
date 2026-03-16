import React from "react";
import Head from "next/head";
import Footer from "@/components/CommonComponents/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/CommonComponents/Navbar";
import ReviewCards from "@/components/Home/ReviewCards";
import Why from "@/components/Home/Why-us";
import TestimonialSlider from "@/components/Home/testimonials";
import RapidAutoShipping from "@/components/Home/HowItWorks";
import USAStates from "@/components/Home/Statesmap";
import StatsSection from "@/components/Home/StatsSection";
import ShippingCostTable from "@/components/Home/HowMuchDoesItCost";
import FAQSection from "@/components/Home/FAQSection";
import BlogList from "@/components/Home/BlogsSection";
import TwoPartSection from "@/components/Home/HowCostisCalculated";
import HoverCardSection from "@/components/Home/HoverCard";
import CardSection from "@/components/Home/industry";
import Why_2 from "@/components/Home/why_2";
import Affordable from "@/components/Home/affordable";
import AutoShippingComponentGuaranteed from "@/components/Home/gurrantey";
import AutoTransportSite from "@/components/Home/More-about";

function index() {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}`;
  return (
    <>
      <Head>
        <title> Rapid Auto Shipping | Best Auto Shipping Company</title>
        <meta
          name="description"
          content="Get an instant express car shipping estimate by calling (833) 233-4447. We are the number one top-rated auto shipping company in the USA."
        />
        <meta
          name="title"
          content="Rapid Auto Shipping | Best Auto Shipping Company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="auto shipping, car transport, vehicle shipping, Rapid Auto Shipping"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rapid Auto Shipping" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Rapid Auto Shipping - Reliable Car Transport Services"
        />
        <meta
          property="og:description"
          content="Fast and reliable auto shipping services across the USA. Get instant quotes and book your car transport with Rapid Auto Shipping."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rapidautoshipping.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1742465397/rapid-home/why-us.webp"
        />

        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_75,w_480/v1749284992/Rapid-auto-shipping-usa_br9gua.webp"
          media="(max-width: 768px)"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rapid Auto Shipping - Auto Transport Company",
            url: "https://rapidautoshipping.com/",
            description:
              "Rapid Auto Shipping provides reliable and affordable auto transport services across the United States with offices in Horsham, Gulf Shores, and New Castle. Get instant quotes today.",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://rapidautoshipping.com/#organization",
                name: "Rapid Auto Shipping",
                url: "https://rapidautoshipping.com/",
                logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1744702259/rapid-home/Rapid-Auto-Shipping.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-833-233-4447",
                  contactType: "Customer Service",
                  areaServed: "US",
                  availableLanguage: ["English"],
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
                "@id": "https://rapidautoshipping.com/#localbusiness-Horsham",
                name: "Rapid Auto Shipping - Horsham",
                url: "https://rapidautoshipping.com/",
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
                openingHoursSpecification: [
                  {
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
                ],
                parentOrganization: {
                  "@type": "Organization",
                  "@id": "https://rapidautoshipping.com/#organization",
                },
                description:
                  "Rapid Auto Shipping’s Horsham office, offering professional auto transport services nationwide.",
              },
              {
                "@type": "LocalBusiness",
                "@id":
                  "https://rapidautoshipping.com/#localbusiness-GulfShores",
                name: "Rapid Auto Shipping - Gulf Shores",
                url: "https://rapidautoshipping.com/",
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
                openingHoursSpecification: [
                  {
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
                ],
                parentOrganization: {
                  "@type": "Organization",
                  "@id": "https://rapidautoshipping.com/#organization",
                },
                description:
                  "Rapid Auto Shipping’s Gulf Shores office, providing reliable vehicle shipping across the U.S.",
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://rapidautoshipping.com/#localbusiness-NewCastle",
                name: "Rapid Auto Shipping - New Castle",
                url: "https://rapidautoshipping.com/",
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
                  latitude: 39.6621,
                  longitude: -75.5668,
                },
                openingHoursSpecification: [
                  {
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
                ],
                parentOrganization: {
                  "@type": "Organization",
                  "@id": "https://rapidautoshipping.com/#organization",
                },
                description:
                  "Rapid Auto Shipping’s New Castle office, specializing in nationwide auto transport services.",
              },
              {
                "@type": "Service",
                serviceType: "Auto Transport",
                provider: {
                  "@type": "Organization",
                  "@id": "https://rapidautoshipping.com/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                description:
                  "Nationwide auto transport services including open and enclosed car shipping, motorcycle transport, and more.",
                offers: {
                  "@type": "Offer",
                  url: "https://rapidautoshipping.com/services/car-shipping-calculator",
                  priceCurrency: "USD",
                  description:
                    "Instant auto shipping quotes for reliable vehicle transport.",
                },
              },
            ],
          })}
        </script>

        {/* Example Script Tag (e.g., Google Analytics) */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </script> */}

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Navbar />
      <Header />
      <ReviewCards />
      <Why />
      <TestimonialSlider />
      <ShippingCostTable />
      <RapidAutoShipping />
      <Affordable />
      <AutoShippingComponentGuaranteed />
      <USAStates />
      <HoverCardSection />
      <TwoPartSection />
      <Why_2 />
      <StatsSection />
      <BlogList />
      <FAQSection />
      <CardSection />
      <AutoTransportSite />
      <Footer />
    </>
  );
}

export default index;

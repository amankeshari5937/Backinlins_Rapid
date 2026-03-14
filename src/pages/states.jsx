import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import ShippingCostTable from "@/components/State-main/HowMuchDoesItCost";
import StatesTable from "@/components/State-main/StateTable";
import TestimonialSwiper from "@/components/Home/swipper";
import HoverCardSection from "@/components/Home/HoverCard";
import Head from "next/head";
import RoutesList from "@/components/State-main/TopRoutes";

// Server-side data fetching
export async function getServerSideProps() {
  try {
    // Replace with your actual API endpoint
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/state`
    );
    const data = await response.json();

    return {
      props: {
        apiData: data, // Pass fetched data to the page
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        apiData: null, // Handle error case
      },
    };
  }
}

function States({ apiData }) {
  // Define loading and error states
  const isLoading = !apiData; // Determine if data is unavailable
  const hasError = !apiData; // Determine if there's an error (same condition as isLoading in this case)

  const canonicalUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/states`;

  return (
    <>
      <Head>
        <title>States We Serve for Auto Shipping | Rapid Auto Shipping</title>
        <meta
          name="description"
          content="Explore the states we serve for auto shipping with Rapid Auto Shipping. Get detailed shipping costs and testimonials."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
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
                      "@id": "https://www.rapidautoshipping.com/states",
                      name: "States We Serve for Auto Shipping",
                    },
                  },
                ],
              },
            ]),
          }}
        />

        <link rel="canonical" href={canonicalUrl} />

        <title>Vehicle Shipping Services in All U.S. States | Rapid Auto Shipping</title>
        <meta name="description" content="Explore auto transport services across all 50 states. Rapid Auto Shipping provides secure, fast, and affordable vehicle shipping solutions tailored to every U.S. state." />
      </Head>
      <Navbar />
      {isLoading || hasError ? (
        <div className="text-center py-10 text-red-500">
          Failed to load data. Please try again later.
        </div>
      ) : (
        <>
          <StatesTable data={apiData} />
          <ShippingCostTable data={apiData} />
          <RoutesList/>
          <TestimonialSwiper data={apiData} />
        </>
      )}
      <Footer />
    </>
  );
}

export default States;

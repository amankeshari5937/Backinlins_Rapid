import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import NodeCache from "node-cache";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";

// Initialize cache
const cache = new NodeCache({ stdTTL: 3600 });

// Static props for server-side fetching
export async function getStaticProps() {
  const cacheKey = "carriers";
  let carriers = cache.get(cacheKey);

  if (!carriers) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auto_transport_carrier?limit=20`,
        {
          headers: { "Cache-Control": "max-age=3600" },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch carriers data");
      carriers = await response.json();
      cache.set(cacheKey, carriers);
    } catch (error) {
      console.error("Error fetching carriers data:", error);
      return { props: { carriers: [], error: error.message }, revalidate: 60 };
    }
  }

  return { props: { carriers }, revalidate: 3600 };
}

export default function AutoTransportCarriers({ carriers, error }) {
  // Define slugs to exclude
  const excludedSlugs = [
    "enclosed-vehicle-transport-inc",
    "a-ok-auto-transport",
    "west-coast-auto-transport-service-inc",
    "fifth-wheel-llc",
    "aa-motorcycle-transport",
    "top-line-service-inc",
    "secure-auto-transport",
    "affordable-auto-transport-llc",
    "quality-car-move",
    "ok-auto-carrier",
    "advanced-car-shipping",
    "reliable-carriers-inc",
    "us-auto-transport-llc",
    "direct-express-auto-transport",
    "affordable-auto-transport-logistics-l",
    "f1-auto-transport",
    "coast-to-coast-auto-transport",
    "shipping-experts",
    "reliable-auto-transport-lauderdale",
    "premium-auto-movers",
    "the-car-carriage",
  ];

  return (
    <div className="font-poppins">
      {/* SEO Metadata */}
      <Head>
        <title>Ratings and Reviews of Auto Transport Carriers</title>
        <meta
          name="description"
          content="Find trusted auto transport carriers. Compare licensed, insured car shipping companies with reviews for safe, reliable vehicle transport."
        />
        <meta
          name="keywords"
          content="Explore top auto shipping companies, reviews, and ratings to make an informed choice. Ensure safe, timely auto transport with trusted providers."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://rapidautoshipping.com/auto-transport-carriers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="088dfdd0832860ec" />
        <meta
          name="google-site-verification"
          content="MD6jbJ4iZfjq-IIzuv20KZWbWZwJC6xsh9X2fMj3Vjo"
        />
        <link rel="shortcut icon" href="/assets/images/favicon_rapid.ico" />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dz2zovmf1/image/upload/q_auto,f_auto,w_1920/v1745309280/auto-tranport-carrier/auto-transport-carrier-background.webp"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <style>{`
          @font-face {
            font-family: 'Poppins';
            src: url('/fonts/Poppins-Regular.woff2') format('woff2');
            font-display: swap;
          }
          .hero { background: #000; color: #fff; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Rapid Auto Shipping",
                url: "https://www.rapidautoshipping.com/",
                "@id": "https://rapidautoshipping.com/#website",
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://rapidautoshipping.com/#organization",
                name: "Rapid Auto Shipping",
                legalName: "Rapid Auto Shipping",
                alternateName: "Rapid Auto Shipping",
                url: "https://www.rapidautoshipping.com/",
                founder: "Johny Taylor",
                foundingDate: "2016",
                sameAs: [
                  "https://www.rapidautoshipping.com",
                  "https://twitter.com/ShippingRapid",
                  "https://www.facebook.com/Rapidautoshipping",
                ],
                description:
                  "One of the leading auto shipping companies in the nation. Trusted Auto Transport Company in US. Affordable Car Shipping Services Get Quote Now.",
                logo: {
                  "@type": "ImageObject",
                  url: "https://rapidautoshipping.com/assets/images/Untitled-1-Recovered.png",
                },
              },
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
                      "@id":
                        "https://rapidautoshipping.com/auto-transport-carriers",
                      name: "Auto Transport Carriers",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </Head>

      {/* External Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RFX0E04TZE"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="/scripts/ga.js"
      />
      <Script
        id="clarity"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pfdxma1amt");
          `,
        }}
      />

      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] text-white flex items-center justify-center overflow-hidden">
          <Image
            src="/images/auto-transport-carrier-background.webp"
            alt="Auto Transport Carrier Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rapidcolor">
                  Auto Transport Carriers
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                Find trusted vehicle shipping specialists with verified reviews
                and ratings
              </p>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl font-extrabold mb-6 tracking-tight text-center">
            <span className="text-black">
              Auto Transport Carriers & Reviews
            </span>
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Transporting a vehicle is a delicate process that requires
              attention to safety, reliability, and professionalism. If you're
              looking for the way to move your vehicle, nothing to worry about,
              you are not alone. It is important to content a reliable transport
              carrier who is able to defend your Vehicle from wear and tear and
              damage do not worry, you are not alone. It is important to content
              a reliable transport carrier who is able to defend your Vehicle
              from wear and tear and damage, as well as to save time and money.
              We have listed auto transport carriers on this web page including
              reviews.
            </p>
            <p>
              One effective way to find a trustworthy car shipping company is by
              reviewing customer testimonials and examining the company's track
              record and how long they have been in the business. Does they have
              necessary licenses and compliances? These reviews provide an
              overview of the company's reputation, service reliability, and
              customer satisfaction.
            </p>
            <p>
              To make things easier, our team of skilled professionals has been
              able to obtain and analyze the latest data concerning the most
              reliable Auto shipping companies. We've made an intense effort to
              find their services, the price permutations, and the eligibility
              of their customers. We’ve evaluated their services, pricing
              structures, and customer reviews to curate a list of the best
              options in USA.
            </p>
            <p>
              Make an informed decision with our expert insights, and enjoy a
              smooth, reliable auto transport experience. Let us help you choose
              the right provider for your vehicle's journey.
            </p>
          </div>
        </section>

        {/* Carriers Section */}
        <section className="mx-auto px-4 py-8">
          {error ? (
            <p className="text-center text-lg text-red-500">Error: {error}</p>
          ) : !carriers ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} height={100} />
              ))}
            </div>
          ) : carriers.length === 0 ? (
            <p className="text-center text-lg">No carriers available</p>
          ) : (
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {carriers
                  .filter((carrier) => !excludedSlugs.includes(carrier.slug))
                  .map((carrier, index) => (
                    <Link
                      key={index}
                      href={`${process.env.NEXT_PUBLIC_FRONT_URL}/auto-transport-carriers/${carrier.slug}`}
                    >
                      <div className="border-2 border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 hover:bg-rapidcolor hover:text-white hover:border-rapidcolor hover:shadow-lg h-full flex items-center justify-center">
                        <span className="font-medium text-lg">
                          {carrier.company_name}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

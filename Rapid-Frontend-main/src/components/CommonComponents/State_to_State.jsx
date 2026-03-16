import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
// CRITICAL: Only import above-the-fold components directly
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import Header from "@/components/State-to-State/Header";

// ─── SKELETON LOADERS ────────────────────────────────────────────────────────
// Each skeleton reserves the approximate height of its component so the layout
// never shifts when the real component hydrates (fixes CLS).

const SkeletonBlock = ({ height = 400 }) => (
  <div
    aria-hidden="true"
    style={{
      minHeight: height,
      background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.4s infinite",
      borderRadius: 8,
      margin: "8px 0",
    }}
  />
);

// Inject the shimmer keyframe once (SSR-safe inline style)
const ShimmerStyle = () => (
  <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
);

// ─── DYNAMIC IMPORTS WITH SKELETONS (fixes CLS) ──────────────────────────────
// ssr: false ONLY for components that are purely decorative / need browser APIs
// (e.g. Swiper touch events, YouTube iframe). All content-bearing components
// keep SSR enabled so Googlebot can crawl their text (fixes ssr:false issue).

const FAQSection = dynamic(
  () => import("@/components/State-to-State/FAQSection"),
  { loading: () => <SkeletonBlock height={500} /> },
);
const CaliforniaMissouri = dynamic(
  () => import("@/components/State-to-State/FifthComponent"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const CarShippingEstimate = dynamic(
  () => import("@/components/State-to-State/FirstText"),
  { loading: () => <SkeletonBlock height={350} /> },
);
const AutoTransportServices = dynamic(
  () => import("@/components/State-to-State/FourthComponent"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const ReviewCards = dynamic(() => import("../../components/Home/ReviewCards"), {
  loading: () => <SkeletonBlock height={300} />,
});

// ✅ ssr: false kept ONLY because Swiper requires touch/DOM APIs unavailable in Node
// The skeleton ensures no layout shift while JS loads on the client
const ReviewSwiper = dynamic(
  () => import("../../components/State-to-State/swipper.jsx"),
  {
    ssr: false,
    loading: () => <SkeletonBlock height={280} />,
  },
);

const AutoShipping = dynamic(
  () => import("@/components/State-to-State/SecondComponent"),
  { loading: () => <SkeletonBlock height={450} /> },
);
const QSection = dynamic(
  () => import("@/components/State-to-State/SecondText"),
  { loading: () => <SkeletonBlock height={350} /> },
);
const ShippingBenefits = dynamic(
  () => import("@/components/city-to-city/ShippingBenifits"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const ShippingService = dynamic(
  () => import("@/components/State-to-State/ShippingService"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const ShipmentFactors = dynamic(
  () => import("@/components/State-to-State/SixthComponent"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const AutoTransportTable = dynamic(
  () => import("@/components/State-to-State/TableComponent"),
  { loading: () => <SkeletonBlock height={300} /> },
);

// ✅ ssr: false kept ONLY because YouTube iframe APIs require the browser DOM
const YoutubeVideo = dynamic(
  () => import("@/components/State-to-State/YoutubeVideo"),
  {
    ssr: false,
    loading: () => <SkeletonBlock height={450} />,
  },
);

const ZipTable1 = dynamic(
  () => import("@/components/State-to-State/ZipCode1"),
  { loading: () => <SkeletonBlock height={300} /> },
);
const ZipTable2 = dynamic(
  () => import("@/components/State-to-State/ZipCode2"),
  { loading: () => <SkeletonBlock height={300} /> },
);
const AutoShippingAdvantages = dynamic(
  () => import("@/components/CommonComponents/Advantage"),
  { loading: () => <SkeletonBlock height={400} /> },
);
const HowItWorks = dynamic(() => import("../State-to-State/Howitworks"), {
  loading: () => <SkeletonBlock height={450} />,
});

// ─── META TAG PARSER ─────────────────────────────────────────────────────────
function parseMetaTags(meta) {
  if (!meta) return [];
  if (typeof meta === "string") {
    const trimmed = meta.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        return JSON.parse(trimmed);
      } catch {
        return [{ name: "description", content: trimmed }];
      }
    }
    return [{ name: "description", content: trimmed }];
  }
  if (Array.isArray(meta)) return meta;
  if (typeof meta === "object") {
    return Object.entries(meta).map(([name, content]) => ({ name, content }));
  }
  return [];
}

// ─── LCP IMAGE URL BUILDER (fixes broken preload URL) ────────────────────────
/**
 * Safely builds a Cloudinary optimised URL.
 * Returns null if map_image is missing or doesn't contain "/upload/" so we
 * never emit a broken <link rel="preload"> tag.
 */
function buildLcpImageUrl(mapImage) {
  if (!mapImage || !mapImage.includes("/upload/")) return null;

  const [base, path] = mapImage.split("/upload/");
  if (!path) return null; // guard against trailing-slash edge case

  return `${base}/upload/f_auto,q_auto,w_800/${path}`;
}

// ─── SCHEMA GENERATOR ────────────────────────────────────────────────────────
function generateDynamicSchema(data, slug) {
  const statePair = slug
    .split("-to-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" to ");
  const baseUrl = "https://www.rapidautoshipping.com";
  const pageUrl = `${baseUrl}/${slug}`;
  const metaDescription =
    data?.meta?.description ||
    `Reliable and affordable auto shipping services from ${statePair} provided by Rapid Auto Shipping.`;
  const imageUrl = data?.image || data?.map_image || "";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Auto Shipping from ${statePair} | Rapid Auto Shipping`,
        description: metaDescription,
        isPartOf: { "@type": "WebSite", "@id": `${baseUrl}/#website` },
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
          "Rapid Auto Shipping provides professional auto transport services across the United States.",
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
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `${statePair} Auto Shipping`,
        description: `Professional auto shipping from ${statePair} — safe and timely vehicle transport with Rapid Auto Shipping.`,
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
          price: "0.00",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
    ],
  };
}

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
function StateToState({ state_to_state }) {
  const slug = state_to_state?.slug || "default";

  const capitalizedSlug = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // ── Fix: deduplicate meta tags so description never appears twice ──────────
  const rawMetaTags = parseMetaTags(state_to_state?.meta);
  const metaTags = rawMetaTags.filter(
    (tag) => tag.name !== "description" && tag.property !== "og:description",
  );

  // ── Fix: safe canonical — fallback to empty string, never undefined ────────
  const frontUrl =
    process.env.NEXT_PUBLIC_FRONT_URL || "https://www.rapidautoshipping.com";
  const canonicalUrl = `${frontUrl}/${slug}`;

  // ── Fix: safe LCP image URL ────────────────────────────────────────────────
  const lcpImageUrl = buildLcpImageUrl(state_to_state?.map_image);

  // ── Fix: only generate schema when data is ready ──────────────────────────
  const dynamicSchema = state_to_state?.slug
    ? generateDynamicSchema(state_to_state, slug)
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": frontUrl, name: "Home" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": canonicalUrl,
          name: `Car Shipping ${capitalizedSlug}`,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <ShimmerStyle />

        {/* ───────────────── TITLE ───────────────── */}
        <title>
          {`${state_to_state?.from} to ${state_to_state?.to} Auto Shipping | Rapid Auto Shipping`}
        </title>

        {/* ───────────────── PRIMARY META ───────────────── */}
        <meta
          name="description"
          content={`Trust Rapid Auto Shipping for fast and affordable ${state_to_state?.from} to ${state_to_state?.to} auto shipping. Get an instant quote. Door-to-door service. No hassles. Book now!`}
        />

        <meta
          name="keywords"
          content={`${state_to_state?.from} to ${state_to_state?.to} auto shipping, car transport ${state_to_state?.from} ${state_to_state?.to}, vehicle shipping ${state_to_state?.from} to ${state_to_state?.to}, auto transport service`}
        />

        {/* ───────────────── CANONICAL ───────────────── */}
        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content={`${state_to_state?.from} to ${state_to_state?.to} Auto Shipping | Rapid Auto Shipping`}
        />

        <meta
          property="og:description"
          content={`Trust Rapid Auto Shipping for fast and affordable ${state_to_state?.from} to ${state_to_state?.to} auto shipping. Get an instant quote. Door-to-door service. No hassles. Book now!`}
        />

        <meta
          property="og:image"
          content={
            lcpImageUrl ||
            "https://res.cloudinary.com/dz2zovmf1/image/upload/v1745397312/icons/Rapid-Auto-Shipping.webp"
          }
        />

        <meta
          property="og:image:alt"
          content={`${state_to_state?.from} to ${state_to_state?.to} Auto Shipping`}
        />

        {/* ───────────────── LCP PRELOAD ───────────────── */}
        {lcpImageUrl && (
          <link
            rel="preload"
            as="image"
            href={lcpImageUrl}
            fetchpriority="high"
          />
        )}

        {/* ───────────────── SAFE DYNAMIC META (NO DUPLICATES) ───────────────── */}
        {metaTags
          .filter(
            (tag) =>
              tag.name !== "description" &&
              tag.property !== "og:description" &&
              tag.name !== "twitter:description" &&
              tag.property !== "og:title" &&
              tag.name !== "twitter:title" &&
              tag.property !== "og:image" &&
              tag.name !== "twitter:image",
          )
          .map((tag, index) => {
            const key = tag.name || tag.property || `meta-${index}`;
            return tag.name ? (
              <meta key={key} name={tag.name} content={tag.content} />
            ) : tag.property ? (
              <meta key={key} property={tag.property} content={tag.content} />
            ) : null;
          })}

        {/* ───────────────── STRUCTURED DATA ───────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {dynamicSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicSchema) }}
          />
        )}
      </Head>

      {/* ── ABOVE THE FOLD — direct imports, no lazy loading ── */}
      <Navbar data={state_to_state} />
      <Header data={state_to_state} />

      {/* ── BELOW THE FOLD — lazy loaded with skeleton placeholders ── */}
      <ShippingBenefits data={state_to_state} />
      <ReviewSwiper data={state_to_state} />
      <AutoShipping data={state_to_state} />
      <AutoShippingAdvantages />
      <AutoTransportTable data={state_to_state} />
      <YoutubeVideo data={state_to_state} />
      <CarShippingEstimate data={state_to_state} />
      <HowItWorks data={state_to_state} />
      <AutoTransportServices data={state_to_state} />
      <ReviewCards data={state_to_state} />
      <ShippingService data={state_to_state} />
      <ShipmentFactors data={state_to_state} />
      <QSection data={state_to_state} />
      <ZipTable1 data={state_to_state} />
      <ZipTable2 data={state_to_state} />
      <CaliforniaMissouri data={state_to_state} />
      <FAQSection data={state_to_state} />
      <Footer data={state_to_state} />
    </>
  );
}

export default StateToState;

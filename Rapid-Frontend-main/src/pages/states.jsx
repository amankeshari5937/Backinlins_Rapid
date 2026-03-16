"use client";

import Link from "next/link";
import TransportForm from "@/components/CommonComponents/Form";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import ShippingCostTable from "@/components/Cars/FifthComponent";
import Head from "next/head";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const popularStates = [
  {
    href: "/states/pennsylvania",
    img: null,
    badge: "#1 Most Demand",
    title: "Pennsylvania Auto Transport",
    desc: "Pennsylvania is vital for snowbird vehicle shipping, with Philadelphia and Pittsburgh as key points for Florida shipments via I-95. State law requires vehicle inspection within 10 days of purchase/transfer, plus emissions testing in specific counties.",
    cta: "View PA Rates & Routes",
  },
  {
    href: "/states/florida",
    img: null,
    alt: null,
    badge: "#2 Most Shipped",
    title: "Florida Auto Transport",
    desc: "Florida is the top state for vehicle transport, driven by demand from 'snowbirds,' retirees, and online car buyers. Vehicles often come from New York, New Jersey, and the Midwest. New residents must register vehicles within 10 days of establishing residency.",
    cta: "View FL Rates & Routes",
  },
  {
    href: "/states/california",
    img: null,
    badge: "#3 Highest Volume",
    title: "California Auto Transport",
    desc: "Highest overall shipping volume for both origin and destination. CARB smog compliance required for out-of-state vehicles, our California guide covers BAR referee stations, exemptions, and the 20-day registration deadline. Major corridors include CA to TX, FL, and NY.",
    cta: "View CA Rates & Routes",
  },
  {
    href: "/states/texas-tx",
    img: null,
    badge: "#4 Fastest Growing",
    title: "Texas Auto Transport",
    desc: "Texas, with no state income tax, attracts companies and families from high-cost states like California, Illinois, and New York. Key hubs are Dallas-Fort Worth, Houston, Austin, and San Antonio. The state also ended its vehicle inspection requirement in 2025.",
    cta: "View TX Rates & Routes",
  },
  {
    href: "/states/new-york",
    img: null,
    badge: null,
    title: "New York Auto Transport",
    desc: "New York is a top state for moving, often to Florida for retirement. Arranging vehicle pickup in NYC requires specialized planning due to narrow streets and strict parking. New York-registered vehicles need a state inspection within 10 days of registration.",
    cta: "View NY Rates & Routes",
  },
  {
    href: "/states/georgia",
    img: null,
    badge: null,
    title: "Georgia Auto Transport",
    desc: "Atlanta, a major Southeast auto transport and logistics hub, sees high vehicle shipments, partly due to Fort Benning and Fort Stewart. Georgia is a vital transport corridor between the Northeast and Florida. Emissions testing is mandatory in metro Atlanta.",
    cta: "View GA Rates & Routes",
  },
  {
    href: "/states/arizona",
    img: null,
    badge: null,
    title: "Arizona Auto Transport",
    desc: "Arizona, second to Florida, is a popular winter destination, drawing seasonal visitors to Phoenix and Scottsdale from October through December. New residents must pay a Vehicle License Tax (VLT) upon initial registration. Emissions testing is only required in Maricopa and Pima counties.",
    cta: "View AZ Rates & Routes",
  },
  {
    href: "/states/illinois",
    img: null,
    badge: null,
    title: "Illinois Auto Transport",
    desc: "Chicago, a central Midwest auto transport hub, has substantial outbound shipping volume, notably to Florida, Texas, and Arizona, aided by its efficient cross-country carrier routing. Chicago metro area residents must comply with mandatory emissions testing.",
    cta: "View IL Rates & Routes",
  },
  {
    href: "/states/north-carolina",
    img: null,
    badge: null,
    title: "North Carolina Auto Transport",
    desc: "North Carolina is rapidly growing, attracting corporate relocations, particularly to Charlotte and Raleigh-Durham, often from the Northeast. The state hosts Fort Liberty (formerly Fort Bragg). All vehicles are required to undergo a mandatory annual state safety and emissions inspection.",
    cta: "View NC Rates & Routes",
  },
  {
    href: "/states/new-jersey",
    img: null,
    badge: null,
    title: "New Jersey Auto Transport",
    desc: "New Jersey, a high-density state, ships large volumes, mainly to Florida and the Carolinas. Port Newark is key for international vehicle imports. Clear communication regarding pickup is essential for efficient carrier service in the state's dense urban regions.",
    cta: "View NJ Rates & Routes",
  },
  {
    href: "/states/ohio",
    img: null,
    badge: null,
    title: "Ohio Auto Transport",
    desc: "Ohio is a central carrier routing hub, key for shipping to the South, driven by high outbound volume from Columbus, Cleveland, and Cincinnati, and strong dealer demand from its active auto auction market. E-check emissions testing is only required in select counties.",
    cta: "View OH Rates & Routes",
  },
  {
    href: "/states/virginia-va",
    img: null,
    badge: null,
    title: "Virginia Auto Transport",
    desc: "Virginia, with major military bases (Norfolk Naval Base, Fort Belvoir, Quantico) and the Northern Virginia corporate hub, has high shipping activity, especially due to PCS military and corporate relocations. Note: An annual state safety inspection is mandatory for all vehicles.",
    cta: "View VA Rates & Routes",
  },
];

const regionGroups = [
  {
    label: "Northeast & Mid-Atlantic",
    states: [
      {
        abbr: "PA",
        name: "Pennsylvania",
        href: "/states/pennsylvania",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773466656/pennsylvania_z7o7op.png",
        alt: "Pennsylvania",
      },
      {
        abbr: "CT",
        name: "Connecticut",
        href: "/states/connecticut",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396768/connecticut_bhvz8f.png",
        alt: "Connecticut",
      },
      {
        abbr: "DE",
        name: "Delaware",
        href: "/states/delaware",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396767/delaware_ps03mu.png",
        alt: "Delaware",
      },
      {
        abbr: "ME",
        name: "Maine",
        href: "/states/maine",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396767/maine_w3sodn.png",
        alt: "Maine",
      },
      {
        abbr: "MD",
        name: "Maryland",
        href: "/states/maryland",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396767/maryland_aoct3r.png",
        alt: "Maryland",
      },
      {
        abbr: "MA",
        name: "Massachusetts",
        href: "/states/massachusetts",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396767/massachusetts_m4ya3j.png",
        alt: "Massachusetts",
      },
      {
        abbr: "NH",
        name: "New Hampshire",
        href: "/states/new-hampshire",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396767/new-hampshire_gmqdgg.png",
        alt: "New Hampshire",
      },
      {
        abbr: "NJ",
        name: "New Jersey",
        href: "/states/new-jersey",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/new-jersey_sb7spt.png",
        alt: "New Jersey",
      },
      {
        abbr: "NY",
        name: "New York",
        href: "/states/new-york",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/new-york_olnggk.png",
        alt: "New York",
      },

      {
        abbr: "RI",
        name: "Rhode Island",
        href: "/states/rhode-island",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773466656/rhode-island_pehsto.png",
        alt: null,
      },
      {
        abbr: "VT",
        name: "Vermont",
        href: "/states/vermont-vt",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773466656/vermont_fphjn4.png",
        alt: "Vermont",
      },
    ],
  },
  {
    label: "Southeast & South",
    states: [
      {
        abbr: "AL",
        name: "Alabama",
        href: "/states/alabama",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/alabama_fmx58m.png",
        alt: "Alabama",
      },
      {
        abbr: "AR",
        name: "Arkansas",
        href: "/states/arkansas",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/arkansas_jtcsr6.png",
        alt: "Arkansas",
      },
      {
        abbr: "FL",
        name: "Florida",
        href: "/states/florida",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/florida_iu0ewj.png",
        alt: "Florida",
        highlight: true,
      },
      {
        abbr: "GA",
        name: "Georgia",
        href: "/states/georgia",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/georgia_xp7gcv.png",
        alt: "Georgia",
      },
      {
        abbr: "KY",
        name: "Kentucky",
        href: "/states/kentucky",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/kentucky_kg3ud8.png",
        alt: "Kentucky",
      },
      {
        abbr: "LA",
        name: "Louisiana",
        href: "/states/louisiana",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236718/louisiana_k06pyg.png",
        alt: "Louisiana",
      },
      {
        abbr: "MS",
        name: "Mississippi",
        href: "/states/mississippi",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/mississippi_gdcfj5.png",
        alt: "Mississippi",
      },
      {
        abbr: "NC",
        name: "North Carolina",
        href: "/states/north-carolina",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/north-carolina_hfczqp.png",
        alt: "North Carolina",
      },
      {
        abbr: "SC",
        name: "South Carolina",
        href: "/states/south-carolina",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/south-carolina_qx66cq.png",
        alt: "South Carolina",
      },
      {
        abbr: "TN",
        name: "Tennessee",
        href: "/states/tennessee-tn",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/tennessee_fltmpy.png",
        alt: "Tennessee",
      },
      {
        abbr: "VA",
        name: "Virginia",
        href: "/states/virginia-va",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/virginia_xwzb33.png",
        alt: "Virginia",
      },
      {
        abbr: "WV",
        name: "West Virginia",
        href: "/states/west-virginia-wv",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/west-virginia_bd6gef.png",
        alt: "West Virginia",
      },
    ],
  },
  {
    label: "Midwest & Central",
    states: [
      {
        abbr: "IL",
        name: "Illinois",
        href: "/states/illinois",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236716/illinois_uybhsd.png",
        alt: "Illinois",
      },
      {
        abbr: "IN",
        name: "Indiana",
        href: "/states/indiana",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236716/indiana_ubyynn.png",
        alt: "Indiana",
      },
      {
        abbr: "IA",
        name: "Iowa",
        href: "/states/iowa",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773236717/lowa_emtbpl.png",
        alt: "Iowa",
      },
      {
        abbr: "KS",
        name: "Kansas",
        href: "/states/kansas",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/kansas_saqycl.png",
        alt: "Kansas",
      },
      {
        abbr: "MI",
        name: "Michigan",
        href: "/states/michigan",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/michigan_jqiqne.png",
        alt: "Michigan",
      },
      {
        abbr: "MN",
        name: "Minnesota",
        href: "/states/minnesota",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/minnesota_wyonzg.png",
        alt: "Minnesota",
      },
      {
        abbr: "MO",
        name: "Missouri",
        href: "/states/missouri",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/missouri_dpazyv.png",
        alt: "Missouri",
      },
      {
        abbr: "NE",
        name: "Nebraska",
        href: "/states/nebraska",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/nebraska_uvrvrb.png",
        alt: "Nebraska",
      },
      {
        abbr: "ND",
        name: "North Dakota",
        href: "/states/north-dakota",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/north-dakota_pwt4mo.png",
        alt: "North Dakota",
      },
      {
        abbr: "OH",
        name: "Ohio",
        href: "/states/ohio",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/ohio_xeblan.png",
        alt: "Ohio",
      },
      {
        abbr: "SD",
        name: "South Dakota",
        href: "/states/south-dakota",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/south-dakota_gnmbtc.png",
        alt: "South Dakota",
      },
      {
        abbr: "WI",
        name: "Wisconsin",
        href: "/states/wisconsin-wi",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/wisconsin_yxagos.png",
        alt: "Wisconsin",
      },
    ],
  },
  {
    label: "Southwest, Mountain & Plains",
    states: [
      {
        abbr: "AZ",
        name: "Arizona",
        href: "/states/arizona",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/arizona_m8mqsn.png",
        alt: "Arizona",
      },
      {
        abbr: "CO",
        name: "Colorado",
        href: "/states/colorado",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/colorado_ihdp7r.png",
        alt: "Colorado",
      },
      {
        abbr: "ID",
        name: "Idaho",
        href: "/states/idaho",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301039/idaho_yryrd4.png",
        alt: "Idaho",
      },
      {
        abbr: "MT",
        name: "Montana",
        href: "/states/montana",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/montana_nwitui.png",
        alt: "Montana",
      },
      {
        abbr: "NV",
        name: "Nevada",
        href: "/states/nevada",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/nevada_m5e7jv.png",
        alt: "Nevada",
      },
      {
        abbr: "NM",
        name: "New Mexico",
        href: "/states/new-mexico",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773301040/new-mexico_jugkd3.png",
        alt: "New Mexico",
      },
      {
        abbr: "OK",
        name: "Oklahoma",
        href: "/states/oklahoma",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/oklahoma_xdnywx.png",
        alt: null,
      },
      {
        abbr: "TX",
        name: "Texas",
        href: "/states/texas-tx",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396768/texas_ywmhv2.png",
        alt: "Texas",
        highlight: true,
      },
      {
        abbr: "UT",
        name: "Utah",
        href: "/states/utah-ut",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/utah_g9ltks.png",
        alt: "Utah",
      },
      {
        abbr: "WY",
        name: "Wyoming",
        href: "/states/wyoming-wy",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396768/wyoming_cpxjek.png",
        alt: "Wyoming",
      },
    ],
  },
  {
    label: "West Coast",
    states: [
      {
        abbr: "CA",
        name: "California",
        href: "/states/california",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396768/california_s9y2vr.png",
        alt: "California",
        highlight: true,
      },
      {
        abbr: "OR",
        name: "Oregon",
        href: "/states/oregon",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/oregon_zetvev.png",
        alt: "Oregon",
      },
      {
        abbr: "WA",
        name: "Washington",
        href: "/states/washington-wa",
        img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1773396769/washington_o4nbbl.png",
        alt: "Washington",
      },
    ],
  },
];

const pricingRows = [
  {
    distance: "0 – 500 miles",
    time: "1 – 2 days",
    open: "$350 – $550",
    enclosed: "$550 – $850",
    example: "NJ → VA, IL → MI",
  },
  {
    distance: "500 – 1,500 miles",
    time: "2 – 4 days",
    open: "$550 – $950",
    enclosed: "$850 – $1,350",
    example: "NY → FL, TX → GA",
  },
  {
    distance: "1,500 – 2,500 miles",
    time: "4 – 7 days",
    open: "$900 – $1,350",
    enclosed: "$1,300 – $1,800",
    example: "IL → AZ, PA → TX",
  },
  {
    distance: "2,500+ miles",
    time: "7 – 10 days",
    open: "$1,200 – $1,800",
    enclosed: "$1,700 – $2,500",
    example: "CA → FL, NY → CA",
  },
];

const topRoutes = [
  {
    href: "/state-to-state/new-york-to-florida",
    label: "New York to Florida",
    meta: "1,267 mi · 3-5 days",
  },
  {
    href: "/state-to-state/california-to-texas",
    label: "California to Texas",
    meta: "1,584 mi · 3-5 days",
  },
  {
    href: "/state-to-state/california-to-florida",
    label: "California to Florida",
    meta: "2,706 mi · 6-9 days",
  },
  {
    href: "/state-to-state/arizona-to-washington",
    label: "Arizona to Washington",
    meta: "1,421 mi · 3-5 days",
  },
  {
    href: "/state-to-state/colorado-to-california",
    label: "Colorado to California",
    meta: "1,088 mi · 3-4 days",
  },
];

const bottomStats = [
  { icon: "🗺️", value: "50 States", label: "Full US Coverage" },
  { icon: "🚚", value: "10,000+", label: "Vehicles Shipped" },
  { icon: "⭐", value: "4.9 ★", label: "Average Rating" },
  { icon: "🛡️", value: "Fully Insured", label: "Door-to-Door" },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

function PopularCard({ href, img, alt, badge, title, desc, cta }) {
  return (
    <Link
      href={href}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF5722] hover:shadow-[0_8px_32px_rgba(255,87,34,0.08)] hover:-translate-y-1 flex flex-col"
    >
      {img && (
        <div className="w-full h-44 bg-slate-100 overflow-hidden">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {badge && (
          <div className="mb-2">
            <span className="text-xs font-semibold text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded">
              {badge}
            </span>
          </div>
        )}
        <h3 className="font-bold text-2xl text-slate-800 mb-2 transition-colors duration-200 group-hover:text-[#FF5722]">
          {title}
        </h3>
        <p className="text-xl text-slate-600 leading-relaxed mb-4 flex-1">
          {desc}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FF5722] transition-all duration-200 group-hover:gap-3">
          {cta} →
        </span>
      </div>
    </Link>
  );
}

function StateCompactCard({ abbr, name, href, highlight }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 p-4 border border-slate-200 rounded-xl bg-white hover:border-[#FF5722] hover:bg-orange-50 transition-all duration-200"
    >
      <div
        className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[13px] font-bold group-hover:bg-white flex-shrink-0 ${
          highlight ? "text-[#FF5722]" : "text-slate-400"
        }`}
      >
        {abbr}
      </div>
      <h3 className="text-[13px] font-semibold text-slate-700 group-hover:text-[#FF5722] transition-colors">
        {name}
      </h3>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StatesPage() {
  return (
    <>
      <Head>
        <title>
          Car Shipping in 50 States | Instant Quotes & Safe Delivery
        </title>
        <meta
          name="description"
          content="Rapid Auto Shipping manages professional vehicle logistics in 50 states. Check our dedicated local guides for safe, insured car shipping tailored for you."
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

        <link rel="canonical" href="https://rapidautoshipping.com/states" />
      </Head>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[30%] top-[10%] w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(255,87,34,0.07)_0%,transparent_60%)]" />
          <div className="absolute left-[10%] bottom-[20%] w-[400px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.05)_0%,transparent_60%)]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Background Image */}
        <div className="hidden md:flex absolute items-center justify-center md:right-[35%] inset-y-0 z-0">
          <Image
            src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1749284992/Rapid-auto-shipping-usa_br9gua.webp"
            alt="Rapid Auto Shipping USA"
            width={500}
            height={375}
            priority={false}
            fetchPriority="low"
            quality={75}
            sizes="(max-width: 768px) 0px, 500px"
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav
            className="text-[13px] text-slate-400 mb-7"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-slate-600 hover:text-[#FF5722] transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">States</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-10 items-start">
            {/* Left */}
            <div className="flex flex-col pt-2">
              <div className="inline-flex items-center gap-1.5 bg-[#FF5722]/10 border border-[#FF5722]/20 rounded-full px-3 py-1 mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] inline-block" />
                <span className="text-[#FF5722] text-[11px] font-bold tracking-widest uppercase">
                  All 50 States Covered
                </span>
              </div>

              <h1
                className="text-3xl lg:text-[42px] font-extrabold text-[#0F1A2E] leading-[1.12] tracking-tight mb-4
          backdrop-blur-sm bg-white/60 rounded-xl px-3 py-2 w-fit"
              >
                Car Shipping to{" "}
                <span className="text-[#FF5722]">All 50 States</span> — Rates,
                Routes &amp; Guides
              </h1>

              <p
                className="text-xl text-slate-700 leading-relaxed max-w-xl mb-7
          backdrop-blur-sm bg-white/60 rounded-xl px-3 py-2"
              >
                Moving your car across the country shouldn't be a headache!
                Whether you're making a big move to the sunny beaches of
                Florida, starting a new chapter with a job in Texas, or finally
                snagging that dream car from California, we make auto transport
                easy. We offer fully insured, door-to-door service with
                crystal-clear pricing and real-time tracking, so you always know
                where your vehicle is. Ready to get started? Just select your
                state below to check out local rates, typical transit times,
                popular routes, and what you'll need for registration.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2.5 mb-7">
                {[
                  { icon: "⭐", bold: "4.9", text: "/5 from 2,400+ Reviews" },
                  { icon: "🗺️", bold: "50 States", text: " Covered" },
                  { icon: "🛡️", bold: "Insured", text: " Door-to-Door" },
                  { icon: "🚚", bold: "10,000+", text: " Vehicles Shipped" },
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-[12px] text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                  >
                    <span>{pill.icon}</span>
                    <span>
                      <strong className="text-[#0F1A2E]">{pill.bold}</strong>
                      {pill.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick nav — desktop only */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {[
                  ["#popular-states", "Most Popular States"],
                  ["#all-states", "All 50 States"],
                  ["#alaska-hawaii", "Alaska & Hawaii"],
                  ["#pricing-table", "Pricing by Distance"],
                  ["#top-routes", "Top Routes"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="px-4 py-2 rounded-lg text-[13px] font-semibold border border-slate-200 bg-white text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#FF5722] hover:text-[#FF5722] hover:bg-orange-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="w-full self-start lg:sticky lg:top-6">
              <TransportForm />
            </div>
          </div>

          {/* Quick nav — mobile only, form ke niche */}
          <div className="flex lg:hidden flex-wrap gap-2 mt-6">
            {[
              ["#popular-states", "Most Popular States"],
              ["#all-states", "All 50 States"],
              ["#alaska-hawaii", "Alaska & Hawaii"],
              ["#pricing-table", "Pricing by Distance"],
              ["#top-routes", "Top Routes"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-[13px] font-semibold border border-slate-200 bg-white text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[#FF5722] hover:text-[#FF5722] hover:bg-orange-50"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR STATES ── */}
      <section
        id="popular-states"
        className="py-14 border-b border-slate-100 bg-white"
      >
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center gap-3.5 mb-2.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-amber-50 text-[#FF5722]">
              ⭐
            </div>
            <h2 className="font-extrabold text-[28px] text-slate-800 tracking-tight">
              Most Popular Shipping States
            </h2>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed  mb-8">
            Our guide details the 12 states responsible for over 70% of vehicle
            shipments, covering estimated local pricing, typical transit times,
            popular routes, new resident registration requirements, and a direct
            link for an instant quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularStates.map((s) => (
              <PopularCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL 50 STATES BY REGION ── */}
      <section
        id="all-states"
        className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200"
      >
        <div className="max-w-[1300px] mx-auto px-6">
          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                Nationwide Coverage
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                Ship to Any State: All
                <span className="text-[#FF5722]"> 50 States</span> by
                Region{" "}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed  text-justify">
                Each state page is a resource providing local pricing, average
                transit times from key origins, popular routes, and vehicle
                registration details. A direct link allows for specific quotes
                based on your exact addresses.
              </p>
            </div>
          </div>

          {/* ── Region Groups ── */}
          <div className="space-y-10">
            {regionGroups.map((region) => (
              <div key={region.label}>
                {/* Region divider label */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-6 rounded-full bg-[#FF5722]" />
                    <h3 className="text-[13px] font-black uppercase tracking-[0.12em] text-slate-800">
                      {region.label}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {region.states.length} states
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                {/* State cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {region.states.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="group relative flex items-center gap-2.5 bg-white border border-slate-200 hover:border-[#FF5722] hover:shadow-lg hover:shadow-orange-100 rounded-xl px-3 py-3 transition-all duration-200 cursor-pointer overflow-hidden"
                    >
                      {/* Subtle hover bg */}
                      <div className="absolute inset-0 rounded-xl bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                      {/* Logo / abbr badge */}
                      <div className="relative flex-shrink-0 w-12 h-8  bg-slate-100 group-hover:bg-white transition-colors duration-200 flex items-center justify-center overflow-hidden border border-slate-200 group-hover:border-orange-200">
                        {s.img ? (
                          <img
                            src={s.img}
                            alt={s.alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span
                            className={`text-[11px] font-black tracking-tight ${
                              s.highlight
                                ? "text-[#FF5722]"
                                : "text-slate-400 group-hover:text-[#FF5722]"
                            } transition-colors duration-200`}
                          >
                            {s.abbr}
                          </span>
                        )}
                      </div>

                      {/* Name + chevron */}
                      <div className="relative flex flex-1 items-center justify-between min-w-0">
                        <span className="text-[13px] font-bold text-slate-800 group-hover:text-orange-700 transition-colors ">
                          {s.name}{" "}
                          <span className="text-orange-700">({s.abbr})</span>{" "}
                          <br />
                          (Cost {new Date().getFullYear()})
                        </span>

                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 -translate-x-0.5 transition-all duration-200 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALASKA & HAWAII ── */}
      <section id="alaska-hawaii" className="py-14 border-b border-slate-100 ">
        <div className="max-w-[1300px] mx-auto p-6 rounded-xl bg-gray-100">
          <div className="flex items-center gap-3.5 mb-2.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl text-sky-600">
              🚢
            </div>
            <h2 className="font-extrabold text-[28px] text-slate-800 tracking-tight">
              Alaska &amp; Hawaii — Ocean Freight Shipping
            </h2>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed mb-8 text-justify">
            Shipping a vehicle to Alaska or Hawaii requires ocean freight,
            moving beyond standard transport. Your car is first trucked to a
            mainland port, then loaded onto a cargo vessel for the sea journey.
            This specialized shipment involves longer transit times, specific
            port procedures, and mandatory agriculture inspections. Our guides
            offer all the necessary expert details for a smooth process.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-5">
            {/* Alaska — Primary */}
            <Link
              href="/states/alaska"
              className="group bg-[#FF5722] rounded-2xl p-7 flex flex-col justify-center lg:row-span-2 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,87,34,0.25)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-white/80 bg-white/20 px-2 py-0.5 rounded">
                  Ocean Freight
                </span>
                <span className="text-xs font-semibold text-white/80 bg-white/20 px-2 py-0.5 rounded">
                  Port: Tacoma, WA
                </span>
              </div>
              <h3 className="font-extrabold text-[24px] text-white mb-2.5">
                Alaska Auto Transport
              </h3>
              <p className="text-xl text-white/85 leading-relaxed mb-5">
                We provide reliable ocean freight vehicle transport to Alaska
                (Anchorage, Fairbanks, Juneau) from the Port of Tacoma,
                Washington, with a typical transit time of 7-14 days. Our full
                service includes mainland trucking to Tacoma, vessel booking
                (Matson/TOTE), and port-to-door delivery in Alaska. Note: Alaska
                currently has no mandatory vehicle inspections or emissions
                testing.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-[#FF5722] px-6 py-3 rounded-xl font-bold text-[14px] self-start transition-all group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                View Alaska Rates &amp; Guide →
              </span>
            </Link>

            {/* Hawaii */}
            <Link
              href="/states/hawaii"
              className="group border border-slate-200 bg-slate-50 rounded-2xl p-6 transition-all hover:border-[#FF5722] hover:bg-orange-50 hover:shadow-[0_4px_20px_rgba(255,87,34,0.08)] lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  Ocean Freight
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  Port: Long Beach, CA
                </span>
              </div>
              <h3 className="text-[24px] font-bold text-slate-800 mb-2 group-hover:text-[#FF5722] transition-colors">
                Hawaii Auto Transport
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-3">
                We offer expert ocean freight service for shipping your vehicle
                to Hawaii from Long Beach or Oakland, California. Transit time
                is 10-21 days, depending on the island (Oahu, Maui, Big Island,
                or Kauai). A mandatory agriculture inspection is required upon
                arrival. Our service covers mainland trucking to the California
                port, vessel booking with carriers like Matson or Pasha, and
                island delivery to your address.
              </p>
              <span className="text-[13px] font-semibold text-[#FF5722]">
                View Hawaii Rates &amp; Guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ShippingCostTable />

      <section id="top-routes" className="py-20  relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ea580c 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[1300px] mx-auto p-6 relative bg-gray-100 rounded-xl">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Most Popular
                <span className="block text-[#FF5722]">
                  State-to-State Routes
                </span>
              </h2>
            </div>
          </div>

          {/* Route Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-orange-100 shadow-xl shadow-orange-100">
            {topRoutes.map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex flex-col justify-between p-5 bg-white hover:bg-orange-50 transition-all duration-300 min-h-[120px]"
              >
                {/* Route number */}
                <span className="absolute top-4 right-4 text-[11px] font-black text-slate-700 group-hover:text-orange-300 transition-colors tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Arrow icon */}
                <div className="w-7 h-7 rounded-lg bg-orange-50 group-hover:bg-[#FF5722] flex items-center justify-center transition-all duration-300 mb-4 border border-orange-100 group-hover:border-[#FF5722]">
                  <svg
                    className="w-3.5 h-3.5 text-[#FF5722] group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-700 group-hover:text-[#FF5722] transition-colors leading-snug mb-1.5">
                    {r.label}
                  </h3>
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-600 transition-colors font-medium">
                    {r.meta}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full bg-[#FF5722] transition-all duration-300" />
              </Link>
            ))}

            {/* View All CTA */}
            <Link
              href="/state-to-state"
              className="group relative flex flex-col items-center justify-center p-5 bg-white hover:bg-orange-500 transition-all duration-300 min-h-[120px]"
            >
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-orange-200 group-hover:border-white flex items-center justify-center mb-3 transition-all duration-300 group-hover:rotate-90">
                <svg
                  className="w-4 h-4 text-[#FF5722] group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span className="text-[13px] font-bold text-slate-600 group-hover:text-white transition-colors tracking-wide">
                View All Routes
              </span>
              <span className="text-[11px] text-slate-400 group-hover:text-orange-100 transition-colors mt-0.5">
                50+ corridors
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative bg-[#F8F7F4] py-12 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 10% 50%, rgba(255,87,34,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(59,130,246,0.04) 0%, transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FF5722]/10 border border-[#FF5722]/20 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] inline-block" />
                <span className="text-[#FF5722] text-[11px] font-bold tracking-widest uppercase">
                  Ready to Ship?
                </span>
              </div>
              <h2 className="text-[28px] lg:text-[34px] font-extrabold text-[#0F1A2E] leading-tight tracking-tight">
                Ship Your Car to{" "}
                <span className="text-[#FF5722]">Any State</span> — Get an
                Instant Quote
              </h2>
            </div>
            <Link
              href="/services/car-shipping-calculator"
              className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-6 py-3 rounded-xl text-[14px] font-bold shadow-[0_4px_16px_rgba(255,87,34,0.30)] transition-all hover:bg-[#E64A19] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Your Free Quote →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bottomStats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 bg-white border border-[#E8E4DE] rounded-2xl px-4 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="text-[18px] font-extrabold text-[#0F1A2E] leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-[#9A9590] font-medium mt-0.5">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

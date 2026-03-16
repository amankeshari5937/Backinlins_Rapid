"use client";
import Link from "next/link";
import TransportForm from "@/components/CommonComponents/Form";
import Footer from "@/components/CommonComponents/Footer";
import Navbar from "@/components/CommonComponents/Navbar";
import WhyUs from "@/components/Services/Why-us";
import Head from "next/head";
import ReviewCards from "@/components/Home/ReviewCards";
import Image from "next/image";

const transportMethods = [
  {
    href: "/open-auto-transport",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770718232/Open-Transport-Car-Shipping.jpg_cey1kk.jpg",
    alt: "Open auto transport carrier loaded with vehicles",
    title: "Open Auto Transport",
    desc: "Our open auto transport service is the most popular and cost-effective way to ship a car anywhere in the USA. Vehicles are safely secured on multi-car carriers, ideal for daily drivers, SUVs, and trucks. Fully licensed and insured, we provide reliable nationwide car shipping with real-time updates and professional support.",
  },
  {
    href: "/enclosed-car-transport",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770718233/Enclosed-Auto-Transport.jpg_u00vpd.jpg",
    alt: "Enclosed auto transport trailer for luxury vehicles",
    title: "Enclosed Car Transport",
    desc: "Enclosed car transport offers maximum protection for luxury, exotic, classic, and high-value vehicles. Your car is shielded from weather, road debris, and external elements inside a fully covered trailer. Our experienced, insured carriers deliver secure, white-glove auto transport services trusted by collectors and dealerships nationwide.",
  },
  {
    href: "/services/door-to-door-auto-transport",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770718234/Door-To-Door-Auto-Transport.jpg_dyvpyq.jpg",
    alt: "Door to door vehicle pickup and delivery",
    title: "Door-to-Door Auto Transport",
    desc: "Door-to-door auto transport provides ultimate convenience by picking up and delivering your vehicle right in front of your house or the nearest possible drop off location. No terminals, no hassle. Our licensed drivers handle nationwide car shipping with precision, offering insured transport, flexible scheduling, and clear communication from pickup to delivery.",
  },
];

const transportCompact = [
  {
    href: "/services/ship-car-to-another-state",
    icon: "🏛️",
    title: "Ship Car to Another State",
  },
  {
    href: "/services/ship-car-across-the-country",
    icon: "🗺️",
    title: "Cross-Country Shipping",
  },
  {
    href: "/services/multi-car-shipping",
    icon: "🚛",
    title: "Multi-Car Shipping",
  },
  {
    href: "/services/international-car-shipping",
    icon: "🌎",
    title: "International Shipping",
  },
  {
    href: "/non-running-vehicle-transport", // ✅ FIXED (was /services/non-running-vehicle-transport)
    icon: "🔧",
    title: "Non-Running Vehicle Transport",
  },
  {
    href: "/services/car-shipping-services",
    icon: "📋",
    title: "Car Shipping Services",
  },
  {
    href: "/long-distance-towing-service", // ✅ FIXED (was /services/long-distance-towing)
    icon: "🔗",
    title: "Long Distance Towing",
  },
  {
    href: "/services/line-haul-transport",
    icon: "📦",
    title: "Line Haul Transport",
  },
];

const vehicleTypes = [
  {
    href: "/motorcycle-shipping",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770804791/Motorcycle-Shipping._aerzoj.jpg",
    alt: "Motorcycle secured for transport",
    title: "Motorcycle Shipping",
    desc: "Our motorcycle shipping service ensures safe, secure transport for cruisers, sport bikes, touring motorcycles, and custom builds. Bikes are carefully strapped, crated when needed, and handled by trained professionals. We provide insured, door-to-door motorcycle transport across the USA with reliable scheduling and competitive pricing.",
  },
  {
    href: "/exotic-car-transport",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770703929/Classic-Car-Shipping._tjvf2g.jpg",
    alt: "Exotic luxury car prepared for enclosed transport",
    title: "Exotic Car Transport",
    desc: "Classic car shipping requires expert handling and specialized equipment. We offer enclosed transport options, soft tie-downs, and experienced drivers to protect vintage and exotic vehicles. Fully licensed and insured, our nationwide classic auto transport service is trusted by collectors and restoration enthusiasts.",
  },
  {
    href: "/electric-vehicle-shipping", // ✅ FIXED (was /services/electric-vehicle-shipping)
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770804792/Expedited-Auto-Transport.jpg_eqkzki.jpg",
    alt: "Electric vehicle being loaded for transport",
    title: "Electric Vehicle Shipping",
    desc: "We can transport your Teslas, Rivians, and other battery-electric vehicles. EVs are more on weight for an average 500 to 1,500 pounds more than similar gasoline vehicles. This means loading and weight distribution need to be adjusted. Our carriers follow EV-specific safety procedures.",
  },
];

const vehicleCompact = [
  {
    href: "/services/classic-car-shipping",
    icon: "🏆",
    title: "Classic Car Shipping",
  },
  {
    href: "/ultimate-guide-shipping-collector-show-cars", // ✅ FIXED (was /services/collector-show-cars)
    icon: "🎪",
    title: "Collector & Show Cars",
  },
  { href: "/services/rv-transport", icon: "🏕️", title: "RV Transport" },
  {
    href: "/services/fifth-wheel-transport",
    icon: "🔩",
    title: "Fifth Wheel Transport",
  },
  {
    href: "/services/cost-to-ship-a-bus",
    icon: "🚌",
    title: "Bus Shipping",
  },
  {
    href: "/services/food-truck-shipping",
    icon: "🍔",
    title: "Food Truck Shipping",
  },
  {
    href: "/services/ambulance-shipping",
    icon: "🚑",
    title: "Ambulance Shipping",
  },
];

const heavyEquipment = [
  {
    href: "/services/heavy-equipment-shipping",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770804792/Heavy-Equipment-Shipping.jpg_gnddmu.jpg",
    alt: "Heavy construction equipment on transport trailer",
    title: "Heavy Equipment Shipping",
    desc: "We specialize in heavy equipment shipping for construction, agricultural, and industrial machinery. From forklifts to excavators, our experienced logistics team arranges safe, compliant transport using specialized trailers. We deliver oversized equipment efficiently across local and nationwide routes.",
  },
  {
    href: "/services/lowboy-shipping",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770804791/Lowboy-Trucking.jpg_go5gbn.jpg",
    alt: "Lowboy trailer hauling oversized equipment",
    title: "Lowboy Trucking",
    desc: "Lowboy trucking is ideal for transporting oversized and heavy machinery that exceeds standard height limits. Our lowboy hauling solutions accommodate construction equipment, industrial vehicles, and large loads safely and legally. We coordinate permits, routing, and insured transport to ensure smooth nationwide delivery.",
  },
  {
    href: "/services/tractor-transport",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1752049303/Nationwide_Tractor_Transport_Service_1_vj6efy.webp",
    alt: "Nationwide tractor transport service",
    title: "Tractor Transport",
    desc: "For a Farm and construction tractor hauling on flatbed or lowboy trailers, we handle John Deere, Case IH, Kubota, New Holland, and all major brands that includes permits or coordination for oversize loads and delivery to farms, dealerships, and job sites.",
  },
];

const heavyCompact = [
  {
    href: "/services/forklift-transportation-company",
    icon: "🏗️",
    title: "Forklift Transport",
  },
  {
    href: "/services/komatsu-equipment-shipping",
    icon: "🔶",
    title: "Komatsu Equipment",
  },
  {
    href: "/services/new-holland-tractor",
    icon: "🟡",
    title: "New Holland Tractor",
  },
  {
    href: "/services/hauling-isuzu-npr-truck",
    icon: "📐",
    title: "Isuzu NPR Hauling",
  },
  {
    href: "/services/containerized-freight-hauling",
    icon: "📦",
    title: "Containerized Freight",
  },
  {
    href: "/services/truck-shipping-service",
    icon: "🚙",
    title: "Truck Shipping Service",
  },
  {
    href: "/freightliner-cascadia", // ✅ FIXED (was /services/freightliner-cascadia)
    icon: "🚛",
    title: "Freightliner Cascadia",
  },
];

const specialtyCompact = [
  { href: "/yacht-shipping", icon: "⛵", title: "Yacht Shipping" }, // ✅ FIXED (was /services/yacht-shipping)
  {
    href: "/ship-cargo-vans", // ✅ FIXED (was /services/cargo-van-shipping)
    icon: "🚐",
    title: "Cargo Van Shipping",
  },
  {
    href: "/rental-car-auto-transport-service", // ✅ FIXED (was /services/rental-car-transport)
    icon: "🔑",
    title: "Rental Car Transport",
  },
  {
    href: "/trailer-transport-service", // ✅ FIXED (was /services/trailer-transport)
    icon: "🔩",
    title: "Trailer Transport",
  },
];

const whoWeServe = [
  {
    href: "/military-auto-shipping", // ✅ FIXED (was /services/military-auto-shipping)
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770703928/Military-Car-Shipping.jpg_fiw8ae.jpg",
    alt: "Military vehicle shipping for PCS moves",
    title: "Military Auto Shipping",
    desc: "We proudly support service members with reliable military auto shipping across the United States. Whether PCS relocation or deployment, our experienced team provides flexible scheduling, secure transport, and competitive rates. We understand military timelines and offer dependable, insured car shipping you can trust.",
  },
  {
    href: "/snowbird-car-transport-service", // ✅ FIXED (was /snowbird-car-transport)
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770703930/Snowbird-Shipping.jpg_sw0h8n.jpg",
    alt: "Snowbird seasonal car transport between states",
    title: "Snowbird Car Transport",
    desc: "Our snowbird car transport service helps seasonal travelers move vehicles between northern and southern states with ease. Avoid long drives and vehicle wear by choosing safe, insured auto transport. We offer flexible scheduling during peak seasons and reliable nationwide service tailored for snowbirds.",
  },
  {
    href: "/services/transporting-cars-for-dealerships",
    img: "https://res.cloudinary.com/dz2zovmf1/image/upload/w_400,h_250,c_fill,q_auto,f_webp/v1770716045/Transportation-Cars-for-Dealerships.jpg_epkdnb.jpg",
    alt: "Dealership vehicle transport and inventory delivery",
    title: "Dealership Vehicle Transport",
    desc: "We provide dependable vehicle transport solutions for car dealerships nationwide. Whether moving inventory between locations or delivering to customers, our licensed and insured carriers ensure timely, damage-free delivery. Dealerships rely on our scalable, professional auto transport services to keep operations running smoothly.",
  },
];

const whoCompact = [
  {
    href: "/college-student-car-shipping",
    icon: "🎓",
    title: "College Student Shipping",
  },
  {
    href: "/relocating-families-car-shipping-services",
    icon: "🏠",
    title: "Relocating Families",
  },
  {
    href: "/auto-transport-for-car-resellers",
    icon: "💼",
    title: "Car Reseller Transport",
  },
  {
    href: "/services/auto-auction-shipping",
    icon: "🔨",
    title: "Auto Auction Shipping",
  },
  {
    href: "/services/trucking-company-near-me",
    icon: "📍",
    title: "Trucking Company Near Me",
  },
];

// ─── Reusable Components ──────────────────────────────────────────────────────

function ServiceCard({ href, img, alt, title, desc }) {
  return (
    <Link
      href={href}
      className="group relative bg-white  overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      <span className="pointer-events-none absolute inset-0  border border-slate-200 transition-colors duration-300 group-hover:border-[#FF5722]/40 z-10" />

      {/* Image area — matches 1300×500 landscape ratio */}
      <div
        className="relative w-full overflow-hidden flex-shrink-0"
        style={{ aspectRatio: "1300 / 500" }}
      >
        {img ? (
          <>
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-5xl opacity-20">🚛</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-2xl leading-snug text-slate-900 mb-2.5 transition-colors duration-200 group-hover:text-[#FF5722]">
          {title}
        </h3>
        <p className="text-xl text-slate-500 leading-relaxed flex-1 mb-5">
          {desc}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <span className="text-xl font-bold text-[#FF5722]">Learn More</span>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-xl transition-all duration-200 group-hover:bg-[#FF5722] group-hover:text-white group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-[#FF5722] to-[#FF8A65] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}

function CompactCard({ href, icon, title }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border border-slate-200/80 transition-all duration-200 hover:border-[#FF5722]/40 hover:shadow-[0_4px_16px_rgba(255,87,34,0.08)] hover:-translate-y-0.5 overflow-hidden"
    >
      {/* Hover fill */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      {/* Icon bubble */}
      <div className="relative z-10 w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xl flex-shrink-0 transition-all duration-200 group-hover:bg-[#FF5722]/8 group-hover:border-[#FF5722]/20">
        {icon}
      </div>

      {/* Label + arrow */}
      <div className="relative z-10 flex items-center justify-between w-full min-w-0">
        <h4 className="text-xl font-semibold text-slate-700 leading-tight group-hover:text-[#FF5722] transition-colors duration-200 truncate pr-2">
          {title}
        </h4>
        <svg
          className="w-3.5 h-3.5 text-slate-300 flex-shrink-0 transition-all duration-200 group-hover:text-[#FF5722] group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function ClusterSection({
  id,
  iconBg,
  iconColor,
  icon,
  title,
  desc,
  cards,
  compact,
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`py-8 border-b border-slate-100 ${dark ? "bg-slate-50/70" : "bg-white"}`}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            {/* Colored icon badge */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0 shadow-sm"
              style={{ background: iconBg, color: iconColor }}
            >
              {icon}
            </div>
            <h2 className="font-extrabold text-2xl text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
          </div>

          {/* Desc + divider */}
          <div className="flex items-start gap-4">
            <div
              className="w-1 self-stretch rounded-full flex-shrink-0 mt-0.5"
              style={{ background: iconColor, opacity: 0.25 }}
            />
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              {desc}
            </p>
          </div>
        </div>

        {/* Main service cards */}
        {cards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {cards.map((c) => (
              <ServiceCard key={c.href} {...c} />
            ))}
          </div>
        )}

        {/* Compact cards — with "Also available" label */}
        {compact && (
          <div>
            {cards && (
              <p className="text-xl font-bold uppercase tracking-widest text-slate-400 mb-3">
                Also Available
              </p>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {compact.map((c) => (
                <CompactCard key={c.href} {...c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://rapidautoshipping.com",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id": "https://rapidautoshipping.com/services",
                    name: "Our Nationwide Auto Transport Services",
                  },
                },
              ],
            },
          ])}
        </script>

        <title>Nationwide Auto Transport Services in the USA</title>
        <meta
          name="description"
          content="We offer professional, fully insured, door-to-door vehicle transport services nationwide, including open and enclosed options tailored to specific needs."
        />
        <link rel="canonical" href="https://rapidautoshipping.com/services" />
      </Head>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-4 bg-white border-b border-slate-100">
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
          <nav className="text-xl text-slate-400 mb-7">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-800 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">Services</span>
          </nav>

          {/* Two-column grid: left = text, right = form */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-10 items-start">
            {/* ── Left: Text Content ── */}
            <div className="flex flex-col">
              <h1
                className="text-3xl lg:text-[36px] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-4 
          backdrop-blur-sm bg-white/20 rounded-xl px-3 py-2 w-fit"
              >
                Nationwide Auto
                <span className="text-[#FF5722]"> Transport</span> Services -{" "}
                <span className="text-[#FF5722]">Rapid Auto Shipping</span>
              </h1>

              <p
                className="text-xl text-black leading-relaxed max-w-xl mb-8 
          backdrop-blur-sm bg-white/60 rounded-xl px-3 py-2"
              >
                Start shipping a vehicle anywhere in USA from a personal or a
                commercial use cars to a heavy equipments, we can move it all,
                just provide few details like the type of of vehicles, transport
                methods, pickup and drop off address etc. We will work wisely to
                provide you the door to door delivery services while covering
                the full insurance of the vehicle during transportation across
                50 states.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  {
                    icon: "⭐",
                    text: (
                      <>
                        <strong className="text-slate-800">4.9</strong>/5 from
                        2,400+ Reviews
                      </>
                    ),
                  },
                  {
                    icon: "🛡️",
                    text: (
                      <>
                        Fully{" "}
                        <strong className="text-slate-800">Insured</strong>{" "}
                        &amp; Bonded
                      </>
                    ),
                  },
                  {
                    icon: "🔒",
                    text: (
                      <>
                        <strong className="text-slate-800">USDOT</strong>{" "}
                        Licensed · FMCSA Registered
                      </>
                    ),
                  },
                  {
                    icon: "🚚",
                    text: (
                      <>
                        <strong className="text-slate-800">10,000+</strong>{" "}
                        Vehicles Shipped
                      </>
                    ),
                  },
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 text-[12px] text-slate-600"
                  >
                    <span>{pill.icon}</span>
                    <span>{pill.text}</span>
                  </div>
                ))}
              </div>

              {/* Quick nav — desktop only */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {[
                  ["#transport-methods", "Transport Methods"],
                  ["#vehicle-types", "Vehicle Types"],
                  ["#heavy-equipment", "Heavy Equipment"],
                  ["#specialty", "Specialty Transport"],
                  ["#who-we-serve", "Who We Serve"],
                  ["#pricing", "Pricing & Costs"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="px-4 py-2 rounded-lg text-[12px] font-semibold border border-slate-200 text-slate-600 transition-all duration-200 hover:border-[#FF5722] hover:text-[#FF5722] hover:bg-orange-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: TransportForm ── */}
            <div className="w-full self-start lg:sticky lg:top-6">
              <TransportForm />
            </div>
          </div>

          {/* Quick nav — mobile only, form ke niche */}
          <div className="flex lg:hidden flex-wrap  mt-6">
            {[
              ["#transport-methods", "Transport Methods"],
              ["#vehicle-types", "Vehicle Types"],
              ["#heavy-equipment", "Heavy Equipment"],
              ["#specialty", "Specialty Transport"],
              ["#who-we-serve", "Who We Serve"],
              ["#pricing", "Pricing & Costs"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-[12px] font-semibold border border-slate-200 text-slate-600 transition-all duration-200 hover:border-[#FF5722] hover:text-[#FF5722] hover:bg-orange-50"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="pt-8">
        <ReviewCards />
      </div>

      {/* ── TRANSPORT METHODS ── */}
      <ClusterSection
        id="transport-methods"
        iconBg="#EFF6FF"
        iconColor="#2563EB"
        icon="🚚"
        title="Transport Methods"
        desc="Select the kind of transportation method for moving the vehicle. Our team can provide you the budget friendly open carrier to a premium enclosed transportation for door-to-door or coast -to-coast services. We have the right method to meet your timelines and safety requirements."
        cards={transportMethods}
        compact={transportCompact}
        dark={false}
      />

      {/* ── VEHICLE TYPES ── */}
      <ClusterSection
        id="vehicle-types"
        iconBg="#FEF3C7"
        iconColor="#D97706"
        icon="🏎️"
        title="Vehicle Types We Ship"
        desc="We can transport any kind of vehicle, ranging from motorhomes to motorcycles, which has its own specific handling, loading, and insurance requirements. Our drivers specialize in safely transporting each type of vehicle and are covered with full insurance."
        cards={vehicleTypes}
        compact={vehicleCompact}
        dark
      />

      {/* ── HEAVY EQUIPMENT ── */}
      <ClusterSection
        id="heavy-equipment"
        iconBg="#FEE2E2"
        iconColor="#DC2626"
        icon="⚙️"
        title="Heavy Equipment & Commercial Transport"
        desc="We can transport your Oversized, overweight, and specialized commercial vehicle hauling. Our team coordinate permits, route planning, and FMCSA-compliant drivers for construction, agricultural, and industrial machinery across all routes in States"
        cards={heavyEquipment}
        compact={heavyCompact}
        dark={false}
      />

      {/* ── SPECIALTY TRANSPORT ── */}
      <ClusterSection
        id="specialty"
        iconBg="#CCFBF1"
        iconColor="#0F766E"
        icon="⛵"
        title="Specialty Transport Services"
        desc="We have a unique vehicle and transport solutions for boats, trailers, cargo vans, rental fleets, and long-distance towing. Specialized equipment and handling for vehicles that don't fit standard categories."
        cards={null}
        compact={specialtyCompact}
        dark
      />

      {/* ── WHO WE SERVE ── */}
      <ClusterSection
        id="who-we-serve"
        iconBg="#EDE9FE"
        iconColor="#7C3AED"
        icon="👥"
        title="Auto Transport for Every Situation"
        desc="If you are relocating for work, deploying with the military, heading to college, moving your family, or shipping dealer inventory, we have built specialized services for your exact situation."
        cards={whoWeServe}
        compact={whoCompact}
        dark={false}
      />

      {/* ── PRICING ── */}
      <section
        id="pricing"
        className="py-16 bg-slate-50 border-b border-slate-100"
      >
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center gap-3.5 mb-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/20 flex items-center justify-center text-xl">
              💰
            </div>
            <h2 className="font-extrabold text-[28px] text-slate-800 tracking-tight">
              Pricing &amp; Cost Calculators
            </h2>
          </div>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-9">
            Transparent pricing with no hidden fees. Use our instant calculators
            to get the best quote for a wide range of vehicles. Explore our cost
            guides to understand what affects auto transport pricing
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-5">
            {/* Primary */}
            <Link
              href="/services/car-shipping-calculator"
              className="group bg-[#FF5722] rounded-2xl p-7 flex flex-col justify-center lg:row-span-2 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,87,34,0.25)]"
            >
              <h3 className="font-extrabold text-[24px] text-white mb-2.5">
                Instant Car Shipping Calculator
              </h3>
              <p className="text-xl text-white/85 leading-relaxed mb-5">
                Get a free, transparent quote in just under 30 seconds. Enter
                basic details like your pickup and delivery zip codes, select
                your vehicle type, choose your preferred carrier, and get an
                accurate quote that includes insurance and carrier availability,
                along with an estimated delivery date.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-[#FF5722] px-6 py-3 rounded-xl font-bold text-[14px] self-start transition-all group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                Calculate Your Quote →
              </span>
            </Link>

            {[
              {
                href: "/services/average-cost-to-ship-a-car",
                title: "Average Cost to Ship a Car",
                desc: "Let's check what it generally costs to ship a vehicle based on distance, vehicle category, and season. Get to know the basics of the quote before the process.",
                cta: "View Pricing Guide →",
              },
              {
                href: "/services/cheap-car-shipping",
                title: "Affordable Shipping Options",
                desc: "Open carriers, flexible dates, and terminal pickup. Multiple tips to reduce your shipping cost without losing safety and reliability.",
                cta: "Explore Options →",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white border border-slate-200 rounded-2xl p-7 transition-all hover:border-[#FF5722] hover:shadow-[0_8px_32px_rgba(255,87,34,0.08)] hover:-translate-y-1"
              >
                <h3 className="text-[24px] font-bold text-slate-800 mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed mb-3">
                  {card.desc}
                </p>
                <span className="text-xl font-semibold text-[#FF5722]">
                  {card.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      <Footer />
    </>
  );
}

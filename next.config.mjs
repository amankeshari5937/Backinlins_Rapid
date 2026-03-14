/** @type {import('next').NextConfig} */
const nextConfig = {
  // FIXED: Merged both images configs into one (second was overwriting first)
  images: {
    domains: ["res.cloudinary.com", "rapidautoshipping.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dz2zovmf1/image/upload/**",
      },
    ],
  },

  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rapidautoshipping.com",
          },
        ],
        destination: "https://rapidautoshipping.com/:path*",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-way-to-ship-car",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-way-to-transport-a-vehicle",
        destination:
          "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/best-cheapest-way-to-transport-a-vehicle",
        destination:
          "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/reliable-and-cheapest-way-to-ship-car",
        destination:
          "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-way-to-transport-car",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-auto-transport",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/cheap-car-transport",
        destination:
          "https://rapidautoshipping.com/cheapest-car-shipping-company",
        permanent: true,
      },
      {
        source: "/services/cheap-car-transport",
        destination:
          "https://rapidautoshipping.com/cheapest-car-shipping-company",
        permanent: true,
      },
      {
        source: "/services/cheap-transporters-service-in-the-usa",
        destination:
          "https://rapidautoshipping.com/cheapest-car-shipping-company",
        permanent: true,
      },
      {
        source: "/blogs/why-not-to-run-for-low-prices",
        destination:
          "https://rapidautoshipping.com/cheapest-car-shipping-company",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-service",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/services/car-shipping-service",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/8-tips-for-a-safe-auto-transport",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-service",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/services/transportation-car-services",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/services/best-transportation-car-services",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/services/vehicle-shipping-services",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/vehicle-transport-service",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/vehicle-transport-service",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/vehicle-transportation-services",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/how-buyers-and-sellers-benefits-from-auto-shipping",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/cheap-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/benefits-of-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/ship-my-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/auto-shipping-companies",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/best-auto-shipping-company",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-company-in-america",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/benefits-of-hiring-an-auto-transport-company",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/10-questions-to-ask-an-auto-transport-company",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/auto-movers",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/best-car-shipping-companies-in-usa",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/car-transport-in-continental-us",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/car-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/vehicle-movers",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/car-movers",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/car-haulers-near-me",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/what-makes-a-car-shipping-company-the-best",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/car-shipping-companies",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-companies",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-companies",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/coast-to-coast-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/calculate-the-cost-to-ship-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/cost-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/cost-of-shipping-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/cost-of-shipping-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/instant-car-shipping-quote",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/vehicle-shipping-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-cost-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/car-shipping-cost-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/car-transportation-cost-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/shipping-car-cost",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/how-much-does-it-cost-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/shipping-a-car-cost",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/price-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/cost-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-calculators",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-cost",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/cost-for-shipping-a-car",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/services/auto-shipping-cost",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/auto-shipping-cost",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/auto-shipping-costs",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/what-is-a-car-transport-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/comparing-auto-transport-prices",
        destination:
          "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/average-cost-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/services/instant-car-shipping-quotes",
        destination:
          "https://rapidautoshipping.com/services/average-cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-terminal-to-terminal",
        destination:
          "https://rapidautoshipping.com/blogs/terminal-to-terminal-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/terminal-to-terminal-car-shipping-service",
        destination:
          "https://rapidautoshipping.com/blogs/terminal-to-terminal-auto-transport",
        permanent: true,
      },
      {
        source: "/best-car-transportation-company-for-dealerships",
        destination:
          "https://rapidautoshipping.com/services/transporting-cars-for-dealerships",
        permanent: true,
      },
      {
        source: "/services/car-transport-dealership",
        destination:
          "https://rapidautoshipping.com/services/transporting-cars-for-dealerships",
        permanent: true,
      },
      {
        source: "/blogs/transporting-car-to-dealership",
        destination:
          "https://rapidautoshipping.com/services/transporting-cars-for-dealerships",
        permanent: true,
      },
      {
        source: "/blogs/door-to-door-auto-transport",
        destination:
          "https://rapidautoshipping.com/services/door-to-door-auto-transport",
        permanent: true,
      },
      {
        source: "/services/door-to-door",
        destination:
          "https://rapidautoshipping.com/services/door-to-door-auto-transport",
        permanent: true,
      },
      {
        source: "/services/door-to-door-shipping",
        destination:
          "https://rapidautoshipping.com/services/door-to-door-auto-transport",
        permanent: true,
      },
      {
        source: "/snowbird-car-delivery",
        destination:
          "https://rapidautoshipping.com/snowbird-car-transport-service",
        permanent: true,
      },
      {
        source: "/services/snow-bird-shipping",
        destination:
          "https://rapidautoshipping.com/snowbird-car-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/snowbird-auto-transport",
        destination:
          "https://rapidautoshipping.com/snowbird-car-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/best-snowbird-auto-transport",
        destination:
          "https://rapidautoshipping.com/snowbird-car-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/what-is-it-snowbird-auto-transport",
        destination:
          "https://rapidautoshipping.com/snowbird-car-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/ship-car-to-another-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/shipping-cars-to-another-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/moving-cars-to-another-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/transporting-my-car-to-another-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/how-to-buy-and-ship-a-used-car-from-another-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/how-to-move-from-state-to-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/state-to-state-transport",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/state-to-state-auto-transport",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/services/state-to-state-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/cross-country-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/classic-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/classic-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/classic-car-shipping-services-provider",
        destination:
          "https://rapidautoshipping.com/services/classic-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/antique-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/classic-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/auction-auto-transport-services",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/copart-auto-auction",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/services/sports-car-transport-service",
        destination: "https://rapidautoshipping.com/exotic-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/exotic-cars",
        destination: "https://rapidautoshipping.com/exotic-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/tips-to-ship-an-exotic-car",
        destination: "https://rapidautoshipping.com/exotic-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/bus-transportation-services",
        destination:
          "https://rapidautoshipping.com/services/cost-to-ship-a-bus",
        permanent: true,
      },
      {
        source: "/blogs/best-boat-transport-companies",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-companies",
        permanent: true,
      },
      {
        source: "/blogs/best-boat-shipping-cost-company",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-companies",
        permanent: true,
      },
      {
        source: "/blogs/best-boat-shipping-companies",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-companies",
        permanent: true,
      },
      {
        source: "/blogs/boat-shipping",
        destination: "https://rapidautoshipping.com/services/boat-shipping",
        permanent: true,
      },
      {
        source: "/blogs/boat-shipping-cost",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-cost-calculator",
        permanent: true,
      },
      {
        source: "/boat-transport-cost",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-cost-calculator",
        permanent: true,
      },
      {
        source: "/equipment-hauling-services",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/international-heavy-equipment-shipping",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/construction-equipment",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/heavy-hauling-large-cargo",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/heavy-hauling-truck",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/hauling-oversize-load",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/services/farm-equipment",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/kenworth-t680-truck-tractor",
        destination: "https://rapidautoshipping.com/services/tractor-transport",
        permanent: true,
      },
      {
        source: "/state-to-state/kenworth-t680-truck-tractor",
        destination: "https://rapidautoshipping.com/services/tractor-transport",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-tractor",
        destination: "https://rapidautoshipping.com/services/tractor-transport",
        permanent: true,
      },
      {
        source: "/services/ambulance-shipping-service",
        destination:
          "https://rapidautoshipping.com/services/ambulance-shipping",
        permanent: true,
      },
      {
        source: "/shipping-a-car-cost",
        destination: "https://rapidautoshipping.com/blogs/cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/services/car-transport-quotes",
        destination:
          "https://rapidautoshipping.com/services/calculate-the-cost-to-ship-car",
        permanent: true,
      },
      {
        source: "/blogs/how-much-does-it-cost-to-transport-a-car-by-truck",
        destination:
          "https://rapidautoshipping.com/services/calculate-the-cost-to-ship-car",
        permanent: true,
      },
      {
        source: "/blogs/car-delivery-cost",
        destination: "https://rapidautoshipping.com/blogs/cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/car-shipping-cost-guide",
        destination: "https://rapidautoshipping.com/blogs/cost-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/auto-shipping-calculator",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/car-shipping-costs",
        destination:
          "https://rapidautoshipping.com/blogs/car-shipping-cost-calculator",
        permanent: true,
      },
      {
        source: "/blogs/military-car-transportation",
        destination: "https://rapidautoshipping.com/military-auto-shipping",
        permanent: true,
      },
      {
        source: "/military-car-transportation",
        destination: "https://rapidautoshipping.com/military-auto-shipping",
        permanent: true,
      },
      {
        source: "/blogs/car-delivery-services",
        destination: "https://rapidautoshipping.com/car-delivery-service",
        permanent: true,
      },
      {
        source: "/blogs/best-car-delivery-services",
        destination: "https://rapidautoshipping.com/car-delivery-service",
        permanent: true,
      },
      {
        source: "/blogs/alaska-car-transport",
        destination: "https://rapidautoshipping.com/blogs/alaska-auto-shipping",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/a-ok-auto-transport",
        destination:
          "https://rapidautoshipping.com/blogs/auto-transport-in-florida",
        permanent: true,
      },
      {
        source: "/services/car-transport-service",
        destination: "https://rapidautoshipping.com/services/car-transport",
        permanent: true,
      },
      {
        source: "/services/rv-movers-near-me-services",
        destination: "https://rapidautoshipping.com/services/rv-transport",
        permanent: true,
      },
      {
        source: "/blogs/tractor-transport-service",
        destination: "https://rapidautoshipping.com/services/tractor-transport",
        permanent: true,
      },
      {
        source: "/services/best-car-shipping-companies-in-usa",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/cheapest-way-to-ship-car",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/cheapest-car-long-distance-towing",
        destination:
          "https://rapidautoshipping.com/long-distance-towing-service",
        permanent: true,
      },
      {
        source: "/services/cargo-vans-services",
        destination: "https://rapidautoshipping.com/ship-cargo-vans",
        permanent: true,
      },
      {
        source: "/lowboy-trucking",
        destination: "https://rapidautoshipping.com/services/lowboy-shipping",
        permanent: true,
      },
      {
        source: "/blogs/lowboy-shipping",
        destination: "https://rapidautoshipping.com/services/lowboy-shipping",
        permanent: true,
      },
      {
        source: "/services/international-motorcycle-shipping",
        destination:
          "https://rapidautoshipping.com/services/motor-cycle-shipping",
        permanent: true,
      },
      {
        source: "/services/customized-container-shipping",
        destination: "https://rapidautoshipping.com/services",
        permanent: true,
      },
      {
        source: "/blogs/car-transport-quote",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/blogs/travel-trailer-moving-service",
        destination: "https://rapidautoshipping.com/trailer-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/shipping-heavy-equipment",
        destination:
          "https://rapidautoshipping.com/services/heavy-equipment-shipping",
        permanent: true,
      },
      {
        source: "/blogs/international-car-shipping-tips",
        destination:
          "https://rapidautoshipping.com/services/international-car-shipping",
        permanent: true,
      },
      {
        source: "/what-is-the-car-shipping-process",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/what-shipping-method-will-be-used-to-transport-my-vehicle",
        destination:
          "https://rapidautoshipping.com/blogs/enclosed-vs-open-car-shipping",
        permanent: true,
      },
      {
        source: "/what-documents-are-required-to-ship-a-car",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/safest-car-in-the-usa",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/how-to-avoid-auto-shipping-delay",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/low-cost-car-shipping",
        destination:
          "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/services/car-shipping-costs",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-calculator",
        permanent: true,
      },
      {
        source: "/open-vehicle-transport",
        destination: "https://rapidautoshipping.com/open-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/open-auto-transport",
        destination: "https://rapidautoshipping.com/open-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/benefits-of-open-auto-transport",
        destination: "https://rapidautoshipping.com/open-auto-transport",
        permanent: true,
      },
      {
        source: "/services/open-car-shipping",
        destination: "https://rapidautoshipping.com/open-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/five-mistakes-to-avoid-while-shipping",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/best-enclosed-car-transport",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/enclosed-car-transporter",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/services/enclosed-shipping",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/enclosed-vehicle-transport-inc",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/insurance-companies-do-you-need-for-auto-shipping",
        destination: "https://rapidautoshipping.com/auto-transport-insurance",
        permanent: true,
      },
      {
        source: "/blogs/car-hauler-or-flatbed-shipping",
        destination:
          "https://rapidautoshipping.com/what-are-the-benefits-of-flatbed-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/flatbed-auto-shipping-carriers",
        destination:
          "https://rapidautoshipping.com/what-are-the-benefits-of-flatbed-auto-transport",
        permanent: true,
      },
      {
        source: "/car-rentals-company",
        destination:
          "https://rapidautoshipping.com/rental-car-auto-transport-service",
        permanent: true,
      },
      {
        // FIXED: http -> https
        source: "/services/auto-driveaway-service",
        destination:
          "https://rapidautoshipping.com/blogs/what-is-driveaway-service",
        permanent: true,
      },
      {
        source: "/blogs/affordable-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/best-car-shipping-services",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/car-hauling-shipping",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/car-hauling-companies",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/enclosed-vs-open-car-transport",
        destination:
          "https://rapidautoshipping.com/blogs/enclosed-vs-open-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/benefits-of-enclosed-auto-transpor",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/covered-car-shipping",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source:
          "/auto-transport-carriers/west-coast-auto-transport-service-inc",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/aa-motorcycle-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/top-line-service-inc",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/secure-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/affordable-auto-transport-llc",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/quality-car-move",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/ok-auto-carrier",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/advanced-car-shipping",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/reliable-carriers-inc",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/us-auto-transport-llc",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/the-car-carriage",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/direct-express-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source:
          "/auto-transport-carriers/affordable-auto-transport-logistics-l",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/f1-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/coast-to-coast-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/shipping-experts",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/reliable-auto-transport-lauderdale",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/premium-auto-movers",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/express-auto-shipping",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/car-resellers-auto-transport",
        destination:
          "https://rapidautoshipping.com/auto-transport-for-car-resellers",
        permanent: true,
      },
      {
        source: "/blogs/line-haul-transportation",
        destination:
          "https://rapidautoshipping.com/blogs/advantages-of-line-haul-transportation",
        permanent: true,
      },
      {
        source: "/blogs/best-line-haul-transportation",
        destination:
          "https://rapidautoshipping.com/blogs/advantages-of-line-haul-transportation",
        permanent: true,
      },
      {
        source: "/services/military-shipping",
        destination: "https://rapidautoshipping.com/military-auto-shipping",
        permanent: true,
      },
      // FIXED: Removed duplicate "/blogs/military-vehicle-transport" — kept last destination
      {
        source: "/blogs/military-vehicle-transport",
        destination: "https://rapidautoshipping.com/military-shipping",
        permanent: true,
      },
      {
        source: "/blogs/military-vehicle-shipping",
        destination: "https://rapidautoshipping.com/military-auto-shipping",
        permanent: true,
      },
      // FIXED: Removed duplicate "/military-pcs-vehicle-shipping-locations" — kept last destination
      {
        source: "/military-pcs-vehicle-shipping-locations",
        destination:
          "https://rapidautoshipping.com/services/international-car-shipping",
        permanent: true,
      },
      // FIXED: Removed duplicate "/blogs/military-car-shipping" — kept last destination
      {
        source: "/blogs/military-car-shipping",
        destination: "https://rapidautoshipping.com/military-shipping",
        permanent: true,
      },
      {
        source: "/services/transporting-case-trucks",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/blogs/shipping-trucks-cost-transport-service",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/services/shipping-trucks-cost",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-dump-truck",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/blogs/how-to-ship-a-truck",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/heavy-equipment-transport",
        destination:
          "https://rapidautoshipping.com/services/truck-shipping-service",
        permanent: true,
      },
      {
        source: "/services/car-delivery-services",
        destination: "https://rapidautoshipping.com/car-delivery-service",
        permanent: true,
      },
      {
        source: "/blogs/best-car-delivery-service",
        destination: "https://rapidautoshipping.com/car-delivery-service",
        permanent: true,
      },
      {
        source: "/blogs/transporting-car-from-ny-to-florida",
        destination:
          "https://rapidautoshipping.com/blogs/ship-from-new-york-to-florida",
        permanent: true,
      },
      {
        source: "/new-york-to-florida-car-shipping-service",
        destination:
          "https://rapidautoshipping.com/blogs/ship-from-new-york-to-florida",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-car-from-texas-to-california",
        destination:
          "https://rapidautoshipping.com/blogs/cost-from-texas-to-california",
        permanent: true,
      },
      {
        source: "/state-to-state/texas-to-california",
        destination:
          "https://rapidautoshipping.com/blogs/cost-from-texas-to-california",
        permanent: true,
      },
      {
        source: "/blogs/hawaii-to-california",
        destination:
          "https://rapidautoshipping.com/state-to-state/hawaii-to-california",
        permanent: true,
      },
      {
        source: "/blogs/elite-auto-shipping",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/american-auto-shipping",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/premium-auto-shipping-reviews",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/reliable-auto-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/rv-shipping-usa",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/services/rv-transport-quotes",
        destination: "https://rapidautoshipping.com/services/rv-transport",
        permanent: true,
      },
      {
        source: "/choosing-reliable-rv-movers-near-me",
        destination: "https://rapidautoshipping.com/services/rv-transport",
        permanent: true,
      },
      {
        source: "/blogs/camper-transport",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/multi-car-shipping",
        destination:
          "https://rapidautoshipping.com/services/multi-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-colorado",
        destination: "https://rapidautoshipping.com/states/colorado",
        permanent: true,
      },
      // FIXED: Removed duplicate "/blogs/texas-car-transport" — kept first (states/texas-tx)
      {
        source: "/blogs/texas-car-transport",
        destination: "https://rapidautoshipping.com/states/texas-tx",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-california",
        destination: "https://rapidautoshipping.com/states/california",
        permanent: true,
      },
      {
        source: "/blogs/auto-shipping-california",
        destination: "https://rapidautoshipping.com/states/california",
        permanent: true,
      },
      {
        source: "/blogs/ship-a-car-to-california",
        destination: "https://rapidautoshipping.com/states/california",
        permanent: true,
      },
      {
        source: "/broken-car-transport-services",
        destination:
          "https://rapidautoshipping.com/non-running-vehicle-transport",
        permanent: true,
      },
      {
        source: "/blogs/how-to-ship-non-running-vehicle",
        destination:
          "https://rapidautoshipping.com/non-running-vehicle-transport",
        permanent: true,
      },
      {
        source: "/services/state-to-state-car-towing-service",
        destination:
          "https://rapidautoshipping.com/long-distance-towing-service",
        permanent: true,
      },
      {
        source: "/car-towing-rental-services",
        destination:
          "https://rapidautoshipping.com/long-distance-towing-service",
        permanent: true,
      },
      {
        source: "/blogs/covered-auto-transport",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/fifth-wheel-transport-services",
        destination:
          "https://rapidautoshipping.com/services/fifth-wheel-transport",
        permanent: true,
      },
      {
        source: "/fifth-Wheel-transport-cost",
        destination:
          "https://rapidautoshipping.com/services/fifth-wheel-transport",
        permanent: true,
      },
      {
        source: "/auto-transport-carriers/fifth-wheel-llc",
        destination:
          "https://rapidautoshipping.com/services/fifth-wheel-transport",
        permanent: true,
      },
      {
        source: "/blogs/autoshipping-companies-in-arkansas-2022",
        destination: "https://rapidautoshipping.com/states/arkansas",
        permanent: true,
      },
      {
        source: "/long-distance-moves-in-new-york",
        destination: "https://rapidautoshipping.com/states/new-york",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-michigan",
        destination: "https://rapidautoshipping.com/states/michigan",
        permanent: true,
      },
      {
        source: "/blogs/best-car-transport-companies-ohio",
        destination: "https://rapidautoshipping.com/states/ohio",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-car-to-florida",
        destination: "https://rapidautoshipping.com/states/florida",
        permanent: true,
      },
      {
        source: "/blogs/florida-car-shipping-fees",
        destination: "https://rapidautoshipping.com/states/florida",
        permanent: true,
      },
      {
        source: "/blogs/florida-car-shipping-company",
        destination: "https://rapidautoshipping.com/states/florida",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-in-florida",
        destination: "https://rapidautoshipping.com/states/florida",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-car-to-alaska",
        destination: "https://rapidautoshipping.com/states/alaska",
        permanent: true,
      },
      {
        source: "/blogs/alaska-auto-shipping",
        destination: "https://rapidautoshipping.com/states/alaska",
        permanent: true,
      },
      {
        source: "/blogs/shipping-car-to-alaska",
        destination: "https://rapidautoshipping.com/states/alaska",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-car-from-california-to-texas",
        destination:
          "https://rapidautoshipping.com/state-to-state/california-to-texas",
        permanent: true,
      },
      {
        source: "/blogs/cost-from-california-to-texas",
        destination:
          "https://rapidautoshipping.com/state-to-state/california-to-texas",
        permanent: true,
      },
      {
        source: "/blogs/best-auto-transport-michigan",
        destination: "https://rapidautoshipping.com/states/michigan",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-companies-in-virginia",
        destination: "https://rapidautoshipping.com/states/virginia-va",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-companies-in-north-carolina",
        destination: "https://rapidautoshipping.com/states/north-carolina",
        permanent: true,
      },
      {
        source: "/blogs/how-to-ship-a-car-overseas",
        destination:
          "https://rapidautoshipping.com/services/international-car-shipping",
        permanent: true,
      },
      {
        source: "/services/yacht-shipping-services",
        destination: "https://rapidautoshipping.com/yacht-shipping",
        permanent: true,
      },
      {
        source: "/services/yacht",
        destination: "https://rapidautoshipping.com/yacht-shipping",
        permanent: true,
      },
      {
        source: "/blogs/yacht-shipping-companies",
        destination: "https://rapidautoshipping.com/yacht-shipping",
        permanent: true,
      },
      {
        source: "/services/motor-cycle-shipping",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/services/medical-transport",
        destination:
          "https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars",
        permanent: true,
      },
      {
        source: "/blogs/tips-for-auto-shipping-discount",
        destination: "https://rapidautoshipping.com/deals",
        permanent: true,
      },
      {
        source: "/blogs/special-discounts",
        destination: "https://rapidautoshipping.com/deals",
        permanent: true,
      },
      {
        source: "/blogs/how-to-prepare-your-vehicle",
        destination: "https://rapidautoshipping.com/how-it-works",
        permanent: true,
      },
      {
        source: "/states-to-states-car-towing-service",
        destination:
          "https://rapidautoshipping.com/long-distance-towing-service",
        permanent: true,
      },
      {
        source: "/blogs/enclosed-transport-trailers",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/shipping-a-car-in-the-winter",
        destination:
          "/blogs/differences-between-shipping-a-vehicle-during-summer-vs-winter",
        permanent: true,
      },
      // FIXED: Removed duplicate "/blogs/how-the-weather-affects-auto-transport" — kept absolute URL version
      {
        source: "/blogs/how-the-weather-affects-auto-transport",
        destination:
          "https://rapidautoshipping.com/blogs/differences-between-shipping-a-vehicle-during-summer-vs-winter",
        permanent: true,
      },
      {
        source: "/blogs/tips-for-preparing-your-car-for-auction",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/blogs/indianapolis-auto-transport-guide",
        destination: "https://rapidautoshipping.com/states/indiana",
        permanent: true,
      },
      {
        source: "/blogs/shipping-car-to-mexico",
        destination:
          "https://rapidautoshipping.com/blogs/transport-car-to-mexico",
        permanent: true,
      },
      // FIXED: Removed duplicate "/services/car-delivery-services" — kept first (car-delivery-service)
      // FIXED: Removed duplicate "/blogs/best-car-delivery-service" — kept first (car-delivery-service)
      // FIXED: "/car-delivery-service" — kept first destination (car-shipping-services)
      {
        source: "/car-delivery-service",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      {
        source: "/classic-cars-vintage-vehicles",
        destination:
          "https://rapidautoshipping.com/services/classic-car-shipping",
        permanent: true,
      },
      {
        source: "/blogs/auto-transport-texas",
        destination: "https://rapidautoshipping.com/states/texas-tx",
        permanent: true,
      },
      {
        source: "/services/motorcycle-by-train",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        // FIXED: Removed duplicate — both had same destination
        source: "/oklahoma-to-kansas-city-auto-transport",
        destination:
          "https://rapidautoshipping.com/oklahoma-city-to-kansas-city-auto-transport",
        permanent: true,
      },
      {
        // FIXED: Removed duplicate — both had same destination
        source: "/oklahoma-to-new-york-auto-transport",
        destination:
          "https://rapidautoshipping.com/oklahoma-city-to-new-york-city-auto-transport",
        permanent: true,
      },
      {
        source: "/indianapolis-and-salt-lake-city-auto-transport",
        destination:
          "https://rapidautoshipping.com/indianapolis-to-salt-lake-city-auto-transport",
        permanent: true,
      },
      {
        source: "/miami-and-denver-auto-transport",
        destination:
          "https://rapidautoshipping.com/miami-to-denver-auto-transport",
        permanent: true,
      },
      {
        source: "/nyc-to-austin-auto-transport",
        destination:
          "https://rapidautoshipping.com/new-york-city-to-austin-auto-transport",
        permanent: true,
      },
      {
        source: "/washington-to-baltimore-auto-transport",
        destination:
          "https://rapidautoshipping.com/washington-dc-to-baltimore-auto-transport",
        permanent: true,
      },
      {
        source: "/chicago-to-washington-auto-transport",
        destination:
          "https://rapidautoshipping.com/washington-dc-to-baltimore-auto-transport",
        permanent: true,
      },
      {
        source: "/jacksonville-to-minneapolis-st-paul-auto-transport",
        destination:
          "https://rapidautoshipping.com/jacksonville-to-st-paul-auto-transport",
        permanent: true,
      },
      {
        source: "/rochester-to-new-york-auto-transport",
        destination:
          "https://rapidautoshipping.com/rochester-to-new-york-city-auto-transport",
        permanent: true,
      },
      {
        source: "/illinois-to-lewiston-auto-transport",
        destination:
          "https://rapidautoshipping.com/chicago-to-lewiston-auto-transport",
        permanent: true,
      },
      {
        // FIXED: Removed duplicate — both had same destination
        source: "/virginia-beach-norfolk-to-dallas-auto-transport",
        destination:
          "https://rapidautoshipping.com/virginia-beach-to-dallas-auto-transport",
        permanent: true,
      },
      {
        source: "/minneapolis-st-paul-to-memphis-auto-transport",
        destination:
          "https://rapidautoshipping.com/st-paul-to-memphis-auto-transport",
        permanent: true,
      },
      {
        source: "/buffalo-to-new-york-auto-transport",
        destination:
          "https://rapidautoshipping.com/buffalo-to-new-york-city-auto-transport",
        permanent: true,
      },
      {
        source: "/virginia-beach-norfolk-to-cincinnati-auto-transport",
        destination:
          "https://rapidautoshipping.com/virginia-beach-to-cincinnati-auto-transport",
        permanent: true,
      },
      {
        // FIXED: Removed duplicate — both had same destination
        source: "/minneapolis-st-paul-to-fresno-auto-transport",
        destination:
          "https://rapidautoshipping.com/st-paul-to-fresno-auto-transport",
        permanent: true,
      },
      {
        source: "/miami-to-washington-auto-transport",
        destination:
          "https://rapidautoshipping.com/miami-to-washington-dc-auto-transport",
        permanent: true,
      },
      {
        source: "/cars/mini-cooper-car-transport-service",
        destination:
          "https://rapidautoshipping.com/cars/mini-car-transport-service",
        permanent: true,
      },
      {
        source: "/blogs/san-antonio-to-dallas-auto-transport",
        destination:
          "https://rapidautoshipping.com/san-antonio-to-dallas-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/jacksonville-to-orlando-auto-transport",
        destination:
          "https://rapidautoshipping.com/jacksonville-to-orlando-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/sacramento-to-san-francisco-auto-transport",
        destination:
          "https://rapidautoshipping.com/sacramento-to-san-francisco-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/tampa-to-orlando-auto-transport",
        destination:
          "https://rapidautoshipping.com/tampa-to-orlando-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/orlando-to-fort-lauderdale-auto-transport",
        destination:
          "https://rapidautoshipping.com/orlando-to-fort-lauderdale-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/houston-to-orlando-auto-transport",
        destination:
          "https://rapidautoshipping.com/houston-to-orlando-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/houston-to-chicago-auto-transport",
        destination:
          "https://rapidautoshipping.com/houston-to-chicago-auto-transport",
        permanent: true,
      },
      {
        // FIXED: Removed duplicate — both had same destination
        source: "/shipping-car-from-los-angeles-to-houston",
        destination:
          "https://rapidautoshipping.com/los-angeles-to-houston-auto-transport",
        permanent: true,
      },
      {
        source: "/chicago-to-los-angeles-car-shipping-service",
        destination:
          "https://rapidautoshipping.com/chicago-to-los-angeles-auto-transport",
        permanent: true,
      },
      {
        source: "/cars/corvette-car-transport-service",
        destination:
          "https://rapidautoshipping.com/cars/chevrolet-car-transport-service",
        permanent: true,
      },
      {
        source: "/timely-shipping-of-a-car-from-new-jersey-to-florida",
        destination:
          "https://rapidautoshipping.com/state-to-state/new-jersey-to-florida",
        permanent: true,
      },
      {
        source: "/blogs/motorcycle-shipping-company",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/blogs/terminal-to-terminal-car-shipping",
        destination:
          "https://rapidautoshipping.com/blogs/terminal-to-terminal-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-motorcycle-shipping",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/blogs/best-autoshipping-company-usa",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/blogs/how-can-i-move-a-motorcycle",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/blogs/direct-auto-transport",
        destination:
          "https://rapidautoshipping.com/relocating-families-car-shipping-services",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-services",
        destination:
          "https://rapidautoshipping.com/services/cheap-car-shipping",
        permanent: true,
      },
      {
        source: "/motorcycle-shipping-cost",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/blogs/states-to-states-car-towing-service",
        destination:
          "https://rapidautoshipping.com/long-distance-towing-service",
        permanent: true,
      },
      {
        source: "/blogs/moving-car-from-state-to-state",
        destination:
          "https://rapidautoshipping.com/services/ship-car-to-another-state",
        permanent: true,
      },
      {
        source: "/blogs/savannah-to-atlanta-auto-transport",
        destination:
          "https://rapidautoshipping.com/savannah-to-atlanta-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/atlanta-to-las-vegas-auto-transport",
        destination:
          "https://rapidautoshipping.com/atlanta-to-las-vegas-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/dallas-to-san-antonio-auto-transport",
        destination:
          "https://rapidautoshipping.com/dallas-to-san-antonio-auto-transport",
        permanent: true,
      },
      {
        // FIXED: Removed trailing spaces in source and destination
        source: "/minneapolis-to-st-paul-auto-transport",
        destination: "https://rapidautoshipping.com/states/minnesota",
        permanent: true,
      },
      {
        source: "/state-to-state/california-to-las-vegas",
        destination:
          "https://rapidautoshipping.com/state-to-state/california-to-nevada",
        permanent: true,
      },
      {
        source: "/blogs/auto-shipping-payment-options",
        destination: "https://rapidautoshipping.com/faqs/payment-options",
        permanent: true,
      },
      {
        source: "/blogs/why-to-compare-auto-transport-companies",
        destination:
          "https://rapidautoshipping.com/faqs/compare-auto-transport-companies",
        permanent: true,
      },
      {
        source: "/how-auto-transport-saves-money",
        destination:
          "https://rapidautoshipping.com/faqs/auto-transport-saves-money",
        permanent: true,
      },
      {
        source: "/how-much-time-does-car-shipping-take",
        destination: "https://rapidautoshipping.com/faqs/car-shipping-time",
        permanent: true,
      },
      {
        source: "/blogs/beginners-guide-for-first-time-auto-shipping",
        destination:
          "https://rapidautoshipping.com/faqs/first-time-auto-shipping-guide",
        permanent: true,
      },
      {
        source: "/blogs/open-air-transport",
        destination: "https://rapidautoshipping.com/faqs/open-air-transport",
        permanent: true,
      },
      {
        source: "/blogs/atv-transport",
        destination: "https://rapidautoshipping.com/faqs/atv-transport",
        permanent: true,
      },
      {
        source: "/blogs/atvs-shipping",
        destination: "https://rapidautoshipping.com/faqs/atv-transport",
        permanent: true,
      },
      {
        source: "/blogs/pros-and-cons-of-door-to-door-auto-shipping",
        destination:
          "https://rapidautoshipping.com/faqs/door-to-door-auto-shipping",
        permanent: true,
      },
      {
        source:
          "/can-you-ship-a-car-to-another-state-with-an-expired-registration",
        destination:
          "https://rapidautoshipping.com/faqs/shipping-car-expired-registration",
        permanent: true,
      },
      {
        // FIXED: Removed trailing space in destination
        source: "/guaranteed-car-pick-up-service",
        destination:
          "https://rapidautoshipping.com/faqs/guaranteed-car-pick-up",
        permanent: true,
      },
      {
        source: "/services/international-boat-transport",
        destination:
          "https://rapidautoshipping.com/faqs/international-boat-transport",
        permanent: true,
      },
      {
        source: "/blogs/how-to-ship-a-military-persons-vehicle",
        destination:
          "https://rapidautoshipping.com/faqs/military-vehicle-shipping",
        permanent: true,
      },
      {
        source: "/blogs/cheapest-way-to-ship-a-car-to-hawaii",
        destination: "https://rapidautoshipping.com/faqs/ship-car-to-hawaii",
        permanent: true,
      },
      {
        source: "/blogs/race-car-transport-services",
        destination: "https://rapidautoshipping.com/faqs/race-car-transport",
        permanent: true,
      },
      {
        source: "/blogs/port-to-port-transportation",
        destination:
          "https://rapidautoshipping.com/faqs/port-to-port-transport",
        permanent: true,
      },
      {
        source: "/blogs/car-shipping-documents",
        destination:
          "https://rapidautoshipping.com/faqs/car-shipping-documents",
        permanent: true,
      },
      {
        source: "/blogs/how-to-avoid-auto-shipping-scam",
        destination:
          "https://rapidautoshipping.com/faqs/avoid-auto-shipping-scams",
        permanent: true,
      },
      {
        source: "/blogs/suv-auto-transport",
        destination: "https://rapidautoshipping.com/faqs/suv-auto-transport",
        permanent: true,
      },
      {
        source: "/blogs/guide-to-auto-transport-deposit",
        destination:
          "https://rapidautoshipping.com/faqs/auto-transport-deposit",
        permanent: true,
      },
      {
        source: "/blogs/what-is-usdot-how-to-check-usdot",
        destination: "https://rapidautoshipping.com/faqs/usdot-information",
        permanent: true,
      },
      {
        source: "/ship-your-car-by-train",
        destination: "https://rapidautoshipping.com/faqs/ship-car-by-train",
        permanent: true,
      },
      {
        source: "/how-does-shipping-work-on-ebay",
        destination: "https://rapidautoshipping.com/faqs/ebay-car-shipping",
        permanent: true,
      },
      {
        source: "/how-long-does-it-take-to-ship-a-car",
        destination: "https://rapidautoshipping.com/faqs/car-shipping-duration",
        permanent: true,
      },
      {
        source: "/blogs/how-long-it-takes-to-ship-a-car",
        destination: "https://rapidautoshipping.com/faqs/car-shipping-duration",
        permanent: true,
      },
      {
        source: "/questions-to-ask-when-buying-a-used-car",
        destination:
          "https://rapidautoshipping.com/faqs/buying-used-car-questions",
        permanent: true,
      },
      {
        source: "/popular-sites-to-sell-cars-online",
        destination: "https://rapidautoshipping.com/faqs/sell-cars-online",
        permanent: true,
      },
      {
        source: "/cars/chevrolet",
        destination:
          "https://rapidautoshipping.com/cars/chevrolet-car-transport-service",
        permanent: true,
      },
      {
        source: "/cars/ford",
        destination:
          "https://rapidautoshipping.com/cars/ford-car-transport-service",
        permanent: true,
      },
      {
        source: "/states/wyoming",
        destination: "https://rapidautoshipping.com/states/wyoming-wy",
        permanent: true,
      },
      {
        // FIXED: Removed trailing space in destination
        source: "/state-to-state/california-to-houston",
        destination:
          "https://rapidautoshipping.com/state-to-state/california-to-texas",
        permanent: true,
      },
      {
        // FIXED: Removed trailing space in source
        source: "/nevada-to-new-orleans-auto-transport-service",
        destination:
          "https://rapidautoshipping.com/nevada-to-louisiana-auto-transport-service",
        permanent: true,
      },
      {
        source: "/states/wisconsin",
        destination: "https://rapidautoshipping.com/states/wisconsin-wi",
        permanent: true,
      },
      {
        source: "/lynnway-auto-auction-transportation",
        destination:
          "https://rapidautoshipping.com/americas-car-auction-transport",
        permanent: true,
      },
      {
        source: "/cars/mazda",
        destination:
          "https://rapidautoshipping.com/cars/mazda-car-transport-service",
        permanent: true,
      },
      {
        source:
          "/auto-transport-carriers/american-connection-auto-transport-ll",
        destination:
          "https://rapidautoshipping.com/auto-transport-carriers/american-connection-auto-transport-llc",
        permanent: true,
      },
      {
        source: "/blogs/cheap-way-to-ship-a-car",
        destination:
          "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
        permanent: true,
      },
      {
        source: "/blogs/benefits-of-enclosed-auto-transport",
        destination: "https://rapidautoshipping.com/enclosed-car-transport",
        permanent: true,
      },
      {
        source: "/services/collector-car-shipping",
        destination:
          "https://rapidautoshipping.com/ultimate-guide-shipping-collector-show-cars",
        permanent: true,
      },
      {
        source: "/services/boat-shipping",
        destination:
          "https://rapidautoshipping.com/blogs/boat-shipping-cost-calculator",
        permanent: true,
      },
      {
        source: "/motor-cycle-shipping",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/motorcycle-shipping-cost-calculator",
        destination: "https://rapidautoshipping.com/motorcycle-shipping",
        permanent: true,
      },
      {
        source: "/auto-transport-texas",
        destination: "https://rapidautoshipping.com/states/texas-tx",
        permanent: true,
      },
      {
        source: "/services/rail-shipping",
        destination:
          "https://rapidautoshipping.com/services/car-shipping-services",
        permanent: true,
      },
      // FIXED: Removed duplicate "/blogs/ship-car-by-train" — kept last destination
      {
        source: "/blogs/ship-car-by-train",
        destination:
          "https://rapidautoshipping.com/faqs/right-auto-transport-carrier-for-your-vehicle",
        permanent: true,
      },
      {
        source: "/blogs/right-auto-transport-carrier-for-your-vehicle",
        destination: "https://rapidautoshipping.com",
        permanent: true,
      },
      {
        source: "/portland-auto-auction-transportation",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/carmax-shipping-car-transportation",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/abc-birmingham-auto-transportation",
        destination:
          "https://rapidautoshipping.com/services/auto-auction-shipping",
        permanent: true,
      },
      {
        source: "/new-york-to-florida-car-shipping-service",
        destination:
          "https://rapidautoshipping.com/state-to-state/new-york-to-florida",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

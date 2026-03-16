import { motion } from "framer-motion";

const carBrands = [
  {
    name: "Acura",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503964/cars/Acura.png",
    href: "https://rapidautoshipping.com/cars/acura-car-transport-service",
    alt: "Trusted Acura auto transport company",
  },
  {
    name: "Genesis",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503964/cars/cjwjv7fuin0o2lksqewh.png",
    href: "https://rapidautoshipping.com/cars/genesis-car-transport-service",
    alt: "Trusted Genesis auto transport company",
  },
  {
    name: "Alfa-Romeo",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Alfa-Romeo.png",
    href: "https://rapidautoshipping.com/cars/alfa-romeo-car-transport-service",
    alt: "Trusted Alfa Romeo auto transport company",
  },
  {
    name: "Aston Martin",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Aston-Martin.png",
    href: "https://rapidautoshipping.com/cars/aston-martin-car-transport-service",
    alt: "Trusted Aston Martin auto transport company",
  },
  {
    name: "GMC",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/GMC.png",
    href: "https://rapidautoshipping.com/cars/gmc-car-shipping-company",
    alt: "Trusted GMC auto transport company",
  },
  {
    name: "Audi",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Audi.png",
    href: "https://rapidautoshipping.com/cars/audi-car-transport-service",
    alt: "Trusted Audi auto transport company",
  },
  {
    name: "Shelby",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Shelby.webp",
    href: "https://rapidautoshipping.com/cars/shelby-car-transport-service",
    alt: "Trusted Shelby auto transport company",
  },
  {
    name: "Buick",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Buick.png",
    href: "https://rapidautoshipping.com/cars/buick-car-transport-service",
    alt: "Trusted Buick auto transport company",
  },
  {
    name: "Hyundai",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Hyundai.png",
    href: "https://rapidautoshipping.com/cars/hyundai-car-transport-service",
    alt: "Trusted Hyundai auto transport company",
  },
  {
    name: "Cadillac",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Cadillac.png",
    href: "https://rapidautoshipping.com/cars/cadillac-car-transport-service",
    alt: "Trusted Cadillac auto transport company",
  },
  {
    name: "INFINITI",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/INFINITI.png",
    href: "https://rapidautoshipping.com/cars/infiniti-car-transport-service",
    alt: "Trusted INFINITI auto transport company",
  },
  {
    name: "Chevrolet",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/Chevrolet.png",
    href: "https://rapidautoshipping.com/cars/chevrolet-car-transport-service",
    alt: "Trusted Chevrolet auto transport company",
  },
  {
    name: "Isuzu",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/Isuzu.png",
    href: "https://rapidautoshipping.com/cars/isuzu-car-transport-service",
    alt: "Trusted Isuzu auto transport company",
  },
  {
    name: "Chrysler",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Chrysler.webp",
    href: "https://rapidautoshipping.com/cars/chrysler-car-transport-service",
    alt: "Trusted Chrysler auto transport company",
  },
  {
    name: "Jaguar",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Jaguar.png",
    href: "https://rapidautoshipping.com/cars/jaguar-car-transport-service",
    alt: "Trusted Jaguar auto transport company",
  },
  {
    name: "Dodge",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Dodge.png",
    href: "https://rapidautoshipping.com/cars/dodge-car-transport-service",
    alt: "Trusted Dodge auto transport company",
  },
  {
    name: "Jeep",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Jeep.png",
    href: "https://rapidautoshipping.com/cars/jeep-car-transport-service",
    alt: "Trusted Jeep auto transport company",
  },
  {
    name: "Ferrari",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Ferrari.png",
    href: "https://rapidautoshipping.com/cars/ferrari-car-transport-service",
    alt: "Trusted Ferrari auto transport company",
  },
  {
    name: "Kia",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Kia.png",
    href: "https://rapidautoshipping.com/cars/kia-car-transport-service",
    alt: "Trusted Kia auto transport company",
  },
  {
    name: "FIAT",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/FIAT.png",
    href: "https://rapidautoshipping.com/cars/fiat-car-transport-service",
    alt: "Trusted FIAT auto transport company",
  },
  {
    name: "Lamborghini",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Lamborghini.png",
    href: "https://rapidautoshipping.com/cars/lamborghini-car-transport-service",
    alt: "Trusted Lamborghini auto transport company",
  },
  {
    name: "Ford",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Ford.png",
    href: "https://rapidautoshipping.com/cars/ford-car-transport-service",
    alt: "Trusted Ford auto transport company",
  },
  {
    name: "Land Rover",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Land-Rover.png",
    href: "https://rapidautoshipping.com/cars/land-rover-car-transport-service",
    alt: "Trusted Land Rover auto transport company",
  },
  {
    name: "Bugatti",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Bugatti.webp",
    href: "https://rapidautoshipping.com/cars/bugatti-car-transport-service",
    alt: "Trusted Bugatti auto transport company",
  },
  {
    name: "BMW",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/BMW.webp",
    href: "https://rapidautoshipping.com/cars/bmw-car-transport-service",
    alt: "Trusted BMW auto transport company",
  },
  {
    name: "Lexus",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503964/cars/Lexus.png",
    href: "https://rapidautoshipping.com/cars/lexus-car-transport-service",
    alt: "Trusted Lexus auto transport company",
  },
  {
    name: "Porsche",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Porsche.png",
    href: "https://rapidautoshipping.com/cars/porsche-car-transport-services",
    alt: "Trusted Porsche auto transport company",
  },
  {
    name: "Lincoln",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Lincoln.png",
    href: "https://rapidautoshipping.com/cars/lincoln-car-transport-service",
    alt: "Trusted Lincoln auto transport company",
  },
  {
    name: "Ram",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Ram.png",
    href: "https://rapidautoshipping.com/cars/ram-car-transport-service",
    alt: "Trusted Ram auto transport company",
  },
  {
    name: "Lotus",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Lotus.png",
    href: "https://rapidautoshipping.com/cars/lotus-car-transport-service",
    alt: "Trusted Lotus auto transport company",
  },
  {
    name: "Saab",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Saab.png",
    href: "https://rapidautoshipping.com/cars/saab-car-transport-service",
    alt: "Trusted Saab auto transport company",
  },
  {
    name: "Maserati",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Maserati.png",
    href: "https://rapidautoshipping.com/cars/maserati-car-transport-services",
    alt: "Trusted Maserati auto transport company",
  },
  {
    name: "Saturn",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Saturn.png",
    href: "https://rapidautoshipping.com/cars/saturn-car-transport-service",
    alt: "Trusted Saturn auto transport company",
  },
  {
    name: "Mazda",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Mazda.png",
    href: "https://rapidautoshipping.com/cars/mazda-car-transport-service",
    alt: "Trusted Mazda auto transport company",
  },
  {
    name: "Scion",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503962/cars/Scion.png",
    href: "https://rapidautoshipping.com/cars/scion-car-transport-service",
    alt: "Trusted Scion auto transport company",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/Mercedes-Benz.png",
    href: "https://rapidautoshipping.com/cars/mercedes-benz-car-transport-service",
    alt: "Trusted Mercedes-Benz auto transport company",
  },
  {
    name: "Smart",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/Smart.png",
    href: "https://rapidautoshipping.com/cars/smart-car-transport-service",
    alt: "Trusted Smart auto transport company",
  },
  {
    name: "Mercury",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503961/cars/Mercury.png",
    href: "https://rapidautoshipping.com/cars/mercury-car-transport-service",
    alt: "Trusted Mercury auto transport company",
  },
  {
    name: "Subaru",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Subaru.png",
    href: "https://rapidautoshipping.com/cars/subaru-car-transport-service",
    alt: "Trusted Subaru auto transport company",
  },
  {
    name: "MINI",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/MINI.png",
    href: "https://rapidautoshipping.com/cars/mini-car-transport-service",
    alt: "Trusted MINI auto transport company",
  },
  {
    name: "Suzuki",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743507721/Suzuki-car-logo-removebg-preview_flwmyi.png",
    href: "https://rapidautoshipping.com/cars/suzuki-car-transport-service",
    alt: "Trusted Suzuki auto transport company",
  },
  {
    name: "Mitsubishi",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Mitsubishi.png",
    href: "https://rapidautoshipping.com/cars/mitsubishi-car-transport-service",
    alt: "Trusted Mitsubishi auto transport company",
  },
  {
    name: "Tesla",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Tesla.png",
    href: "https://rapidautoshipping.com/cars/tesla-car-transport-service",
    alt: "Trusted Tesla auto transport company",
  },
  {
    name: "Nissan",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Nissan.png",
    href: "https://rapidautoshipping.com/cars/nissan-car-transport-service",
    alt: "Trusted Nissan auto transport company",
  },
  {
    name: "Toyota",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Toyota.png",
    href: "https://rapidautoshipping.com/cars/toyota-car-transport-service",
    alt: "Trusted Toyota auto transport company",
  },
  {
    name: "Corvette",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503960/cars/Corvette.webp",
    href: "https://rapidautoshipping.com/cars/chevrolet-car-transport-service",
    alt: "Trusted Corvette auto transport company",
  },
  {
    name: "Volkswagen",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Volkswagen.png",
    href: "https://rapidautoshipping.com/cars/volkswagen-car-transport-service",
    alt: "Trusted Volkswagen auto transport company",
  },
  {
    name: "Pontiac",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Pontiac.png",
    href: "https://rapidautoshipping.com/cars/pontiac-car-transport-service",
    alt: "Trusted Pontiac auto transport company",
  },
  {
    name: "Volvo",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503959/cars/Volvo.png",
    href: "https://rapidautoshipping.com/cars/volvo-car-transport-service",
    alt: "Trusted Volvo auto transport company",
  },
  {
    name: "Koenigsegg",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Koenigsegg.webp",
    href: "https://rapidautoshipping.com/cars/koenigsegg-car-transport-service",
    alt: "Trusted Koenigsegg auto transport company",
  },
  {
    name: "Mclaren",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503958/cars/Mclaren.webp",
    href: "https://rapidautoshipping.com/cars/mclaren-car-transport-service",
    alt: "Trusted McLaren auto transport company",
  },
  {
    name: "Honda",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743503963/cars/Honda.png",
    href: "https://rapidautoshipping.com/cars/honda-car-transport-service",
    alt: "Trusted Honda auto transport company",
  },
  {
    name: "Bentley",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371918/Bentley_v1ldpd.png",
    href: "https://rapidautoshipping.com/cars/bentley-car-transport-service",
    alt: "Trusted Bentley auto transport company",
  },
  {
    name: "Lucid",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371917/Lucid_n9ilgi.png",
    href: "https://rapidautoshipping.com/cars/lucid-car-transport-service",
    alt: "Trusted Lucid auto transport company",
  },
  {
    name: "Rivian",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371917/Rivian_tulbca.png",
    href: "https://rapidautoshipping.com/cars/rivian-car-transport-service",
    alt: "Trusted Rivian auto transport company",
  },
  {
    name: "Pagani",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371918/Pagani_e0xni6.png",
    href: "https://rapidautoshipping.com/cars/pagani-car-transport-service",
    alt: "Trusted Pagani auto transport company",
  },
  {
    name: "Rolls-Royce",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371917/Rolls-Royce_np9vjr.png",
    href: "https://rapidautoshipping.com/cars/rolls-royce-car-transport-service",
    alt: "Trusted Pagani auto transport company",
  },
  {
    name: "Polestar",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371917/Polestar_pll7oj.png",
    href: "https://rapidautoshipping.com/cars/polestar-car-transport-service",
    alt: "Trusted Polestar auto transport company",
  },
  {
    name: "VinFast",
    logo: "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770371917/VinFast_scggol.png",
    href: "https://rapidautoshipping.com/cars/vinfast-car-transport-service",
    alt: "Trusted Polestar auto transport company",
  },
];

export default function CarBrandLogos() {
  return (
    <div className="flex justify-center items-center bg-white py-10">
      <div className="grid grid-cols-4 gap-8 max-w-6xl w-full">
        {carBrands.map((brand, index) => (
          <a
            key={index}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="w-24 h-24 object-contain"
              />
              <p className="mt-2 text-lg font-semibold">{brand.name}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/CommonComponents/Navbar";
import Footer from "@/components/CommonComponents/Footer";
import ReviewSwiper from "../components/Home/swipper";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import Head from "next/head";
import Link from "next/link";
import {
  Star,
  Shield,
  Ruler,
  Truck,
  Clock,
  Quote,
  Wrench,
  Phone,
  Mail,
  Calendar,
  FileText,
  MapPin,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  DollarSign,
  Target,
  Medal,
  Globe,
  Navigation,
  Gauge,
  TrendingUp,
  Lock,
  Play,
  ThumbsUp,
  Eye,
  Zap,
  AlertCircle,
  Check,
  ChevronRight,
  ExternalLink,
  Calculator,
  Briefcase,
  Plane,
  Anchor,
  Home,
  Heart,
  Car,
  Package,
  Timer,
  CreditCard,
  Mountain,
  CloudRain,
  AlertTriangle,
  ThumbsDown,
  Building,
  ShoppingCart,
  Gavel,
} from "lucide-react";
import TransportForm from "@/components/CommonComponents/Form";
import {
  FaPhone,
  FaDollarSign,
  FaCalendarAlt,
  FaBox,
  FaEye,
  FaMap,
  FaCar,
  FaMedal,
  FaRuler,
  FaCamera,
  FaBroom,
  FaBoxOpen,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
  FaStar,
  FaEnvelope,
  FaMapPin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronUp,
  FaHome,
  FaStore,
  FaShoppingCart,
  FaGavel,
} from "react-icons/fa";
import { MdAccessAlarms, MdOutlineTireRepair } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import KeyBanner from "@/components/CommonComponents/key-banner";
import TestimonialSwiperopen from "@/components/CommonComponents/OpenReview";
import Image from "next/image";

export default function OpenAutoTransportPremium() {
  const [activeFactorIndex, setActiveFactorIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("pros");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeComparison, setActiveComparison] = useState("open");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen && !isMediumScreen && hoveredCard !== null) {
      setActiveCard(hoveredCard);
    }
  }, [hoveredCard, isSmallScreen, isMediumScreen]);

  const handleNextCard = () =>
    setActiveCard((prev) => (prev + 1) % cardsData.length);
  const handlePrevCard = () =>
    setActiveCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);

  useEffect(() => {
    if (sliderRef.current && (isSmallScreen || isMediumScreen)) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft = activeCard * cardWidth;
    }
  }, [activeCard, isSmallScreen, isMediumScreen]);

  useEffect(() => {
    setIsVisible(true);
    const cardTimer = setInterval(
      () => setActiveCard((prev) => (prev + 1) % 4),
      5000,
    );
    const stepTimer = setInterval(
      () => setActiveStep((prev) => (prev + 1) % 4),
      4000,
    );
    const featureTimer = setInterval(
      () => setActiveFeature((prev) => (prev + 1) % features.length),
      3000,
    );
    const statsTimer = setInterval(() => {}, 100);
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(cardTimer);
      clearInterval(stepTimer);
      clearInterval(featureTimer);
      clearInterval(statsTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cardsData = [
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748612192/Cadillac-Escalade_lko62p.webp",
      title: "Cadillac Escalade",
      description: {
        trip: "Philadelphia, PA to New York City, NY",
        price: "$1,800",
        distance: "2,710 mi",
      },
      alt: "Cadillac Escalade being transported from Philadelphia, PA to New York City, NY",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748612849/Screenshot_2025-05-30_191047_sjlcqd.webp",
      title: "Toyota RAV4 ",
      description: {
        trip: "Pittsburgh, PA to Seattle, WA",
        price: "$1,150",
        distance: "2,524 mi",
      },
      alt: "Toyota RAV4 on a transport trailer from Philadelphia to Miami",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748613352/Porsche_sogw7b.webp",
      title: "Porsche",
      description: {
        trip: "Harrisburg, PA to Miami, FL",
        price: "$900",
        distance: "1,165.1 mi",
      },
      alt: "Porsche being shipped from Harrisburg, PA to Miami, FLt",
    },
    {
      image:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1748615030/BMW-3-Series_usmr1p.webp",
      title: "BMW 3 Series",
      description: {
        trip: "Erie, PA to Phoenix, AZ",
        price: "$1,100.00",
        distance: "2,111 mi",
      },
      alt: "BMW 3 Series being transported from Erie, PA to Phoenix, AZ",
    },
  ];
  const backgroundImage =
    !isSmallScreen && !isMediumScreen && hoveredCard !== null
      ? cardsData[hoveredCard]?.image
      : cardsData[activeCard]?.image;
  const faqs = [
    {
      question: "Is my vehicle insured during transport?",
      answer:
        "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you’ll have added protection in the unlikely event of damage or an accident.",
    },
    {
      question: "How long does open transport car shipping take?",
      answer:
        "The typical time to ship a car is 3 to 5 business days. However, car shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings.",
    },
    {
      question: "Can I ship a non-running vehicle?",
      answer:
        "Yes! We transport non-running vehicles with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a breakdown or not running.",
    },
    {
      question: "Do I need to be present at pickup and delivery?",
      answer:
        "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person must be over 18, have your permission, and preferably be a licensed driver.If you cannot be at the pickup and delivery locations, you can contact the carrier driver for help. Just let him know where the keys are or how to access your car, especially if it can be operated remotely. He will take care of everything on your behalf to ensure everything goes smoothly. Important documents, such as the inspection report and the bill of lading, will be sent to you via email for your convenience.",
    },
    {
      question: "Can I track my vehicle during transport?",
      answer:
        "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
    },
  ];

  const tips = [
    {
      icon: <FaCamera size={60} />,
      title: "Wash Your Car",
      description:
        "A clean vehicle makes it simpler to photograph any existing damage prior to shipping.",
    },
    {
      icon: <MdAccessAlarms size={60} />,
      title: "Disable Alarms",
      description:
        "Avoids unnecessary disruptions and a smooth transport experience.",
    },
    {
      icon: <FaBroom size={60} />,
      title: "Take Out Loose Accessories",
      description:
        "Remove or secure removable items such as spoilers, bike racks, or antennas to prevent damage during shipping.",
    },
    {
      icon: <MdOutlineTireRepair size={60} />,
      title: "Check Tire Pressure & Fluid Levels",
      description:
        "Well-maintained tire pressure and fluid levels ensure safe loading and unloading.",
    },
    {
      icon: <FaTools size={60} />,
      title: "Limit Personal Items",
      description:
        "Most carriers permit up to 100 lbs of personal items, but leaving valuables behind is advisable.",
    },
    {
      icon: <GiHouseKeys size={60} />,
      title: "Offer a Spare Set of Keys",
      description:
        "Carriers mandate a set of keys in case the vehicle must be relocated during loading or unloading.",
    },
  ];

  const userTypes = [
    {
      id: 1,
      icon: Home,
      title: "Individuals Relocating on a Budget",
      subtitle: "Cost-Effective Moving Solution",
      description:
        "If you are moving nationally and require a low-cost means to ship your vehicle, open vehicle transport is the cost-effective way to do this without having to drive your vehicle long distances.",
      benefits: [
        "Save on fuel and travel expenses",
        "Avoid wear and tear on your vehicle",
        "No long-distance driving stress",
        "Focus on other moving tasks",
      ],
      stats: "Save $500-1500",
      color: "#ff5722",
      bgGradient: "from-orange-500/10 to-red-500/10",
      iconBg: "bg-orange-500",
    },
    {
      id: 2,
      icon: Building,
      title: "Car Dealerships & Fleet Managers",
      subtitle: "Bulk Transportation Specialists",
      description:
        "For dealerships transferring multiple vehicles together, open car transport is their preferred method of choice. They can transport lots of vehicles as bulk in large quantities at relatively lower prices and manage inventory at a reduced price.",
      benefits: [
        "Bulk shipping discounts",
        "Efficient inventory management",
        "Professional carrier network",
        "Streamlined logistics",
      ],
      stats: "Up to 8-10 Cars per Load",
      color: "#003366",
      bgGradient: "from-blue-900/10 to-blue-800/10",
      iconBg: "bg-blue-900",
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "Online Car Buyers & Sellers",
      subtitle: "Hassle-Free Remote Purchases",
      description:
        "In case you bought a vehicle from a seller out of your state, open car carrier shipping makes delivery hassle-free and budget-friendly to your place.",
      benefits: [
        "Nationwide vehicle access",
        "Safe remote transactions",
        "Door-to-door delivery options",
        "Inspection upon delivery",
      ],
      stats: "Nationwide Coverage",
      color: "#ff5722",
      bgGradient: "from-orange-500/10 to-red-500/10",
      iconBg: "bg-orange-500",
    },
    {
      id: 4,
      icon: Gavel,
      title: "Auction Buyers & Classic Car Enthusiasts",
      subtitle: "Affordable Auction Transport",
      description:
        "Auto auction buyers usually opt for open car transport due to its affordability and convenience, particularly while buying multiple cars.",
      benefits: [
        "Cost-effective for multiple purchases",
        "Auction site pickup services",
        "Flexible scheduling options",
        "Experienced with various car types",
      ],
      stats: "Perfect for Multiple Buys",
      color: "#003366",
      bgGradient: "from-blue-900/10 to-blue-800/10",
      iconBg: "bg-blue-900",
    },
  ];

  const overallBenefits = [
    {
      icon: DollarSign,
      title: "Budget-Friendly",
      desc: "Most economical shipping method",
    },
    { icon: Clock, title: "Time-Saving", desc: "Avoid long drives and delays" },
    { icon: Shield, title: "Reliable", desc: "Professional carrier network" },
    { icon: Globe, title: "Nationwide", desc: "Coast-to-coast coverage" },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Request an Instant Auto Shipping Quote",
      icon: <Calculator className="w-8 h-8" />,
      description:
        "Obtaining a shipping quote is the first step to ship a car. Fill out the details in the auto shipping calculator, or get in touch with us by email or call +1 (833) 233-4447.",
      features: [
        "Instant online quotes",
        "No hidden fees",
        "Competitive pricing",
        "Multiple contact options",
      ],
      accent: "#ff5722",
    },
    {
      id: 2,
      title: "Booking of the Shipment",
      icon: <Calendar className="w-8 h-8" />,
      description:
        "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email containing a link will be sent to you so you can conveniently schedule your shipment online.",
      features: [
        "Electronic contracts",
        "Online scheduling",
        "Flexible booking",
        "Email confirmation",
      ],
      accent: "#ff5722",
    },
    {
      id: 3,
      title: "Vehicle Pickup",
      icon: <Truck className="w-8 h-8" />,
      description:
        "Our skilled auto transport driver picks up your vehicle on the appointed day. Thorough inspection and condition recording before loading on the carrier.",
      features: [
        "Professional drivers",
        "Scheduled pickup",
        "Vehicle inspection",
        "Condition documentation",
      ],
      accent: "#ff5722",
    },
    {
      id: 4,
      title: "Safe Delivery",
      icon: <CheckCircle className="w-8 h-8" />,
      description:
        "The carrier will contact and provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can ask a reliable person to accept the car on your behalf.",
      features: [
        "Arrival notifications",
        "Safe delivery",
        "Final inspection",
        "Flexible recipient options",
      ],
      accent: "#ff5722",
    },
  ];

  const benefitst = [
    {
      icon: DollarSign,
      title: "Most Cost-Effective",
      description:
        "One of the most significant advantages of open car carrier transport is that it is cost-effective. Open carrier shipping has the capacity to carry several cars at a time, making each customer’s costs much lower. In comparison to enclosed transport, open carrier shipping is an affordable option for standard vehicle transportation without sacrificing reliability.",
      stats: "30-40% Savings",
    },
    {
      icon: Clock,
      title: "Outstanding Availability",
      description:
        "Open carrier car transport is the most popular vehicle shipping method, with more frequent scheduling and quicker transit times. When you require speedy and flexible shipping, open car carrier shipping provides a smooth ride with more transporters on different routes.",
      stats: "Faster Delivery",
    },
    {
      icon: Car,
      title: "Versatile Vehicle Types",
      description:
        "Unlike enclosed transport, which is confined to specific vehicle types, open carrier car shipping can handle different models, including sedans, SUVs, trucks, and even motorcycles. Whether you’re shipping a personal car as an individual or shipping multiple vehicles as a dealership, open car transport offers a convenient and versatile solution.",
      stats: "All Vehicle Types",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "With open car shipping, your car is kept in sight along the way, making it simple for you and the shipping company to inspect the car. By maintaining transparency, drivers are able to check the status of every vehicle and minimize the occurrence of concealed damage. Open auto transport also reduces the possibility of theft, as cars are always visible at all times.",
      stats: "Full Visibility",
    },
  ];

  const vehicleTypes = [
    { name: "Sedans", icon: "🚗", description: "Most economical to ship" },
    { name: "SUVs", icon: "🚙", description: "Popular transport choice" },
    {
      name: "Pickup Trucks",
      icon: "🛻",
      description: "Standard size vehicles",
    },
    { name: "Motorcycles", icon: "🏍️", description: "Secure bike transport" },
    { name: "Compact Cars", icon: "🚘", description: "Lowest shipping costs" },
    { name: "Luxury Vehicles", icon: "🏎️", description: "Safe open transport" },
  ];

  const useCases = [
    {
      icon: Home,
      title: "Relocations",
      desc: "Moving across country without driving long distances",
    },
    {
      icon: Briefcase,
      title: "Dealerships",
      desc: "Bulk transport of multiple vehicles at reduced costs",
    },
    {
      icon: Package,
      title: "Online Purchases",
      desc: "Hassle-free delivery from out-of-state sellers",
    },
    {
      icon: Award,
      title: "Auto Auctions",
      desc: "Affordable transport for auction buyers",
    },
  ];

  const pricingData = [
    { distance: "0 - 500 Miles", time: "1 - 2 Days", cost: "$350" },
    { distance: "500 - 1500 Miles", time: "2 - 4 Days", cost: "$770" },
    { distance: "1500 - 2500 Miles", time: "4 - 6 Days", cost: "$1,070" },
    { distance: "2500+ Miles", time: "6 - 8 Days", cost: "$1,580" },
  ];

  const comparisonData = {
    open: {
      cost: "30-40% less expensive",
      availability: "Highly available nationwide",
      weatherProtection: "Exposed to elements",
      roadDebrisProtection: "Minimal protection",
      privacy: "Visible to public",
      deliverySpeed: "Faster delivery timeframes",
      carrierCapacity: "8-10 vehicles per carrier",
      idealFor: "Standard vehicles, relocations, dealerships",
    },
    enclosed: {
      cost: "Premium pricing (typically $400-$800 more)",
      availability: "Limited availability with longer wait times",
      weatherProtection: "Complete protection from weather",
      roadDebrisProtection: "Full protection from debris",
      privacy: "Complete privacy during transport",
      deliverySpeed: "Typically slower due to limited availability",
      carrierCapacity: "2-6 vehicles per carrier",
      idealFor: "Luxury, classic, exotic, high-value cars",
    },
  };

  const costFactors = [
    {
      id: 1,
      icon: Navigation,
      title: "Distance & Route",
      description:
        "The longer distance your car has to travel, the more expensive it will be because of fuel usage, tolls, and labor of the driver. Transporting to major cities with well-traveled roads is generally less expensive than shipping to outlying or rural areas.",
      impact: "Primary Factor",
      color: "#ff5722",
      stats: "Major routes cost 20-30% less",
    },
    {
      id: 2,
      icon: Car,
      title: "Vehicle Type & Weight",
      description:
        "Larger and heavier vehicles take up more room on an open car carrier shipment, which increases the shipping cost. Smaller cars, however, are simpler to fit in, thus being less expensive to ship.",
      impact: "High Impact",
      color: "#003366",
      stats: "SUVs cost 15-25% more than sedans",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Seasonal Demand",
      description:
        "Open car shipping prices vary seasonally. Summer (Memorial Day to Labor Day) is a peak season with higher demand, which pushes prices up. Booking in off-season months can get you better rates for open vehicle shipping.",
      impact: "Variable Impact",
      color: "#ff5722",
      stats: "Off-season saves 10-20%",
    },
    {
      id: 4,
      icon: Award,
      title: "Model & Manufacturer",
      description:
        "Luxury or high-end cars can need extra care, adding to the total cost of transport. Although open carrier car transport is safe in most cases for regular cars, exotic or premium vehicles may need extra attention, which can increase the price.",
      impact: "Moderate Impact",
      color: "#003366",
      stats: "Luxury vehicles +$100-300",
    },
    {
      id: 5,
      icon: Ruler,
      title: "Vehicle Length",
      description:
        "Compact cars occupy less space on an open carrier, enabling transporters to carry more cars on one trip. This cost-effective use of space can lead to reduced expenses, which in turn makes open transport car shipping cost-effective for smaller cars.",
      impact: "Cost Saver",
      color: "#ff5722",
      stats: "Compact cars save 5-15%",
    },
  ];

  const costTips = [
    "Book during off-peak seasons for better rates",
    "Choose flexible pickup/delivery dates",
    "Consider terminal-to-terminal shipping",
    "Get multiple quotes for comparison",
    "Book in advance for lower prices",
  ];

  const seasonalData = [
    { season: "Winter", months: "Dec - Feb", demand: "Low", savings: "15-20%" },
    {
      season: "Spring",
      months: "Mar - May",
      demand: "Medium",
      savings: "5-10%",
    },
    { season: "Summer", months: "Jun - Aug", demand: "High", savings: "0%" },
    { season: "Fall", months: "Sep - Nov", demand: "Medium", savings: "8-12%" },
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Most affordable shipping method with shared trailer costs",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple delivery and pick-up times available",
    },
    {
      icon: Truck,
      title: "Multiple Vehicles",
      description: "Open trailers can transport several cars simultaneously",
    },
    {
      icon: Users,
      title: "Widely Used",
      description: "Preferred by dealers, manufacturers, and private owners",
    },
  ];

  const benefits = [
    "Standard method used by dealers nationwide",
    "Ships cars hundreds or thousands of miles",
    "Lower cost per vehicle due to shared transport",
    "Ideal for relocations and distant purchases",
    "Perfect for dealerships transporting multiple cars",
    "Suitable for both long and short distances",
  ];

  const idealFor = [
    {
      title: "Private Owners",
      desc: "Relocating or buying from distant dealers",
    },
    { title: "Dealerships", desc: "Transporting inventory efficiently" },
    { title: "Manufacturers", desc: "Moving multiple vehicles at once" },
    { title: "Long Distance", desc: "Cross-country vehicle shipping" },
  ];

  const prosData = [
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description:
        "The most affordable method is open car transport since several cars are transported simultaneously, lowering the per-car cost. This option is best for individuals, dealerships, and car manufacturers that need a cost-effective solution.",
      benefit: "30-40% Cost Savings",
      color: "#ff5722",
      stats: "Lowest shipping rates available",
    },
    {
      icon: Clock,
      title: "High Availability & Faster Scheduling",
      description:
        "Due to the fact that open carrier shipping is the most widespread shipping method, carriers are available easily. This provides quicker scheduling and a faster turnover than enclosed transport.",
      benefit: "95% Availability",
      color: "#003366",
      stats: "Faster delivery timeframes",
    },
    {
      icon: Car,
      title: "Flexible & Ideal for Most Cars",
      description:
        "Open car transport can handle a range of cars, from sedans and SUVs to trucks and motorcycles. It's the go-to option for regular cars that don't need additional protection.",
      benefit: "All Vehicle Types",
      color: "#ff5722",
      stats: "Sedans to SUVs to motorcycles",
    },
    {
      icon: Truck,
      title: "Effective & Reliable",
      description:
        "Open transport car shipping uses optimized routes with frequently scheduled carrier departures, making deliveries reliable and on time.",
      benefit: "98% On-Time Delivery",
      color: "#003366",
      stats: "Optimized nationwide routes",
    },
    {
      icon: Eye,
      title: "Increased Visibility for Inspection",
      description:
        "As cars are exposed, transporters can inspect them easily while in transit, minimizing the chances of undetected damage or concealed problems.",
      benefit: "Full Transparency",
      color: "#ff5722",
      stats: "Continuous vehicle monitoring",
    },
  ];

  const consData = [
    {
      icon: CloudRain,
      title: "Exposure to Weather and Road Conditions",
      description:
        "As the car is shipped on an open trailer, it comes under exposure to weather conditions such as rain, dust, and snow. But that is not a problem for most cars as they can tolerate outdoor conditions.",
      impact: "Minor Concern",
      color: "#ff5722",
      mitigation: "Standard vehicles handle weather well",
    },
    {
      icon: AlertTriangle,
      title: "Potential for Minor Road Debris Contact",
      description:
        "Open carrier transport exposes cars to more dirt, dust, and minor road debris. Although damage is unlikely, some customers want enclosed transport for extra protection, particularly for luxury or vintage cars.",
      impact: "Low Risk",
      color: "#003366",
      mitigation: "Professional carriers minimize exposure",
    },
    {
      icon: Shield,
      title: "Less Privacy",
      description:
        "Your car is exposed during the trip with open car carrier transport. Although this can be more secure, some owners would like enclosed shipping for privacy.",
      impact: "Preference Based",
      color: "#ff5722",
      mitigation: "Increased security through visibility",
    },
  ];

  const featureswhy = [
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description:
        "No surprise charges, no advance payments—just transparent, competitive pricing.",
      color: "from-purple-500 to-purple-600",
      stat: "98% On-Time",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description:
        "Your ride is insured from pickup to drop-off, providing you with ultimate peace of mind.",
      color: "from-blue-500 to-blue-600",
      stat: "100% Covered",
    },
    {
      icon: Clock,
      title: "Expert Team & 24/7 Support",
      description:
        "Our qualified shipping experts are on hand 24 hours a day to help you every step of the way.",
      color: "from-amber-500 to-amber-600",
      stat: "24/7 Support",
    },
    {
      icon: Truck,
      title: "Nationwide Network",
      description:
        "We utilize thousands of pre-screened, insured carriers to deliver the best shipping options across the country.",
      color: "from-green-500 to-green-600",
      stat: "50 States",
    },
  ];

  const services = [
    "Coast-to-coast relocation",
    "Online car purchases",
    "Dealership inventory coordination",
    "Military deployment shipping",
    "Seasonal vehicle transport",
    "Student car shipping",
  ];

  const comparisonStats = [
    ,
    { label: "Cost Saving", value: 40, max: 100, suffix: "%" },
    { label: "Availability", value: 95, max: 100, suffix: "%" },
    { label: "Reliability", value: 98, max: 100, suffix: "%" },
  ];
  return (
    <>
      <Head>
        <title>Everything you need to know about Open Auto Transport</title>
        <meta
          name="description"
          content="Affordable and reliable open auto transport nationwide. Get fast, insured vehicle shipping with Rapid Auto Shipping. Call +1 (833) 233-4447 for a free quote!"
        />
        <link
          rel="canonical"
          href={"https://rapidautoshipping.com/open-auto-transport"}
        />
        <meta
          property="og:title"
          content="Open Auto Transport - Rapid Auto Shipping"
        />
        <meta
          property="og:description"
          content="Affordable and reliable open auto transport nationwide. Get fast, insured vehicle shipping with Rapid Auto Shipping."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747309369/Service/Classic-Car-Shipping.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                    "@id": "https://rapidautoshipping.com/open-auto-transport",
                    name: "Open Auto Transport",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative ">
        {/* Hero Section */}
        <section className="relative py-4  flex items-center w-full">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747309369/Service/Classic-Car-Shipping.webp"
              alt="Professional Auto Transport Service"
              width={1200}
              height={600}
              quality={75}
              priority={true}
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/dz2zovmf1/image/upload/v1747309369/Service/Classic-Car-Shipping.webp"
              className="w-full h-full object-cover"
              onError={() => console.error("Image failed to load")}
              sizes="(max-width: 600px) 600px, 800px"
              style={{ aspectRatio: "2/1" }}
            />

           
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8">
            <div className={`space-y-6 sm:space-y-8 `}>
              <div className="space-y-4 sm:space-y-6">
                <h1
                  className="text-5xl sm:text-6xl lg:text-5xl text-white drop-shadow-2xl font-bold text-center sm:text-left"
                  style={{ fontSize: "50px" }}
                >
                  Open Auto <span className="text-rapidcolor">Transport</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                  Shipping a car involves many details to think about, and
                  shipping methods are one of them. If you are planning to ship
                  your vehicle and want a budget-friendly method, then open auto
                  transport will be the one option that can fulfill your
                  requirements. Here, you will learn everything you need to know
                  about open car carrier transport.
                </p>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <TransportForm />
            </div>
          </div>
        </section>

        <ReviewSwiper />

        {/* What is Open Auto Transport Section */}
        <section className="relative py-10 bg-gradient-to-br from-gray-50 to-white ">
          <div className="absolute inset-0 opacity-5">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="transportPattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="2" fill="#003366" />
                  <circle cx="15" cy="15" r="1" fill="#ff5722" />
                  <circle cx="45" cy="45" r="1" fill="#ff5722" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#transportPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#003366]/20">
                <Truck className="w-5 h-5 text-[#003366] mr-2" />
                <span className="text-[#003366] font-semibold text-sm uppercase tracking-wide">
                  Transport Method
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                What Is
                <span className="block text-[#003366]">
                  Open Auto Transport?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn about the standard method of vehicle shipping used by
                dealers and private owners alike.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1748608089/multi_open_image_xcst3l.webp"
                    alt="Open Auto Transport Trailer"
                    className="w-full h-[700px] object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent rounded-2xl"></div>
                  <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#003366]">
                          8-10
                        </div>
                        <div className="text-sm text-gray-600">
                          Cars per Load
                        </div>
                      </div>
                      <div className="w-px h-12 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff5722]">
                          40%
                        </div>
                        <div className="text-sm text-gray-600">
                          Cost Savings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#003366]/20">
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      The Standard Method
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Open auto transport is the most widespread and
                      cost-effective method. For automobile owners, dealerships,
                      and manufacturers, this method uses an open trailer to
                      move multiple vehicles.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      Open car transport is the best if you need to ship cars
                      hundreds or thousands of miles across the country. Your
                      vehicle is on an open trailer with several others, making
                      each vehicle’s cost cheaper. Also, additional delivery and
                      pick-up times are available to accommodate your schedule.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      Many individuals, dealers, and manufacturers prefer open
                      carrier car shipping. It’s ideal for standard vehicles
                      whose owners want to ship long or short distances, no
                      matter whether you’re relocating, buying it from a distant
                      dealer, or sending it to relatives. Open carrier car
                      transport capacity of hauling multiple vehicles works well
                      for dealerships and manufacturers, transporting several
                      cars at once.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      Open vehicle transport ships vehicles on an open carrier
                      that provides optimum vehicle safety. However, it can’t
                      cover your car from external elements in bad weather
                      conditions. Standard vehicles are tough enough to handle
                      the weather elements, but luxury or antique vehicles need
                      to go with a more secure option like enclosed car
                      transport.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <feature.icon className="w-8 h-8 text-[#003366] mb-3" />
                        <div className="font-bold text-gray-900 text-sm">
                          {feature.title}
                        </div>
                        <p className="text-gray-600 text-xs mt-1">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-8 sm:py-10 bg-[#003366] relative">
          <div className="absolute inset-0 opacity-50">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="hexagonPattern"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="25,5 45,15 45,35 25,45 5,35 5,15"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#hexagonPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center bg-[#ff5722]/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-[#ff5722]/30">
                <Star className="w-4 h-4 sm:w-5 h-5 text-[#ff5722] mr-2" />
                <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  Top Benefits
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-8">
                Benefits Of
                <br />
                <span className="text-[#ff5722]">Open Auto Transport</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                Open car shipping is the cheapest and most favored way to
                transport cars nationwide. Whether you are moving, buying a car
                from a dealership, or buying it from an auction, open car
                transport offers the best and economical way out. Open transport
                car shipping involves transportation of your vehicle on an
                uncovered trailer with several other automobiles, and this is
                the inexpensive and most convenient option. Here’s why open
                vehicle transport remains the best option for most customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10 sm:mb-16 lg:mb-20">
              {benefitst.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:border-[#ff5722]/50 transition-all duration-500 transform hover:-translate-y-4"
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div className="absolute inset-0 bg-[#ff5722]/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 h-20 lg:w-24 lg:h-24 bg-[#ff5722] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl mx-auto sm:mx-0">
                          <Icon className="w-8 h-8 sm:w-10 h-10 lg:w-12 lg:h-12 text-white" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#ff5722] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <div className="bg-[#ff5722]/20 rounded-lg px-3 sm:px-4 py-1 sm:py-2 inline-block border border-[#ff5722]/30">
                            <span className="text-[#ff5722] font-bold text-sm sm:text-base">
                              {benefit.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                      {hoveredBenefit === index && (
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                          <div className="w-6 h-6 sm:w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 sm:w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-10 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 bg-[#ff5722]/10 border border-[#ff5722]/20 rounded-full mb-8">
                <Truck className="w-6 h-6 mr-3 text-[#ff5722]" />
                <span className="text-[#003366] font-bold text-lg">
                  Simple 4-Step Process
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-8">
                <span className="text-[#003366]">How Open Auto</span>
                <br />
                <span className="text-[#ff5722]">Transport Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Rapid Auto Shipping, our open vehicle transport process is
                easy and hassle-free. To book your standard car shipment, follow
                these simple step.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`group relative transition-all duration-700 cursor-pointer ${activeStep === index ? "scale-105 z-20" : "hover:scale-102"}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2  ${activeStep === index ? "border-[#ff5722] shadow-[#ff5722]/20" : "border-gray-100 hover:border-[#003366]/30"}`}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeStep === index ? "bg-[#ff5722]/5" : "bg-[#003366]/5"}`}
                    ></div>
                    <div className="relative z-10 p-8">
                      <div className="flex items-start space-x-6 mb-6">
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 ${activeStep === index ? "bg-[#ff5722]" : "bg-[#003366]"}`}
                        >
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-[#ff5722]/10 border border-[#ff5722]/20 text-[#003366] text-sm font-bold px-4 py-2 rounded-full">
                              Step {step.id}
                            </span>
                            <div
                              className={`w-3 h-3 rounded-full ${activeStep === index ? "bg-[#ff5722] animate-pulse" : "bg-gray-300"}`}
                            ></div>
                          </div>
                          <h3 className="text-2xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                            <span className="text-gray-600 text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {activeStep === index && (
                        <div className="absolute top-6 right-6">
                          <div className="w-6 h-6 bg-[#ff5722] rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`relative w-12 h-12 rounded-full transition-all duration-300 ${index <= activeStep ? "bg-[#ff5722] scale-125 shadow-lg" : "bg-gray-300 hover:bg-[#003366] hover:scale-110"}`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#ff5722] h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-5xl font-black text-[#003366] mb-8">
                Cost Of Open Car{" "}
                <span className="text-[#ff5722]">Shipping?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto">
                One of the most concerning questions that vehicle owners have is
                about how much it costs to ship a car. Usually the cost of
                shipping a car is calculated based on several factors. At Rapid
                Auto Shipping, we are not solely working to make a profit, we
                are a nation-serving company. Thus, we provide the most
                competitive, reasonable, and affordable vehicle shipping rates
                in the United States without compromising our services. Average
                car shipping costs are mentioned below to help get a general
                idea of the pricing structure.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {pricingData.map((pricing, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#ff5722]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#003366] mb-2">
                          {pricing.distance}
                        </div>
                        <div className="text-gray-600">Distance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff5722] mb-2">
                          {pricing.time}
                        </div>
                        <div className="text-gray-600">Delivery Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#ff5722] mb-2">
                          {pricing.cost}
                        </div>
                        <div className="text-gray-600">Estimated Cost</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative ">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="costPattern"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="40" cy="40" r="3" fill="#003366" />
                  <circle cx="20" cy="20" r="2" fill="#ff5722" />
                  <circle cx="60" cy="60" r="2" fill="#ff5722" />
                  <circle cx="20" cy="60" r="1" fill="#003366" />
                  <circle cx="60" cy="20" r="1" fill="#003366" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#costPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div
              className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-[#003366]/20">
                <DollarSign className="w-6 h-6 text-[#003366] mr-3" />
                <span className="text-[#003366] font-bold text-lg uppercase tracking-wide">
                  Cost Analysis
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                Factors Affecting The
                <br />
                <span className="text-[#ff5722]">Cost of Open Transport</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                The price of open auto transport varies based on several factors
                such as distance, vehicle details, and demand season. Knowing
                these factors will enable you to budget and get the best rates
                for open car shipping.
              </p>
            </div>

            {/* Main Factors Grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
              {costFactors.map((factor, index) => {
                const Icon = factor.icon;
                const isActive = activeFactorIndex === index;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={factor.id}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-500 cursor-pointer transform ${
                      isActive
                        ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20"
                        : isHovered
                          ? "scale-102 border-[#003366]/30 shadow-xl"
                          : "border-gray-200/50 hover:border-[#003366]/30"
                    }`}
                    onClick={() => setActiveFactorIndex(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                        isActive
                          ? "opacity-100 bg-gradient-to-br from-[#ff5722]/5 to-[#003366]/5"
                          : "group-hover:opacity-100 bg-gradient-to-br from-[#003366]/3 to-[#ff5722]/3"
                      }`}
                    ></div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                              isActive
                                ? "bg-[#ff5722] scale-110"
                                : "bg-[#003366] group-hover:scale-105"
                            }`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div
                              className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${
                                isActive
                                  ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]"
                                  : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"
                              }`}
                            >
                              {factor.impact}
                            </div>
                            <h3
                              className={`text-2xl font-bold mt-2 transition-colors duration-300 ${
                                isActive
                                  ? "text-[#ff5722]"
                                  : "text-[#003366] group-hover:text-[#ff5722]"
                              }`}
                            >
                              {factor.title}
                            </h3>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {factor.description}
                      </p>

                      {/* Stats */}
                      <div
                        className={`bg-gradient-to-r rounded-2xl p-4 border ${
                          isActive
                            ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20"
                            : "from-gray-50 to-gray-100 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TrendingUp
                              className={`w-5 h-5 ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}
                            />
                            <span className="font-bold text-gray-900">
                              Cost Impact:
                            </span>
                          </div>
                          <span
                            className={`font-bold text-lg ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}
                          >
                            {factor.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Factor Navigation */}
            <div className="flex justify-center mb-16">
              <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50">
                {costFactors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFactorIndex(index)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setActiveFactorIndex(index)
                    }
                    aria-label={`Select cost factor ${index + 1}`}
                    aria-current={
                      activeFactorIndex === index ? "true" : "false"
                    }
                    className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 ${activeFactorIndex === index ? "bg-[#ff5722] scale-125" : "bg-gray-300 hover:bg-[#003366]"}`}
                  />
                ))}
              </div>
            </div>

            {/* Seasonal Demand Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl sm:px-12 py-5 shadow-xl border border-gray-200/50 ">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-[#003366] mb-4">
                  Seasonal Pricing Guide
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding seasonal demand patterns can help you save
                  significantly on shipping costs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalData.map((season, index) => (
                  <div
                    key={season.season}
                    className="bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#003366] mb-2">
                        {season.season}
                      </div>
                      <div className="text-gray-600 mb-3">{season.months}</div>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                          season.demand === "High"
                            ? "bg-red-100 text-red-700"
                            : season.demand === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {season.demand} Demand
                      </div>
                      <div className="text-2xl font-bold text-[#ff5722]">
                        {season.savings}
                      </div>
                      <div className="text-sm text-gray-600">
                        Potential Savings
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="prosConsPattern"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="40" cy="40" r="3" fill="#003366" />
                  <circle cx="20" cy="20" r="2" fill="#ff5722" />
                  <circle cx="60" cy="60" r="2" fill="#ff5722" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#prosConsPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Header Section */}
            <div
              className={`text-center mb-10 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 border border-[#003366]/20">
                <ThumbsUp className="w-5 h-5 sm:w-6 h-6 text-[#003366] mr-2 sm:mr-3" />
                <span className="text-[#003366] font-bold text-base sm:text-lg uppercase tracking-wide">
                  Detailed Analysis
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-8">
                Pros And Cons Of
                <br />
                <span className="text-[#ff5722]">Open Auto Transport</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0">
                Open auto shipping is the most common way to ship cars because
                it is economical and efficient. But, just like any shipping
                method, it has pros and cons. Knowing these will enable you to
                determine whether open carrier car transport is suitable for
                your requirements.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
              {comparisonStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#003366] mb-2">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3 sm:mt-4">
                    <div
                      className="bg-[#ff5722] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(stat.value / stat.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-10 sm:mb-12 lg:mb-16">
              <div className="bg-white/80 flex flex-col sm:flex-row backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 shadow-lg border border-gray-200/50 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab("pros")}
                  onKeyDown={(e) => e.key === "Enter" && setActiveTab("pros")}
                  aria-label="View advantages of open auto transport"
                  className={`px-6 sm:px-12 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 ${
                    activeTab === "pros"
                      ? "bg-[#ff5722] text-gray-900 shadow-lg transform scale-100 sm:scale-105"
                      : "text-gray-800 hover:text-[#003366] hover:bg-gray-50"
                  }`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span className="ml-2 sm:ml-0">
                    Advantages ({prosData.length})
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("cons")}
                  className={`px-6 sm:px-12 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 ${
                    activeTab === "cons"
                      ? "bg-[#003366] text-white shadow-lg transform scale-100 sm:scale-105"
                      : "text-gray-600 hover:text-[#003366] hover:bg-gray-50"
                  }`}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span className="ml-2 sm:ml-0">
                    Considerations ({consData.length})
                  </span>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto">
              {activeTab === "pros" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {prosData.map((pro, index) => {
                    const Icon = pro.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200/50 transition-all duration-500 cursor-pointer transform ${
                          hoveredItem === `pro-${index}`
                            ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20"
                            : "hover:scale-102 hover:border-[#003366]/30"
                        }`}
                        onMouseEnter={() => setHoveredItem(`pro-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${
                            hoveredItem === `pro-${index}`
                              ? "opacity-100 bg-gradient-to-br from-[#ff5722]/5 to-[#003366]/5"
                              : "group-hover:opacity-100 bg-gradient-to-br from-[#003366]/3 to-[#ff5722]/3"
                          }`}
                        ></div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                            <div className="flex   flex-col sm:flex-row items-center justify-center space-x-4">
                              <div
                                className={`w-12 h-12 sm:w-16 h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                                  hoveredItem === `pro-${index}`
                                    ? "bg-[#ff5722] scale-110"
                                    : "bg-[#003366] group-hover:scale-105"
                                }`}
                              >
                                <Icon className="w-6 h-6 sm:w-8 h-8 text-white" />
                              </div>
                              <div>
                                <h3
                                  className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                                    hoveredItem === `pro-${index}`
                                      ? "text-[#ff5722]"
                                      : "text-[#003366] group-hover:text-[#ff5722]"
                                  }`}
                                >
                                  {pro.title}
                                </h3>
                                <div
                                  className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mt-2 ${
                                    hoveredItem === `pro-${index}`
                                      ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]"
                                      : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"
                                  }`}
                                >
                                  {pro.benefit}
                                </div>
                              </div>
                            </div>
                            {hoveredItem === `pro-${index}` && (
                              <div className="w-6 h-6 sm:w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center mt-4 sm:mt-0">
                                <CheckCircle className="w-4 h-4 sm:w-5 h-5 text-white" />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            {pro.description}
                          </p>

                          {/* Stats */}
                          <div
                            className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${
                              hoveredItem === `pro-${index}`
                                ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20"
                                : "from-gray-50 to-gray-100 border-gray-200"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <TrendingUp
                                  className={`w-4 h-4 sm:w-5 h-5 ${hoveredItem === `pro-${index}` ? "text-[#ff5722]" : "text-[#003366]"}`}
                                />
                                <span className="font-bold text-gray-900 text-sm sm:text-base">
                                  Key Advantage:
                                </span>
                              </div>
                              <span
                                className={`font-bold text-sm sm:text-lg ${hoveredItem === `pro-${index}` ? "text-[#ff5722]" : "text-[#003366]"}`}
                              >
                                {pro.stats}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === "cons" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {consData.map((con, index) => {
                    const Icon = con.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200/50 transition-all duration-500 cursor-pointer transform ${
                          hoveredItem === `con-${index}`
                            ? "scale-105 border-[#003366]/50 shadow-2xl shadow-[#003366]/20"
                            : "hover:scale-102 hover:border-[#ff5722]/30"
                        }`}
                        onMouseEnter={() => setHoveredItem(`con-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Background Gradient */}
                        <div
                          className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${
                            hoveredItem === `con-${index}`
                              ? "opacity-100 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5"
                              : "group-hover:opacity-100 bg-gradient-to-br from-[#ff5722]/3 to-[#003366]/3"
                          }`}
                        ></div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <div
                              className={`w-12 h-12 sm:w-16 h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                                hoveredItem === `con-${index}`
                                  ? "bg-[#003366] scale-110"
                                  : "bg-[#ff5722] group-hover:scale-105"
                              }`}
                            >
                              <Icon className="w-6 h-6 sm:w-8 h-8 text-white" />
                            </div>
                            {hoveredItem === `con-${index}` && (
                              <div className="w-6 h-6 sm:w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-4 h-4 sm:w-5 h-5 text-white" />
                              </div>
                            )}
                          </div>

                          <h3
                            className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
                              hoveredItem === `con-${index}`
                                ? "text-[#003366]"
                                : "text-[#ff5722] group-hover:text-[#003366]"
                            }`}
                          >
                            {con.title}
                          </h3>

                          <div
                            className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mb-3 sm:mb-4 ${
                              hoveredItem === `con-${index}`
                                ? "bg-[#003366]/20 border-[#003366]/30 text-[#003366]"
                                : "bg-[#ff5722]/10 border-[#ff5722]/20 text-[#ff5722]"
                            }`}
                          >
                            {con.impact}
                          </div>

                          {/* Content */}
                          <p className="text-gray-700 text-base sm:text-base leading-relaxed mb-4 sm:mb-6">
                            {con.description}
                          </p>

                          {/* Mitigation */}
                          <div
                            className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${
                              hoveredItem === `con-${index}`
                                ? "from-[#003366]/10 to-[#ff5722]/10 border-[#003366]/20"
                                : "from-gray-50 to-gray-100 border-gray-200"
                            }`}
                          >
                            <div className="flex items-start space-x-2">
                              <Shield
                                className={`w-4 h-4 sm:w-5 h-5 mt-1 ${hoveredItem === `con-${index}` ? "text-[#003366]" : "text-[#ff5722]"}`}
                              />
                              <div>
                                <div className="font-bold text-gray-900 text-sm">
                                  Mitigation:
                                </div>
                                <div className="text-gray-700 text-sm">
                                  {con.mitigation}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Conclusion Section */}
            <div className="mt-10 sm:mt-16 lg:mt-20 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50">
              <div className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 h-16 bg-[#ff5722] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 sm:w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-4 sm:mb-6">
                  The Bottom Line
                </h3>
                <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  For most standard vehicles,{" "}
                  <span className="font-bold text-[#ff5722]">
                    open auto transport is still the best option
                  </span>
                  , offering the best balance of cost, availability, and
                  efficiency. If additional protection is required, enclosed
                  transport might be worth considering.
                </p>
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Link href="/services/car-shipping-calculator" className="">
                    <button
                      className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#ff5722] text-gray-900 font-bold rounded-xl sm:rounded-2xl hover:bg-[#e64a19] transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 flex items-center"
                      aria-label="Get a free quote for open auto transport"
                    >
                      Get Your Free Quote Today
                      <ArrowRight className="w-4 h-4 sm:w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="userPattern"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="40" cy="40" r="2" fill="#003366" />
                  <circle cx="20" cy="20" r="1" fill="#ff5722" />
                  <circle cx="60" cy="60" r="1" fill="#ff5722" />
                  <circle cx="20" cy="60" r="1" fill="#003366" />
                  <circle cx="60" cy="20" r="1" fill="#003366" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#userPattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Header Section */}
            <div
              className={`text-center mb-10 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 border border-[#003366]/20">
                <Users className="w-5 h-5 sm:w-6 h-6 text-[#003366] mr-2 sm:mr-3" />
                <span className="text-[#003366] font-bold text-base sm:text-lg uppercase tracking-wide">
                  Target Customers
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-8">
                Who Should Use
                <br />
                <span className="text-[#ff5722]">Open Car Transport?</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0">
                Open car shipping is the perfect solution for individuals
                seeking a budget-friendly, hassle-free method of transporting a
                car. Whether relocating to a new town, buying a vehicle over the
                internet, or running a car dealership, open carrier auto
                shipping provides a convenient, cost-effective solution.
              </p>
            </div>

            {/* Main User Types Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto mb-10 sm:mb-16 lg:mb-20">
              {userTypes.map((userType, index) => {
                const Icon = userType.icon;
                const isActive = activeCard === index;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={userType.id}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border transition-all duration-700 cursor-pointer transform ${
                      isActive
                        ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20 z-20"
                        : isHovered
                          ? "scale-102 border-[#003366]/30 shadow-xl"
                          : "border-gray-200/50 hover:border-[#003366]/30"
                    }`}
                    onClick={() => setActiveCard(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${
                        isActive
                          ? `opacity-100 bg-gradient-to-br ${userType.bgGradient}`
                          : `group-hover:opacity-100 bg-gradient-to-br ${userType.bgGradient}`
                      }`}
                    ></div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                          <div
                            className={`w-16 h-16 sm:w-20 h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
                              isActive
                                ? `${userType.iconBg} scale-110`
                                : `${userType.iconBg} group-hover:scale-105`
                            }`}
                          >
                            <Icon className="w-8 h-8 sm:w-10 h-10 text-white" />
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <div
                              className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mb-2 sm:mb-3 ${
                                isActive
                                  ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]"
                                  : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"
                              }`}
                            >
                              {userType.subtitle}
                            </div>
                            <h3
                              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                                isActive
                                  ? "text-[#ff5722]"
                                  : "text-[#003366] group-hover:text-[#ff5722]"
                              }`}
                            >
                              {userType.title}
                            </h3>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-6 h-6 sm:w-8 h-8 bg-[#ff5722] rounded-full flex items-center justify-center mt-4 sm:mt-0">
                            <CheckCircle className="w-4 h-4 sm:w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                        {userType.description}
                      </p>

                      {/* Benefits Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {userType.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                            <span className="text-gray-600 text-sm font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div
                        className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${
                          isActive
                            ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20"
                            : "from-gray-50 to-gray-100 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <Target
                              className={`w-5 h-5 sm:w-6 h-6 ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}
                            />
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                              Key Advantage:
                            </span>
                          </div>
                          <span
                            className={`font-bold text-base sm:text-xl ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}
                          >
                            {userType.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mb-10 sm:mb-12 lg:mb-16">
              <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50">
                {userTypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    onKeyDown={(e) => e.key === "Enter" && setActiveCard(index)}
                    aria-label={`Select user type ${index + 1}`}
                    aria-current={activeCard === index ? "true" : "false"}
                    className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring- Soudure de texte2 focus:ring-[#ff5722] focus:ring-offset-2 ${activeCard === index ? "bg-[#ff5722] scale-125" : "bg-gray-300 hover:bg-[#003366]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Tips Section */}
        <section id="tips" className="pb-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                Tips For A Successful{" "}
                <span className="text-rapidcolor">
                  {" "}
                  Open Car Transport Experience
                </span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-rapidcolor"></span>
              </h2>
              <p className="text-lg">
                Simply follow these easy steps to have a hassle-free and smooth
                open auto transport experience:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-4xl text-rapidcolor mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-xl">{tip.description}</p>
                </div>
              ))}
            </div>
            <p className="text-lg my-10">
              By taking these precautions, a smooth and hassle-free open car
              shipping experience can be ensured. Require professional advice?
              Our transport experts are one call away for help.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-5xl font-black text-[#003366] mb-8">
                Open vs{" "}
                <span className="text-[#ff5722]">Enclosed Transport</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare the two main shipping methods to choose the best option
                for your vehicle
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                  <button
                    onClick={() => setActiveComparison("open")}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setActiveComparison("open")
                    }
                    aria-label="View open transport comparison"
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 ${activeComparison === "open" ? "bg-[#ff5722] text-gray-900 shadow-lg" : "text-gray-800 hover:text-[#003366] hover:bg-gray-50"}`}
                  >
                    Open Transport
                  </button>
                  <button
                    onClick={() => setActiveComparison("enclosed")}
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeComparison === "enclosed" ? "bg-[#003366] text-white shadow-lg" : "text-gray-600 hover:text-[#003366]"}`}
                  >
                    Enclosed Transport
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl  p-2 sm:p-12 shadow-xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#003366] mb-8">
                      Key Features
                    </h3>
                    {Object.entries(comparisonData[activeComparison])
                      .slice(0, 4)
                      .map(([key, value], index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-3 h-3 bg-[#ff5722] rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-[#003366] capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                            <div className="text-gray-600">{value}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#003366] mb-8">
                      Additional Details
                    </h3>
                    {Object.entries(comparisonData[activeComparison])
                      .slice(4)
                      .map(([key, value], index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-3 h-3 bg-[#ff5722] rounded-full mt-2"></div>
                          <div>
                            <div className="font-semibold text-[#003366] capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                            <div className="text-gray-600">{value}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative ">
          {/* Dynamic Background Elements */}

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="trustPattern"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="40" cy="40" r="2" fill="#1e40af" />
                  <circle cx="20" cy="20" r="1" fill="#f97316" />
                  <circle cx="60" cy="60" r="1" fill="#f97316" />
                  <circle cx="20" cy="60" r="1" fill="#1e40af" />
                  <circle cx="60" cy="20" r="1" fill="#1e40af" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trustPattern)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div
              className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center bg-blue-900/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-blue-900/20">
                <Award className="w-6 h-6 text-blue-900 mr-3" />
                <span className="text-blue-900 font-bold text-lg uppercase tracking-wide">
                  Trusted Excellence
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-6 leading-tight">
                Rapid Auto Shipping: Your
                <br />
                <span className="text-orange-500 relative">
                  Trusted Partner
                </span>
                <br />
                For Open Auto Transport
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                When you need dependable, budget-friendly, and stress-free open
                auto transport, Rapid Auto Shipping is the company you can count
                on. Whether you are relocating coast-to-coast, buying a car
                online, or coordinating a dealership's inventory, we make
                shipping easy and hassle-free.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <Users className="w-5 h-5 text-blue-900 mr-2" />
                  <span className="font-bold text-blue-900">
                    50K+ Happy Customers
                  </span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <Globe className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="font-bold text-gray-700">
                    Nationwide Coverage
                  </span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-bold text-gray-700">
                    Fully Licensed
                  </span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {featureswhy.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                      isActive
                        ? "scale-105 border-orange-500/50 shadow-2xl shadow-orange-500/20 z-20"
                        : "border-gray-200/50 hover:border-blue-900/30"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                        isActive
                          ? `opacity-100 bg-gradient-to-br ${feature.color}/10`
                          : `group-hover:opacity-100 bg-gradient-to-br ${feature.color}/5`
                      }`}
                    ></div>

                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.color} ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3
                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          isActive
                            ? "text-orange-500"
                            : "text-blue-900 group-hover:text-orange-500"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {/* Stat */}
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${
                          isActive
                            ? "bg-orange-500/20 border-orange-500/30 text-orange-500"
                            : "bg-blue-900/10 border-blue-900/20 text-blue-900"
                        }`}
                      >
                        {feature.stat}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services We Handle */}
            <div
              className={`bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-2 sm:p-10 lg:p-16 relative  transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    Perfect For Every Shipping Need
                  </h3>
                  <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                    Whether you’re shipping a sedan, SUV, truck, or motorcycle,
                    Rapid Auto Shipping simplifies open auto transport and makes
                    it affordable and reliable. Get your free quote today by
                    simply filling out our online form or call at +1 (833)
                    233-4447 and enjoy hassle-free vehicle shipping!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-white font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                    Get Your Free Quote Today
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Navigation Dots */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setActiveFeature(index)
                    }
                    aria-label={`Select feature ${index + 1}`}
                    aria-current={activeFeature === index ? "true" : "false"}
                    className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 ${activeFeature === index ? "bg-[#ff5722] scale-125" : "bg-gray-300 hover:bg-[#003366]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <KeyBanner />
      <div
        id="faq-section"
        className="w-full mx-auto my-12 p-6 bg-white rounded-lg container"
      >
        <h2 className="text-5xl font-bold text-center mb-6 text-black">
          <span className="text-rapidcolor">FAQs</span> on Car Shipping Services
          in the USA
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-red-500" />
              ) : (
                <FaPlus className="text-red-500" />
              )}
            </button>
            <div
              className="overflow-hidden"
              style={{ display: openIndex === index ? "block" : "none" }}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={sectionRef} // Attach ref to the container
        className="relative w-full h-screen transition-all duration-700 py-10 my-10 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: isVisible ? `url(${backgroundImage})` : "none", // Load background only when visible
          backgroundColor: isVisible ? "transparent" : "#000", // Fallback color while not visible
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Some Of Our Recent Shipments
          </h3>
        </div>

        {/* Navigation buttons for mobile/tablet */}
        {(isSmallScreen || isMediumScreen) && (
          <div className="absolute z-40 w-full flex justify-between px-6 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrevCard}
              onKeyDown={(e) => e.key === "Enter" && handlePrevCard()}
              aria-label="Previous shipment"
              className="bg-white/30 hover:bg-white/50 focus:bg-white/50 focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextCard}
              onKeyDown={(e) => e.key === "Enter" && handleNextCard()}
              aria-label="Next shipment"
              className="bg-white/30 hover:bg-white/50 focus:bg-white/50 focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-2 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="relative z-10 h-full w-full flex flex-col justify-end">
          {/* Desktop View */}
          {!isSmallScreen && !isMediumScreen && (
            <div className="grid grid-cols-4 h-full">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-end h-full border-r border-gray-400/30 last:border-r-0 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="p-6 h-full flex flex-col justify-end">
                    <span className="text-3xl font-bold text-white mb-4">
                      {card.title}
                    </span>

                    <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-80 group-hover:opacity-100">
                      <div className="space-y-3">
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2">
                            <GiPathDistance />
                          </span>
                          <span className="text-gray-300">Trip:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.trip}
                          </span>
                        </p>
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2">
                            <FaDollarSign />
                          </span>
                          <span className="text-gray-300">Price:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.price}
                          </span>
                        </p>
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2">
                            <RiPinDistanceLine />
                          </span>
                          <span className="text-gray-300">Distance:</span>
                          <span className="ml-2 font-semibold">
                            {card.description.distance}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mobile/Tablet View */}
          {(isSmallScreen || isMediumScreen) && (
            <div
              ref={sliderRef}
              className="w-full overflow-x-hidden scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              <div
                className={`flex ${isSmallScreen ? "w-[400%]" : "w-[200%]"}`}
              >
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className={`${isSmallScreen ? "w-1/4" : "w-1/2"} shrink-0 flex flex-col h-full border-r border-gray-400/30 last:border-r-0`}
                  >
                    <div className="p-4 md:p-6 h-full flex flex-col justify-end">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {card.title}
                      </h2>

                      <div
                        className={`bg-black/60 backdrop-blur-sm p-4 md:p-6 rounded-xl ${activeCard === index ? "block" : "hidden"}`}
                      >
                        <div className="space-y-3">
                          <p className="text-white flex items-center">
                            <span className="inline-block text-2xl mr-2">
                              <GiPathDistance />
                            </span>
                            <span className="text-gray-300">Trip:</span>
                            <span className="ml-2 font-semibold">
                              {card.description.trip}
                            </span>
                          </p>
                          <p className="text-white flex items-center">
                            <span className="inline-block text-2xl mr-2">
                              <FaDollarSign />
                            </span>
                            <span className="text-gray-300">Price:</span>
                            <span className="ml-2 font-semibold">
                              {card.description.price}
                            </span>
                          </p>
                          <p
                            class_unused
                            className="text-white flex items-center"
                          >
                            <span className="inline-block text-2xl mr-2">
                              <RiPinDistanceLine />
                            </span>
                            <span className="text-gray-300">Distance:</span>
                            <span className="ml-2 font-semibold">
                              {card.description.distance}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

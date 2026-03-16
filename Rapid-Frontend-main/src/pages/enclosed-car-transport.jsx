"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Optimized icon imports - only what's actually used
import {
  Star,
  Shield,
  Ruler,
  Truck,
  Clock,
  Wrench,
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  DollarSign,
  Target,
  Globe,
  Navigation,
  TrendingUp,
  Lock,
  ThumbsUp,
  Eye,
  Check,
  CarFront,
  Calculator,
  Briefcase,
  ShieldOff,
  Settings2,
  Bike,
  Home,
  Crown,
  Car,
  Thermometer,
  Umbrella,
  Package,
  AlertTriangle,
  ThumbsDown,
  Gavel,
  MapPin,
} from "lucide-react";

import { FaPlus, FaMinus, FaCar, FaShieldAlt, FaStar, FaHome, FaCamera, FaBroom, FaTools } from "react-icons/fa";
import { GiPathDistance, GiHouseKeys } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";
import { RiPinDistanceLine } from "react-icons/ri";
import { MdAccessAlarms, MdOutlineTireRepair } from "react-icons/md";

// Direct imports for above-the-fold only
import Navbar from "@/components/CommonComponents/Navbar";
import TransportForm from "@/components/CommonComponents/Form";

// Dynamic imports for below-fold components
const Footer = dynamic(() => import("@/components/CommonComponents/Footer"), { ssr: false });
const ReviewSwiper = dynamic(() => import("../components/Home/swipper"), { ssr: false });
const KeyBanner = dynamic(() => import("@/components/CommonComponents/key-banner"), { ssr: false });
const Enclosedswipper = dynamic(() => import("@/components/CommonComponents/enclosed-reviews"), { ssr: false });

// ============================================
// ALL STATIC DATA MOVED OUTSIDE COMPONENT
// ============================================

const faqs = [
  {
    question: "Can I transport multiple vehicles using enclosed car transport services?",
    answer: "Yes! We offer multi-car transport options for dealerships, collectors, and auction buyers.",
  },
  {
    question: "Is my vehicle insured during transport?",
    answer: "Yes, all vehicles are covered by Damage-Free Carrier Insurance while in transit. We also require our carriers to provide supplemental insurance, which means you'll have added protection in the unlikely event of damage or an accident.",
  },
  {
    question: "How long does enclosed transport car shipping take?",
    answer: "The typical time to ship a car is 3 to 5 business days. However, car shipping depends on factors like transport truck bandwidth, traffic, weather, and other factors that will influence your specific timings",
  },
  {
    question: "Can I ship a non-running vehicle?",
    answer: "Yes! We transport non-running vehicles with a winch-equipped trailer. There is an upcharge for the additional gear and labor. When making reservations online or with our representative on our phone reservation lines, please mark your vehicle as a breakdown or not running.",
  },
  {
    question: "Do I need to be present at pickup and delivery?",
    answer: "The vehicle's pick-up and delivery will require the presence of someone. This is where you sign the pick-up and delivery inspection paperwork. The person must be over 18, have your permission, and preferably be a licensed driver.If you cannot be at the pickup and delivery locations, you can contact the carrier driver for help. Just let him know where the keys are or how to access your car, especially if it can be operated remotely. He will take care of everything on your behalf to ensure everything goes smoothly. Important documents, such as the inspection report and the bill of lading, will be sent to you via email for your convenience.",
  },
  {
    question: "Can I track my vehicle during transport?",
    answer: "Yes! We offer a standard monitoring device to monitor your car in transit. You can monitor your shipment 24/7 using the online tracking function. To monitor your vehicle shipment, please provide us with your tracking information, name, email address, and/or phone number.",
  },
  {
    question: "Do you offer door to door enclosed transport?",
    answer: "Yes! Our door-to-door service ensures your car is picked up and delivered as close as possible to your location. If your area has restricted access, we will arrange a nearby meeting point.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "For car shipments, Rapid Auto Shipping takes all major credit cards and any sort of certified payment. We take 10-15% of the amount on the day of the pickup, and the balance is due at drop-off, which can be paid to the driver in the form of Cash, Zelle, Venmo, or Certified Check.",
  },
];

const tips = [
  {
    icon: FaCamera,
    title: "Wash Your Car",
    description: "A clean vehicle makes it simpler to photograph any existing damage prior to shipping.",
  },
  {
    icon: MdAccessAlarms,
    title: "Disable Alarms",
    description: "Avoids unnecessary disruptions and a smooth transport experience.",
  },
  {
    icon: FaBroom,
    title: "Take Out Loose Accessories",
    description: "Remove or secure removable items such as spoilers, bike racks, or antennas to prevent damage during shipping.",
  },
  {
    icon: MdOutlineTireRepair,
    title: "Check Tire Pressure & Fluid Levels",
    description: "Well-maintained tire pressure and fluid levels ensure safe loading and unloading.",
  },
  {
    icon: FaTools,
    title: "Limit Personal Items",
    description: "Most carriers permit up to 100 lbs of personal items, but leaving valuables behind is advisable.",
  },
  {
    icon: GiHouseKeys,
    title: "Offer a Spare Set of Keys",
    description: "Carriers mandate a set of keys in case the vehicle must be relocated during loading or unloading.",
  },
];

const userTypes = [
  {
    id: 1,
    icon: Crown,
    title: "Luxury & Exotic Car Owners",
    subtitle: "Premium Protection for High-End Vehicles",
    description: "High-end brands like Ferrari, Lamborghini, Bentley, and Rolls-Royce deserve the extra protection of enclosed vehicle shipping to maintain their pristine condition.",
    benefits: ["Complete weather protection", "Shield from road debris and damage", "Climate-controlled environment", "Dedicated secure loading/unloading"],
    stats: "100% Protected",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    iconBg: "bg-yellow-500",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Vintage & Classic Car Enthusiasts",
    subtitle: "Specialized Care for Priceless Vehicles",
    description: "Older, priceless vehicles need enclosed car transport for safety to shield them from weather, trash, and accidental damage.",
    benefits: ["Protection from UV rays and weather", "Safe from road salt and contaminants", "Specialized handling procedures", "Insurance coverage for high values"],
    stats: "Preserve Value",
    bgGradient: "from-amber-700/10 to-yellow-800/10",
    iconBg: "bg-amber-700",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Rare & Custom Vehicle Owners",
    subtitle: "Special Care for Unique Modifications",
    description: "If your vehicle has custom paint work, alterations, or low ground clearance, enclosed car transport services provide special care.",
    benefits: ["Protection for custom paintwork", "Safe transport for lowered vehicles", "Accommodates unique modifications", "Prevents cosmetic damage"],
    stats: "Custom Solutions",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500",
  },
  {
    id: 4,
    icon: Gavel,
    title: "Auction Buyers & Sellers",
    subtitle: "Secure Collector Vehicle Transport",
    description: "In buying or selling a collector or vintage car, covered auto shipping ensures safe and proficient delivery to its new owner.",
    benefits: ["Auction site pickup services", "Secure transport for investments", "Professional handling of valuables", "Documentation and tracking"],
    stats: "Auction Specialists",
    bgGradient: "from-green-600/10 to-emerald-600/10",
    iconBg: "bg-green-600",
  },
  {
    id: 5,
    icon: Bike,
    title: "Motorcycle & Specialty Vehicle Owners",
    subtitle: "Specialized Transport Solutions",
    description: "Motorcycles, classic cars, and limited-edition models need added protection, which makes collected car transport enclosed the ideal choice.",
    benefits: ["Secure motorcycle tie-down systems", "Protection from theft and damage", "Climate-controlled environment", "Specialized equipment for loading"],
    stats: "Multi-Vehicle Capable",
    bgGradient: "from-red-600/10 to-pink-600/10",
    iconBg: "bg-red-600",
  },
  {
    id: 6,
    icon: Shield,
    title: "Maximum Protection Seekers",
    subtitle: "Ultimate Peace of Mind",
    description: "Do you desire peace of mind, security, and protection from road perils? Enclosed auto transport companies provide the best answer.",
    benefits: ["Complete protection from elements", "Enhanced security and monitoring", "Premium insurance coverage", "White-glove service experience"],
    stats: "Total Peace of Mind",
    bgGradient: "from-purple-600/10 to-indigo-600/10",
    iconBg: "bg-purple-600",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Request an Instant Auto Shipping Quote",
    icon: Calculator,
    description: "Obtaining a shipping quote is the first step to ship a car. Fill out the details in the auto shipping calculator, or get in touch with us by email or call +1 (833) 233-4447.",
    features: ["Instant online quotes", "No hidden fees", "Competitive pricing", "Multiple contact options"],
    accent: "#ff5722",
  },
  {
    id: 2,
    title: "Booking of the Shipment",
    icon: Calendar,
    description: "Once you get the auto transportation quote, you need to schedule your shipments. For your convenience, we provide electronic contracts. An email containing a link will be sent to you so you can conveniently schedule your shipment online.",
    features: ["Electronic contracts", "Online scheduling", "Flexible booking", "Email confirmation"],
    accent: "#ff5722",
  },
  {
    id: 3,
    title: "Vehicle Pickup",
    icon: Truck,
    description: "Our skilled auto transport driver will pick up your vehicle on the appointed day and within the scheduled time limit. Before loading the car on the enclosed carrier, the operator will inspect and record its condition.",
    features: ["Professional drivers", "Scheduled pickup", "Vehicle inspection", "Condition documentation"],
    accent: "#ff5722",
  },
  {
    id: 4,
    title: "Safe Delivery",
    icon: CheckCircle,
    description: "The carrier will contact and provide you with an estimated arrival time a few hours before delivery. If you are unable to do so, you can ask a reliable person to accept the car on your behalf.",
    features: ["Arrival notifications", "Safe delivery", "Final inspection", "Flexible recipient options"],
    accent: "#ff5722",
  },
];

const benefitst = [
  {
    icon: Shield,
    title: "Maximum Protection",
    stats: "100% Coverage",
    description: "Complete protection from weather elements, road debris, dust, and potential damage. Your vehicle travels in a fully enclosed environment, ensuring it arrives in pristine condition.",
  },
  {
    icon: Eye,
    title: "Better Security",
    stats: "Hidden Transport",
    description: "Using collected car transport enclosed trailers, your car stays hidden from view, lowering the threat of theft, vandalism, or curious eyes.",
  },
  {
    icon: CarFront,
    title: "Suitable for High-Value Cars",
    stats: "Locked & Secure",
    description: "Luxury, collector, classic, and exotic vehicles need special attention, and enclosed auto shipping services are the best choice.",
  },
  {
    icon: ShieldOff,
    title: "Reduced Risk of Damage",
    stats: "Temp Controlled",
    description: "Road debris, severe weather, and dirt are no issue with car transport enclosed trailers, ensuring extra peace of mind.",
  },
  {
    icon: Truck,
    title: "Expert Equipment & Handling:",
    stats: "Climate Managed",
    description: "With hydraulic lift gates, soft tie-downs, and climate-controlled conditions, it provides safe loading and transportation, particularly for low-grounded vehicles.",
  },
  {
    icon: Settings2,
    title: "Custom Options",
    stats: "Expert Care",
    description: "Want exclusive transport? Our single car enclosed transport options are also available for utmost privacy and exclusive handling.",
  },
];

const pricingData = [
  { distance: "0 - 500 Miles", time: "1 - 2 Days", cost: "$550" },
  { distance: "500 - 1500 Miles", time: "2 - 4 Days", cost: "$975" },
  { distance: "1500 - 2500 Miles", time: "4 - 6 Days", cost: "$1,450" },
  { distance: "2500+ Miles", time: "6 - 8 Days", cost: "$2,150" },
];

const costFactors = [
  {
    id: 1,
    icon: Navigation,
    title: "Distance & Route",
    description: "The longer distance your car has to travel, the more expensive it will be because of fuel usage, tolls, and labor of the driver. Transporting to major cities with well-traveled roads is generally less expensive than shipping to outlying or rural areas",
    impact: "Primary Factor",
    color: "#ff5722",
    stats: "Major routes cost 20-30% less",
  },
  {
    id: 2,
    icon: Car,
    title: "Vehicle Type & Weight",
    description: "Bigger and heavier vehicles occupy more space on an Covered car carrier shipment, leading to higher shipping costs. Smaller cars are easier to fit in, making them more cost-effective to ship.",
    impact: "High Impact",
    color: "#003366",
    stats: "SUVs cost 15-25% more than sedans",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Seasonal Demand",
    description: "Enclosed car transport prices vary seasonally. Summer (Memorial Day to Labor Day) is a peak season with higher demand, which pushes prices up. Booking in off-season months can get you better rates for covered vehicle shipping.",
    impact: "Variable Impact",
    color: "#ff5722",
    stats: "Off-season saves 10-20%",
  },
  {
    id: 4,
    icon: Award,
    title: "Model & Manufacturer",
    description: "Luxury or high-end cars can need extra care, adding to the total cost of transport. Although enclosed carrier car transport is safe in most cases for exotic or premium vehicles, some rare vehicles may need extra attention, which can increase the price.",
    impact: "Moderate Impact",
    color: "#003366",
    stats: "Luxury vehicles +$100-300",
  },
  {
    id: 5,
    icon: Ruler,
    title: "Vehicle Length",
    description: "Compact cars occupy less space on an enclosed carrier, enabling transporters to carry more cars on one trip. This cost-effective use of space can lead to reduced expenses, which in turn makes enclosed transport car shipping cost-effective for smaller cars.",
    impact: "Cost Saver",
    color: "#ff5722",
    stats: "Compact cars save 5-15%",
  },
];

const seasonalData = [
  { season: "Winter", months: "Dec - Feb", demand: "Low", savings: "15-20%" },
  { season: "Spring", months: "Mar - May", demand: "Medium", savings: "5-10%" },
  { season: "Summer", months: "Jun - Aug", demand: "High", savings: "0%" },
  { season: "Fall", months: "Sep - Nov", demand: "Medium", savings: "8-12%" },
];

const prosData = [
  {
    icon: Shield,
    title: "Maximum Protection",
    description: "Your car is completely enclosed, shielding it from weather, road debris, dust, and dirt.",
    benefit: "Complete Weather Shield",
    color: "#003366",
    stats: "100% protection from elements",
  },
  {
    icon: Crown,
    title: "Best for High-Value Vehicles",
    description: " Luxury cars, vintage vehicles, exotics, and rare classics are best preserved in enclosed auto shipping services.",
    benefit: "Premium Vehicle Care",
    color: "#ff5722",
    stats: "Ideal for luxury & vintage cars",
  },
  {
    icon: Lock,
    title: "Improved Safety",
    description: " As vehicles are within an enclosed trailer, it is harder for them to be seen, decreasing the possibility of theft, vandalism, or curious eyes.",
    benefit: "Enhanced Security",
    color: "#003366",
    stats: "Reduced theft & vandalism risk",
  },
  {
    icon: Settings2,
    title: "Professional Handling",
    description: " As one of the leading enclosed auto transport companies, we employ soft tie-downs, lift gates, and climate-controlled trailers, providing additional care.",
    benefit: "Premium Equipment",
    color: "#ff5722",
    stats: "Soft tie-downs & climate control",
  },
  {
    icon: Star,
    title: "Exclusive Transport Options",
    description: "Require additional privacy? Single-car enclosed car transport service offers a single car enclosed transport for your vehicle only.",
    benefit: "Single-Car Service",
    color: "#003366",
    stats: "Exclusive single-vehicle transport",
  },
];

const consData = [
  {
    icon: DollarSign,
    title: "Increased Cost",
    description: "Enclosed automobile shipping is 30-60% higher than open shipping, as it involves additional protection and fewer available carriers.",
    impact: "30-60% Higher Cost",
    color: "#ff5722",
    mitigation: "Investment in vehicle protection",
  },
  {
    icon: Calendar,
    title: "Reduced Availability",
    description: "With fewer enclosed car transport services, booking might take longer than open shipping.",
    impact: "Limited Scheduling",
    color: "#003366",
    mitigation: "Book early for best availability",
  },
  {
    icon: Clock,
    title: "Longer Transit Times",
    description: "There are fewer car transport enclosed carriers on the road, so pickups and deliveries may take longer.",
    impact: "Extended Delivery",
    color: "#ff5722",
    mitigation: "Plan for additional transit time",
  },
];

const features = [
  { icon: Shield, title: "Maximum Protection", description: "Complete coverage from weather and road debris" },
  { icon: Lock, title: "Secure Transport", description: "Locked trailers with advanced security systems" },
  { icon: Eye, title: "Privacy & Discretion", description: "Your vehicle remains hidden from public view" },
  { icon: Thermometer, title: "Climate Control", description: "Temperature-controlled environment available" },
  { icon: Wrench, title: "Hydraulic Lift Gates", description: "Safe loading with professional equipment" },
  { icon: Star, title: "Premium Service", description: "White-glove treatment for luxury vehicles" },
];

const trailerTypes = [
  {
    icon: Shield,
    title: "Box Trailers (Dry Van Trailers)",
    description: "Solid-walled, fully enclosed trailers that shield cars from weather, road debris, and theft. Ideal for classic, luxury, and exotic vehicles.",
    features: ["Complete Weather Protection", "Theft Prevention", "Road Debris Shield"],
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Thermometer,
    title: "Refrigerated Trailers (Reefer Trailers)",
    description: "Temperature-controlled enclosed trailers used for shipping temperature-sensitive cars, prototypes, or specialty vehicles that require a controlled environment.",
    features: ["Climate Control", "Temperature Monitoring", "Prototype Safe"],
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600",
  },
  {
    icon: Lock,
    title: "Hard-Sided Enclosed Trailers",
    description: "Trailers with solid metal or fiberglass sides for ultimate security and protection. Best suited for luxury, classic, and high-value cars.",
    features: ["Maximum Security", "Impact Resistant", "Premium Protection"],
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Umbrella,
    title: "Soft-Sided Enclosed Trailers",
    description: "Trailers using heavy-duty canvas or tarp covers, providing protection at a reduced cost. Good for weather protection but less security than hard-sided options.",
    features: ["Cost-Effective", "Weather Shield", "Flexible Coverage"],
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600",
  },
  {
    icon: Car,
    title: "Single Car Enclosed Transport",
    description: "Personalized, damage-free transportation for a single vehicle. Ideal for exotic, high-value, or custom-made vehicles requiring special attention.",
    features: ["Exclusive Transport", "Zero Contact Risk", "Premium Service"],
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-600",
  },
  {
    icon: Users,
    title: "Multi-Car Enclosed Trailers",
    description: "Two to six-car enclosed carriers that enable multiple vehicles to be transported in one trip. Economical for dealerships, collectors, and auction purchasers.",
    features: ["Cost Efficient", "Bulk Transport", "Dealer Preferred"],
    color: "from-indigo-500/20 to-indigo-600/20",
    iconColor: "text-indigo-600",
  },
];

const featureswhy = [
  {
    icon: Star,
    title: "Top-Rated Service",
    description: "We offer licensed and insured enclosed car shipping carriers to ensure exceptional service every time.",
    stat: "A+ Rating",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "We provide door to door enclosed car shipping across the U.S., making it a comfortable experience..",
    stat: "All 50 States",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Car,
    title: "High-Value Specialists",
    description: "Shipping a high-end car, exotic car, or vintage collectible? We offer high-quality enclosed vehicle shipping with expert care.",
    stat: "Premium Care",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Eye,
    title: "Single Car Transport",
    description: "Want added privacy and single car treatment? We have single car enclosed shipping to handle it personally.",
    stat: "Private Service",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Maximum Protection",
    description: "Our enclosed trailers safeguard your car from weather, dust, and road hazards on the way.",
    stat: "100% Secure",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Truck,
    title: "Instant Quotes",
    description: "Our rates are transparent and competitive without any advance payments. Simply request a free enclosed auto shipping quote today!",
    stat: "No Hidden Fees",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We work around the clock, keeping you in the loop throughout the enclosed car transport experience.",
    stat: "Always Available",
    color: "from-indigo-500 to-indigo-600",
  },
];

const services = [
  "Luxury Vehicle Transport",
  "Classic Car Shipping",
  "Exotic Car Transport",
  "Vintage Collectible Cars",
  "High-End Vehicle Shipping",
  "Single Car Enclosed Service",
  "Weather-Protected Transport",
  "Door-to-Door Delivery",
  "Real-Time Tracking",
];

const comparisonData = {
  Enclosed: {
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

const cardsData = [
  {
    image: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1748677817/Chevrolet-Corvette_yt4vyz.jpg",
    title: "Chevrolet Corvette",
    description: { trip: "New York, NY to Miami, FL", price: "$1,200", distance: "1,300 mi" },
    alt: "Chevrolet Corvette being transported from New York, NY to Miami, FL",
  },
  {
    image: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1748678767/Ferrari-360_u7zpd9.webp",
    title: " Ferrari 360 ",
    description: { trip: "Los Angeles, CA to Boston, MA", price: "$1,800", distance: "2,984 mi" },
    alt: "Ferrari 360 on a transport enclosed trailer from Los Angeles, CA to Boston, MA",
  },
  {
    image: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1748679204/Ferrari-458_ltwpph.webp",
    title: "Ferrari 458",
    description: { trip: "Chicago, IL to New York, NY", price: "$700", distance: "800 mi" },
    alt: "Porsche being shipped from Harrisburg, PA to Miami, FLt",
  },
  {
    image: "https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1748679653/Chevrolet-Camaro-SS_qvfud5.webp",
    title: "Chevrolet Camaro SS ",
    description: { trip: "San Francisco, CA to Houston, TX", price: "$1,700.00", distance: "1800 mi" },
    alt: "Chevrolet Camaro SS being transported from San Francisco, CA to Houston, TX",
  },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function EnclosedAutoTransportPremium() {
  const [activeFactorIndex, setActiveFactorIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("pros");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [activeComparison, setActiveComparison] = useState("Enclosed");
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Screen size check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Hover card effect for desktop
  useEffect(() => {
    if (!isSmallScreen && !isMediumScreen && hoveredCard !== null) {
      setActiveCard(hoveredCard);
    }
  }, [hoveredCard, isSmallScreen, isMediumScreen]);

  // Auto-rotation timers
  useEffect(() => {
    setIsVisible(true);
    const cardTimer = setInterval(() => setActiveCard((prev) => (prev + 1) % cardsData.length), 5000);
    const stepTimer = setInterval(() => setActiveStep((prev) => (prev + 1) % processSteps.length), 4000);
    const featureTimer = setInterval(() => setActiveFeature((prev) => (prev + 1) % featureswhy.length), 3000);
    return () => {
      clearInterval(cardTimer);
      clearInterval(stepTimer);
      clearInterval(featureTimer);
    };
  }, []);

  // Slider scroll effect
  useEffect(() => {
    if (sliderRef.current && (isSmallScreen || isMediumScreen)) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft = activeCard * cardWidth;
    }
  }, [activeCard, isSmallScreen, isMediumScreen]);

  const handleNextCard = () => setActiveCard((prev) => (prev + 1) % cardsData.length);
  const handlePrevCard = () => setActiveCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);

  const backgroundImage = !isSmallScreen && !isMediumScreen && hoveredCard !== null
    ? cardsData[hoveredCard]?.image
    : cardsData[activeCard]?.image;

  const comparisonStats = [
    { label: "Protection Level", value: 100, max: 100, suffix: "% Coverage" },
    { label: "Availability", value: 25, max: 100, suffix: "%" },
    { label: "Security Rating", value: 99, max: 100, suffix: "%" },
  ];

  return (
    <>
      <Head>
        <title>Everything you need to know about Enclosed Car Transport</title>
        <meta name="description" content="Affordable and reliable enclosed car transport nationwide. Get fast, insured vehicle shipping with Rapid Auto Shipping. Call +1 (833) 233-4447 for a free quote!" />
        <link rel="canonical" href="https://rapidautoshipping.com/enclosed-car-transport" />
        
        {/* Preconnect for faster resource loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_1200/v1748606426/enclosed_auto_shippinggg_aga5zb.webp"
          fetchpriority="high"
        />

        <meta property="og:description" content="Affordable and reliable enclosed car transport nationwide. Get fast, insured vehicle shipping with Rapid Auto Shipping. Call +1 (833) 233-4447 for a free quote!" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, item: { "@id": "https://www.rapidautoshipping.com", name: "Home" } },
                { "@type": "ListItem", position: 2, item: { "@id": "https://rapidautoshipping.com/enclosed-car-transport", name: "Enclosed Car Transport" } },
              ],
            }),
          }}
        />
     
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative py-8 min-h-screen flex items-center w-full">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_1200/v1748606426/enclosed_auto_shippinggg_aga5zb.webp"
              alt="Professional Auto Transport Service"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#001933]/70 via-[#001933]/50 to-[#001933]/70"></div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center z-10 px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-5xl text-white drop-shadow-2xl font-bold text-center sm:text-left" style={{ fontSize: "50px" }}>
                  Enclosed Car <span className="text-[#ff5722]">Transport</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-xl backdrop-blur-md bg-[#001933]/20 p-3 sm:p-4 rounded-lg border border-[#001933]/30 text-center sm:text-left">
                  Transporting your valuable car may raise safety concerns, but you need not worry about it. Rapid Auto Shipping offers a variety of shipping options to meet our customers' needs, one of which is enclosed car transport. We utilize a fully enclosed trailer for vehicle transportation, guaranteeing the utmost security. This guide will provide you with all the essential information regarding enclosed auto transport
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-white font-bold text-base sm:text-lg drop-shadow-lg text-center sm:text-left">
                  Perfect For:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                  <div className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20">
                    <div className="flex items-center space-x-3">
                      <FaCar className="w-5 h-5 text-white drop-shadow-sm" />
                      <div>
                        <div className="text-white text-lg font-semibold drop-shadow-sm">Relocations</div>
                        <div className="text-gray-100 text-md drop-shadow-sm">Moving across country without driving long distances</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20">
                    <div className="flex items-center space-x-3">
                      <FaShieldAlt className="w-5 h-5 text-white drop-shadow-sm" />
                      <div>
                        <div className="text-white text-lg font-semibold drop-shadow-sm">Dealerships</div>
                        <div className="text-gray-100 text-md drop-shadow-sm">Bulk transport of multiple vehicles at reduced costs</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20">
                    <div className="flex items-center space-x-3">
                      <FaStar className="w-5 h-5 text-white drop-shadow-sm" />
                      <div>
                        <div className="text-white text-lg font-semibold drop-shadow-sm">Online Purchases</div>
                        <div className="text-gray-100 text-md drop-shadow-sm">Hassle-free delivery from out-of-state sellers</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#001933]/25 backdrop-blur-md rounded-xl p-3 hover:bg-[#ff5722]/20 transition-all duration-300 cursor-pointer border border-[#001933]/50 hover:border-[#ff5722]/60 shadow-lg hover:shadow-xl hover:shadow-[#ff5722]/20">
                    <div className="flex items-center space-x-3">
                      <FaHome className="w-5 h-5 text-white drop-shadow-sm" />
                      <div>
                        <div className="text-white text-lg font-semibold drop-shadow-sm">Auto Auctions</div>
                        <div className="text-gray-100 text-md drop-shadow-sm">Affordable transport for auction buyers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto">
              <TransportForm />
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <div className="py-12 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto sm:px-1 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-3">
                  <Shield className="w-8 h-8 text-[#ff5722]" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">Fully Licensed & Insured</div>
                <p className="text-gray-600 text-sm">DOT & MC Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-3">
                  <Star className="w-8 h-8 text-blue-700" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">5-Star Service</div>
                <p className="text-gray-600 text-sm">Thousands of Happy Customers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">On-Time Delivery</div>
                <p className="text-gray-600 text-sm">Guaranteed Pickup & Delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 p-4 rounded-full mb-3">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">24/7 Support</div>
                <p className="text-gray-600 text-sm">Live Customer Service</p>
              </div>
            </div>
          </div>
        </div>

        <Enclosedswipper />

        {/* ============================================ */}
        {/* WHAT IS ENCLOSED AUTO TRANSPORT SECTION */}
        {/* ============================================ */}
        <section className="relative py-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#003366]/20">
                <Truck className="w-5 h-5 text-[#003366] mr-2" />
                <span className="text-[#003366] font-semibold text-sm uppercase tracking-wide">Transport Method</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                What Is
                <span className="block text-[#003366]">Enclosed Car Transport?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn about the standard method of vehicle shipping used by dealers and private owners alike.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dz2zovmf1/image/upload/f_auto,q_auto,w_800/v1747832976/What-Is-Enclosed-Car-Transport_dkzdaz.webp"
                    alt="Enclosed Car Transport Trailer"
                    className="w-full h-[700px] object-cover rounded-2xl shadow-2xl"
                    width={800}
                    height={700}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 to-transparent rounded-2xl"></div>
                  <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-px h-12 bg-gray-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff5722]">40%</div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#003366]/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Standard Method</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Enclosed car transport is a premium vehicle shipping service that offers maximum protection by transporting vehicles within a completely covered trailer. Unlike Enclosed auto transport, where vehicles are exposed to road and weather conditions, enclosed auto transport protects vehicles from rain, snow, dust, and road debris.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      This transportation method is perfect for high-end, luxury, exotic, antique, and vintage cars, as well as motorbikes and low-clearance vehicles. Enclosed trailers typically come equipped with hydraulic lift gates, soft tie-downs, and climate control, providing additional protection during transportation.
                    </p>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      Enclosed auto transport costs more than open transport but provides superior protection, decreased risk of damage, and more peace of mind. With fewer enclosed carriers out on the roads, scheduling is delayed, but for those carrying precious or delicate cars, it's worth it to pay the premium and wait a little longer.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <feature.icon className="w-8 h-8 text-[#003366] mb-3" />
                        <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TYPES OF ENCLOSED TRANSPORT TRAILERS */}
        {/* ============================================ */}
        <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[#003366]/20">
                <Truck className="w-5 h-5 text-[#003366] mr-2" />
                <span className="text-[#003366] font-semibold text-sm uppercase tracking-wide">Trailer Specifications</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Types of Enclosed Transport
                <span className="block text-[#003366]">Trailers for Different Requirements</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Enclosed auto transport utilizes various types of trailers depending on the needs of the vehicle and the protection level desired. The following are the most prevalent types:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {trailerTypes.map((trailer, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`bg-gradient-to-r ${trailer.color} backdrop-blur-sm rounded-xl p-4 mb-6 inline-block`}>
                    <trailer.icon className={`w-8 h-8 ${trailer.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{trailer.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{trailer.description}</p>
                  <div className="space-y-2">
                    {trailer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Star className="w-4 h-4 text-[#ff5722] mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Statistics */}
            <div className={`bg-gradient-to-r from-[#003366]/10 to-[#ff5722]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#003366]/20 transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#003366] mb-2">6</div>
                  <div className="text-gray-600 font-medium">Trailer Types</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ff5722] mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Weather Protection</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#003366] mb-2">1-6</div>
                  <div className="text-gray-600 font-medium">Cars per Trailer</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ff5722] mb-2">Premium</div>
                  <div className="text-gray-600 font-medium">Service Level</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BENEFITS SECTION */}
        {/* ============================================ */}
        <section className="py-8 sm:py-10 bg-[#003366] relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center bg-[#ff5722]/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-[#ff5722]/30">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5722] mr-2" />
                <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">Top Benefits</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-8">
                Benefits Of
                <br />
                <span className="text-[#ff5722]">Enclosed Auto Transport</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                When safety and security are a priority when shipping a car, enclosed vehicle transport is the best solution. Whether you are shipping a luxury vehicle, classic collector, or high-performance sports car, using a professional enclosed auto shipping service guarantees that your car will be delivered in its original condition. Here's why it is the top choice for high-end cars:
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
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#ff5722] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl mx-auto sm:mx-0">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#ff5722] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <div className="bg-[#ff5722]/20 rounded-lg px-3 sm:px-4 py-1 sm:py-2 inline-block border border-[#ff5722]/30">
                            <span className="text-[#ff5722] font-bold text-sm sm:text-base">{benefit.stats}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{benefit.description}</p>
                      {hoveredBenefit === index && (
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ff5722] rounded-full flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

        {/* ============================================ */}
        {/* PROCESS SECTION */}
        {/* ============================================ */}
        <section className="py-10 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-8 py-4 bg-[#ff5722]/10 border border-[#ff5722]/20 rounded-full mb-8">
                <Truck className="w-6 h-6 mr-3 text-[#ff5722]" />
                <span className="text-[#003366] font-bold text-lg">Simple 4-Step Process</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-8">
                <span className="text-[#003366]">How Does Enclosed Auto</span>
                <br />
                <span className="text-[#ff5722]">Transport Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Rapid Auto Shipping, our enclosed vehicle transport process is easy and hassle-free. To book your premium car shipment, follow these simple steps:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`group relative transition-all duration-700 cursor-pointer ${activeStep === index ? "scale-105 z-20" : "hover:scale-102"}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 ${activeStep === index ? "border-[#ff5722] shadow-[#ff5722]/20" : "border-gray-100 hover:border-[#003366]/30"}`}>
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeStep === index ? "bg-[#ff5722]/5" : "bg-[#003366]/5"}`}></div>
                      <div className="relative z-10 p-8">
                        <div className="flex items-start space-x-6 mb-6">
                          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 ${activeStep === index ? "bg-[#ff5722]" : "bg-[#003366]"}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="bg-[#ff5722]/10 border border-[#ff5722]/20 text-[#003366] text-sm font-bold px-4 py-2 rounded-full">Step {step.id}</span>
                              <div className={`w-3 h-3 rounded-full ${activeStep === index ? "bg-[#ff5722] animate-pulse" : "bg-gray-300"}`}></div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#003366] group-hover:text-[#ff5722] transition-colors duration-300">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">{step.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                              <span className="text-gray-600 text-sm font-medium">{feature}</span>
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
                );
              })}
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`relative w-12 h-12 rounded-full transition-all duration-300 ${index <= activeStep ? "bg-[#ff5722] scale-125 shadow-lg" : "bg-gray-300 hover:bg-[#003366] hover:scale-110"}`}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">{index + 1}</span>
                  </button>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-[#ff5722] h-3 rounded-full transition-all duration-1000" style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRICING SECTION */}
        {/* ============================================ */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-5xl font-black text-[#003366] mb-8">
                Cost Of Enclosed Car <span className="text-[#ff5722]">Shipping?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto">
                One of the most pressing inquiries that vehicle owners have is regarding the cost of shipping a car. The cost of shipping a car is typically determined by various factors. At Rapid Auto Shipping, our focus extends beyond profit; we are dedicated to serving the nation. Therefore, we offer the most competitive, reasonable, and affordable vehicle shipping rates in the United States while maintaining the quality of our services. The following outlines the average enclosed auto shipping costs to provide a general understanding of the pricing structure.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {pricingData.map((pricing, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#ff5722]/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#003366] mb-2">{pricing.distance}</div>
                        <div className="text-gray-600">Distance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#ff5722] mb-2">{pricing.time}</div>
                        <div className="text-gray-600">Delivery Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#ff5722] mb-2">{pricing.cost}</div>
                        <div className="text-gray-600">Estimated Cost</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* COST FACTORS SECTION */}
        {/* ============================================ */}
        <section className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-[#003366]/20">
                <DollarSign className="w-6 h-6 text-[#003366] mr-3" />
                <span className="text-[#003366] font-bold text-lg uppercase tracking-wide">Cost Analysis</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                Factors Affecting The
                <br />
                <span className="text-[#ff5722]">Cost of Enclosed Transport Car Shipping</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                The cost of enclosed auto transport depends on various factors, including the distance, specifics of the vehicle, and the season's demand. Understanding these factors will allow you to plan your budget effectively and secure the most favorable rates for enclosed car shipping.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
              {costFactors.map((factor, index) => {
                const Icon = factor.icon;
                const isActive = activeFactorIndex === index;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={factor.id}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-500 cursor-pointer transform ${isActive ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20" : isHovered ? "scale-102 border-[#003366]/30 shadow-xl" : "border-gray-200/50 hover:border-[#003366]/30"}`}
                    onClick={() => setActiveFactorIndex(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${isActive ? "opacity-100 bg-gradient-to-br from-[#ff5722]/5 to-[#003366]/5" : "group-hover:opacity-100 bg-gradient-to-br from-[#003366]/3 to-[#ff5722]/3"}`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? "bg-[#ff5722] scale-110" : "bg-[#003366] group-hover:scale-105"}`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${isActive ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]" : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"}`}>
                              {factor.impact}
                            </div>
                            <h3 className={`text-2xl font-bold mt-2 transition-colors duration-300 ${isActive ? "text-[#ff5722]" : "text-[#003366] group-hover:text-[#ff5722]"}`}>
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
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{factor.description}</p>
                      <div className={`bg-gradient-to-r rounded-2xl p-4 border ${isActive ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20" : "from-gray-50 to-gray-100 border-gray-200"}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className={`w-5 h-5 ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`} />
                            <span className="font-bold text-gray-900">Cost Impact:</span>
                          </div>
                          <span className={`font-bold text-lg ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}>{factor.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mb-16">
              <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50">
                {costFactors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFactorIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${activeFactorIndex === index ? "bg-[#ff5722] scale-125" : "bg-gray-300 hover:bg-[#003366]"}`}
                    aria-label={`Select cost factor ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Seasonal Demand Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl sm:px-12 py-5 shadow-xl border border-gray-200/50">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-[#003366] mb-4">Seasonal Pricing Guide</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding seasonal demand patterns can help you save significantly on shipping costs
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalData.map((season, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5 rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-[#003366] mb-2">{season.season}</h4>
                      <div className="text-gray-600 mb-3">{season.months}</div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${season.demand === "High" ? "bg-red-100 text-red-700" : season.demand === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {season.demand} Demand
                      </div>
                      <div className="text-2xl font-bold text-[#ff5722]">{season.savings}</div>
                      <div className="text-sm text-gray-600">Potential Savings</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROS AND CONS SECTION */}
        {/* ============================================ */}
        <section className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className={`text-center mb-10 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 border border-[#003366]/20">
                <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#003366] mr-2 sm:mr-3" />
                <span className="text-[#003366] font-bold text-base sm:text-lg uppercase tracking-wide">Detailed Analysis</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-8">
                Pros And Cons Of
                <br />
                <span className="text-[#ff5722]">Enclosed Auto Transport</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0">
                Enclosed auto transport is the most secure and safest means of shipping a car, but it's not always ideal for every person. Here's what you need to know about the pros and cons to make a decision.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
              {comparisonStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#003366] mb-2">{stat.value}{stat.suffix}</div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3 sm:mt-4">
                    <div className="bg-[#ff5722] h-2 rounded-full transition-all duration-1000" style={{ width: `${(stat.value / stat.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-10 sm:mb-12 lg:mb-16">
              <div className="bg-white/80 flex flex-col sm:flex-row backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 shadow-lg border border-gray-200/50 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab("pros")}
                  className={`px-6 sm:px-12 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 ${activeTab === "pros" ? "bg-[#ff5722] text-white shadow-lg transform scale-100 sm:scale-105" : "text-gray-600 hover:text-[#003366] hover:bg-gray-50"}`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span className="ml-2 sm:ml-0">Advantages ({prosData.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab("cons")}
                  className={`px-6 sm:px-12 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 ${activeTab === "cons" ? "bg-[#003366] text-white shadow-lg transform scale-100 sm:scale-105" : "text-gray-600 hover:text-[#003366] hover:bg-gray-50"}`}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span className="ml-2 sm:ml-0">Considerations ({consData.length})</span>
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
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200/50 transition-all duration-500 cursor-pointer transform ${hoveredItem === `pro-${index}` ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20" : "hover:scale-102 hover:border-[#003366]/30"}`}
                        onMouseEnter={() => setHoveredItem(`pro-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${hoveredItem === `pro-${index}` ? "opacity-100 bg-gradient-to-br from-[#ff5722]/5 to-[#003366]/5" : "group-hover:opacity-100 bg-gradient-to-br from-[#003366]/3 to-[#ff5722]/3"}`}></div>
                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-x-4">
                              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredItem === `pro-${index}` ? "bg-[#ff5722] scale-110" : "bg-[#003366] group-hover:scale-105"}`}>
                                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              </div>
                              <div>
                                <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${hoveredItem === `pro-${index}` ? "text-[#ff5722]" : "text-[#003366] group-hover:text-[#ff5722]"}`}>
                                  {pro.title}
                                </h3>
                                <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mt-2 ${hoveredItem === `pro-${index}` ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]" : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"}`}>
                                  {pro.benefit}
                                </div>
                              </div>
                            </div>
                            {hoveredItem === `pro-${index}` && (
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ff5722] rounded-full flex items-center justify-center mt-4 sm:mt-0">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{pro.description}</p>
                          <div className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${hoveredItem === `pro-${index}` ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20" : "from-gray-50 to-gray-100 border-gray-200"}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <TrendingUp className={`w-4 h-4 sm:w-5 sm:h-5 ${hoveredItem === `pro-${index}` ? "text-[#ff5722]" : "text-[#003366]"}`} />
                                <span className="font-bold text-gray-900 text-sm sm:text-base">Key Advantage:</span>
                              </div>
                              <span className={`font-bold text-sm sm:text-lg ${hoveredItem === `pro-${index}` ? "text-[#ff5722]" : "text-[#003366]"}`}>{pro.stats}</span>
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
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200/50 transition-all duration-500 cursor-pointer transform ${hoveredItem === `con-${index}` ? "scale-105 border-[#003366]/50 shadow-2xl shadow-[#003366]/20" : "hover:scale-102 hover:border-[#ff5722]/30"}`}
                        onMouseEnter={() => setHoveredItem(`con-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${hoveredItem === `con-${index}` ? "opacity-100 bg-gradient-to-br from-[#003366]/5 to-[#ff5722]/5" : "group-hover:opacity-100 bg-gradient-to-br from-[#ff5722]/3 to-[#003366]/3"}`}></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${hoveredItem === `con-${index}` ? "bg-[#003366] scale-110" : "bg-[#ff5722] group-hover:scale-105"}`}>
                              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                            {hoveredItem === `con-${index}` && (
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#003366] rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                              </div>
                            )}
                          </div>
                          <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${hoveredItem === `con-${index}` ? "text-[#003366]" : "text-[#ff5722] group-hover:text-[#003366]"}`}>
                            {con.title}
                          </h3>
                          <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mb-3 sm:mb-4 ${hoveredItem === `con-${index}` ? "bg-[#003366]/20 border-[#003366]/30 text-[#003366]" : "bg-[#ff5722]/10 border-[#ff5722]/20 text-[#ff5722]"}`}>
                            {con.impact}
                          </div>
                          <p className="text-gray-700 text-base sm:text-base leading-relaxed mb-4 sm:mb-6">{con.description}</p>
                          <div className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${hoveredItem === `con-${index}` ? "from-[#003366]/10 to-[#ff5722]/10 border-[#003366]/20" : "from-gray-50 to-gray-100 border-gray-200"}`}>
                            <div className="flex items-start space-x-2">
                              <Shield className={`w-4 h-4 sm:w-5 sm:h-5 mt-1 ${hoveredItem === `con-${index}` ? "text-[#003366]" : "text-[#ff5722]"}`} />
                              <div>
                                <div className="font-bold text-gray-900 text-sm">Mitigation:</div>
                                <div className="text-gray-700 text-sm">{con.mitigation}</div>
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff5722] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003366] mb-4 sm:mb-6">The Bottom Line</h3>
                <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  If you're shipping an exotic, high-end, or classic car, the extra care and protection of enclosed vehicle shipping is worth paying for. Yet, if you're shipping an ordinary car and want to save money, open auto transport would be a preferable option.
                </p>
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Link href="/services/car-shipping-calculator">
                    <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#ff5722] text-white font-bold rounded-xl sm:rounded-2xl hover:bg-[#ff5722]/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                      Get Your Free Quote Today
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHO SHOULD USE SECTION */}
        {/* ============================================ */}
        <section className="py-8 sm:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className={`text-center mb-10 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-[#003366]/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 border border-[#003366]/20">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#003366] mr-2 sm:mr-3" />
                <span className="text-[#003366] font-bold text-base sm:text-lg uppercase tracking-wide">Target Customers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-8">
                Who Should Use
                <br />
                <span className="text-[#ff5722]">Enclosed Car Transport?</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0">
                Enclosed car transport is the best choice for owners of high-value, rare, or delicate vehicles that require extra care during shipping. If you're considering whether enclosed auto transport services are right for you, here's who benefits most.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto mb-10 sm:mb-16 lg:mb-20">
              {userTypes.map((userType, index) => {
                const Icon = userType.icon;
                const isActive = activeCard === index;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={userType.id}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border transition-all duration-700 cursor-pointer transform ${isActive ? "scale-105 border-[#ff5722]/50 shadow-2xl shadow-[#ff5722]/20 z-20" : isHovered ? "scale-102 border-[#003366]/30 shadow-xl" : "border-gray-200/50 hover:border-[#003366]/30"}`}
                    onClick={() => setActiveCard(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-500 ${isActive ? `opacity-100 bg-gradient-to-br ${userType.bgGradient}` : `group-hover:opacity-100 bg-gradient-to-br ${userType.bgGradient}`}`}></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${isActive ? `${userType.iconBg} scale-110` : `${userType.iconBg} group-hover:scale-105`}`}>
                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <div className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border mb-2 sm:mb-3 ${isActive ? "bg-[#ff5722]/20 border-[#ff5722]/30 text-[#ff5722]" : "bg-[#003366]/10 border-[#003366]/20 text-[#003366]"}`}>
                              {userType.subtitle}
                            </div>
                            <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isActive ? "text-[#ff5722]" : "text-[#003366] group-hover:text-[#ff5722]"}`}>
                              {userType.title}
                            </h3>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ff5722] rounded-full flex items-center justify-center mt-4 sm:mt-0">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{userType.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {userType.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#ff5722] rounded-full"></div>
                            <span className="text-gray-600 text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${isActive ? "from-[#ff5722]/10 to-[#003366]/10 border-[#ff5722]/20" : "from-gray-50 to-gray-100 border-gray-200"}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <Target className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`} />
                            <span className="font-bold text-gray-900 text-sm sm:text-base">Key Advantage:</span>
                          </div>
                          <span className={`font-bold text-base sm:text-xl ${isActive ? "text-[#ff5722]" : "text-[#003366]"}`}>{userType.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mb-10 sm:mb-12 lg:mb-16">
              <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50">
                {userTypes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${activeCard === index ? "bg-[#ff5722] scale-125" : "bg-gray-300 hover:bg-[#003366]"}`}
                    aria-label={`Select user type ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TIPS SECTION */}
        {/* ============================================ */}
        <section id="tips" className="pb-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
                Tips For A Successful <span className="text-[#ff5722]"> Enclosed Car Transport Experience</span>
              </h2>
              <p className="text-lg">
                Simply follow these easy steps to have a hassle-free and smooth Enclosed auto transport experience:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="text-4xl text-[#ff5722] mb-4">
                      <Icon size={60} />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{tip.title}</h3>
                    <p className="text-xl">{tip.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-lg my-10">
              By taking these precautions, a smooth and hassle-free covered car shipping experience will be ensured. Require professional advice? Our transport experts are one call away for your help.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* COMPARISON SECTION */}
        {/* ============================================ */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-5xl font-black text-[#003366] mb-8">
                Open vs <span className="text-[#ff5722]">Enclosed Transport</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare the two main shipping methods to choose the best option for your vehicle
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                  <button
                    onClick={() => setActiveComparison("Enclosed")}
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeComparison === "Enclosed" ? "bg-[#ff5722] text-white shadow-lg" : "text-gray-600 hover:text-[#003366]"}`}
                  >
                    Open Auto Transport
                  </button>
                  <button
                    onClick={() => setActiveComparison("enclosed")}
                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeComparison === "enclosed" ? "bg-[#003366] text-white shadow-lg" : "text-gray-600 hover:text-[#003366]"}`}
                  >
                    Enclosed Transport
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-2 sm:p-12 shadow-xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#003366] mb-8">Key Features</h3>
                    {Object.entries(comparisonData[activeComparison]).slice(0, 4).map(([key, value], index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-[#ff5722] rounded-full mt-2"></div>
                        <div>
                          <div className="font-semibold text-[#003366] capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                          <div className="text-gray-600">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#003366] mb-8">Additional Details</h3>
                    {Object.entries(comparisonData[activeComparison]).slice(4).map(([key, value], index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-[#ff5722] rounded-full mt-2"></div>
                        <div>
                          <div className="font-semibold text-[#003366] capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
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

        {/* ============================================ */}
        {/* WHY RAPID AUTO SHIPPING SECTION */}
        {/* ============================================ */}
        <section className="py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center bg-blue-900/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-blue-900/20">
                <Shield className="w-6 h-6 text-blue-900 mr-3" />
                <span className="text-blue-900 font-bold text-lg uppercase tracking-wide">Premium Enclosed Transport</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-6 leading-tight">
                Rapid Auto Shipping: Your
                <br />
                <span className="text-orange-500 relative">Trusted Partner</span>
                <br />
                For Enclosed Auto Transport
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                When you need a secure, safe, and reliable enclosed car transport service, Rapid Auto Shipping is the name to trust. We are experts in premium enclosed auto transport, guaranteeing your luxury, classic, exotic, or high-value car will arrive in flawless condition and be protected from road hazards, weather, and possible damage.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <Star className="w-5 h-5 text-blue-900 mr-2" />
                  <span className="font-bold text-blue-900">Top-Rated Service</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <Shield className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="font-bold text-gray-700">Fully Insured</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-bold text-gray-700">Licensed Carriers</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              {featureswhy.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                return (
                  <div
                    key={index}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-700 cursor-pointer transform hover:scale-105 ${isActive ? "scale-105 border-orange-500/50 shadow-2xl shadow-orange-500/20 z-20" : "border-gray-200/50 hover:border-blue-900/30"}`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="relative z-10 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.color} ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? "text-orange-500" : "text-blue-900 group-hover:text-orange-500"}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${isActive ? "bg-orange-500/20 border-orange-500/30 text-orange-500" : "bg-blue-900/10 border-blue-900/20 text-blue-900"}`}>
                        {feature.stat}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featureswhy.slice(4).map((feature, index) => {
                const Icon = feature.icon;
                const actualIndex = index + 4;
                const isActive = activeFeature === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-700 cursor-pointer transform hover:scale-105 ${isActive ? "scale-105 border-orange-500/50 shadow-2xl shadow-orange-500/20 z-20" : "border-gray-200/50 hover:border-blue-900/30"}`}
                    onClick={() => setActiveFeature(actualIndex)}
                  >
                    <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${isActive ? `opacity-100 bg-gradient-to-br ${feature.color}/10` : `group-hover:opacity-100 bg-gradient-to-br ${feature.color}/5`}`}></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.color} ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? "text-orange-500" : "text-blue-900 group-hover:text-orange-500"}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${isActive ? "bg-orange-500/20 border-orange-500/30 text-orange-500" : "bg-blue-900/10 border-blue-900/20 text-blue-900"}`}>
                        {feature.stat}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services We Handle */}
            <div className={`bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-2 sm:p-10 lg:p-16 relative transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Premium Enclosed Transport Services</h3>
                  <p className="text-blue-200 text-lg max-w-3xl mx-auto">
                    Want the best enclosed car transport? We specialize in luxury, classic, exotic, and high-value vehicles with expert care and maximum protection. Call us now at +1 (833) 233-4447 or request a free enclosed auto shipping quote online!
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-white font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                    Get Free Quote Online
                  </button>
                  <Link href="tel:+18332334447">
                    <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (833) 233-4447
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex space-x-3 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50">
                {featureswhy.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${activeFeature === index ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-blue-900"}`}
                    aria-label={`Select feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <KeyBanner />

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <div id="faq-section" className="w-full mx-auto my-12 p-6 bg-white rounded-lg container">
        <h2 className="text-5xl font-bold text-center mb-6 text-black">
          <span className="text-[#ff5722]">FAQs</span> on Car Shipping Services in the USA
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-xl shadow-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus className="text-red-500" /> : <FaPlus className="text-red-500" />}
            </button>
            <div className="overflow-hidden" style={{ display: openIndex === index ? "block" : "none" }}>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ============================================ */}
      {/* RECENT SHIPMENTS SECTION */}
      {/* ============================================ */}
      <div
        ref={sectionRef}
        className="relative w-full h-screen transition-all duration-700 py-10 my-10 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: isVisible ? `url(${backgroundImage})` : "none", backgroundColor: isVisible ? "transparent" : "#000" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Some Of Our Recent Shipments</h3>
        </div>

        {(isSmallScreen || isMediumScreen) && (
          <div className="absolute z-30 w-full flex justify-between px-4 top-1/2 transform -translate-y-1/2">
            <button onClick={handlePrevCard} className="bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white" aria-label="Previous shipment">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNextCard} className="bg-white/30 hover:bg-white/50 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white" aria-label="Next shipment">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        <div className="relative z-10 h-full w-full flex flex-col justify-end">
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
                    <span className="text-3xl font-bold text-white mb-4">{card.title}</span>
                    <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-80 group-hover:opacity-100">
                      <div className="space-y-3">
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2"><GiPathDistance /></span>
                          <span className="text-gray-300">Trip:</span>
                          <span className="ml-2 font-semibold">{card.description.trip}</span>
                        </p>
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2"><FaDollarSign /></span>
                          <span className="text-gray-300">Price:</span>
                          <span className="ml-2 font-semibold">{card.description.price}</span>
                        </p>
                        <p className="text-white flex items-center">
                          <span className="inline-block text-2xl mr-2"><RiPinDistanceLine /></span>
                          <span className="text-gray-300">Distance:</span>
                          <span className="ml-2 font-semibold">{card.description.distance}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(isSmallScreen || isMediumScreen) && (
            <div ref={sliderRef} className="w-full overflow-x-hidden scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
              <div className={`flex ${isSmallScreen ? "w-[400%]" : "w-[200%]"}`}>
                {cardsData.map((card, index) => (
                  <div key={index} className={`${isSmallScreen ? "w-1/4" : "w-1/2"} shrink-0 flex flex-col h-full border-r border-gray-400/30 last:border-r-0`}>
                    <div className="p-4 md:p-6 h-full flex flex-col justify-end">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{card.title}</h2>
                      <div className={`bg-black/60 backdrop-blur-sm p-4 md:p-6 rounded-xl ${activeCard === index ? "block" : "hidden"}`}>
                        <div className="space-y-3">
                          <p className="text-white flex items-center">
                            <span className="inline-block text-2xl mr-2"><GiPathDistance /></span>
                            <span className="text-gray-300">Trip:</span>
                            <span className="ml-2 font-semibold">{card.description.trip}</span>
                          </p>
                          <p className="text-white flex items-center">
                            <span className="inline-block text-2xl mr-2"><FaDollarSign /></span>
                            <span className="text-gray-300">Price:</span>
                            <span className="ml-2 font-semibold">{card.description.price}</span>
                          </p>
                          <p className="text-white flex items-center">
                            <span className="inline-block text-2xl mr-2"><RiPinDistanceLine /></span>
                            <span className="text-gray-300">Distance:</span>
                            <span className="ml-2 font-semibold">{card.description.distance}</span>
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
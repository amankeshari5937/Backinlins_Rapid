import Link from "next/link";

export default function BloggingCard() {
  const blogs = [
    {
      id: 1,
      title: "Shipping Car From New York To Florida",
      description:
        "Rapid Auto Shipping is a reliable and affordable way to ship your car from New York to Florida. Whether you need your car shipped for personal or business reasons, Rapid Auto Shipping offers the best prices with top-notch customer service. They specialize in door-to-door shipping services so that you can rest assured that your vehicle will arrive safely and on time. With their decades of experience, they are able to provide options for different size vehicles and budgets. Their team of experts will work hard throughout the entire process to make sure that all of your needs are met during transit.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743216107/blogs/ship-from-new-york-to-florida.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/ship-from-new-york-to-florida",
    },
    {
      id: 3,
      title: "The Best Way to Transport Car to Mexico",
      description:
        "Want to transport car to Mexico if you're relocating or taking an extended holiday there? Although transporting car to Mexico can be complicated, it can also be stress-free with the correct information and guidance. In this piece, we'll review everything you need to know about transport car to Mexico. We'll provide you with all the information you need to make an informed decision, from prerequisites and guidelines to pricing and delivery options.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743216533/blogs/transport-car-to-mexico.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/transport-car-to-mexico",
    },
    {
      id: 4,
      title: "Ship Car From Texas To California",
      description:
        "If you want to move your car from Texas to California, you've come to the perfect location! Rapid Auto Shipping offers some of the best services and pricing in the industry. Rapid Auto Shipping has been transporting vehicles from Texas to California for over a decade. We ensure that every car we carry from Texas to California safely reaches its owner. We transport both single and multiple vehicles. You can trust us to deliver your antique or premium car securely and on time. All of the vehicles are fully insured before they are shipped. Forget about driving! Rapid Auto Shipping can do it better and for less money.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743216705/blogs/cost-from-texas-to-california.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/cost-from-texas-to-california",
    },
    {
      id: 5,
      title: "Boat Shipping Cost Calculator",
      description:
        "Rapid Auto Shipping provides customers with a boat shipping cost calculator to obtain a prompt estimate of the cost of our shipping services. While the transport calculator is not designed to give an exact price for shipping boats, it offers potential customers a rough estimate of the transportation expenses they might incur. A quick and simple method to collect quotes is recommended when searching for a ship's appropriate shipping service.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743216871/blogs/boat-shipping-cost-calculator.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/boat-shipping-cost-calculator",
    },
    {
      id: 6,
      title: "Terminal To Terminal Auto Transport",
      description:
        "Hauling a vehicle from terminal to terminal is one of the most affordable ways to ship a car. Terminal to terminal auto transport involves dropping off a vehicle at the nearest transportation terminal and picking it up from the terminal closest to the delivery destination. Rapid Auto Shipping offers cost-effective Terminal to terminal car shipping services, making the auto transport process hassle-free and convenient.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743217020/blogs/terminal-to-terminal-auto-transport.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/terminal-to-terminal-auto-transport",
    },
    {
      id: 14,
      title: "What to Look for The Cheapest Way to Ship a Car?",
      description:
        "Looking for cheap car shipping in the USA and need clarification on what to choose and whom to rely on for Car auto shipping. If we talk about affordable car transport services, we could refer to Open air car shipping or Terminal to Terminal car shipping. Let us discuss more about the cheapest way to transport a car.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1743235938/blogs/cheapest-car-auto-transport.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/cheapest-way-to-ship-a-car",
    },
   
    // New blogs added below
    {
      id: 18,
      title: "Summer vs. Winter Vehicle Shipping",
      description:
        "Car transportation requires much more preparation, and the most important thing is transporting it safely. The cost of car shipping depends on seasonal conditions; it's not easy to transport a car during winter. Regarding vehicle transport, choosing a suitable carrier and the right time for the shipment is most important.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/711310800.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/differences-between-shipping-a-vehicle-during-summer-vs-winter",
    },
    {
      id: 19,
      title: "Top Boat Shipping Companies",
      description:
        "Some items are more challenging to move than others when moving from one place to another. Because of its size and incapacity to be driven on land, moving your boat is unlike transferring any other form of car. Shipping your boat entails a lot of complex preparation and processes. It necessitates additional planning and is more costly than any other type of specialized relocation you may encounter.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/54698947.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/boat-shipping-companies",
    },
    {
      id: 20,
      title: "Cost of Transporting a Boat",
      description:
        "Some items are more challenging to move than others when moving from one place to another. Because of its size and incapacity to be driven on land, moving your boat is unlike transferring any other form of car. Shipping your boat entails a lot of complex preparation and processes. It necessitates additional planning and is more costly than any other type of specialized relocation you may encounter.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1763460329.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/boat-shipping-how-much-does-it-cost-to-transport-a-boat",
    },
    {
      id: 21,
      title: "Summer Car Shipping Guide",
      description:
        "The busiest season for summer car shipping. People typically like to make a significant move when the sun is out. The housing sector is now busy helping buyers and sellers prepare for additional summer movers. It makes sense to utilize a summer car shipping service when moving a long distance to prevent damage to your automobile",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1047094017.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/summer-car-shipping",
    },
    {
      id: 22,
      title: "Advantages of Line Haul Transportation",
      description:
        "Trucks play a significant role in the economy's flow of commodities and services. Every year, millions of tons of raw materials, completed goods, and other items are transported using a variety of trucking line haul techniques, including trucks, planes, trains, and ships",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/944991193.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/advantages-of-line-haul-transportation",
    },
    {
      id: 23,
      title: "Pros and Cons of Auto Shipping",
      description:
        "Making an informed decision about relocating a vehicle requires careful consideration of both the benefits and drawbacks of car transportation. Before selecting your options for shipping your car, you must take into account a number of factors. The primary justifications for using a car shipping service can be determined by balancing the benefits and drawbacks. It would also enable you to take into account the whole range of advantages that you can obtain from a particular circumstance, as well as some of the potential drawbacks.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/996204894.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/pros-and-cons-of-auto-shipping",
    },
    {
      id: 24,
      title: "New York to Atlanta Auto Transport",
      description:
        "Rapid auto shipping is committed to providing our customers with an excellent automobile transport service from New York to Atlanta auto transport. Â Whether you need us to pick up your imported automobile from the port in California or deliver it to Illinois or whether you're going home after the winter, our mission is not only to meet but exceed your greatest expectations. Make sure to ask about our snowbird auto transport deals!",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/939876026.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/new-york-to-atlanta-auto-transport",
    },

    {
      id: 26,
      title: "Enclosed Auto Transport in Chicago",
      description:
        "Enclosed auto transport is a method of shipping a vehicle that offers additional protection. Enclosed auto transport enables you to move your vehicle from point A to point B in a trailer that is completely enclosed on all four sides and shielded from the elements and road debris, so you don't have to worry about anything. Rapid Auto Shipping provides enclosed auto transport in Chicago. You can rely on us because we only work with seasoned drivers who maintain impeccable records and use the best tools. From pick-up to drop-off, our crew will manage everything, leaving you free to unwind while we care for the rest.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/450480771.webp",
      BlogUrl:
        "https://rapidautoshipping.com/blogs/enclosed-auto-transport-chicago",
    },
    {
      id: 27,
      title: "Auto Transport Insurance Explained",
      description:
        "Car shipping insurance is a coverage that safeguards your car against damages that could take place during transportation. From traveling across the nation, buying a car from a different state, or shipping a high-end vehicle. The financial protection of vehicle shipping insurance coverage will be available in the event of unexpected situations like accidents, theft, or transit-caused damages. ",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1365791384.webp",
      BlogUrl: "https://rapidautoshipping.com/auto-transport-insurance",
    },
    {
      id: 28,
      title: "Exotic Car Transport Services",
      description:
        "Exotic car transport refers to the specialized service of safely and securely moving high-end, rare, or luxury vehicles from one location to another. Exotic auto Shipping is tailored to collectors, dealerships, and enthusiasts who require meticulous care when transporting their prized automobiles. It ensures vehicles arrive at their destination in pristine condition.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/2067832660.webp",
      BlogUrl: "https://rapidautoshipping.com/exotic-car-transport",
    },
    {
      id: 29,
      title: "Finding the Cheapest Car Shipping Company",
      description:
        "When it comes to finding the cheapest car shipping company, price-conscious customers often turn to budget-friendly options. While it's essential to save money, it's equally important to consider the quality and reliability of the service. Here, we have a comprehensive guide on how you can find the cheapest car shipping company for your vehicle.",
      imageUrl:
        "http://dashboard.rapidautoshipping.com/assets/images/img_gallery/107855085.webp",
      BlogUrl: "https://rapidautoshipping.com/cheapest-car-shipping-company",
    },
    {
      id: 30,
      title: "Motorcycle Shipping Cost Calculator",
      description:
        "Estimate your motorcycle shipping costs with ease using Rapid Auto Shipping’s cost calculator. Learn how factors like distance and transport type affect pricing for your bike’s transport.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/352390719.webp",
      BlogUrl:
        "https://rapidautoshipping.com/motorcycle-shipping-cost-calculator",
    },
    {
      id: 31,
      title: "Benefits of Flatbed Auto Transport",
      description:
        "When shipping your car, selecting the suitable method is important for safety and convenience. Flatbed auto transport ranks among the best, providing unparalleled versatility to haul anything from high-end luxury vehicles to heavy-duty oversized equipment. Unlike open car transport carriers, flatbed car transport services are the preferred option for cars that need special handling. However, what makes flatbed car transport stand out? Let's talk about the important advantages of the special shipping option.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/734025997.webp",
      BlogUrl:
        "https://rapidautoshipping.com/what-are-the-benefits-of-flatbed-auto-transport",
    },
    {
      id: 32,
      title: "Tracking Your Vehicle in Transit",
      description:
        "When planning to transport a vehicle, the first thought that comes to mind is how can I track my vehicle while in transit everyone wonders whether they can track their vehicle. The answer is yes. You can track your vehicle during transportation. Rapid Auto Shipping offers a vehicle transport carrier with advanced technologies, and we provide free GPS tracking facilities to our client to let them know the live location of their vehicle when it is being transported.",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/668888205.webp",
      BlogUrl:
        "https://rapidautoshipping.com/how-can-i-track-my-vehicle-while-in-transit",
    },
    {
      id: 33,
      title: "What is Driveaway Service?",
      description:
        "Ultimate Auto Transport Guide In the realm of vehicle transportation, selecting the optimal method can be the key to a seamless and stress-free journey. While traditional auto shipping techniques include loading cars onto carriers, drive away service provides a distinct alternative to having your car driven personally by a professional driver to its destination. In this guide, we’ll explore what driveaway service is, how it works, its benefits, and whether it’s the right choice for you. ",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1428804429.webp",
      BlogUrl: "https://rapidautoshipping.com/what-is-driveaway-service",
    },
   
    {
      id: 35,
      title: "Enclosed vs Open Car Shipping",
      description:
        "What are the key distinctions between enclosed vs open car shipping? Shipping a car is becoming more common, particularly for individuals buying from a distance, relocating out-of-state, or snowbirds who migrate periodically. However, there is a lot you need to know about shipping a vehicle before you sign up with a carrier. How you send it is one of the most essential considerations. ",
      imageUrl:
        "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/1599421568.webp",
      BlogUrl: "https://rapidautoshipping.com/blogs/enclosed-vs-open-car-shipping",
    },
    {
      id: 35,
      title: "Can I Ship a Car Without a Title in 2025? Here’s What You Need to Know",
      description:
        "If you're wondering, “Can I ship a car without a title?” or asking, “Can you ship a car without a title?” you're not alone, and the answer is yes, it's possible in some cases. Whether your title is lost, delayed, or held by a lender, there are legal workarounds depending on your situation. In this guide, we’ll break down your options, the car shipping documents you might need, and how Rapid Auto Shipping can help get your car moving.",
      imageUrl:
        "https://res.cloudinary.com/dz2zovmf1/image/upload/v1751712697/Can_I_Ship_a_Carr_1_rk6egl.webp",
      BlogUrl: "https://rapidautoshipping.com/can-i-ship-a-car-without-a-title",
    },
  ];

  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {blogs.map((blog, index) => (
          <Link href={blog.BlogUrl} key={blog.id}>
            {/* Mobile View (flex-col, image above content) */}
            <div className="flex flex-col md:hidden max-w-xl group mt-10 w-full">
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden shadow-lg">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:grayscale-0"
                />
              </div>
              {/* Text Section */}
              <div className="bg-white p-4 shadow-lg border-2 border-gray-400 relative w-full">
                <h2 className="text-base font-bold min-h-[3rem] line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm line-clamp-4">
                  {blog.description}
                </p>
                <div className="absolute left-0 bottom-0 h-1 bg-rapidcolor w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>

            {/* Desktop View (flex row, image overlapping text) */}
            <div className="hidden md:flex max-w-xl items-center group mt-10 w-full relative">
              {/* Image Section with Hover Effect */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "left-2" : "left-6 sm:left-10"
                } -top-8 w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-48 z-10 overflow-hidden shadow-lg`}
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Text Section */}
              <div
                className={`ml-24 sm:ml-32 ${
                  index % 2 === 0 ? "md:ml-32" : "md:ml-48"
                } bg-white pl-24 sm:pl-32 pr-4 sm:pr-6 pb-4 pt-4 shadow-lg border-2 border-gray-400 relative z-0 w-full h-56 flex flex-col`}
              >
                <h2 className="text-base sm:text-lg font-bold mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-5">
                  {blog.description}
                </p>

                <div className="absolute left-0 bottom-0 h-1 bg-rapidcolor w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
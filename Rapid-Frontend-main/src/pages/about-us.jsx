import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/CommonComponents/Navbar';
import Footer from '@/components/CommonComponents/Footer';

const VehicleShippingComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size (kept for potential dynamic behavior, but prefer Tailwind for layout)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Head>
        <title>About Rapid Auto Shipping | Reliable Auto Transport Services</title>
        <meta
          name="description"
          content="Learn about Rapid Auto Shipping—your trusted partner for safe, affordable, and nationwide vehicle transport. Get a free quote today!"
        />
        <meta
          name="title"
          content="About Rapid Auto Shipping | Reliable Auto Transport Services"
        />
        <link rel="canonical" href="https://rapidautoshipping.com/about-us" />
        {/* Preload critical above-the-fold image */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_auto/v1742811078/aboutus/Our-Objective.webp"
          as="image"
        />
        {/* Structured Data: BreadcrumbList + Organization */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': 'https://www.rapidautoshipping.com',
                    name: 'Home',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@id': 'https://www.rapidautoshipping.com/about-us',
                    name: 'About Us',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rapid Auto Shipping',
              url: 'https://www.rapidautoshipping.com',
              description:
                'Rapid Auto Shipping provides reliable and affordable vehicle transport services nationwide.',
              logo: 'https://res.cloudinary.com/dz2zovmf1/image/upload/v1742811078/aboutus/logo.webp',
            },
          ])}
        </script>
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 md:px-10">
        {/* About Our Company Section */}
        <div className="w-full shadow-3d py-10 my-10 px-10">
          <h1 className="text-3xl font-semibold text-rapidcolor text-center">
            About Our Company
          </h1>
          <div className="w-full md:w-[30%] h-[3px] bg-rapidcolor mx-auto my-3"></div>
          <div className="text-lg text-gray-800 text-justify">
            <span className="font-bold">Rapid Auto Shipping</span> is one of the
            best auto shipping companies in the United States. Rapid's founders
            are seasoned, successful businessmen with a goal to revolutionize the
            auto shipping sector. We learned how unreliable the car shipping
            industry can be during the course of multiple cross-country moves.
            From ardent vehicle collectors to everyday drivers across the lower 48
            states, we are the only auto shipping company customers choose to
            partner with. We've earned a reputation for reliability, consistency,
            and accessibility, which is exactly what consumers want when they need
            to ship a vehicle. We saw the worst of what's out there, from dented
            bumpers to no-show drivers, and we felt we could do better.
            <br />
            Much, much better. One way we're changing the vehicle shipping market
            and enhancing the customer experience is through our Clean Car
            Guarantee, a new service we've launched. We made the decision to apply
            our experience in corporate leadership, technology, and customer
            service to the weary, unreliable auto transportation industry. What's
            the end result? Our main principles are excellent service and safety.
            Our patented ranking and scheduling algorithms ensure that your
            vehicle is assigned to a driver with a perfect service and safety
            rating. We monitor carrier performance to ensure that our customers'
            automobiles are handled by only the most qualified specialists. We're
            here for you 24 hours a day, 7 days a week, providing real-time
            information on your vehicle's development. Rapid Auto Shipping is
            dedicated to providing the transparent and stress-free auto transport
            experience that every car shipping customer deserves. We're the auto
            transportation business you can rely on through all of life's changes.
          </div>
        </div>

        {/* Objectives and Goals Section */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-6 p-6">
          {/* Card 1: Our Objective */}
          <div className="w-full md:w-[40%] p-6 border-2 border-rapidcolor rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_auto/v1742811078/aboutus/Our-Objective.webp"
                alt="Our Objective – Delivering Safe, Timely, and Affordable Auto Shipping Nationwide"
                width={80}
                height={80}
                className="w-20 h-20"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-rapidcolor">Our Objective</h2>
            <p className="mt-2 text-gray-700">
              To genuinely be where Auto Transport Meets Technology when it comes
              to Rapid Auto Shipping. We want to make shipping a vehicle such a
              proven process that it's a no-brainer to use our firm for all of
              your auto transport needs.
            </p>
          </div>

          {/* Card 2: Our Goal */}
          <div className="w-full md:w-[40%] p-6 border-2 border-rapidcolor rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_auto/v1742811078/aboutus/Our-Goal.webp"
                alt="Our Goal – Providing Hassle-Free and Customer-Focused Vehicle Transport Solutions"
                width={80}
                height={80}
                className="w-20 h-20"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-rapidcolor">Our Goal</h2>
            <p className="mt-2 text-gray-700">
              From the top-down, every Rapid Auto Shipping employee is dedicated
              to ensuring that our customers have the greatest possible experience
              from start to end. When it comes to exporting vehicles, there are a
              lot of moving factors...
            </p>
          </div>
        </div>

        {/* Moving Ahead Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 py-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_300,h_200,q_auto,f_auto/v1742813396/aboutus/about-car.webp"
              alt="About Rapid Auto Shipping – Trusted Experts in Nationwide Vehicle Transport"
              width={300}
              height={200}
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
              Moving Ahead
            </h2>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              It's critical for our company's success that we, as leaders, recall
              how we got here. We always do the right thing, and we consider our
              integrity to be the most important aspect of our company. We are a
              forward-thinking group of people who aren't hesitant to take risks
              in order to improve our processes, even if it means going backwards
              first. We are certain that we have the most advanced technology
              available, allowing experienced shippers to actually{' '}
              <strong>Do It Yourself</strong>, saving you money while ensuring
              that your transfer is backed by the{' '}
              <strong>Rapid Auto Shipping</strong> team's full assistance.
            </p>
          </div>
        </div>

        {/* Calculating Price and Expert Representative Section */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-6 p-6">
          {/* Card 1: Calculating Price */}
          <div className="w-full md:w-[40%] p-6 border-2 border-rapidcolor rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_auto/v1742813160/aboutus/our-calculator.webp"
                alt="Auto Shipping Cost Calculator – Instantly Estimate Vehicle Transport Rates"
                width={80}
                height={80}
                className="w-20 h-20"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-rapidcolor">Calculating Price</h2>
            <p className="mt-2 text-gray-700">
              Rapid Auto Shipping has set a new bar for auto transport firms. We
              were the first to provide a quick vehicle shipping quote to web
              visitors. Rather than contacting around for various quotations, you
              may use our calculator to acquire multiple quotes in seconds. We
              were the first to offer a quick online auto transport quote. Our car
              shipping calculator remains the most advanced and accurate in the
              industry. It's also one of the most straightforward and
              confidential, as we don't require any personal information to
              provide you with a quote.
            </p>
          </div>

          {/* Card 2: Our Expert Representative */}
          <div className="w-full md:w-[40%] p-6 border-2 border-rapidcolor rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_80,h_80,q_auto,f_auto/v1742813160/aboutus/our-expert.webp"
                alt="Our Auto Transport Experts – Professional Support for Seamless Vehicle Shipping"
                width={80}
                height={80}
                className="w-20 h-20"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-semibold text-rapidcolor">
              Our Expert Representative
            </h2>
            <p className="mt-2 text-gray-700">
              We have a skilled customer service team ready to answer your
              concerns and assist you with the logistics of your vehicle
              relocation. As one of the best auto transport companies, we handle
              minor difficulties before they become major problems, and we have a
              solid reputation in the auto shipping sector. People keep working
              with us because we're keen to remove the ambiguity, complexity, and
              hassle from the car shipping process. We believe it should always
              be simple and accessible. That's why, when it comes to customer
              service, we routinely rank among the top vehicle transport
              businesses. Our team members will help you with every issue.
            </p>
          </div>
        </div>

        {/* Our Quality Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 py-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/w_300,h_200,q_auto,f_auto/v1742811911/aboutus/Our-Quality.webp"
              alt="Our Quality Commitment – Reliable and Professional Auto Transport Services"
              width={300}
              height={200}
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
              Our Quality
            </h2>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              We are one of the best automobile transportation businesses for a
              variety of reasons. Every Rapid Auto Shipping Carrier, for example,
              has been thoroughly vetted, has a spotless driving record, and is
              in good standing with the Federal Motor Carrier Safety
              Administration (FMCSA) and the Department of Transportation (DOT).
              As a result, we have one of the best safety records in the
              transportation sector. Finally, we've learned which routes are the
              most efficient and cost-effective over time, and as a result, we
              can offer you the best possible price for the whole transportation
              of any vehicle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VehicleShippingComponent;
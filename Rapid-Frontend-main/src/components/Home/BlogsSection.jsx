import React from "react";

const blogs = [
  {
    title: "Car Shipping Insurance : Explained",
    description:
      "Car shipping insurance is a coverage that safeguards your car against damages that could take place during transportation.",
    image:
      "https://dashboard.rapidautoshipping.com/assets/images/img_gallery/958992776.webp",
    alt: "Car being loaded onto a transport truck with insurance coverage",
    link: "https://rapidautoshipping.com/auto-transport-insurance",
  },

  {
    title: "Why an Auto Transport Broker is Your Best Choice in 2025",
    description:
      "As we approach 2025, the auto shipping sector is being revolutionized by technological innovation.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1747222468/blogs/Why-an-Auto-Transport-Broker-is-Your-Best-Choice.webp",
    alt: "Auto transport broker coordinating vehicle shipping with technology",
    link: "https://rapidautoshipping.com/why-an-auto-transport-broker-is-your-best-choice",
  },
  {
    title: "Enclosed vs Open Car Shipping",
    description:
      "Investigating both open and enclosed automobile transport alternatives might assist you in selecting the best one for your requirements.",
    image:
      "https://res.cloudinary.com/dz2zovmf1/image/upload/v1770986526/1_yocl2b.jpg",
    alt: "Enclosed vs Open Car Shipping",
    link: "https://rapidautoshipping.com/blogs/enclosed-vs-open-car-shipping",
  },
];

const BlogCard = ({ title, description, image, link, alt }) => {
  return (
    <a
      href={link}
      className="block w-full py-10 my-10 sm:w-[350px] md:w-[400px] lg:w-[420px] bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg group"
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-[200px] object-cover"
        loading="lazy"
      />
      <div className="p-5 text-left">
        <div className="inline-block">
          <div className="text-xl font-bold text-gray-800">{title}</div>
          <div className="w-0 h-[4px] bg-rapidcolor transition-all duration-300 group-hover:w-full mt-1"></div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </a>
  );
};

const BlogList = () => {
  return (
    <div className="bg-gray-50 py-12 text-center">
      <h2 className="text-4xl font-bold mb-10">
        <span>Some Of Our </span>
        <span className="text-rapidcolor text-5xl">Recent Blogs</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

import React from "react";
import { FaStar } from "react-icons/fa";

const VideoCard = ({ title, description, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[100%] p-1 md:p-4">
      <div>{children}</div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex mt-2" aria-label="Rated 5 out of 5 stars">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" size={28} />
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="container mx-auto p-2">
      <h2 className="text-5xl font-bold mb-4 text-center text-rapidcolor">
        Video Testimonials
      </h2>

      <div className="flex flex-col lg:flex-row gap-2 justify-center">

        {/* Card 1 */}
        <VideoCard
          title="Kenneth Douglas"
          description="Mr. Douglas's Reaction After Shipping His Mercury Grand Marquis."
        >
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube-nocookie.com/embed/Lb4T7WlLy7Y"
            title="Kenneth Douglas Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoCard>

        {/* Card 2 */}
        <VideoCard
          title="Carisa Cannon"
          description="Epic Car Shipping! College Student Receives Honda Pilot 🚛"
        >
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube-nocookie.com/embed/-Jo89zfbrlw"
            title="Carisa Cannon Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoCard>

        {/* Card 3 */}
        <VideoCard
          title="Bonnie Hutchison"
          description="Mr. Hutchison's Surprising Car Shipping Story"
        >
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube-nocookie.com/embed/X1saqrqUwoA"
            title="Bonnie Hutchison Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoCard>

      </div>
    </div>
  );
};

export default VideoSection;

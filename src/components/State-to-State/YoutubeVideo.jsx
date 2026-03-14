import React, { useEffect } from "react";

function YoutubeVideo() {
  useEffect(() => {
    const placeholder = document.querySelector(".youtube-placeholder");
    const handleClick = () => {
      const iframe = document.createElement("iframe");
      iframe.src = placeholder.dataset.ytUrl;
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      iframe.className = "mx-auto w-full h-[250px] lg:h-[500px]";
      placeholder.innerHTML = "";
      placeholder.appendChild(iframe);
    };
    placeholder.addEventListener("click", handleClick);
    return () => {
      placeholder.removeEventListener("click", handleClick);
    };
  }, []);
  

  return (
    <div className="container mx-auto mt-20 mb-20">
      <div
        className="youtube-placeholder relative mx-auto w-full h-[250px] lg:h-[500px] cursor-pointer"
        data-yt-url="https://www.youtube.com/embed/yBjsx9Di5Io?si=pjQZxwGHG78tcgc1"
      >
        <img
          src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746175635/Reviews/Your-Trusted-Auto-Transporter.webp"
          alt="Your Trusted Auto Transporter – Customer Testimonial Thumbnail for Rapid Auto Shipping"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
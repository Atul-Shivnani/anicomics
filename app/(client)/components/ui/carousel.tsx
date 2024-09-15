"use client";

import { useState, useEffect, useRef } from "react";

export default function Carousel2() {
  const videoRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (scroll < 10) {
        videoRef.current.play(); 
      } else {
        videoRef.current.pause(); 
      }
    }
  }, [scroll]);

  const images = [
    { type: "video", src: "s3://anicomics/public/0.mp4https://anicomics.s3.eu-north-1.amazonaws.com/public/0.mp4" },
    { type: "img", src: "/1.png" },
    { type: "img", src: "/2.png" },
    { type: "img", src: "/3.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 40000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative m-0 overflow-hidden w-screen h-screen">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-none snap-mandatory snap-x scroll-smooth"
      >
        {images.map((media, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 snap-center"
          >
            {media.type === "img" ? (
              <img
                className="w-screen h-screen object-cover"
                src={media.src}
                alt={`slide-${index}`}
              />
            ) : (
              <video
                ref={videoRef}
                className="w-screen h-screen object-cover"
                autoPlay
                loop
                muted
              >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-50 text-black opacity-20 p-2 rounded-full hover:text-orange-400 hover:opacity-100"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-50 opacity-20 text-black p-2 rounded-full hover:text-orange-400 hover:opacity-100"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
}

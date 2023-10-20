import { useEffect, useRef } from "react";
import video1 from "../assets/videos/production.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.log(error);
      });
    }
  }, []);

  return (
    <div className="relative h-[75vh] flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div
        className="absolute z-10 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 123, 255, 0.8)",
          mixBlendMode: "multiply",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl md:text-5xl text-white font-lato text-center tracking-widest leading-snug">
          Precision Crafted,
          <br />
          Performance Driven.
        </h1>
        <Link
          to="/services"
          className="py-2.5 px-4 border-2 border-white uppercase text-white font-bold rounded-md text-md hover:text-primary hover:bg-white transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;

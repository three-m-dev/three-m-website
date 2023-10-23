import { useState } from "react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  message: string;
  ctaLink: string;
  ctaText: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      image: "/path/to/image1.jpg",
      message: "Your First Message Here",
      ctaLink: "/first-link",
      ctaText: "Learn More",
    },
    {
      image: "/path/to/image2.jpg",
      message: "Your Second Message Here",
      ctaLink: "/second-link",
      ctaText: "Learn More",
    },
    {
      image: "/path/to/image2.jpg",
      message: "Your Third Message Here",
      ctaLink: "/third-link",
      ctaText: "Learn More",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative h-[65vh] flex items-center justify-center">
      <img
        src={slides[currentSlide].image}
        alt="Slide Image"
        className="absolute z-0 w-full h-full object-cover"
      />
      <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-20 flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-6xl text-white font-semibold text-center">
          {slides[currentSlide].message}
        </h1>
        <Link
          to={slides[currentSlide].ctaLink}
          className="py-2.5 px-4 border-2 border-white uppercase text-white font-bold rounded-md text-md hover:text-black hover:bg-white"
        >
          {slides[currentSlide].ctaText}
        </Link>
      </div>

      <button
        className="absolute left-4 top-1/2 z-30 p-2.5 rounded-md bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 z-30 p-2.5 rounded-md bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 border rounded-full ${
              currentSlide === index
                ? "bg-primary"
                : "bg-transparent hover:bg-white transition-all duration-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

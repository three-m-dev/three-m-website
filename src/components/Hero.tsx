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
    <div className="relative flex h-[65vh] items-center justify-center">
      <img
        src={slides[currentSlide].image}
        alt="Slide Image"
        className="absolute z-0 h-full w-full object-cover"
      />
      <div className="absolute z-10 h-full w-full bg-black opacity-60"></div>

      <div className="relative z-20 flex flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-semibold text-white md:text-6xl">
          {slides[currentSlide].message}
        </h1>
        <Link
          to={slides[currentSlide].ctaLink}
          className="text-md rounded-md border-2 border-white px-4 py-2 font-bold uppercase text-white hover:bg-white hover:text-black"
        >
          {slides[currentSlide].ctaText}
        </Link>
      </div>

      <button
        className="absolute left-4 top-1/2 z-30 rounded-md bg-white p-2.5 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
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
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 z-30 rounded-md bg-white p-2.5 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 transform gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full border ${
              currentSlide === index
                ? "bg-primary"
                : "bg-transparent transition-all duration-300 hover:bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

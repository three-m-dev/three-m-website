import { useState } from "react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  alt: string;
  message: string;
  ctaLink: string;
  ctaText: string;
  align: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      image:
        "https://st3.depositphotos.com/1594308/35318/i/450/depositphotos_353185344-stock-photo-content-young-multi-ethnic-coworkers.jpg",
      alt: "Slide Image",
      message: "Your First Message Here",
      ctaLink: "/first-link",
      ctaText: "Learn More",
      align: "left",
    },
    {
      image:
        "https://three-m.com/wp-content/uploads/2014/09/MikeZeiss-960x360.jpg",
      alt: "Slide Image",
      message: "Your Second Message Here",
      ctaLink: "/second-link",
      ctaText: "Learn More",
      align: "right",
    },
    {
      image:
        "https://static6.depositphotos.com/1003697/539/i/450/depositphotos_5392705-stock-photo-industry-workers-in-factory.jpg",
      alt: "Slide Image",
      message: "Your Third Message Here",
      ctaLink: "/third-link",
      ctaText: "Learn More",
      align: "left",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative flex h-[65vh] items-center justify-center">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].alt}
        className="absolute z-0 h-full w-full object-cover"
      />
      <div className="absolute z-10 h-full w-full bg-black opacity-60"></div>

      <div className="relative z-20 flex flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-semibold uppercase text-white">
          {slides[currentSlide].message}
        </h1>
        <Link
          to={slides[currentSlide].ctaLink}
          className="text-md border-2 border-white px-4 py-2 font-bold uppercase text-white transition-all duration-300 hover:border-primary hover:bg-primary tracking-wider"
        >
          {slides[currentSlide].ctaText}
        </Link>
      </div>

      <button
        className="absolute left-0 top-1/2 z-30 bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
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
        className="absolute right-0 top-1/2 z-30 bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
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
            className={`h-3 w-3 rounded-full border transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary"
                : "bg-transparent hover:bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

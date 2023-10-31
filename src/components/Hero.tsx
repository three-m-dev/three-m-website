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
        "https://as1.ftcdn.net/v2/jpg/03/26/28/70/1000_F_326287003_HLZJZhT7l4v76OaqfMd1rjQDHldb0Wm8.jpg",
      alt: "Slide Image",
      message: "Innovation in Manufacturing",
      ctaLink: "/first-link",
      ctaText: "Discover More",
      align: "left",
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/02/76/46/27/1000_F_276462792_C2d0t1ajrCdoBLG8jqXmqS9kqNqrbEbe.jpg",
      alt: "Slide Image",
      message: "Precision Engineered Solutions",
      ctaLink: "/second-link",
      ctaText: "View Products",
      align: "right",
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/06/26/65/95/1000_F_626659516_xvAkYPVrVfBD4YeMEQvZIt1LBMizpy77.jpg",
      alt: "Slide Image",
      message: "Quality Assurance in Every Build",
      ctaLink: "/third-link",
      ctaText: "Our Process",
      align: "left",
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/06/31/61/85/1000_F_631618521_zvoEsu1dKchziL8URpbab4jJPFQ22e4v.jpg",
      alt: "Slide Image",
      message: "Dedicated to Your Success",
      ctaLink: "/fourth-link",
      ctaText: "Contact Today",
      align: "right",
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

      <div className="relative z-20 mx-auto flex w-full max-w-screen-xl justify-center px-4 lg:justify-start">
        <div
          className={`flex flex-col items-center gap-8 lg:w-1/2 ${
            slides[currentSlide].align === "right" && "lg:ml-auto"
          } ${slides[currentSlide].align === "center" && "lg:mx-auto"}`}
        >
          <h1 className="text-center text-4xl font-semibold uppercase text-white">
            {slides[currentSlide].message}
          </h1>
          <Link
            to={slides[currentSlide].ctaLink}
            className="text-md border-2 border-white px-4 py-2 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-primary hover:bg-primary"
          >
            {slides[currentSlide].ctaText}
          </Link>
        </div>
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
            className={`h-3 w-3 border border-white transition-all duration-300 ${
              currentSlide === index
                ? "bg-white"
                : "bg-transparent hover:border-primary hover:bg-primary"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

import { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const items = [
    {
      title: "Innovation in Manufacturing",
      cta: "Learn More",
      url: "/link",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/26/28/70/1000_F_326287003_HLZJZhT7l4v76OaqfMd1rjQDHldb0Wm8.jpg",
      alt: "",
      align: "left",
    },
    {
      title: "Seamless Production Flow",
      cta: "Learn More",
      url: "/link",
      image:
        "https://as2.ftcdn.net/v2/jpg/02/76/46/27/1000_F_276462792_C2d0t1ajrCdoBLG8jqXmqS9kqNqrbEbe.jpg",
      alt: "",
      align: "right",
    },
    {
      title: "Quality Assurance in Every Build",
      cta: "Learn More",
      url: "/link",
      image:
        "https://as2.ftcdn.net/v2/jpg/06/26/65/95/1000_F_626659516_xvAkYPVrVfBD4YeMEQvZIt1LBMizpy77.jpg",
      alt: "",
      align: "left",
    },
  ];

  const handlePrevClick = () => {
    if (itemIndex === 0) {
      setItemIndex(items.length - 1);
    } else {
      setItemIndex(itemIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (itemIndex === items.length - 1) {
      setItemIndex(0);
    } else {
      setItemIndex(itemIndex + 1);
    }
  };

  return (
    <div className="relative flex h-[65vh] items-center justify-center">
      <img
        src={items[itemIndex].image}
        alt={items[itemIndex].alt}
        className="absolute z-0 h-full w-full object-cover"
      />
      <div className="absolute z-10 h-full w-full bg-black opacity-60"></div>

      <div className="relative z-20 mx-auto flex w-full max-w-screen-xl justify-center lg:justify-start">
        <div
          className={`flex flex-col items-center gap-8 sm:w-2/5 ${
            items[itemIndex].align === "right" && "lg:ml-auto"
          } ${items[itemIndex].align === "center" && "lg:mx-auto"}`}
        >
          <h1 className="font-bebas text-center text-5xl font-bold uppercase tracking-wider text-white">
            {items[itemIndex].title}
          </h1>
          <Link
            to={items[itemIndex].url}
            className="text-md rounded border-2 border-white px-4 py-2 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-primary hover:bg-primary"
          >
            {items[itemIndex].cta}
          </Link>
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
        onClick={handlePrevClick}
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
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
        onClick={handleNextClick}
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
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded border border-white transition-all duration-300 ${
              itemIndex === index
                ? "bg-white"
                : "bg-transparent hover:border-primary hover:bg-primary"
            }`}
            onClick={() => setItemIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import { Link } from "react-router-dom";
import BuildingImage from "../assets/images/three-m-building.jpg";
import jose from "../assets/images/jose.jpg";

const ImageMenu = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Link
        to="/services"
        className="relative h-[100vw] w-screen md:h-[33.33vw] lg:w-1/3"
      >
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/26/65/92/1000_F_626659219_5AQy73NrVlPThEG1sdCfYNgiU9vB785Z.jpg"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50 transition-all duration-300"></div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bebas text-5xl font-bold uppercase tracking-wider text-white">
          Services
        </h1>
      </Link>
      <Link
        to="/careers"
        className="relative h-[100vw] w-screen md:h-[33.33vw] lg:w-1/3"
      >
        <img
          src={jose}
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bebas text-5xl font-bold uppercase tracking-wider text-white">
          Careers
        </h1>
      </Link>
      <Link
        to="/contact"
        className="relative h-[100vw] w-screen md:h-[33.33vw] lg:w-1/3"
      >
        <img
          src={BuildingImage}
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bebas text-5xl font-bold uppercase tracking-wider text-white">
          Contact
        </h1>
      </Link>
    </div>
  );
};

export default ImageMenu;

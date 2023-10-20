import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const servicesMatch = useMatch("/services");
  const careersMatch = useMatch("/careers");
  const bulletinMatch = useMatch("/bulletin");

  const activeLink =
    "h-[2px] w-full transform scale-x-100 rounded-lg bg-primary transition-all duration-300 ease-in-out]";
  const inactiveLink =
    "h-[2px] w-full transform scale-x-0 rounded-lg bg-primary transition-all duration-300 ease-in-out group-hover:scale-x-100";

  const toggleMobileNavbar = () => {};

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Three M Tool & Machine Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Three M
          </span>
        </Link>
        <div className="flex md:order-2 gap-2">
          <Button type="link" text="Contact Us" to="/contact" />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2.5 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-12 md:mt-0 md:border-0 md:bg-white uppercase font-bold">
            <li className="group py-2">
              <Link to="/">
                Home
                <div className={homeMatch ? activeLink : inactiveLink}></div>
              </Link>
            </li>
            <li className="group py-2">
              <Link to="/about">
                About
                <div className={aboutMatch ? activeLink : inactiveLink}></div>
              </Link>
            </li>
            <li className="group py-2">
              <Link to="/services">
                Services
                <div
                  className={servicesMatch ? activeLink : inactiveLink}
                ></div>
              </Link>
            </li>
            <li className="group py-2">
              <Link to="/careers">
                Careers
                <div className={careersMatch ? activeLink : inactiveLink}></div>
              </Link>
            </li>
            <li className="group py-2">
              <Link to="/bulletin">
                Bulletin
                <div
                  className={bulletinMatch ? activeLink : inactiveLink}
                ></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

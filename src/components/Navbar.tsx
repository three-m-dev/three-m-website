import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Button from "./Button";
import CopyToClipboard from "../utils/CopyToClipboard";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const servicesMatch = useMatch("/services");
  const careersMatch = useMatch("/careers/*");
  const bulletinMatch = useMatch("/bulletin/*");

  const activeLink =
    "h-[2px] w-full transform scale-x-100 rounded-lg bg-primary transition-all duration-300 ease-in-out]";
  const inactiveLink =
    "h-[2px] w-full transform scale-x-0 rounded-lg bg-primary transition-all duration-300 ease-in-out group-hover:scale-x-100";

  const toggleMobileNavbar = () => {
    setMobileNavOpen(!isMobileNavOpen);
    console.log(isMobileNavOpen);
  };

  return (
    <>
      <div className="bg-primary text-white z-60">
        <div className="max-w-screen-xl flex mx-auto justify-between py-2.5 px-4">
          <a href="mailto:sales@three-m.com" className="flex gap-2">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            sales@three-m.com
          </a>
          <a href="tel:2483631555" className="flex gap-2">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +1 248 363 1555
          </a>
        </div>
      </div>
      <nav className="bg-white sticky top-0 z-50 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Three M Tool & Machine Logo"
          /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Three M
            </span>
          </Link>
          <div className="flex md:order-2 gap-2">
            <Button type="link" text="Contact Us" to="/contact-us" />
            <button
              type="button"
              onClick={toggleMobileNavbar}
              className="inline-flex items-center p-2.5 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none border-2 border-gray-200"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-12 md:mt-0 md:border-0 md:bg-white uppercase">
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
                  <div
                    className={careersMatch ? activeLink : inactiveLink}
                  ></div>
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
    </>
  );
};

export default Navbar;

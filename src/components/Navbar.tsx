import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import LogoText from "../assets/images/three-m-logo-with-text.png";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const servicesMatch = useMatch("/services");
  const careersMatch = useMatch("/careers/*");
  const bulletinMatch = useMatch("/bulletin/*");

  const activeLink =
    "h-[2px] w-full transform scale-x-100 rounded-md bg-primary transition-all duration-300 ease-in-out";
  const inactiveLink =
    "h-[2px] w-full transform scale-x-0 rounded-md bg-primary transition-all duration-300 ease-in-out group-hover:scale-x-100";

  const toggleMobileNavbar = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = !isMobileNavOpen ? "hidden" : "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="z-60 bg-primary text-white">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 py-2.5">
          <a href="mailto:sales@three-m.com" className="flex gap-2">
            sales@three-m.com
          </a>
          <a href="tel:2483631555" className="flex gap-2">
            +1 248 363 1555
          </a>
        </div>
      </div>
      <nav className="sticky left-0 top-0 z-50 bg-white shadow">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <img
              src={LogoText}
              className="h-8"
              alt="Three M Tool & Machine Logo"
            />
          </Link>
          <div className="flex gap-2 md:order-2">
            <div className="hidden lg:flex">
              <Button type="link" text="Contact" to="/contact" />
            </div>
            <button
              type="button"
              onClick={toggleMobileNavbar}
              className="inline-flex items-center justify-center border-2 rounded border-primary p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:w-auto lg:flex">
            <ul className="mt-4 flex flex-col gap-12 rounded-lg border border-gray-100 bg-gray-50 p-4 uppercase md:mt-0 md:flex-row md:border-0 md:bg-white md:p-0">
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
      {isMobileNavOpen && <MobileMenu toggleMenu={toggleMobileNavbar} />}
    </>
  );
};

export default Navbar;

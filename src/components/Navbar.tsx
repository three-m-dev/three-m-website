import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import LogoFull from "../assets/images/logo horizontal.png";
// import LogoIcon from "../assets/images/logo icon.png";
import Button from "./Button";

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
    console.log(isMobileNavOpen);
  };

  return (
    <>
      <div className="z-60 bg-primary text-white">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4 py-2.5">
          <a href="mailto:sales@three-m.com" className="flex gap-2">
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
              className="h-6 w-6"
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
      <nav className="sticky left-0 top-0 z-50 bg-white shadow">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <img
              src={LogoFull}
              className="h-10"
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
              className="inline-flex items-center justify-center border-2 border-primary p-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:w-auto lg:flex"
            id="navbar-sticky"
          >
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
    </>
  );
};

export default Navbar;

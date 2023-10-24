import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Company
            </h2>
            <ul className="text-gray-500">
              <li className="mb-4">
                <Link to="/about" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/bulletin" className="hover:underline">
                  Bulletin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Help
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/customer-portal" className="hover:underline">
                  Customer Portal
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Three M Tool & Machine
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <Link
              className="text-gray-400 hover:text-gray-900"
              to="https://www.facebook.com/threemtoolandmachineinc"
              target="blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-900"
              to="https://www.linkedin.com/company/three-m-tool-&-machine-inc"
              target="blank"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-900"
              to="https://www.indeed.com/cmp/Three-M-Tool-&-Machine"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                height="18"
              >
                <path
                  d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Indeed</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

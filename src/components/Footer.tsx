import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
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
              to="https://www.facebook.com/threemtoolandmachineinc/"
              target="blank"
              className="text-gray-400 hover:text-gray-900"
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
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import ThreeM from "../assets/images/three-m-logo.png";
import UltraGrip from "../assets/images/ultra-grip-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 md:py-16 lg:space-y-16">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <Link to="/" className="flex items-center">
              <img
                src={ThreeM}
                className="h-8"
                alt="Three M Tool & Machine Logo"
              />
            </Link>
            <Link
              to="https://www.ultra-grip.com/"
              target="blank"
              className="flex items-center"
            >
              <img
                src={UltraGrip}
                className="h-10"
                alt="Three M Tool & Machine Logo"
              />
            </Link>
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <Link
                to="https://www.facebook.com/threemtoolandmachineinc"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6 3.43332H9.16667V0.783318C8.40813 0.70444 7.64596 0.665497 6.88333 0.666651C4.61667 0.666651 3.06667 2.04998 3.06667 4.58332V6.76665H0.508333V9.73332H3.06667V17.3333H6.13333V9.73332H8.68333L9.06667 6.76665H6.13333V4.87498C6.13333 3.99998 6.36667 3.43332 7.6 3.43332Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/company/three-m-tool-&-machine-inc"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">Linkedin</span>

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
              </Link>
            </li>

            <li>
              <Link
                to="https://www.indeed.com/cmp/Three-M-Tool-&-Machine"
                rel="noreferrer"
                target="_blank"
                className="text-gray-200 transition hover:opacity-75"
              >
                <span className="sr-only">Indeed</span>

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
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t-2 border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-200">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  to="/services/inspection"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Inspection
                </Link>
              </li>

              <li>
                <Link
                  to="/services/machining"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Machining Centers
                </Link>
              </li>

              <li>
                <Link
                  to="/services/horizontal-milling"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Horizontal Milling
                </Link>
              </li>

              <li>
                <Link
                  to="/services/vertical-milling"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Vertical Milling
                </Link>
              </li>

              <li>
                <Link
                  to="/services/all"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-200">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/bulletin"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Bulletin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-200">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-200">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  to="/iso-9001-2015-certificate-of-registration.pdf"
                  target="blank"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  ISO 9001:2015
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-200 transition hover:opacity-75"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-200">
          &copy; 2023. Three M Tool & Machine Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

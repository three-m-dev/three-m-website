import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string;
  type: string;
};

const BulletinContent = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const copyLink = () => {};

  const parseContent = () => {};

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="-mx-4 mb-12 flex flex-wrap lg:items-center">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2 2xl:w-5/12">
            <div className="mx-auto max-w-max overflow-hidden rounded-lg md:ml-0">
              <img
                src="https://images.unsplash.com/photo-1624841970647-87dce8628d72?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y25jfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <p className="mb-2 flex items-center gap-2 text-gray-500">
              <span className="rounded-md bg-gray-200 px-2 py-1 text-xs uppercase tracking-wider text-gray-500">
                {props.type}
              </span>
              <span className="text-sm uppercase tracking-wider">
                {props.date}
              </span>
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 md:text-4xl lg:text-5xl">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-8 w-full px-4 md:w-5/12 lg:w-4/12 xl:w-3/12">
            <ul className="mb-8 border-b border-gray-100 pb-6">
              <li className="mb-2">
                <a
                  className="inline-block py-2 font-semibold text-gray-400 hover:text-primary"
                  href="#"
                >
                  Introduction
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="inline-block py-2 font-semibold text-gray-400 hover:text-primary"
                  href="#"
                >
                  Header 1
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="inline-block py-2 font-semibold text-gray-400 hover:text-primary"
                  href="#"
                >
                  Header 1
                </a>
              </li>
              <li>
                <a
                  className="inline-block py-3 font-semibold text-gray-400 hover:text-primary"
                  href="#summary"
                >
                  Summary
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <button
                onClick={copyLink}
                className="mr-4 inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-gray-300 shadow-md transition duration-200 hover:border-gray-300 hover:text-primary"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13.8333H5C4.33696 13.8333 3.70108 13.5699 3.23224 13.1011C2.76339 12.6323 2.5 11.9964 2.5 11.3333V4.66667C2.5 4.44565 2.41221 4.23369 2.25592 4.07741C2.09964 3.92113 1.88768 3.83333 1.66667 3.83333C1.44566 3.83333 1.23369 3.92113 1.07741 4.07741C0.921133 4.23369 0.833336 4.44565 0.833336 4.66667V11.3333C0.833336 12.4384 1.27232 13.4982 2.05372 14.2796C2.44063 14.6665 2.89996 14.9734 3.40549 15.1828C3.91101 15.3922 4.45283 15.5 5 15.5H15C15.221 15.5 15.433 15.4122 15.5893 15.2559C15.7455 15.0996 15.8333 14.8877 15.8333 14.6667C15.8333 14.4457 15.7455 14.2337 15.5893 14.0774C15.433 13.9211 15.221 13.8333 15 13.8333ZM19.1667 6.28333C19.158 6.20678 19.1412 6.13136 19.1167 6.05833V5.98333C19.0766 5.89765 19.0232 5.81889 18.9583 5.75V5.75L13.9583 0.75C13.8894 0.68518 13.8107 0.631734 13.725 0.591667H13.65L13.3833 0.5H6.66667C6.00363 0.5 5.36774 0.763392 4.8989 1.23223C4.43006 1.70107 4.16667 2.33696 4.16667 3V9.66667C4.16667 10.3297 4.43006 10.9656 4.8989 11.4344C5.36774 11.9033 6.00363 12.1667 6.66667 12.1667H16.6667C17.3297 12.1667 17.9656 11.9033 18.4344 11.4344C18.9033 10.9656 19.1667 10.3297 19.1667 9.66667V6.33333C19.1667 6.33333 19.1667 6.33333 19.1667 6.28333ZM14.1667 3.34167L16.325 5.5H15C14.779 5.5 14.567 5.4122 14.4107 5.25592C14.2545 5.09964 14.1667 4.88768 14.1667 4.66667V3.34167ZM17.5 9.66667C17.5 9.88768 17.4122 10.0996 17.2559 10.2559C17.0996 10.4122 16.8877 10.5 16.6667 10.5H6.66667C6.44565 10.5 6.23369 10.4122 6.07741 10.2559C5.92113 10.0996 5.83334 9.88768 5.83334 9.66667V3C5.83334 2.77899 5.92113 2.56702 6.07741 2.41074C6.23369 2.25446 6.44565 2.16667 6.66667 2.16667H12.5V4.66667C12.5 5.32971 12.7634 5.96559 13.2322 6.43443C13.7011 6.90327 14.337 7.16667 15 7.16667H17.5V9.66667Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Copy Link
                </span>
              </button>
              <Link
                className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-md transition duration-200 hover:border-gray-300 hover:text-primary"
                to="https://www.facebook.com/threemtoolandmachineinc"
                target="blank"
              >
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
              <Link
                className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-md transition duration-200 hover:border-gray-300 hover:text-primary"
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
              </Link>
              <Link
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-500 shadow-md transition duration-200 hover:border-gray-300 hover:text-primary"
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
              </Link>
            </div>
          </div>
          <div className="w-full px-4 md:flex-1">
            <p className="mb-8 border-b border-gray-100 pb-10 text-lg font-medium text-gray-500 md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              Header 1
            </h3>
            <p className="mb-4 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <div className="mb-6 border-l-2 border-primary p-6">
              <p className="mb-4 text-xl font-medium leading-tight text-gray-800 md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                purus.
              </p>
              <span className="text-base font-medium text-gray-400 md:text-lg">
                — John Doe, CEO &amp; Founder
              </span>
            </div>
            <p className="mb-6 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <div className="mb-4 max-w-max overflow-hidden rounded-md">
              <img
                src="flex-ui-assets/images/blog-content/content-photo2.jpg"
                alt=""
              />
            </div>
            <p className="mb-8 text-base font-medium text-gray-400 md:text-lg">
              <span>Non massa enim vitae duis mattis. Vel in</span>
              <a className="underline hover:text-gray-600" href="#">
                ultricies
              </a>
              <span>vel fringilla.</span>
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              Header 1
            </h3>
            <p className="mb-14 text-base text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
            <p id="summary" className="mb-4 text-base text-gray-500 md:text-lg">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ol className="list-inside list-decimal text-base text-gray-500 md:px-5 md:text-lg">
              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li>
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li>
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinContent;

import { Link } from "react-router-dom";

const ServicePreview = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-16">
        <div className="mx-auto mb-8 text-center md:mb-8 md:max-w-5xl">
          <span className="mb-4 inline-block bg-blue-200 px-2 py-1 text-sm uppercase leading-5 tracking-wider text-primary shadow-sm">
            Precision & Expertise
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
            Comprehensive Services at Three M
          </h2>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            From conception to final product, discover a range of services
            designed to meet every manufacturing demand. Experience Three M's
            commitment to excellence.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">Inspection</h2>

            <p className="mt-1 text-sm text-gray-400">
            Quality assurance is our promise. Every product undergoes a
              rigorous inspection for unmatched reliability.
            </p>
          </a>

          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">
              Machining Centers
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Experience the precision of our lathing services, where we sculpt
              materials to your exact needs.
            </p>
          </a>

          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">
              Horizontal Turning
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Achieve the perfect finish and exact dimensions with our dedicated
              grinding services.
            </p>
          </a>

          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">
              Vertical Turning
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Our skilled artisans provide detailed benchwork, ensuring every
              component meets our high standards.
            </p>
          </a>

          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">Grinding</h2>

            <p className="mt-1 text-sm text-gray-400">
            Achieve the perfect finish and exact dimensions with our dedicated
              grinding services.
            </p>
          </a>

          <a
            className="block border-2 border-primary p-8 transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="/services/digital-campaigns"
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
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-primary">
              Bench & Assembly
            </h2>

            <p className="mt-1 text-sm text-gray-400">
            From components to the final product, our assembly process ensures
              a perfect fit every time.
            </p>
          </a>
        </div>

        <div className="mt-8 flex h-max text-center">
          <Link
            to="/services"
            className="text-md border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Showcase
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;

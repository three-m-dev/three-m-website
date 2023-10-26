import { Link } from "react-router-dom";

const CareerList = () => {
  const openPositions = [
    {
      id: "1",
      title: "CNC Mill Machinist",
      location: "On-site",
      type: "Full-time",
    },
    {
      id: "2",
      title: "CNC Lathe Machinist",
      location: "On-site",
      type: "Full-time",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-4 inline-block bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary shadow-sm">
            Growth & Opportunities
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
            Join the Future at Three M
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Empower your career. Be a part of a team that values progress,
            collaboration, and excellence.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="-mx-3 mb-10 flex flex-wrap items-center justify-center">
            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/3">
              <div className="border-coolGray-200 relative rounded-lg border bg-white shadow-md">
                <svg
                  className="absolute right-0 top-1/2 mr-5 -translate-y-1/2 transform"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0002 1.17C10.8128 0.983753 10.5594 0.879211 10.2952 0.879211C10.031 0.879211 9.77756 0.983753 9.59019 1.17L6.00019 4.71L2.46019 1.17C2.27283 0.983753 2.01938 0.879211 1.75519 0.879211C1.49101 0.879211 1.23756 0.983753 1.05019 1.17C0.956464 1.26297 0.88207 1.37357 0.831301 1.49543C0.780533 1.61729 0.754395 1.74799 0.754395 1.88C0.754395 2.01202 0.780533 2.14272 0.831301 2.26458C0.88207 2.38644 0.956464 2.49704 1.05019 2.59L5.29019 6.83C5.38316 6.92373 5.49376 6.99813 5.61562 7.04889C5.73747 7.09966 5.86818 7.1258 6.00019 7.1258C6.1322 7.1258 6.26291 7.09966 6.38477 7.04889C6.50663 6.99813 6.61723 6.92373 6.71019 6.83L11.0002 2.59C11.0939 2.49704 11.1683 2.38644 11.2191 2.26458C11.2699 2.14272 11.296 2.01202 11.296 1.88C11.296 1.74799 11.2699 1.61729 11.2191 1.49543C11.1683 1.37357 11.0939 1.26297 11.0002 1.17Z"
                    fill="#556987"
                  ></path>
                </svg>
                <select
                  className="text-coolGray-500 w-full appearance-none rounded-lg border-0 bg-transparent px-4 py-3 leading-6 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  name=""
                >
                  <option value="1">Location</option>
                  <option value="2">Country</option>
                  <option value="3">City</option>
                </select>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/3">
              <div className="border-coolGray-200 relative rounded-lg border bg-white shadow-md">
                <svg
                  className="absolute right-0 top-1/2 mr-5 -translate-y-1/2 transform"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0002 1.17C10.8128 0.983753 10.5594 0.879211 10.2952 0.879211C10.031 0.879211 9.77756 0.983753 9.59019 1.17L6.00019 4.71L2.46019 1.17C2.27283 0.983753 2.01938 0.879211 1.75519 0.879211C1.49101 0.879211 1.23756 0.983753 1.05019 1.17C0.956464 1.26297 0.88207 1.37357 0.831301 1.49543C0.780533 1.61729 0.754395 1.74799 0.754395 1.88C0.754395 2.01202 0.780533 2.14272 0.831301 2.26458C0.88207 2.38644 0.956464 2.49704 1.05019 2.59L5.29019 6.83C5.38316 6.92373 5.49376 6.99813 5.61562 7.04889C5.73747 7.09966 5.86818 7.1258 6.00019 7.1258C6.1322 7.1258 6.26291 7.09966 6.38477 7.04889C6.50663 6.99813 6.61723 6.92373 6.71019 6.83L11.0002 2.59C11.0939 2.49704 11.1683 2.38644 11.2191 2.26458C11.2699 2.14272 11.296 2.01202 11.296 1.88C11.296 1.74799 11.2699 1.61729 11.2191 1.49543C11.1683 1.37357 11.0939 1.26297 11.0002 1.17Z"
                    fill="#556987"
                  ></path>
                </svg>
                <select
                  className="text-coolGray-500 w-full appearance-none rounded-lg border-0 bg-transparent px-4 py-3 leading-6 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  name=""
                >
                  <option value="1">Type</option>
                  <option value="2">Country</option>
                  <option value="3">City</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {openPositions.map((position, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col bg-gray-50 py-4 md:flex-row"
          >
            <div className="mb-6 w-full md:mb-0 md:mr-auto md:w-auto">
              <h3 className="text-lg font-semibold md:text-xl">
                {position.title}
              </h3>
            </div>
            <div className="mb-6 w-full md:mb-0 md:w-auto md:flex-grow">
              <div className="flex flex-wrap items-start">
                <div className="mb-2 inline-flex w-full items-center lg:mb-0 lg:mr-10 lg:w-auto">
                  {/* Your SVG and position location here */}
                </div>
                <div className="inline-flex w-full items-center lg:w-auto">
                  {/* Your SVG and position type here */}
                </div>
              </div>
            </div>
            <div className="mb-6 flex w-full justify-end md:mb-0 md:w-auto md:flex-col">
              <Link
                className="text-md self-stretch border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white md:self-auto"
                to={`/careers/` + position.id}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerList;

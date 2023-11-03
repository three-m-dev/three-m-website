import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

type Career = {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: string;
  type: string;
  experienceLevel: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
};

const CareerList = () => {
  const [locationFilter, setLocationFilter] = useState<
    "all" | "on-site" | "remote" | "hybrid"
  >("all");

  const [typeFilter, setTypeFilter] = useState<
    "all" | "full-time" | "part-time" | "internship"
  >("all");

  const [filteredCareers, setFilteredCareers] = useState<Career[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("../data/careers.json")
      .then((response) => response.json())
      .then((data: Career[]) => {
        let filteredData = data;

        if (locationFilter !== "all") {
          filteredData = filteredData.filter(
            (career) => career.location.toLowerCase() === locationFilter,
          );
        }
        if (typeFilter !== "all") {
          filteredData = filteredData.filter(
            (career) => career.type.toLowerCase() === typeFilter,
          );
        }

        setTimeout(() => {
          setFilteredCareers(filteredData);
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error fetching the careers:", error);
        setLoading(false);
      });
  }, [locationFilter, typeFilter]);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value as "all" | "on-site" | "remote" | "hybrid";
    setLocationFilter(value);
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as
      | "all"
      | "full-time"
      | "part-time"
      | "internship";
    setTypeFilter(value);
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary shadow-sm">
            Growth & Opportunities
          </span>
          <h3 className="font-bebas mb-4 text-3xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
            Join the Future
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Empower your career. Be a part of a team that values progress,
            collaboration, and excellence.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="-mx-3 mb-10 flex flex-wrap items-center justify-center">
            <div className="mb-3 w-full px-3 md:mb-0 md:w-1/3">
              <div className="relative rounded border border-gray-200 bg-white shadow">
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
                  className="w-full appearance-none rounded border-0 bg-transparent px-4 py-3 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  value={locationFilter}
                  onChange={handleLocationChange}
                >
                  <option value="all">Location</option>
                  <option value="on-site">On Site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
            <div className="w-full px-3 md:w-1/3">
              <div className="relative rounded border border-gray-200 bg-white shadow">
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
                  className="w-full appearance-none rounded border-0 bg-transparent px-4 py-3 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  value={typeFilter}
                  onChange={handleTypeChange}
                >
                  <option value="all">Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {loading && <Loading />}

        {filteredCareers.map((career, index) => (
          <div
            key={index}
            className="flex flex-col border-b-2 border-gray-200 py-4 md:flex-row md:items-center"
          >
            <div className="flex-grow">
              <h3 className="mb-4 text-lg font-semibold md:mb-0 md:text-xl">
                {career.title}
              </h3>
            </div>
            <div className="flex w-full items-center justify-between md:w-auto">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center">
                  <svg
                    className="text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9999 4.48003C16.4086 2.88873 14.2504 1.99475 11.9999 1.99475C9.74949 1.99475 7.59123 2.88873 5.99993 4.48003C4.40863 6.07133 3.51465 8.2296 3.51465 10.48C3.51465 12.7305 4.40863 14.8887 5.99993 16.48L11.2699 21.76C11.3629 21.8538 11.4735 21.9282 11.5954 21.9789C11.7172 22.0297 11.8479 22.0558 11.9799 22.0558C12.1119 22.0558 12.2426 22.0297 12.3645 21.9789C12.4864 21.9282 12.597 21.8538 12.6899 21.76L17.9999 16.43C19.5846 14.8454 20.4748 12.6961 20.4748 10.455C20.4748 8.21398 19.5846 6.06471 17.9999 4.48003ZM16.5699 15L11.9999 19.59L7.42993 15C6.52707 14.0963 5.91241 12.9453 5.66362 11.6923C5.41484 10.4394 5.54312 9.14078 6.03223 7.96071C6.52135 6.78065 7.34935 5.77208 8.41156 5.06251C9.47377 4.35294 10.7225 3.97421 11.9999 3.97421C13.2773 3.97421 14.5261 4.35294 15.5883 5.06251C16.6505 5.77208 17.4785 6.78065 17.9676 7.96071C18.4567 9.14078 18.585 10.4394 18.3362 11.6923C18.0875 12.9453 17.4728 14.0963 16.5699 15ZM8.99993 7.41003C8.19264 8.2198 7.73932 9.3166 7.73932 10.46C7.73932 11.6035 8.19264 12.7003 8.99993 13.51C9.59969 14.1108 10.3635 14.5211 11.1956 14.6894C12.0276 14.8578 12.8909 14.7766 13.677 14.4562C14.4631 14.1358 15.1371 13.5903 15.6144 12.8883C16.0917 12.1863 16.3511 11.3589 16.3599 10.51C16.3644 9.94324 16.2553 9.38129 16.0388 8.85742C15.8224 8.33355 15.5032 7.85839 15.0999 7.46003C14.7036 7.05461 14.231 6.73157 13.7094 6.5095C13.1877 6.28743 12.6273 6.17071 12.0603 6.16606C11.4934 6.16141 10.9311 6.26893 10.4059 6.48242C9.88067 6.69591 9.40285 7.01116 8.99993 7.41003ZM13.6899 12.09C13.311 12.4748 12.8101 12.7159 12.2731 12.7723C11.736 12.8286 11.196 12.6967 10.7454 12.399C10.2949 12.1012 9.96173 11.6563 9.80294 11.1401C9.64415 10.624 9.66958 10.0687 9.87489 9.56919C10.0802 9.06971 10.4526 8.65705 10.9285 8.40177C11.4044 8.14649 11.9542 8.06444 12.4839 8.16965C13.0135 8.27486 13.4902 8.56079 13.8324 8.97856C14.1746 9.39634 14.3611 9.92 14.3599 10.46C14.3454 11.0773 14.0864 11.6636 13.6399 12.09H13.6899Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-2 font-medium capitalize text-gray-400">
                    {career.location.replace(/-/g, " ")}
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <svg
                    className="text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-2 font-medium capitalize text-gray-400">
                    {career.type.replace(/-/g, " ")}
                  </span>
                </div>
              </div>
              <Link
                className="text-md rounded border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white md:ml-4"
                to={`/careers/` + career.id}
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

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

  const renderCareers = () => {
    if (loading) {
      return <Loading />;
    } else if (!loading && filteredCareers.length === 0) {
      return <div className="w-full">No Openings Found</div>;
    } else if (!loading && filteredCareers.length > 0) {
      return (
        <div className="flex w-full flex-col">
          {filteredCareers.map((career, index) => (
            <div
              key={index}
              className="flex flex-col border-b-2 border-gray-200 py-4 md:flex-row md:items-center"
            >
              <div className="flex-grow">
                <Link
                  to={`/careers/` + career.id}
                  className="mb-4 text-lg font-semibold hover:underline md:mb-0 md:text-xl"
                >
                  {career.title}
                </Link>
              </div>
              <div className="flex w-full items-center justify-between md:w-auto">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="inline-flex items-center">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <span className="ml-2 font-medium capitalize text-gray-400">
                      {career.location.replace(/-/g, " ")}
                    </span>
                  </div>
                  <div className="inline-flex items-center">
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
      );
    }
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary shadow-sm">
            Growth & Opportunities
          </span>
          <h1 className="font-bebas mb-4 text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
            Join the Future
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Empower your career. Be a part of a team that values progress,
            collaboration, and excellence.
          </p>
        </div>
        <div className="mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-4 w-full md:mb-8 md:w-1/3 md:pr-2">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
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
            <div className="mb-0 w-full md:mb-8 md:w-1/3 md:pl-2">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
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
            {renderCareers()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerList;

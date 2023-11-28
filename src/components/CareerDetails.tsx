import { Link } from "react-router-dom";
import { ICareerListing } from "../interfaces/ICommon";

type Props = {
  careerDetails?: ICareerListing;
};

const CareerDetails = (props: Props) => {
  const { careerDetails } = props;

  if (!careerDetails) {
    return <div>Career details not found.</div>;
  }

  let location = careerDetails.location;

  if (location === "On Site") {
    location = "Commerce Twp, Michigan";
  }

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto grid max-w-screen-xl grid-cols-10 gap-4 px-4">
        <div className="col-span-7 flex flex-col">
          <div className="flex w-full justify-between">
            <h1 className="mb-2 text-2xl font-bold">{careerDetails.title}</h1>
            <div className="flex gap-2">
              <Link
                to={`/careers/${careerDetails.id}/apply`}
                className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Apply Now
              </Link>
              <button className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white">
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-6 flex gap-2">
            <div className="h-16 w-16 bg-red-50"></div>
            <div className="flex flex-col justify-between">
              <p className="flex items-center gap-2">
                <span className="text-lg font-bold text-blue-500">
                  {careerDetails.company}
                </span>
                <span className="flex items-center gap-2">
                  {" "}
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
                  {location}
                </span>
              </p>
              <div className="flex gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                  {careerDetails.employmentType}
                </span>
                <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                  {careerDetails.location}
                </span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-900">
              Job Description
            </label>
            <p className="text-gray-600">{careerDetails.description}</p>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-900">
              Benefits
            </label>
            <ul className="ml-6 list-disc text-gray-600">
              {careerDetails.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-900">
              Responsibilities
            </label>
            <ul className="ml-6 list-disc text-gray-600">
              {careerDetails.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <label className="mb-2 block font-bold text-gray-900">
              Qualifications
            </label>
            <ul className="ml-6 list-disc text-gray-600">
              {careerDetails.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex flex-col">
          <label className="mb-2 block font-bold text-gray-900">
            Other Jobs from Three M
          </label>
          <div className="h-full w-full overflow-auto bg-red-50"></div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetails;

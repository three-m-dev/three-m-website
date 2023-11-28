import { Link, useParams } from "react-router-dom";
import { ICareerListing } from "../interfaces/ICommon";
import CopyToClipboard from "../utils/CopyToClipboard";

type Props = {
  careerDetails?: ICareerListing;
  careerListings: ICareerListing[];
};

const CareerDetails = (props: Props) => {
  const { careerDetails, careerListings } = props;

  const pageUrl = window.location.href;

  const { careerId } = useParams();

  if (!careerDetails) {
    return <div>Career details not found.</div>;
  }

  const filteredListings = careerListings.filter(
    (listing) => listing.id !== careerId,
  );

  let careerLocation = careerDetails.location;

  if (careerLocation === "On Site") {
    careerLocation = "Commerce Township, Michigan";
  }

  const getTimePassed = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hoursAgo < 24) {
      return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
    } else {
      const daysAgo = Math.floor(hoursAgo / 24);
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    }
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto grid max-w-screen-xl grid-cols-10 gap-4 px-4">
        <div className="col-span-10 flex flex-col md:col-span-7">
          <div className="mb-2 flex w-full flex-col-reverse justify-between md:flex-row md:items-center">
            <h1 className="text-2xl font-bold">{careerDetails.title}</h1>
            <div className="mb-2 flex gap-2 md:mb-0">
              <Link
                to={`/careers/${careerDetails.id}/apply`}
                className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Apply Now
              </Link>
              <button
                onClick={() => CopyToClipboard(pageUrl)}
                className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
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
            <div className="flex flex-col justify-between">
              <p className="flex flex-col md:mb-1 md:flex-row md:items-center md:gap-2">
                <span className="text-lg font-bold text-blue-500">
                  {careerDetails.company}
                </span>
                <span className="mb-1 flex items-center gap-2 md:mb-0">
                  {careerLocation}
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
        <div className="col-span-10 flex flex-col md:col-span-3">
          <label className="mb-2 block w-max font-bold text-gray-900">
            Other Jobs from Three M
          </label>
          <div className="flex h-full w-full flex-col gap-2 overflow-auto">
            {filteredListings.map((listing, index) => (
              <div
                key={index}
                className="h-content w-full rounded border-2 p-4"
              >
                <div className="mb-1">
                  <h2 className="text-lg font-bold">{listing.title}</h2>
                  <p>{listing.company}</p>
                </div>
                <div className="mb-1 flex gap-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                    {listing.employmentType}
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-sm">
                    {listing.location}
                  </span>
                </div>
                <p>Posted {getTimePassed(listing.createdAt)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetails;

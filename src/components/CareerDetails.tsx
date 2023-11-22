import { Link } from "react-router-dom";
import { ICareerListing } from "../interfaces/ICommon";

type Props = {
  careerDetails?: ICareerListing;
};

const CareerDetails = (props: Props) => {
  if (!props.careerDetails) {
    return <div>Career details not found.</div>;
  }

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start px-4">
        {/* <nav className="mb-2 flex">
          <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
            <li>
              <div className="flex items-center">
                <Link
                  to="/careers"
                  className="text-sm font-medium text-gray-400 hover:text-primary"
                >
                  Careers
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-400 md:ms-2">
                  {props.careerDetails.title}
                </span>
              </div>
            </li>
          </ol>
        </nav> */}

        <h2 className="mb-4 w-full text-center text-2xl font-bold">
          {props.careerDetails.title}
        </h2>

        <div className="grid w-full grid-cols-5 gap-4">
          <div className="col-span-3">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p>{props.careerDetails.description}</p>
            </div>

            <div className="flex gap-4">
              <div className="mb-4 w-full">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="capitalize">
                  {props.careerDetails.location.replace(/-/g, " ")}
                </p>
              </div>
              <div className="mb-4 w-full">
                <h3 className="text-lg font-semibold">Starting At</h3>
                <p>{props.careerDetails.startingAt}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Benefits</h3>
              <ul className="list-inside list-disc pl-2">
                {props.careerDetails.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Requirements</h3>
              <ul className="list-inside list-disc pl-2">
                {props.careerDetails.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Qualifications</h3>
              <ul className="list-inside list-disc pl-2">
                {props.careerDetails.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Link
          to={`/careers/` + props.careerDetails.id + `/apply`}
          className="text-md rounded border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default CareerDetails;

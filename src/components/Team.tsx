import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Jacob Reppuhn",
      title: "Data Analyst",
      photo: "",
      linkedin: "https://www.linkedin.com/",
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="relative container px-4 mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            Team Members
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
            Our team is the best in the business.
          </h3>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">
            Highly professional and capable of running your business across all
            digital channels.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10"
            >
              <div className="text-center max-w-xs mx-auto">
                <img
                  className="w-24 h-24 mx-auto mb-6 rounded-md"
                  src={teamMember.photo}
                  alt={`Three M Tool & Machine Team Member ` + teamMember.name}
                />
                <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                  {teamMember.name}
                </h3>
                <span className="inline-block mb-6 text-lg font-medium text-primary">
                  {teamMember.title}
                </span>
                <div className="flex items-center justify-center">
                  <Link
                    className="inline-block text-gray-400 hover:text-primary"
                    to={teamMember.linkedin}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
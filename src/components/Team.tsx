import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Sam Medwid",
      title: "President",
      photo:
        "https://t4.ftcdn.net/jpg/02/19/63/31/240_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Jamie Headley",
      title: "Integrator",
      photo:
        "https://t4.ftcdn.net/jpg/04/80/05/77/240_F_480057743_J7wTBWRW3vABPnqEv2IwSVVXjj50xevN.jpg",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Daniel O'Connell",
      title: "Production Manager",
      photo:
        "https://t3.ftcdn.net/jpg/01/61/83/48/240_F_161834881_clbpIhlxdIFFBS1hYquat5fJdep9LrAn.jpg",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Erika Miu",
      title: "Finance Manager",
      photo:
        "https://t3.ftcdn.net/jpg/00/79/52/98/240_F_79529800_pPrRqNWqKRN6iRDUWibQSKlqM8pltsUZ.jpg",
      linkedin: "https://www.linkedin.com/",
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-md bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary shadow-sm">
            Our Experts
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
            Meet the Talented Team at Three M
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Dedication, expertise, and innovation drive our experts. Discover
            the people who shape our vision and success.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="mb-10 w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div className="mx-auto max-w-xs text-center">
                <img
                  className="mx-auto mb-6 h-24 w-24 rounded-md object-cover"
                  src={teamMember.photo}
                  alt={`Three M Tool & Machine Team Member ` + teamMember.name}
                />
                <h3 className="text-coolGray-800 mb-1 text-lg font-semibold">
                  {teamMember.name}
                </h3>
                <span className="mb-6 inline-block text-lg font-medium text-primary">
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

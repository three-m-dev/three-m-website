import { Link } from "react-router-dom";

const Testimonials = () => {
  const reviewItems = [
    {
      title: "Exceeded Expectations",
      message:
        "When we approached Three M with a complex custom job, I wasn't sure if it could be done to our specifications. Not only did they deliver on time, but the quality was beyond what we had hoped for. A true testament to their expertise.",
      author: "Jordan R.",
      company: "TechSolutions",
      rating: 5,
    },
    {
      title: "Reliable and Professional",
      message:
        "We've been partnering with Three M for over two years now, and they never disappoint. Their team's dedication to precision and timely delivery has made our production process smoother and more efficient.",
      author: "Maria V.",
      company: "DynaCraft",
      rating: 4,
    },
    {
      title: "Top-Notch CAD Services",
      message:
        "I was particularly impressed by Three M's CAD design team. They transformed our rough sketches into detailed, workable blueprints, providing valuable insights along the way. Their expertise saved us both time and money.",
      author: "Liam S.",
      company: "InnovateTech",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-16">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
              Real Feedback from Our Valued Clients
            </h2>

            <p className="mt-4 text-lg font-medium text-gray-500 md:text-xl">
              Discover the stories and feedback from businesses and individuals
              who've entrusted their projects with Three M. Our commitment is
              reflected in their words.
            </p>
          </div>

          <Link
            to="https://www.google.com/search?sca_esv=578460548&rlz=1C1YTUH_enUS1072US1072&q=Three+m+tool+and+machine+reviews&uds=H4sIAAAAAAAA_-Ny52IPSi3LTC0vFpIoyShKTVXIVSjJz89RSMxLUchNTM7IzEs1ECpSCMEhp1AE0W2EUzcAb0YnP2MAAAA&sa=X&ved=2ahUKEwj80e2N1aKCAxUOODQIHd61CEQQxKsJegQIaxAB&ictx=0&biw=1920&bih=931&dpr=1#lrd=0x8824a4ea968cf125:0x8e4c1d7fddc834d6,1,,,,"
            target="blank"
            className="text-md mt-4 border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white lg:mt-0"
          >
            <span>More Reviews</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviewItems.map((review, index) => (
            <blockquote
              key={index}
              className="relative flex h-full flex-col justify-between bg-primary p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4">
                <div className="flex gap-0.5 text-secondary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating ? "text-white" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="mt-2 text-lg font-semibold text-white">
                  {review.title}
                </h4>
                <p className="mt-2 text-gray-200">{review.message}</p>
              </div>
              <footer className="mt-4">
                <p className="text-sm font-medium text-gray-200">
                  - {review.author},{" "}
                  <cite className="italic">{review.company}</cite>
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
